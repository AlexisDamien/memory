import { AppBar, Button, Toolbar, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
const Header = (): JSX.Element => {
    return (
        <AppBar className={"static"}>
            <Toolbar>
                <Typography variant="h6" color={"white"} component={NavLink} to="/" sx={{ flexGrow: 1 }}>
                    MemoApp
                </Typography>
                <Button color="inherit" component={NavLink} to="/theme">Thèmes</Button>
                <Button color="inherit" component={NavLink} to="/Categorie">Catégories</Button>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
