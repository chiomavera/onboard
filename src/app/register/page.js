"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import TopLayout from "@/components/TopLayout";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const router = useRouter();

  const [loading, setLoading] = useState(false);

  const onSubmit = (data) => {
    setLoading(true);

    // Simulate registration or make an API call
    setTimeout(() => {
      console.log("Registration successful", data);

      setLoading(false);
      router.push("/login"); // Redirect to login page
    }, 2000);
  };

  return (
    <TopLayout>
      <div className="flex flex-col items-center justify-center gap-4 mb-20">
        <h1 className="text-lg font-bold">Welcome to Onboard!</h1>
        <p className="text-sm text-[#000000B3] leading-5">Let’s help to meet up your tasks.</p>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div>
          <input
            type="text"
            placeholder="Enter your full name"
            {...register("fullName", { required: "Full name is required" })}
            className="w-full px-4 py-3 rounded-full bg-white text-sm border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary"
          />
          {errors.fullName && (
            <p className="text-sm text-red-500 mt-1">
              {errors.fullName.message}
            </p>
          )}
        </div>

        <div>
          <input
            type="email"
            placeholder="Enter your Email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^\S+@\S+$/i,
                message: "Enter a valid email",
              },
            })}
            className="w-full px-4 py-3 rounded-full bg-white text-sm border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary"
          />
          {errors.email && (
            <p className="text-sm text-red-500 mt-1">{errors.email.message}</p>
          )}
        </div>

        <div>
          <input
            type="password"
            placeholder="Enter Password"
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Password must be at least 6 characters",
              },
            })}
            className="w-full px-4 py-3 rounded-full bg-white text-sm border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary"
          />
          {errors.password && (
            <p className="text-sm text-red-500 mt-1">
              {errors.password.message}
            </p>
          )}
        </div>

        <div>
          <input
            type="password"
            placeholder="Confirm password"
            {...register("confirmPassword", {
              required: "Please confirm your password",
              validate: (value) =>
                value === watch("password") || "Passwords do not match",
            })}
            className="w-full px-4 py-3 rounded-full bg-white text-sm border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary"
          />
          {errors.confirmPassword && (
            <p className="text-sm text-red-500 mt-1">
              {errors.confirmPassword.message}
            </p>
          )}
        </div>

        <button
          type="submit"
          disabled={loading}
          className={`w-full h-14 flex items-center justify-center mt-20 rounded-md cursor-pointer transition-colors ${
            loading
              ? "bg-primary-color/70 cursor-not-allowed"
              : "bg-primary-color hover:bg-primary-color/90"
          } text-white text-center`}
        >
          {loading ? (
            <div className="flex items-center gap-2">
              <div className="h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
              <span>Registering...</span>
            </div>
          ) : (
            "Register"
          )}
        </button>
      </form>
      <p className="mt-6 text-sm text-center">
        Already have an account?{" "}
        <a href="/login" className="text-primary-color font-medium">
          Sign In
        </a>
      </p>
    </TopLayout>
  );
};

export default Register;
