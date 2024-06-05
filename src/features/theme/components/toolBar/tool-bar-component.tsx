import { Grid, ListItemIcon} from "@mui/material";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import PendingOutlinedIcon from '@mui/icons-material/PendingOutlined';
import {toolBarStyles} from "./tool-bar.styles";
const ToolBar = (): JSX.Element => {
    return (
        <Grid  className={toolBarStyles}>
            <ListItemIcon >
                <AddCircleOutlineIcon/>
            </ListItemIcon>
            <ListItemIcon>
                <RemoveCircleOutlineIcon/>
            </ListItemIcon>
            <ListItemIcon>
                <PendingOutlinedIcon/>
            </ListItemIcon>
        </Grid>
    );
};

export default ToolBar;
