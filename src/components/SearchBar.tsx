import { IconButton, InputAdornment, TextField } from "@mui/material";
import Button from "@mui/material/Button";
import styled from "@emotion/styled";
import SearchIcon from "@mui/icons-material/Search";
import { useRecipe } from "../hooks/useRecipe";
// import CancelRoundedIcon from "@mui/icons-material/CancelRounded";

const FlexWrapp = styled.div`
  display: flex;
  gap: 1rem;
`;

interface SearchBarProps {
  setter: React.Dispatch<React.SetStateAction<string>>;
  searchVal: string;
}

const SearchBar = ({ setter, searchVal }: SearchBarProps) => {
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
        value={searchVal}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),

          // endAdornment: value && (
          //   <IconButton
          //     aria-label="toggle password visibility"
          //     onClick={() => setValue("")}
          //   >
          //     <CancelRoundedIcon />
          //   </IconButton>
          // ),
        }}
      />
      <Button variant="contained">Search</Button>
    </FlexWrapp>
  );
};
export default SearchBar;
