import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import CardMedia from "@mui/material/CardMedia";
import Box from "@mui/material/Box";
// import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { TFetchedRecepies } from "../types";
import { styled as styledMui } from "@mui/material";
import styled from "@emotion/styled";

import FlatwareIcon from "@mui/icons-material/Flatware";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";

import Co2Icon from "@mui/icons-material/Co2";

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

const SUl = styled.ul`
  overflow-y: auto;
  max-height: 10rem;
  padding: 0.5rem;
  padding-left: 1.8rem;
  text-overflow: ellipsis;
  &::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    border-radius: 10px;
    background-color: #f5f5f5;
  }

  &::-webkit-scrollbar {
    width: 8px;
    background-color: #f5f5f5;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    background-color: #1d84ec90;
    /* #a3e2a0 */
  }
`;
const SLi = styled.li`
  &::marker {
    color: #4f8cc9;
    font-size: 1.3rem;
  }
`;

const SPre = styled.pre`
  border-left: "5px solid #69c773 !important";
  // wordBreak: "break-all",
  white-space: "pre-wrap !important";
  background-color: "#f0f4f0 !important";
  font-size: "1rem !important";
  border-radius: "8px !important";
`;

const CardItems = ({ dataArr }: CardItemsProps) => {
  return (
    <Box padding={2}>
      <Typography gutterBottom variant="h5" component="div">
        Food
      </Typography>
      <Grid container spacing={2}>
        {dataArr?.hits.map((item) => (
          <Grid item xs={12} sm={6} lg={3}>
            <SCard>
              <CardMedia image={item.recipe.image} component="svg" height={200} width={500} />

              <Stack
                alignItems={"center"}
                // justifyContent={"center"}
                direction="row"
                flexWrap={"wrap"}
                gap={0.6}
                spacing={1}
                padding={1}
                fontWeight={600}
                paddingInline={"0.9rem"}
              >
                <Chip
                  sx={{
                    marginLeft: "0 !important",
                    "& .MuiSvgIcon-root": {
                      color: "#4f8cc9",
                    },
                    "& .MuiChip-label": {
                      fontSize: "1rem",
                      color: "#0b455cea",
                    },
                  }}
                  icon={<FlatwareIcon />}
                  label={item.recipe.yield}
                  variant="outlined"
                  // size="small"
                />
                <Chip
                  sx={{
                    marginLeft: "0 !important",
                    "& .MuiSvgIcon-root": {
                      color: "#ff0099",
                    },
                    "& .MuiChip-label": {
                      fontSize: "1rem",
                      color: "#afd037ea",
                    },
                  }}
                  icon={<Co2Icon fontSize="large" />}
                  label={item.recipe.co2EmissionsClass}
                  variant="outlined"
                  // size="small"
                />
                <Chip
                  sx={{
                    marginLeft: "0 !important",
                    "& .MuiChip-label": {
                      fontSize: "1rem",
                      color: "#f90000",
                    },
                  }}
                  label={`${item.recipe.calories.toFixed(0)}kcal`}
                  variant="outlined"
                  // size="small"
                />
                {item.recipe.dietLabels.map((item) => (
                  <Chip
                    sx={{
                      marginLeft: "0 !important",
                      "& .MuiChip-label": {
                        fontSize: "0.85rem",
                        color: "#26c335",
                      },
                    }}
                    label={item}
                    variant="outlined"
                    size="small"
                  />
                ))}

                {item.recipe.mealType.map((item) => (
                  <Chip
                    sx={{
                      marginLeft: "0 !important",
                      "& .MuiChip-label": {
                        fontSize: "0.85rem",
                        color: "#d88cfe",
                      },
                    }}
                    label={item}
                    variant="outlined"
                    size="small"
                  />
                ))}
                {item.recipe.cuisineType.map((item) => (
                  <Chip
                    sx={{
                      marginLeft: "0 !important",
                      "& .MuiChip-label": {
                        fontSize: "0.85rem",
                        color: "#ee8585",
                      },
                    }}
                    label={item}
                    variant="outlined"
                    size="small"
                  />
                ))}
              </Stack>
              <CardContentWrapp>
                <div>
                  <Typography
                    fontFamily={"Exo, san-serif"}
                    fontStyle={"italic"}
                    color={"#35433cdf"}
                    variant="subtitle2"
                    fontWeight={800}
                  >
                    "{item.recipe.source}"
                  </Typography>
                  <Typography color={"#0a6436e0"} variant="h6" fontWeight={800}>
                    {item.recipe.label}
                  </Typography>
                </div>

                <div>
                  <Typography color={"#084963ea"} padding={"0.2rem"} variant="subtitle1" fontWeight={600}>
                    Ingredients:
                  </Typography>
                  <SPre
                    style={{
                      borderLeft: "5px solid #69c773",
                      // wordBreak: "break-all",
                      whiteSpace: "pre-wrap",
                      backgroundColor: "#f0f4f0",
                      fontSize: "1rem",
                      borderRadius: "8px",
                    }}
                  >
                    <SUl>
                      {item.recipe.ingredientLines.map((item) => (
                        <SLi>{item}</SLi>
                      ))}
                    </SUl>
                  </SPre>
                </div>
              </CardContentWrapp>
              <CardActions sx={{ paddingLeft: "1rem", paddingBottom: "1rem", marginTop: "auto" }}>
                <Button sx={{ fontWeight: 600 }} size="small" onClick={() => window.open(item.recipe.shareAs)}>
                  Share
                </Button>
                <Button sx={{ fontWeight: 700, color: "#26c335" }} size="small">
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
