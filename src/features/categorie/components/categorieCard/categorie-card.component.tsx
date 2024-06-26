import {Box, Typography} from "@mui/material";
import ToolBar from "../toolBar/tool-bar-component";
type Props={
    name: string;
    description: string;
    nbCards: number;
}
const CategorieCard = (props: Props): JSX.Element => {
    return (
       <Box display="flex" justifyContent={"space-evenly"} borderBottom={"solid 1px #1976d2"} padding={"10px"}>
               <Typography >{props.name}</Typography>
               <Typography >{props.description}</Typography>
               <Typography >{props.nbCards} Cartes</Typography>
        <ToolBar />
       </Box>
    );
};

export default CategorieCard;
