import {Box, Typography} from "@mui/material";
import ToolBar from "../toolBar/tool-bar-component";
type Props={
    name: string;
    description: string;
    nbCards: number;
}
const ThemeCard = (props: Props): JSX.Element => {
    return (
       <Box display={"flex"} justifyContent={"space-evenly"} borderBottom={"solid 1px #1976d2"}>
               <Typography >{props.name}</Typography>
               <Typography >{props.description}</Typography>
               <Typography >{props.nbCards} Cartes</Typography>
        <ToolBar/>
       </Box>
    );
};

export default ThemeCard;
