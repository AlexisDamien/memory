import {Grid} from "@mui/material";
import {containerStyle} from "./theme-page.styles";
import ThemeCard from "../../components/themeCard/theme-card.component";


const ThemePage : React.FC = () => {
    return (
            <Grid container spacing={3} display={"flex"} flexDirection={"column"}>
                    <h1>Theme Page</h1>
                <div className={containerStyle}>
                    <ThemeCard name="test1" description="courte description" nbCards={1}/>
                    <ThemeCard name="test2" description="courte description" nbCards={3}/>
                    <ThemeCard name="test2" description="courte description" nbCards={3}/>
                </div>
            </Grid>
    );
};

export default ThemePage;
