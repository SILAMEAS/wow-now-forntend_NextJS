"use client";
import {UserRequest} from "@/utils/api/request/UserRequest";
import {SubmitHandler, useForm} from "react-hook-form";
import {EnumData} from "@/Constant/auth/ConstantAuthConfig";

export type ICreateAccount = {
    firstName:string;
    LastName:string;
    email: string;
    password: string;
    confirmPassword: string;
    streetAddress:string;
    city:string;
    stateProvince:string;
    postalCode:string;
    country:string;
    role:EnumData;

};
const Register = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<ICreateAccount>();
    const passMatchCon=watch("password")===watch("confirmPassword");
    const onSubmit: SubmitHandler<ICreateAccount> = async (data) => {
        console.log("Data",data);
        const req = new UserRequest();
        await req.createAcc(data);
    };
    return (
        <>
            {/* component */}
            <div className="bg-black text-white flex min-h-screen flex-col items-center pt-16 sm:justify-center sm:pt-0">
                <a href="#">
                    <div className="text-foreground font-semibold text-2xl tracking-tighter mx-auto flex items-center gap-2">
                        <div>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="w-6 h-6"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M15.042 21.672 13.684 16.6m0 0-2.51 2.225.569-9.47 5.227 7.917-3.286-.672Zm-7.518-.267A8.25 8.25 0 1 1 20.25 10.5M8.288 14.212A5.25 5.25 0 1 1 17.25 10.5"
                                />
                            </svg>
                        </div>
                        Create  Account
                    </div>
                </a>
                <div className="relative mt-12 w-full max-w-lg sm:mt-10">
                    <div
                        className="relative -mb-px h-px w-full bg-gradient-to-r from-transparent via-sky-300 to-transparent"
                        // bis_skin_checked={1}
                    />
                    <div className="mx-5 border dark:border-b-white/50 dark:border-t-white/50 border-b-white/20 sm:border-t-white/20 shadow-[20px_0_20px_20px] shadow-slate-500/10 dark:shadow-white/20 rounded-lg border-white/20 border-l-white/20 border-r-white/20 sm:shadow-sm lg:rounded-xl lg:shadow-none">
                        <div className="flex flex-col p-6">
                            <h3 className="text-xl font-semibold leading-6 tracking-tighter">

                            </h3>
                            <p className="mt-1.5 text-sm font-medium text-white/50">
                                please create new account to access the application
                            </p>
                        </div>
                        <div className="p-6 pt-0">
                            <form onSubmit={handleSubmit(onSubmit)}>
                                {/** First Name && Last Name */}
                                <div>
                                    <div className="flex flex-row space-x-3">
                                        {/* First Name*/}
                                        <div className="group relative rounded-lg border focus-within:border-sky-200 px-3 pb-1.5 pt-2.5 duration-200 focus-within:ring focus-within:ring-sky-300/30">
                                            <div className="flex justify-between">
                                                <label className="text-xs font-medium text-muted-foreground group-focus-within:text-white text-gray-400">
                                                    First Name
                                                </label>
                                                <div className="absolute right-3 translate-y-2 text-green-200">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 0 24 24"
                                                        fill="currentColor"
                                                        className="w-6 h-6"
                                                    >
                                                        <path
                                                            fillRule="evenodd"
                                                            d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                                                            clipRule="evenodd"
                                                        />
                                                    </svg>
                                                </div>
                                            </div>
                                            <input
                                                {...register("firstName")}
                                                className="block w-full border-0 bg-transparent p-0 text-sm file:my-1 file:rounded-full file:border-0 file:bg-accent file:px-4 file:py-2 file:font-medium placeholder:text-muted-foreground/90 focus:outline-none focus:ring-0 sm:leading-7 text-foreground "
                                            />
                                        </div>
                                        {/* Last Name*/}
                                        <div className="group relative rounded-lg border focus-within:border-sky-200 px-3 pb-1.5 pt-2.5 duration-200 focus-within:ring focus-within:ring-sky-300/30">
                                            <div className="flex justify-between">
                                                <label className="text-xs font-medium text-muted-foreground group-focus-within:text-white text-gray-400">
                                                    Last Name
                                                </label>
                                                <div className="absolute right-3 translate-y-2 text-green-200">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 0 24 24"
                                                        fill="currentColor"
                                                        className="w-6 h-6"
                                                    >
                                                        <path
                                                            fillRule="evenodd"
                                                            d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                                                            clipRule="evenodd"
                                                        />
                                                    </svg>
                                                </div>
                                            </div>
                                            <input
                                                {...register("LastName")}
                                                className="block w-full border-0 bg-transparent p-0 text-sm file:my-1 file:rounded-full file:border-0 file:bg-accent file:px-4 file:py-2 file:font-medium placeholder:text-muted-foreground/90 focus:outline-none focus:ring-0 sm:leading-7 text-foreground "
                                            />
                                        </div>
                                    </div>
                                </div>
                                {/** Email */}
                                <div className="mt-4">
                                    <div>
                                        <div className="group relative rounded-lg border focus-within:border-sky-200 px-3 pb-1.5 pt-2.5 duration-200 focus-within:ring focus-within:ring-sky-300/30">
                                            <div className="flex justify-between">
                                                <label className="text-xs font-medium text-muted-foreground group-focus-within:text-white text-gray-400">
                                                    Email
                                                </label>
                                            </div>
                                            <div className="flex items-center">
                                                <input
                                                    type="email"
                                                    {...register("email")}
                                                    className="block w-full border-0 bg-transparent p-0 text-sm file:my-1 placeholder:text-muted-foreground/90 focus:outline-none focus:ring-0 focus:ring-teal-500 sm:leading-7 text-foreground"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/** Password */}
                                <div className="mt-4">
                                    <div>
                                        <div className="group relative rounded-lg border focus-within:border-sky-200 px-3 pb-1.5 pt-2.5 duration-200 focus-within:ring focus-within:ring-sky-300/30">
                                            <div className="flex justify-between">
                                                <label className="text-xs font-medium text-muted-foreground group-focus-within:text-white text-gray-400">
                                                    Password
                                                </label>
                                            </div>
                                            <div className="flex items-center">
                                                <input
                                                    type="password"
                                                    {...register("password")}
                                                    className="block w-full border-0 bg-transparent p-0 text-sm file:my-1 placeholder:text-muted-foreground/90 focus:outline-none focus:ring-0 focus:ring-teal-500 sm:leading-7 text-foreground"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/** Confirm Password */}
                                <div className="mt-4">
                                    <div>
                                        <div className="group relative rounded-lg border focus-within:border-sky-200 px-3 pb-1.5 pt-2.5 duration-200 focus-within:ring focus-within:ring-sky-300/30">
                                            <div className="flex justify-between">
                                                <label className="text-xs font-medium text-muted-foreground group-focus-within:text-white text-gray-400">
                                                    Confirm Password
                                                </label>
                                            </div>
                                            <div className="flex items-center">
                                                <input
                                                    type="password"
                                                    {...register("confirmPassword")}
                                                    className="block w-full border-0 bg-transparent p-0 text-sm file:my-1 placeholder:text-muted-foreground/90 focus:outline-none focus:ring-0 focus:ring-teal-500 sm:leading-7 text-foreground"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <p className="mt-1.5 text-sm font-medium text-white/50">
                                    Address
                                </p>


                                {/** Address */}
                                <div className="mt-4">
                                    <div>
                                        <div className="group relative rounded-lg border focus-within:border-sky-200 px-3 pb-1.5 pt-2.5 duration-200 focus-within:ring focus-within:ring-sky-300/30">
                                            <div className="flex justify-between">
                                                <label className="text-xs font-medium text-muted-foreground group-focus-within:text-white text-gray-400">
                                                    Address
                                                </label>
                                            </div>
                                            <div className="flex items-center">
                                                <input
                                                    type="text"
                                                    {...register("streetAddress")}
                                                    className="block w-full border-0 bg-transparent p-0 text-sm file:my-1 placeholder:text-muted-foreground/90 focus:outline-none focus:ring-0 focus:ring-teal-500 sm:leading-7 text-foreground"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-4 flex flex-col gap-3">
                                    <div className='flex flex-row space-x-3'>
                                        {/** stateProvince */}
                                        <div className="group relative rounded-lg border focus-within:border-sky-200 px-3 pb-1.5 pt-2.5 duration-200 focus-within:ring focus-within:ring-sky-300/30">
                                            <div className="flex justify-between">
                                                <label className="text-xs font-medium text-muted-foreground group-focus-within:text-white text-gray-400">
                                                    State Province
                                                </label>
                                            </div>
                                            <div className="flex items-center">
                                                <input
                                                    type="text"
                                                    {...register("stateProvince")}
                                                    className="block w-full border-0 bg-transparent p-0 text-sm file:my-1 placeholder:text-muted-foreground/90 focus:outline-none focus:ring-0 focus:ring-teal-500 sm:leading-7 text-foreground"
                                                />
                                            </div>
                                        </div>
                                        {/** city */}
                                        <div className="group relative rounded-lg border focus-within:border-sky-200 px-3 pb-1.5 pt-2.5 duration-200 focus-within:ring focus-within:ring-sky-300/30">
                                            <div className="flex justify-between">
                                                <label className="text-xs font-medium text-muted-foreground group-focus-within:text-white text-gray-400">
                                                    City
                                                </label>
                                            </div>
                                            <div className="flex items-center">
                                                <input
                                                    type="text"
                                                    {...register("city")}
                                                    className="block w-full border-0 bg-transparent p-0 text-sm file:my-1 placeholder:text-muted-foreground/90 focus:outline-none focus:ring-0 focus:ring-teal-500 sm:leading-7 text-foreground"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className='flex flex-row space-x-3'>
                                        {/** postalCode */}
                                        <div className="group relative rounded-lg border focus-within:border-sky-200 px-3 pb-1.5 pt-2.5 duration-200 focus-within:ring focus-within:ring-sky-300/30">
                                            <div className="flex justify-between">
                                                <label className="text-xs font-medium text-muted-foreground group-focus-within:text-white text-gray-400">
                                                    Postal Code
                                                </label>
                                            </div>
                                            <div className="flex items-center">
                                                <input
                                                    type="text"
                                                    {...register("postalCode")}
                                                    className="block w-full border-0 bg-transparent p-0 text-sm file:my-1 placeholder:text-muted-foreground/90 focus:outline-none focus:ring-0 focus:ring-teal-500 sm:leading-7 text-foreground"
                                                />
                                            </div>
                                        </div>
                                        {/** country */}
                                        <div className="group relative rounded-lg border focus-within:border-sky-200 px-3 pb-1.5 pt-2.5 duration-200 focus-within:ring focus-within:ring-sky-300/30">
                                            <div className="flex justify-between">
                                                <label className="text-xs font-medium text-muted-foreground group-focus-within:text-white text-gray-400">
                                                    Country
                                                </label>
                                            </div>
                                            <div className="flex items-center">
                                                <input
                                                    type="text"
                                                    {...register("country")}
                                                    className="block w-full border-0 bg-transparent p-0 text-sm file:my-1 placeholder:text-muted-foreground/90 focus:outline-none focus:ring-0 focus:ring-teal-500 sm:leading-7 text-foreground"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/** Role */}
                                {/*<Select/>*/}
                                {/*-----------------------------------------------------*/}
                                {/** Button */}
                                <div className="mt-4 flex items-center justify-end gap-x-2">
                                    <a
                                        className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:ring hover:ring-white h-10 px-4 py-2 duration-200"
                                        href="/login"
                                    >
                                        Back to login
                                    </a>
                                    <button
                                        className="font-semibold hover:bg-black hover:text-white hover:ring hover:ring-white transition duration-300 inline-flex items-center justify-center rounded-md text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-white text-black h-10 px-4 py-2"
                                        type="submit"
                                        disabled={!passMatchCon}
                                    >
                                        Create
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>


    );
};

export default Register;
