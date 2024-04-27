import React from "react";

export interface IUseTriggerOpen{isOpen:boolean,  open(): void,  close(): void, trigger(): void}
export const useTriggerOpen = ():IUseTriggerOpen => {
    const [isOpen, setIsOpen] = React.useState<boolean>(false);
    const open = () => {
        setIsOpen(true);
    };
    const close = () => {
        setIsOpen(false);
    };
    const trigger = () => {
        setIsOpen(!isOpen);
    };
    return {isOpen, open, close, trigger};
};
