import { Tooltip } from "@mui/material";

import { styled } from "@mui/material/styles";

import { tooltipClasses, TooltipProps } from "@mui/material/Tooltip";
export const HtmlTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: "#ffffff",
    color: "rgba(0, 0, 0, 0.87)",
    width: "auto",
    fontSize: theme.typography.pxToRem(12),
    border: "1px solid #dadde9",
  },
}));
