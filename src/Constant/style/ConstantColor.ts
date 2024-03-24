export const DefaultColor = "#0B4A7D";
export const ConstantStyle = {
  text: {
    titlePage: {
      fontWeight: 800,
      fontSize: "22px",
      lineHeight: "22px",
      color: DefaultColor,
    },
  },
  scroll: {
    scrollNormal: {
      "&::-webkit-scrollbar": {
        width: "0.01em",
      },
      "&::-webkit-scrollbar-track": {
        boxShadow: "inset 0 0 6px rgba(0,0,0,0.00)",
        webkitBoxShadow: "inset 0 0 6px rgba(0,0,0,0.00)",
      },
      "&::-webkit-scrollbar-thumb": {
        backgroundColor: "grey",
        outline: "1px solid slategrey",
      },
    },
  },
};
