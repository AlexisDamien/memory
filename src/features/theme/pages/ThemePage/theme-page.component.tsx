import { Grid } from "@mui/material";
import { containerStyle } from "./theme-page.styles";
import ThemeCard from "../../components/themeCard/theme-card.component";
import CreateTheme from "../../components/createTheme/create-theme.component";
import { useEffect, useState } from "react";
import { createItem, deleteItem, getAllItems, updateItem } from "../../../../app/service/indexedDb";
import { Item } from "../../../../app/service/indexedDb/model";

const ThemePage: React.FC = () => {
  const [items, setItems] = useState<Item[]>([]);

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    const allItems = await getAllItems();
    setItems(allItems);
  };

  const handleCreateTheme = async (name: string, description: string) => {
    await createItem({ name, description });
    fetchItems();
  };

  const handleDeleteItem = async (id: number) => {
    await deleteItem(id);
    fetchItems();
  };

  const handleEditItem = async (id: number) => {
    const newName = prompt("Entrer un nouveau titre:");
    const newDescription = prompt("Entrer un nouvelle description:");
    if (newName && newDescription) {
      await updateItem(id, { name: newName, description: newDescription });
      fetchItems();
    }
  };

  return (
    <Grid container spacing={3} display={"flex"} flexDirection={"column"}>
      <h1>Theme Page</h1>
      <CreateTheme onCreate={handleCreateTheme} />
      <div className={containerStyle}>
        {items.map((item) => (
          <ThemeCard
            key={item.id}
            id={item.id}
            name={item.name}
            description={item.description}
            nbCards={0}
            onDelete={handleDeleteItem}
            onEdit={handleEditItem}
          />
        ))}
      </div>
    </Grid>
  );
};

export default ThemePage;
