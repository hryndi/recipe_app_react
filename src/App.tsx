import Box from "@mui/material/Box";
import CardItems from "./components/CardItems/CardItems";
import SearchBar from "./components/SearchBar";
import { useRecipe } from "./hooks/useRecipe";
import IsErrorMessage from "./components/IsErrorMessage";
import { styled } from "@mui/material";
import Typography from "@mui/material/Typography";

const MainBox = styled(Box)`
  padding: 16px;
  @media all and (max-width: 500px) {
    padding: 0;
  }
`;

function App() {
  const { setSearchVal, fetchRecipe, searchVal, dataArr, isError } = useRecipe();
  return (
    <MainBox component="main">
      <Typography
        variant="h3"
        textAlign={"center"}
        marginBlock={"1rem"}
        fontWeight={500}
        color={"#1eea70"}
        sx={{ textDecoration: "underline", textDecorationColor: "#2590fbe3", fontStyle: "italic" }}
      >
        {" "}
        Dima's recipy search
      </Typography>
      <SearchBar fetchFunc={fetchRecipe} setter={setSearchVal} searchVal={searchVal} />
      {isError ? <IsErrorMessage /> : <CardItems dataArr={dataArr} />}
    </MainBox>
  );
}

export default App;
