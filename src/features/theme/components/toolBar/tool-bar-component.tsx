import { Grid, ListItemIcon } from "@mui/material";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import PendingOutlinedIcon from '@mui/icons-material/PendingOutlined';
import { toolBarStyles } from "./tool-bar.styles";

type ToolBarProps = {
  onDelete: () => void;
  onEdit: () => void;
};

const ToolBar = ({ onDelete, onEdit }: ToolBarProps): JSX.Element => {
  return (
    <Grid className={toolBarStyles}>
      <ListItemIcon >
        <AddCircleOutlineIcon />
      </ListItemIcon>
      <ListItemIcon onClick={onDelete}>
        <RemoveCircleOutlineIcon />
      </ListItemIcon>
      <ListItemIcon>
        <PendingOutlinedIcon onClick={onEdit}/>
      </ListItemIcon>
    </Grid>
  );
};

export default ToolBar;
