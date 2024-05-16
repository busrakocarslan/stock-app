import { Avatar, Box, Paper, Stack, Typography } from "@mui/material";
import React from "react";
import EuroIcon from "@mui/icons-material/Euro";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { deepPurple } from "@mui/material/colors";

const KPICards = () => {
  const kpiData = [
    {
      id: 1,
      title: "Sales",
      icon: <EuroIcon />,
      amont: "€12000",
      color: deepPurple[700],
      bgColor: "hotpink ",
    },
    {
      id: 2,
      title: "Sales",
      icon: <CurrencyExchangeIcon />,
      amont: "€12000",
      color: "red",
      bgColor: "black ",
    },
    {
      id: 1,
      title: "Sales",
      icon: <AddShoppingCartIcon />,
      amont: "€12000",
      color: "purple",
      bgColor: "pink ",
    },
  ];

  return (
    <Stack justifyContent={"center"} alignItems={"center"} gap={2} flexWrap={"wrap"}>
      {kpiData.map((data) => (
        <Paper key={data.id} elevation={3} sx={{display:"flex"}}>
          <Avatar sx={{bgColor:" data.bgColor"}}>{data.icon}</Avatar>
          <Box>
            <Typography>{data.title}</Typography>
            <Typography> {data.amont}</Typography>
          </Box>

         
         
        </Paper>
      ))}
    </Stack>
  );
};

export default KPICards;
