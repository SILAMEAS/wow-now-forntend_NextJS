import React from "react";

export const useDialog = () => {
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
  return { isOpen, open, close, trigger };
};
