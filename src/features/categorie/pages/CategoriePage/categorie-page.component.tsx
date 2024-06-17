import {Grid} from "@mui/material";
import {containerStyle} from "./categorie-page.styles.ts";
import CategorieCard from "../../components/categorieCard/categorie-card.component.tsx";
import CreateCategorie from "../../components/createCategorie/create-categorie.component.tsx";


const CategoriePage : React.FC = () => {
    return (
            <Grid container spacing={3} display={"flex"} flexDirection={"column"} >
                    <h1>Categorie Page</h1>
                <CreateCategorie/>
                <div className={containerStyle}>
                    <CategorieCard name="Sport" description="courte description" nbCards={1}/>
                    <CategorieCard name="Math" description="courte description" nbCards={10}/>
                    <CategorieCard name="Science" description="courte description" nbCards={3}/>
                </div>
            </Grid>
    );
};

export default CategoriePage;
