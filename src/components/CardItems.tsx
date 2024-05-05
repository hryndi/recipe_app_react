import Card from "@mui/material/Card";
import ReactImage from "../assets/react-img.svg";
import CardMedia from "@mui/material/CardMedia";
// import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { TFetchedRecepies } from "../types";

interface CardItemsProps {
  dataArr: TFetchedRecepies | null;
}

const CardItems = ({ dataArr }: CardItemsProps) => {
  return (
    <Card sx={{ maxWidth: 250 }}>
      {/* <CardMedia image={ReactImage} component="svg" height={200} width={200} /> */}
      <Typography gutterBottom variant="h5" component="div">
        Food
      </Typography>

      {dataArr?.hits.map((item) => (
        <ul>
          <li>{item.recipe.label}</li>
          <li>will</li>
          <li>be</li>
          <li>displayed</li>
          <li>hier</li>
        </ul>
      ))}
    </Card>
  );
};
export default CardItems;
