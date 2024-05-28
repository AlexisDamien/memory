import { FC } from "react";
import {Grid} from "@mui/material";
import ToolBar from "@/features/theme/components/toolBar/tool-bar-component";
import {containerStyle} from "@/features/theme/pages/ThemePage/theme-page.styles";
import ThemeCard from "@/features/theme/components/themeCard/theme-card.component";


const ThemePage : React.FC = () => {


    return (
            <Grid container spacing={3} display={"flex"} flexDirection={"column"}>
                    <h1>Theme Page</h1>
                <div className={containerStyle}>
                    <ToolBar/>
                    <ThemeCard/>
                    <ThemeCard/>
                    <ThemeCard/>
                </div>
            </Grid>
    );
};

export default ThemePage;
