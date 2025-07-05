import axios from "axios";

const backendUrl = import.meta.env.VITE_BACKEND_URL;
axios.defaults.baseURL = backendUrl;
const authLogin = async (credentials) => {
  try {
    const response = await axios.post("/api/v1/helpdesk/login", credentials);
    const {
      success,
      data: { user },
      message,
    } = response.data;
    // console.log(response);
    if (success && user) {
      return user;
    } else {
      console.warn("Login failed:", message);
      return null;
    }
  } catch (error) {
    const errMsg =
      error.response?.data?.message || "Login failed due to server error.";
    console.error("authLogin error:", errMsg);
    return null;
  }
};

export { authLogin };
