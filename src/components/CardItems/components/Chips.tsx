import FlatwareIcon from "@mui/icons-material/Flatware";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material";
import Co2Icon from "@mui/icons-material/Co2";

interface ChipsProps {
  dataYield: number;
  co2EmissionsClass: string;
  calories: number;
  mealType: string[];
  cuisineType: string[];
  dietLabels: string[];
}
interface StyledProps {
  svgColor?: string;
  textColor: string;
  rem1?: boolean;
  rem85?: boolean;
}
const SChip = styled(Chip)(({ svgColor, textColor, rem1, rem85 }: StyledProps) => ({
  marginLeft: "0 !important",
  "& .MuiSvgIcon-root": {
    color: `${svgColor}`,
  },
  "& .MuiChip-label": {
    fontSize: `${(rem1 && "1rem") || (rem85 && "0.85rem")}`,
    color: textColor,
  },
}));

const Chips = ({ dataYield, co2EmissionsClass, calories, cuisineType, mealType, dietLabels }: ChipsProps) => {
  return (
    <Stack
      alignItems={"center"}
      direction="row"
      flexWrap={"wrap"}
      gap={0.6}
      spacing={1}
      padding={1}
      fontWeight={600}
      paddingInline={"0.9rem"}
    >
      <SChip
        svgColor="#4f8cc9"
        textColor="#0b455cea"
        rem1
        icon={<FlatwareIcon />}
        label={dataYield}
        variant="outlined"
      />
      <SChip
        svgColor="#ff0099"
        textColor="#afd037ea"
        rem1
        icon={<Co2Icon fontSize="large" />}
        label={co2EmissionsClass}
        variant="outlined"
      />
      <SChip rem1 textColor="#f90000" label={`${calories.toFixed(0)}kcal`} variant="outlined" />
      {dietLabels.map((item) => (
        <SChip rem85 textColor="#26c335" label={item} variant="outlined" size="small" />
      ))}

      {mealType.map((item) => (
        <SChip rem85 textColor="#d88cfe" label={item} variant="outlined" size="small" />
      ))}
      {cuisineType.map((item) => (
        <SChip rem85 textColor="#ee8585" label={item} variant="outlined" size="small" />
      ))}
    </Stack>
  );
};

export default Chips;
