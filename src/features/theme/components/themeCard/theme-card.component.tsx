import {Box, Typography} from "@mui/material";
import React from "react";
type Props={
    name: string;
    description: string;
    nbCards: number;
}
const ThemeCard = (props: Props): JSX.Element => {
    return (
       <Box display={"flex"} justifyContent={"space-evenly"} borderBottom={"solid 1px #1976d2"}>
               <Typography >Nom</Typography>
               <Typography >Description</Typography>
               <Typography >Nb de cartes</Typography>
       </Box>
    );
};

export default ThemeCard;
