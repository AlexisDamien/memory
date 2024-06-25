import React, { useEffect, useState } from 'react';
import { Grid, Box, TextField, Button, Typography, MenuItem, Select } from '@mui/material';
import { createTheme, getAllThemes, deleteTheme, createCard, getCardsByTheme, updateCard, deleteCard, getAllCategories, createCategory } from './../../../../app/service/indexedDb';
import { Theme, Card, Category } from './../../../../app/service/indexedDb/model';

const ThemePage: React.FC = () => {
  const [themes, setThemes] = useState<Theme[]>([]);
  const [cards, setCards] = useState<Card[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [selectedTheme, setSelectedTheme] = useState<Theme | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<number | ''>('');
  const [newTheme, setNewTheme] = useState({ name: '', description: '', categoryId: '' });
  const [newCard, setNewCard] = useState({ question: '', answer: '' });

  useEffect(() => {
    fetchCategories();
    fetchThemes();
  }, []);

  const fetchCategories = async () => {
    const allCategories = await getAllCategories();
    setCategories(allCategories);
  };

  const fetchThemes = async () => {
    const allThemes = await getAllThemes();
    setThemes(allThemes);
  };

  const fetchCards = async (themeId: number) => {
    const cards = await getCardsByTheme(themeId);
    setCards(cards);
  };

  const handleCreateTheme = async () => {
    if (selectedCategory) {
      await createTheme({ ...newTheme, categoryId: selectedCategory });
      setNewTheme({ name: '', description: '', categoryId: '' });
      fetchThemes();
    } else {
      alert('selectione un cat avant.');
    }
  };

  const handleDeleteTheme = async (id: number) => {
    await deleteTheme(id);
    setSelectedTheme(null);
    setCards([]);
    fetchThemes();
  };

  const handleCreateCard = async () => {
    if (selectedTheme) {
      await createCard({ ...newCard, themeId: selectedTheme.id });
      setNewCard({ question: '', answer: '' });
      fetchCards(selectedTheme.id);
    }
  };

  const handleDeleteCard = async (id: number) => {
    await deleteCard(id);
    if (selectedTheme) {
      fetchCards(selectedTheme.id);
    }
  };

  const handleUpdateCard = async (id: number) => {
    const newQuestion = prompt("Enter new question:");
    const newAnswer = prompt("Enter new answer:");
    if (newQuestion && newAnswer) {
      await updateCard(id, { question: newQuestion, answer: newAnswer });
      if (selectedTheme) {
        fetchCards(selectedTheme.id);
      }
    }
  };

  return (
    <Grid container spacing={3} display={"flex"} flexDirection={"column"}>
      <h1>Theme Page</h1>
      <Box display="flex" flexDirection="column" gap={2}>
        <Select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value as number)}
          displayEmpty
        >
          <MenuItem value="">
            <em>Choisir une catégorie</em>
          </MenuItem>
          {categories.map((category) => (
            <MenuItem key={category.id} value={category.id}>
              {category.name}
            </MenuItem>
          ))}
        </Select>
        <TextField
          label="Nom du theme"
          value={newTheme.name}
          onChange={(e) => setNewTheme({ ...newTheme, name: e.target.value })}
        />
        <TextField
          label="Description du theme"
          value={newTheme.description}
          onChange={(e) => setNewTheme({ ...newTheme, description: e.target.value })}
        />
        <Button onClick={handleCreateTheme} variant="contained" color="primary">
          Créer un theme
        </Button>
      </Box>
      <div>
        {themes.map((theme) => (
          <Box key={theme.id} border="1px solid gray" padding={2} margin={2}>
            <Typography variant="h6">{theme.name}</Typography>
            <Typography>{theme.description}</Typography>
            <Button onClick={() => setSelectedTheme(theme)}>Selectionner</Button>
            <Button onClick={() => handleDeleteTheme(theme.id)}>Supprimer</Button>
          </Box>
        ))}
      </div>
      {selectedTheme && (
        <Box>
          <h2>Cards for {selectedTheme.name}</h2>
          <Box display="flex" flexDirection="column" gap={2}>
            <TextField
              label="Question"
              value={newCard.question}
              onChange={(e) => setNewCard({ ...newCard, question: e.target.value })}
            />
            <TextField
              label="Réponse"
              value={newCard.answer}
              onChange={(e) => setNewCard({ ...newCard, answer: e.target.value })}
            />
            <Button onClick={handleCreateCard} variant="contained" color="primary">
              Créer une Carte
            </Button>
          </Box>
          <div>
            {cards.map((card) => (
              <Box key={card.id} border="1px solid gray" padding={2} margin={2}>
                <Typography variant="h6">Question: {card.question}</Typography>
                <Typography>Réponse: {card.answer}</Typography>
                <Button onClick={() => handleUpdateCard(card.id)}>Modifier</Button>
                <Button onClick={() => handleDeleteCard(card.id)}>Supprimer</Button>
              </Box>
            ))}
          </div>
        </Box>
      )}
    </Grid>
  );
};

export default ThemePage;
