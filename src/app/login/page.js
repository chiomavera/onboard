"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import Image from "next/image";
import TopLayout from "@/components/TopLayout";

const Login = () => {
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
      router.push("/dashboard"); // Redirect to login page
    }, 2000);
  };
  return (
  <div className="min-h-screen">
      <TopLayout>
      <div className="flex items-center justify-center mb-10 ">
        <h1 className="text-lg font-bold">Welcome back</h1>
      </div>

      <div className="flex items-center justify-center mb-20">
        <Image src="motherAndSon.svg" alt="" width={254} height={193} />
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
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

        <p className="mt-15 text-sm text-center">
          <a href="#" className="text-primary-color cursor-pointer">
            Forget password ?
          </a>
        </p>

        <button
          type="submit"
          disabled={loading}
          className={`w-full h-14 flex items-center justify-center mt-15 rounded-md cursor-pointer transition-colors ${
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
            "Login"
          )}
        </button>
      </form>
      <p className="mt-6 text-base text-center">
        Don&apos;t have an account?
        <a href="/register" className="text-primary-color font-medium">
          Sign Up
        </a>
      </p>
    </TopLayout>
  </div>
  );
};

export default Login;
