import { Box, TextField, Button } from "@mui/material";
import { useState } from "react";

type Props = {
  onCreate: (name: string, description: string) => void;
};

const CreateTheme = ({ onCreate }: Props): JSX.Element => {

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const handleCreate = () => {
    onCreate(name, description);
    setName(""); 
    setDescription(""); 
  };

  return (
    <Box display={"flex"} flexDirection={"column"} alignItems={"center"} gap={2} width={"100%"}>
      <TextField
        id="title"
        label="Titre"
        variant="outlined"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <TextField
        id="desc"
        label="Courte description"
        variant="outlined"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <Button onClick={handleCreate} variant="contained" color="primary">
        Créer
      </Button>
    </Box>
  );
};

export default CreateTheme;
