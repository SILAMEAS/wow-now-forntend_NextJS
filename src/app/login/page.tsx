"use client"
import React from 'react';
import { useForm, SubmitHandler } from "react-hook-form"
import {HandleReq} from "@/components/Utils/request/HandleReq";
type Inputs = {
    email: string
    password: string
}
const LoginPage = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<Inputs>()
    const onSubmit: SubmitHandler<Inputs> =async (data) => {
        const req=new HandleReq();
        await req.login(data);
    }
    return <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-lg">
            <h1 className="text-center text-2xl font-bold text-red-600 sm:text-3xl">WOW NOW</h1>


            {/*<form onSubmit={handleSubmit(onSubmit)}>*/}
            {/*    /!* register your input into the hook by invoking the "register" function *!/*/}
            {/*    <input defaultValue="test" {...register("example")} />*/}

            {/*    /!* include validation with required or other standard HTML validation rules *!/*/}
            {/*    <input {...register("exampleRequired", { required: true })} />*/}
            {/*    /!* errors will return when field validation fails  *!/*/}
            {/*    {errors.exampleRequired && <span>This field is required</span>}*/}

            {/*    <input type="submit" />*/}
            {/*</form>*/}
            <form onSubmit={handleSubmit(onSubmit)} className="mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8">
                <p className="text-center text-lg font-medium">Sign in to your account</p>

                <div>
                    <label htmlFor="email" className="sr-only">Email</label>

                    <div className="relative">
                        <input
                            {...register("email")}
                            type="email"
                            className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                            placeholder="Enter email"
                        />

                        <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-4 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
            >
              <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
              />
            </svg>
          </span>
                    </div>
                </div>

                <div>
                    <label htmlFor="password" className="sr-only">Password</label>

                    <div className="relative">
                        <input
                            type="password"
                            {...register("password")}
                            className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                            placeholder="Enter password"
                        />

                        <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-4 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
            >
              <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
              />
            </svg>
          </span>
                    </div>
                </div>

                <button
                    type="submit"
                    className="block w-full rounded-lg bg-red-700 px-5 py-3 text-sm font-medium text-white"
                >
                    Sign in
                </button>

                <p className="text-center text-sm text-gray-500 ">
                    No account?
                    <a className="pl-3 underline text-blue-700" href="#">Sign up</a>
                </p>
            </form>
        </div>
    </div>
};

export default LoginPage;
