import User from "../models/user.model.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";

const login = async (req, res) => {
  try {
    const username = req.body.username?.trim();
    const password = req.body.password?.trim();

    if (!username || !password) {
      throw new ApiError(400, "username and password are required");
    }
    // console.log(username, password);

    const user = await User.findOne({ username });

    if (!user || !user.checkPassword(password)) {
      throw new ApiError(401, "Invalid credentials!");
    }

    const userObj = user.toObject();
    delete userObj.password;

    return res.status(200).json(
      new ApiResponse(
        200,
        {
          user: userObj,
        },
        "Login successful!"
      )
    );
  } catch (err) {
    console.error("Login error:", err);
    throw new ApiError(err.statusCode, err.message);
  }
};

export { login };
