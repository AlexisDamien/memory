import React, { useEffect, useState } from 'react';
import { Grid, Box, TextField, Button, MenuItem, Select } from '@mui/material';
import { getAllThemes } from './../../../../app/service/indexedDb';
import { Theme } from './../../../../app/service/indexedDb/model';
import RevisionComponent from './../../components/revisionComponent/revision-component.component';

const HomePage: React.FC = () => {
  const [themes, setThemes] = useState<Theme[]>([]);
  const [selectedTheme, setSelectedTheme] = useState<number | ''>('');
  const [numCards, setNumCards] = useState<number>(0);
  const [startRevision, setStartRevision] = useState<boolean>(false);

  useEffect(() => {
    fetchThemes();
  }, []);

  const fetchThemes = async () => {
    const allThemes = await getAllThemes();
    setThemes(allThemes);
  };

  const handleStartRevision = () => {
    if (selectedTheme !== '' && numCards > 0) {
      setStartRevision(true);
    }
  };

  return (
    <Grid container spacing={3} display={"flex"} flexDirection={"column"} alignItems={"center"}>
      <h1 className={"mt-24 mb-8 md:mt-32 text-xl text-center"}>Home Page</h1>
      {!startRevision ? (
        <Box display="flex" flexDirection="column" gap={2}>
          <Select
            value={selectedTheme}
            onChange={(e) => setSelectedTheme(e.target.value as number)}
            displayEmpty
          >
            <MenuItem value="">
              <em>Choisir un theme</em>
            </MenuItem>
            {themes.map((theme) => (
              <MenuItem key={theme.id} value={theme.id}>
                {theme.name}
              </MenuItem>
            ))}
          </Select>
          <TextField
            label="Nombre de"
            type="number"
            value={numCards}
            onChange={(e) => setNumCards(Number(e.target.value))}
          />
          <Button onClick={handleStartRevision} variant="contained" color="primary">
            Commencer les Revisions
          </Button>
        </Box>
      ) : (
        <RevisionComponent themeId={selectedTheme as number} numCards={numCards} />
      )}
    </Grid>
  );
};

export default HomePage;
