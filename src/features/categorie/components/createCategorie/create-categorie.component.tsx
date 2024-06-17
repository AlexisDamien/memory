import {Box, Button, TextField} from "@mui/material";

const CreateCategorie = (): JSX.Element => {
    return (
        <Box>
            <TextField label="Nom de la Categorie" variant="outlined"/>
            <Button  variant="contained" >créer</Button>
        </Box>
    );
};

export default CreateCategorie;
