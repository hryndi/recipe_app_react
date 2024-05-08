import styled from "@emotion/styled";
import Typography from "@mui/material/Typography";

const SUl = styled.ol`
  list-style-position: inside;

  overflow-y: auto;
  word-break: break-word;
  max-height: 10rem;
  padding: 0.5rem;
  padding-left: 1rem;
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
  text-indent: -8px;

  &::marker {
    color: #4f8cc9;
    font-size: 1.2rem;
  }
`;

const CardItemsIngredients = ({ recipe }: { recipe: string[] }) => {
  return (
    <div>
      <Typography color={"#084963ea"} padding={"0.2rem"} variant="subtitle1" fontWeight={600}>
        Ingredients:
      </Typography>
      <pre
        style={{
          borderLeft: "5px solid #69c773",
          whiteSpace: "pre-wrap",
          backgroundColor: "#f0f4f0",
          fontSize: "1rem",
          borderRadius: "8px",
        }}
      >
        <SUl>
          {recipe.map((item) => (
            <SLi>{item}.</SLi>
          ))}
        </SUl>
      </pre>
    </div>
  );
};

export default CardItemsIngredients;
