import React from 'react';

const List = () => {
    return (
    <div
        className="absolute shadow bg-white top-100 z-40 w-full lef-0 rounded max-h-select overflow-y-auto svelte-5uyqqj">
        <div className="flex flex-col w-full">
            <div
                className="cursor-pointer w-full border-gray-100 rounded-t border-b hover:bg-teal-100">
                <div
                    className="flex w-full items-center p-2 pl-2 border-transparent border-l-2 relative hover:border-teal-100">
                    <div className="w-6 flex flex-col items-center">
                        <div
                            className="flex relative w-5 h-5 bg-orange-500 justify-center items-center m-1 mr-2 w-4 h-4 mt-1 rounded-full ">
                            <img
                                className="rounded-full"
                                alt="A"
                                src="https://randomuser.me/api/portraits/men/62.jpg"
                            />{" "}
                        </div>
                    </div>
                    <div className="w-full items-center flex">
                        <div className="mx-2 -mt-1  ">
                            Jack jhon
                            <div
                                className="text-xs truncate w-full normal-case font-normal -mt-1 text-gray-500">
                                CEO &amp; managin director
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="cursor-pointer w-full border-gray-100 border-b hover:bg-teal-100">
                <div
                    className="flex w-full items-center p-2 pl-2 border-transparent border-l-2 relative hover:border-teal-100">
                    <div className="w-6 flex flex-col items-center">
                        <div
                            className="flex relative w-5 h-5 bg-orange-500 justify-center items-center m-1 mr-2 w-4 h-4 mt-1 rounded-full ">
                            <img
                                className="rounded-full"
                                alt="A"
                                src="https://randomuser.me/api/portraits/women/62.jpg"
                            />{" "}
                        </div>
                    </div>
                    <div className="w-full items-center flex">
                        <div className="mx-2 -mt-1  ">
                            Liza Blue
                            <div
                                className="text-xs truncate w-full normal-case font-normal -mt-1 text-gray-500">
                                COO &amp; co-founder
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="cursor-pointer w-full border-gray-100 border-b hover:bg-teal-100">
                <div
                    className="flex w-full items-center p-2 pl-2 border-transparent border-l-2 relative hover:border-teal-100">
                    <div className="w-6 flex flex-col items-center">
                        <div
                            className="flex relative w-5 h-5 bg-orange-500 justify-center items-center m-1 mr-2 w-4 h-4 mt-1 rounded-full ">
                            <img
                                className="rounded-full"
                                alt="A"
                                src="https://randomuser.me/api/portraits/men/65.jpg"
                            />{" "}
                        </div>
                    </div>
                    <div className="w-full items-center flex">
                        <div className="mx-2 -mt-1 w-1/2 ">
                            Brian White
                            <div
                                className="text-xs truncate w-full normal-case font-normal -mt-1 text-gray-500">
                                CTO &amp; technical manager
                            </div>
                        </div>
                        <div className="w-1/2 flex">
                            <div
                                className="flex justify-center items-center m-1 font-medium py-1 px-2 bg-white rounded-full text-teal-700 bg-teal-100 border border-teal-300 ">
                                <div
                                    className="text-xs font-normal leading-none max-w-full flex-initial">
                                    Hiring!
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="cursor-pointer w-full border-gray-100 rounded-b hover:bg-teal-100">
                <div
                    className="flex w-full items-center p-2 pl-2 border-transparent border-l-2 relative hover:border-teal-100">
                    <div className="w-6 flex flex-col items-center">
                        <div
                            className="flex relative w-5 h-5 bg-orange-500 justify-center items-center m-1 mr-2 w-4 h-4 mt-1 rounded-full ">
                            <img
                                className="rounded-full"
                                alt="A"
                                src="https://randomuser.me/api/portraits/men/85.jpg"
                            />{" "}
                        </div>
                    </div>
                    <div className="w-full items-center flex">
                        <div className="mx-2 -mt-1  ">
                            Eric Dripper
                            <div
                                className="text-xs truncate w-full normal-case font-normal -mt-1 text-gray-500">
                                CMO &amp; marketing manager
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
};

export default List;
