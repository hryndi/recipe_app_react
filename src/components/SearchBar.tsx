import { IconButton, InputAdornment, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useRecipe } from "../hooks/useRecipe";
// import CancelRoundedIcon from "@mui/icons-material/CancelRounded";

interface SearchBarProps {
  setter: React.Dispatch<React.SetStateAction<string>>;
  searchVal: string;
}

const SearchBar = ({ setter, searchVal }: SearchBarProps) => {
  // const { setSearchVal, searchVal } = useRecipe();
  return (
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
  );
};
export default SearchBar;
