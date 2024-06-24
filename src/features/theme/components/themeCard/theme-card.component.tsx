import { Box, Typography } from "@mui/material";
import ToolBar from "../toolBar/tool-bar-component";

type Props = {
  id: number;
  name: string;
  description: string;
  nbCards: number;
  onDelete: (id: number) => void;
  onEdit: (id: number) => void;
};

const ThemeCard = (props: Props): JSX.Element => {
  return (
    <Box display="flex" justifyContent={"space-evenly"} borderBottom={"solid 1px #1976d2"} padding={"10px"}>
      <Typography>{props.name}</Typography>
      <Typography>{props.description}</Typography>
      <Typography>{props.nbCards} Cartes</Typography>
      <ToolBar onDelete={() => props.onDelete(props.id)} onEdit={() => props.onEdit(props.id)} />
    </Box>
  );
};

export default ThemeCard;
