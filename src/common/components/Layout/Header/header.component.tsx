import { AppBar, Button, Toolbar, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
const Header = (): JSX.Element => {
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" color={"white"} component={NavLink} to="/" sx={{ flexGrow: 1 }}>
                    MemoApp
                </Typography>
                <Button color="inherit" component={NavLink} to="/Categorie">Catégories</Button>
                <Button color="inherit" component={NavLink} to="/settings"><img src={"/settings.svg"}/></Button>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
