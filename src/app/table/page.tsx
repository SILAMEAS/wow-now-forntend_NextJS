"use client"
import React from 'react';
import {ICreateData} from "@/app/table/typeCreateTable";
import {TableModify} from "@/app/table/TableModify";

const Page = () => {
    const data = [
        {id: 234, fullName: "A!", phoneNumber: 23432432432, email: 'email0'},
        {id: 1, fullName: "A", phoneNumber: 12231, email: 'email1'},
        {id: 2, fullName: "B", phoneNumber: 23432432432, email: 'email2'},
        {id: 3, fullName: "C", phoneNumber: 12231, email: 'email3'},
        {id: 3, fullName: "D", phoneNumber: 23432432432, email: 'email4'},
        {id: 5, fullName: "D", phoneNumber: 12231, email: 'email5'}
    ];
    const formData: ICreateData[] = data.map(item => {
        return {id: item.id, carbs: 34, fat: 23, calories: 3, name: item.fullName, protein: 343}
    })
    return (
        <div className={'flex justify-center items-center w-screen h-screen bg-pink-700'}>
            <div className={'h-[40vh]'}>
                <TableModify<ICreateData> rows={formData}/>
            </div>
        </div>
    );
};

export default Page;


