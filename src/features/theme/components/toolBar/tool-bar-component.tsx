import {AppBar, Grid, ListItemIcon, ThemeProvider} from "@mui/material";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import PendingOutlinedIcon from '@mui/icons-material/PendingOutlined';
import {toolBarStyles} from "@/features/theme/components/toolBar/tool-bar.styles";
const ToolBar = (): JSX.Element => {
    return (
        <Grid container className={toolBarStyles}>
            <ListItemIcon>
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
