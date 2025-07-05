import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { login } from "../store/authSlice";
import { authLogin } from "../../connections/Auth";
function SignInPage() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = async (data) => {
    setError("");
    setLoading(true);

    try {
      const credentials = {
        username: data.username?.trim(),
        password: data.loginPassword,
      };

      const userData = await authLogin(credentials);

      if (userData) {
        dispatch(login(userData));
        navigate("/");
      } else {
        setError("Invalid username or password.");
      }
    } catch (err) {
      const msg = err?.message || "Login failed. Please try again.";
      setError(msg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="w-screen h-screen bg-[#55D6C2] flex justify-center items-center">
        <div className="w-[80%] max-w-md md:max-w-xl lg:max-w-2xl py-6 px-3 bg-[#92e4d7]/90 flex flex-col items-center justify-center gap-6">
          <h2 className="text-2xl font-bold my-6">Helpdesk System</h2>
          {error && (
            <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-md">
              <p className="text-red-600 text-sm text-center">{error}</p>
            </div>
          )}
          <form
            onSubmit={handleSubmit(handleLogin)}
            className="space-y-4 w-full flex flex-col gap-4 justify-center items-center"
          >
            {/* Email */}
            <div className="w-full max-w-md">
              <input
                type="text"
                className="w-full p-3 bg-white border border-gray-600  placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                placeholder="Username"
                {...register("username", {
                  required: "Username is required",
                })}
              />
              {errors.username && (
                <p className="mt-2 text-sm text-red-400">
                  {errors.username.message}
                </p>
              )}
            </div>

            {/* password */}
            <div className="w-full max-w-md">
              <input
                type="password"
                placeholder="Password"
                className="w-full p-3 bg-white border border-gray-600   placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                {...register("loginPassword", {
                  required: "Password is required",
                  minLength: {
                    value: 8,
                    message: "Password must be at least 8 characters",
                  },
                })}
              />
              {errors.loginPassword && (
                <p className="mt-2 text-sm text-red-400">
                  {errors.loginPassword.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              disabled={loading}
              className={` py-2 px-12 bg-green-500 rounded-2xl text-white ${
                loading ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
              }`}
            >
              {loading ? "Signing In..." : "Sign In"}
            </button>
          </form>
          <div className="w-full flex justify-evenly my-4">
            <Link
              to="/forget-password"
              className="text-red-600 cursor-pointer text-lg font-semibold"
            >
              Forget Password
            </Link>
            <Link to="/signup" className="cursor-pointer text-lg font-semibold">
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignInPage;
