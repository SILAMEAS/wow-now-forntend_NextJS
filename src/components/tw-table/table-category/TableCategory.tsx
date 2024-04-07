import React from 'react';

const TableCategory = () => {
    return (
        <div>
            <p>TableItemCategory</p>
            <table className="border-separate border border-slate-500 w-full">
                <thead>
                <tr>
                    <td className="border border-slate-600">ID</td>
                    <td className="border border-slate-600 ">Name</td>
                    <td className="border border-slate-600 ">Open</td>
                    <td className="border border-slate-600 ">Address</td>
                    <td className="border border-slate-600 ">Status</td>
                </tr>
                </thead>
                <thead>
                <tr>
                    <td className="border border-slate-700 ">Indiana</td>
                    <td className="border border-slate-700 ">Indianapolis</td>
                    <td className="border border-slate-700 ">Indiana</td>
                    <td className="border border-slate-700 ">Indianapolis</td>
                    <td className="border border-slate-700 ">Indiana</td>
                </tr>
                </thead>
            </table>
        </div>
    );
};

export default TableCategory;
