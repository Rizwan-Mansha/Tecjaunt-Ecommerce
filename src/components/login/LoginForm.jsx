"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import UserIcon from "../iconSVG/UserIcon";
import LockIcon from "../iconSVG/LockIcon";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import Link from "next/link";
import axios from "axios";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import Image from "next/image";

const formSchema = {
  email: {
    minLength: 2,
    required: true,
    message: "Email must be at least 2 characters.",
  },
  password: {
    required: true,
    message: "Password is required.",
  },
};

export function InputForm() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues: { email: "", password: "" } });

  const onSubmitHandler = async (data) => {
    const { email, password } = data;
    // console.log(`email: ${email} password: ${password}`);
    try {
      setLoading(true);
      const response = await axios.post("/api/users/login", {
        email,
        password,
      });

      if (response.status == 200) {
        toast.success("Login Successfully");
        router.push("/");
      } else {
        toast.error("Login Failed");
      }
    } catch (error) {
      console.log("Login Failed", error.message);
      toast.error(error.message);
    }
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmitHandler)}
      className="flex flex-col py-10 w-2/3 space-y-1">
      <div className="form-field ">
        <Label htmlFor="email" className="text-black font-normal text-sm mb-1">
          User name or Email
        </Label>
        <div className="relative mt-1">
          <UserIcon className="absolute left-3 top-5 transform -translate-y-1/2 text-gray-400" />
          <Input
            {...register("email", formSchema.email)}
            className="pl-10 border-0 border-b-[1px] border-gray-800 focus:border-0 rounded-none focus:rounded placeholder:text-gray-400 mb-4"
            id="email"
            placeholder="umair@gmail.com"
          />
          {errors.email && (
            <span className="error-message">{errors.email.message}</span>
          )}
        </div>
      </div>
      <div className="form-field">
        <Label htmlFor="password" className="text-black font-normal mb-1">
          Password
        </Label>
        <div className="relative mt-1">
          <LockIcon className="absolute left-3 top-5 transform -translate-y-1/2 text-gray-400" />

          <Input
            {...register("password", formSchema.password)}
            className="pl-10 border-0 border-b-[1px] border-gray-800 focus:border-0 rounded-none focus:rounded placeholder:text-gray-400 mb-4"
            id="password"
            placeholder="********"
            type="password"
          />
        </div>
      </div>
      <p className="font-semibold text-sm flex justify-end mt-3">
        Forget password?
      </p>
      <div className="flex justify-center">
        <Button type="submit" className="rounded-full px-12 lg:mb-5 w-40">
          Sign In
        </Button>
      </div>
      <div className="text-center flex justify-center items-center ">
        <div className="w-20 h-[1px] bg-gray-800" />
        <div className="mx-2 text-base font-semibold">or</div>
        <div className="w-20 h-[1px] bg-gray-800" />
      </div>
      <div className="flex justify-center items-center ">
        <Button variant="ghost" className="">
          <Image
            src="/login/google.svg"
            alt="google"
            width={30}
            height={30}
            className="w-6 mr-2"
          />
          Signin with Google
        </Button>
      </div>
      <div className="text-center text-sm text-gray-400 ">
        Dont have an account?{" "}
        <Link href="/register" className="text-blue-600 font-semibold">
          Sign up
        </Link>
      </div>
    </form>
  );
}
