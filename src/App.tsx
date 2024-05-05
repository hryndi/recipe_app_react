import Box from "@mui/material/Box";
import CardItems from "./components/CardItems";
import SearchBar from "./components/SearchBar";
import { useRecipe } from "./hooks/useRecipe";

function App() {
  const { setSearchVal, searchVal } = useRecipe();
  return (
    <Box component="main">
      <SearchBar setter={setSearchVal} searchVal={searchVal} />
      <CardItems />
    </Box>
  );
}

export default App;
