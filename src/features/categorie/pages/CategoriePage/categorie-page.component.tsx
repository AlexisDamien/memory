import {Grid} from "@mui/material";
import {containerStyle} from "./categorie-page.styles";
import ThemeCard from "../../components/categorieCard/categorie-card.component";


const CategoriePage : React.FC = () => {
    return (
            <Grid container spacing={3} display={"flex"} flexDirection={"column"} >
                    <h1>Categorie Page</h1>
                <div className={containerStyle}>
                    <ThemeCard name="test 1" description="courte description" nbCards={1}/>
                    <ThemeCard name="test 2" description="courte description" nbCards={3}/>
                    <ThemeCard name="test 3" description="courte description" nbCards={3}/>
                </div>
            </Grid>
    );
};

export default CategoriePage;
