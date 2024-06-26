import React, { useEffect, useState } from 'react';
import { Grid, Box, TextField, Button, Typography } from '@mui/material';
import { createCategory, getAllCategories, deleteCategory, updateCategory } from './../../../../app/service/indexedDb';
import { Category } from './../../../../app/service/indexedDb/model';

const CategoriePage: React.FC = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [newCategory, setNewCategory] = useState({ name: '', description: '' });
  const [editingCategory, setEditingCategory] = useState<Category | null>(null);

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    const allCategories = await getAllCategories();
    setCategories(allCategories);
  };

  const handleCreateCategory = async () => {
    await createCategory(newCategory);
    setNewCategory({ name: '', description: '' });
    fetchCategories();
  };

  const handleDeleteCategory = async (id: number) => {
    await deleteCategory(id);
    fetchCategories();
  };

  const handleUpdateCategory = async () => {
    if (editingCategory) {
      await updateCategory(editingCategory.id, editingCategory);
      setEditingCategory(null);
      fetchCategories();
    }
  };

  return (
    <Grid container spacing={3} display={"flex"} flexDirection={"column"}>
      <h1 className={"mt-24 mb-8 md:mt-32 text-xl text-center"}>Page de Catégorie</h1>
      <Box display="flex" flexDirection="column" gap={2}>
        <TextField
          label="Nom de la catégorie"
          value={newCategory.name}
          onChange={(e) => setNewCategory({ ...newCategory, name: e.target.value })}
        />
        <TextField
          label="Description de la catégorie"
          value={newCategory.description}
          onChange={(e) => setNewCategory({ ...newCategory, description: e.target.value })}
        />
        <Button onClick={handleCreateCategory} variant="contained" color="primary">
          Créer une catégorie
        </Button>
      </Box>
      <div>
        {categories.map((category) => (
          <Box key={category.id} border="1px solid gray" padding={2} margin={2}>
            <Typography variant="h6">{category.name}</Typography>
            <Typography>{category.description}</Typography>
            <Button onClick={() => setEditingCategory(category)}>Modifier</Button>
            <Button onClick={() => handleDeleteCategory(category.id)}>Supprimer</Button>
          </Box>
        ))}
      </div>
      {editingCategory && (
        <Box display="flex" flexDirection="column" gap={2}>
          <h2>Modifier la catégorie</h2>
          <TextField
            label="Nom de la catégorie"
            value={editingCategory.name}
            onChange={(e) => setEditingCategory({ ...editingCategory, name: e.target.value })}
          />
          <TextField
            label="Description de la catégorie"
            value={editingCategory.description}
            onChange={(e) => setEditingCategory({ ...editingCategory, description: e.target.value })}
          />
          <Button onClick={handleUpdateCategory} variant="contained" color="primary">
            Mettre à jour la catégorie
          </Button>
        </Box>
      )}
    </Grid>
  );
};

export default CategoriePage;
