import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

const SignupPage = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleSignUp = async (data) => {
    setError("");
    setLoading(true);
    //data.username and data.loginPassword
    try {
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      <div className="w-screen h-screen bg-[#55D6C2] flex justify-center items-center">
        <div className="w-[80%] max-w-md md:max-w-xl lg:max-w-2xl py-6 px-3 bg-[#92e4d7]/90 flex flex-col items-center justify-center gap-6">
          <h2 className="text-2xl font-bold mt-4">Helpdesk System</h2>
          <p>Sign Up here</p>
          {error && (
            <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-md">
              <p className="text-red-600 text-sm text-center">{error}</p>
            </div>
          )}
          <form
            onSubmit={handleSubmit(handleSignUp)}
            className="space-y-4 w-full flex flex-col gap-4 justify-center items-center"
          >
            {/* Email */}
            <div className="w-full max-w-md">
              <input
                type="text"
                className="w-full p-3 bg-white border border-gray-600  placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                placeholder="Username"
                {...register("newUsername", {
                  required: "Username is required",
                })}
              />
              {errors.newUsername && (
                <p className="mt-2 text-sm text-red-400">
                  {errors.newUsername.message}
                </p>
              )}
            </div>

            {/* password */}
            <div className="w-full max-w-md">
              <input
                type="password"
                placeholder="Password"
                className="w-full p-3 bg-white border border-gray-600   placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 8,
                    message: "Password must be at least 8 characters",
                  },
                })}
              />
              {errors.password && (
                <p className="mt-2 text-sm text-red-400">
                  {errors.password.message}
                </p>
              )}
            </div>
            <div className="w-full max-w-md">
              <input
                type="email"
                placeholder="Email"
                className="w-full p-3 bg-white border border-gray-600   placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
                    message: "Email address must be a valid address",
                  },
                })}
              />
              {errors.email && (
                <p className="mt-2 text-sm text-red-400">
                  {errors.email.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              disabled={loading}
              className={` py-2 px-12 bg-[#3066BE] rounded-2xl text-white ${
                loading ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
              }`}
            >
              {loading ? "Registering..." : "Sign Up"}
            </button>
          </form>
          <div className="w-full flex justify-evenly my-4">
            <Link to="/signin" className="cursor-pointer text-lg font-semibold">
              Sign In
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignupPage;
