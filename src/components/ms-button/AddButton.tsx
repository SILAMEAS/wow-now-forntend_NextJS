import React from 'react';

const AddButton = ({onClick}: { onClick?: React.MouseEventHandler<HTMLButtonElement> }) => {
    return (
        <button
            onClick={onClick}
            className={`absolute bg-pink-700 w-[50px] h-[50px] rounded-3xl text-3xl bottom-0 right-0`}>{`+`}</button>
    );
};

export default AddButton;
