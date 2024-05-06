import Box from "@mui/material/Box";
import CardItems from "./components/CardItems";
import SearchBar from "./components/SearchBar";
import { useRecipe } from "./hooks/useRecipe";

function App() {
  const { setSearchVal, searchVal, dataArr } = useRecipe();
  return (
    <Box padding={2} component="main">
      <SearchBar setter={setSearchVal} searchVal={searchVal} />
      <CardItems dataArr={dataArr} />
    </Box>
  );
}

export default App;
