import React from 'react';

const AddButton = ({onClick}: { onClick?: React.MouseEventHandler<HTMLButtonElement> }) => {
    return (
        <button
            onClick={onClick}
            className={`fixed bg-pink-700 w-[50px] h-[50px] rounded-3xl text-3xl top-2 right-2`}>{`+`}</button>
    );
};

export default AddButton;
