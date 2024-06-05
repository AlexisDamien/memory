import { AppBar, Button, Toolbar, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
const Header = (): JSX.Element => {
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" color={"white"} component={NavLink} to="/" sx={{ flexGrow: 1 }}>
                    MemoApp
                </Typography>
                <Button color="inherit" component={NavLink} to="/Categorie">Catégorie</Button>
                <Button color="inherit" component={NavLink} to="/theme">Thème</Button>
                <Button color="inherit" component={NavLink} to="/reminders">Rappel</Button>
                <Button color="inherit" component={NavLink} to="/settings">Paramètre</Button>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
