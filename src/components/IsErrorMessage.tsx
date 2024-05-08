import SnackbarContent from "@mui/material/SnackbarContent";

const IsErrorMessage = () => {
  return (
    <SnackbarContent
      sx={{ margin: "1rem", backgroundColor: "#db4444" }}
      message={"Error: searched item was not found."}
    />
  );
};

export default IsErrorMessage;
