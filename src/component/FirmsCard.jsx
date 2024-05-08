import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import DeleteOutlineTwoToneIcon from "@mui/icons-material/DeleteOutlineTwoTone";
import EditTwoToneIcon from "@mui/icons-material/EditTwoTone";
import { Box, Stack } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
// import { editFirm, removeFirm } from '../features/firmSlice';
import useStockRequest from "../services/useStockRequest";

const FirmsCard = ({ _id, image, name, address }) => {
  const { removeFirm } = useStockRequest();
  const { firmsList } = useSelector((state) => state.firms);
  // const dispatch=useDispatch()// dispatch i useStockRequestte removefilm i tanımlarken kullanıyorsun thunk kullanmadıysan burada kullanamazsın
  const handleClean = () => {
    //
    removeFirm(_id);
    console.log(_id);
  };
  const handleEdit = (_id) => {};

  return (
    <Stack>
      <Card
        sx={{
          maxWidth: 300,
          height: "350px",
          m: "5px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {address}
          </Typography>
        </CardContent>
        <CardMedia
          component="img"
          alt="green iguana"
          height="140"
          image={image}
          sx={{ objectPosition: "center", objectFit: "contain" }}
        />
        <Box>
          <Button size="small" onClick={() => handleClean(_id)}>
            <DeleteOutlineTwoToneIcon color="error" />{" "}
          </Button>
          <Button size="small" onClick={() => handleEdit(_id)}>
            <EditTwoToneIcon color="success" />
          </Button>
        </Box>
      </Card>
    </Stack>
  );
};

export default FirmsCard;
