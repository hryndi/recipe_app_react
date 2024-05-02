import Box from "@mui/material/Box";
import CardItems from "./components/CardItems";
import SearchBar from "./components/SearchBar";
import { useRecipe } from "./hooks/useRecipe";

function App() {
  useRecipe();
  return (
    <Box component="main">
      <SearchBar />
      <CardItems />
    </Box>
  );
}

export default App;
