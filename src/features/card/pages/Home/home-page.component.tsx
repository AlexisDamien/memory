import { Grid, TextField } from "@mui/material";
import MemoCard from "../../components/memoCard/memo-card.component";
import { useState } from "react";


const HomePage : React.FC = () => {
    
    const [indexCarteAVoir, setIndexCarteAvoir] = useState<number>(0);

    return (
            <Grid container spacing={3} display={"flex"}  alignItems={"center"} flexDirection={"column"} >
                    <h1>Home Page</h1>
                    <div>Sur combien de Cartes voulez vous vous entrainer ?</div>
                    <TextField
                        id="outlined-number"
                        label="Nombre de Cartes"
                        type="number"  
                    />

               <MemoCard cardQuestion={"la question est la"} cardResponse={"la reponse"}/>
            </Grid>
    );
};

export default HomePage;
