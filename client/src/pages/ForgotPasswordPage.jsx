import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

function ForgotPasswordPage() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleForgotSubmit = async (data) => {
    setError("");
    setLoading(true);

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
        <div className="w-[80%] max-w-xl md:max-w-xl lg:max-w-2xl py-6 px-3 bg-[#92e4d7]/90 flex flex-col items-center justify-center gap-7">
          {error && (
            <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-md">
              <p className="text-red-600 text-sm text-center">{error}</p>
            </div>
          )}
          <form
            onSubmit={handleSubmit(handleForgotSubmit)}
            className="space-y-4 w-full flex flex-col gap-4 justify-center items-center"
          >
            <div className="mt-14 max-w-sm text-center font-semibold">
              Don't worry, Enter your email below and we will send you a link a
              change password
            </div>
            <div className="w-full max-w-sm">
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
              className={` py-2 px-12  bg-green-500 rounded-2xl text-white ${
                loading ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
              }`}
            >
              {loading ? "Sending..." : "Submit"}
            </button>
          </form>

          <Link
            to="/login"
            className="inline-block py-2 px-12 bg-[#3066BE] rounded-2xl text-white text-center mb-10"
          >
            Sign In
          </Link>
        </div>
      </div>
    </>
  );
}

export default ForgotPasswordPage;
