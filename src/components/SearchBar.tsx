import { IconButton, InputAdornment, TextField } from "@mui/material";
import Button from "@mui/material/Button";
import styled from "@emotion/styled";
import SearchIcon from "@mui/icons-material/Search";
import CancelRoundedIcon from "@mui/icons-material/CancelRounded";

const FlexWrapp = styled.div`
  display: flex;
  gap: 1rem;
  margin: 1rem;
`;

interface SearchBarProps {
  setter: React.Dispatch<React.SetStateAction<string>>;
  searchVal: string;
  fetchFunc: () => void;
}

const SearchBar = ({ setter, fetchFunc, searchVal }: SearchBarProps) => {
  // const { setSearchVal, searchVal } = useRecipe();
  return (
    <FlexWrapp>
      <TextField
        placeholder="Search"
        type="text"
        variant="outlined"
        fullWidth
        size="small"
        onChange={(e) => setter(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            fetchFunc();
          }
        }}
        value={searchVal}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),

          endAdornment: searchVal && (
            <IconButton aria-label="toggle password visibility" onClick={() => setter("")}>
              <CancelRoundedIcon />
            </IconButton>
          ),
        }}
      />
      <Button variant="contained" onClick={fetchFunc}>
        Search
      </Button>
    </FlexWrapp>
  );
};
export default SearchBar;
