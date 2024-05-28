import { Box, styled } from "@mui/material";
import { css } from "@emotion/css";

export const OutletContainer = styled(Box)({
    height: "100%",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    boxSizing: "border-box",
});
export const StyleOutlet = css({
    flexGrow: 1,

    paddingRight: "5px",
    paddingBottom: "5px",
    marginLeft: "25px",

    display: "flex",
    flexFlow: "column",
});
