import React from 'react';
import {store} from "@/redux/store/store";

const ProfileOwner = () => {
    return (
        <div className={'flex flex-col gap-3'}>
            {/** Profile **/}
            <h1 className="font-bold text-lg lg:text-3xl bg-gradient-to-br from-white via-white/50 to-transparent bg-clip-text text-transparent">
                Welcome<span className="text-indigo-400">.</span>
            </h1>
            <a
                href="#"
                className="flex flex-col space-y-2 md:space-y-0 md:flex-row mb-5 items-center md:space-x-2 hover:bg-white/10 group transition duration-150 ease-linear rounded-lg group w-full py-3 px-2"
            >
                <div>
                    <img
                        className="rounded-full w-10 h-10 relative object-cover"
                        src={store.getState().authReducer.profile?.profile??""}
                        alt=""
                    />
                </div>

                <div>
                    <p className="font-medium group-hover:text-indigo-400 leading-4">
                        {store.getState().authReducer.profile?.fullName}
                    </p>
                    {/*<span className="text-xs text-slate-400">{profile?.role}</span>*/}
                </div>
            </a>
        </div>
    );
};

export default ProfileOwner;
