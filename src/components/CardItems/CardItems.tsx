import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import CardMedia from "@mui/material/CardMedia";
import Box from "@mui/material/Box";
// import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { TFetchedRecepies } from "../../types";
import { styled as styledMui } from "@mui/material";
import styled from "@emotion/styled";

// components
import CardItemsIngredients from "./components/CardItemsIngredients";
import Chips from "./components/Chips";

interface CardItemsProps {
  dataArr: TFetchedRecepies | null;
}

const SCard = styledMui(Card)({
  display: "flex",
  flexDirection: "column",
  height: "100%",
});
const CardContentWrapp = styled.div`
  padding-inline: 1.5rem;
  padding-bottom: 0.4rem;

  display: flex;
  gap: 0.8rem;

  align-items: stretch;
  justify-items: stretch;
  flex-direction: column;
`;

const CardItems = ({ dataArr }: CardItemsProps) => {
  return (
    <Box padding={2}>
      <Grid container spacing={2}>
        {dataArr?.hits.map((item) => (
          <Grid item xs={12} sm={6} lg={3}>
            <SCard>
              <CardMedia image={item.recipe.image} component="svg" height={200} width={500} />

              <CardContentWrapp>
                <div>
                  <Typography
                    fontFamily={"Exo, san-serif"}
                    fontStyle={"italic"}
                    color={"#35433cdf"}
                    variant="subtitle2"
                    fontWeight={800}
                    marginTop={2}
                  >
                    "{item.recipe.source}"
                  </Typography>
                  <Typography lineHeight={1.36} color={"#0a6436e0"} variant="h6" fontWeight={800}>
                    {item.recipe.label}
                  </Typography>
                </div>
                <CardItemsIngredients recipe={item.recipe.ingredientLines} />
              </CardContentWrapp>
              <Chips
                dataYield={item.recipe.yield}
                calories={item.recipe.calories}
                co2EmissionsClass={item.recipe.co2EmissionsClass}
                cuisineType={item.recipe.cuisineType}
                mealType={item.recipe.mealType}
                dietLabels={item.recipe.dietLabels}
              />
              <CardActions sx={{ paddingLeft: "1rem", paddingBottom: "1rem", marginTop: "auto" }}>
                <Button sx={{ fontWeight: 600 }} size="small" onClick={() => window.open(item.recipe.shareAs)}>
                  Share
                </Button>
                <Button
                  sx={{ fontWeight: 700, color: "#26c335" }}
                  size="small"
                  onClick={() => window.open(item.recipe.url)}
                >
                  go to recipe page
                </Button>
              </CardActions>
            </SCard>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
export default CardItems;
