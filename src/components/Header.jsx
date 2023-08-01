import React from "react";
import { Box, Button, Stack, Typography } from "@mui/material";
const Header = ({ data, setSelectedCategory }) => {
  // Düzeltme 1: Add a click handler to handle category filtering
  const handleCategoryFilter = (category) => {
    setSelectedCategory(category);
  };
  return (
    <Stack>
      <Typography sx={{ textAlign: "center" }} variant="h2">
        Product List
      </Typography>
      <Box sx={{ textAlign: "center" }}>
        {/* Düzeltme 2: Pass the category value to the click handler */}
        <Button onClick={() => handleCategoryFilter("")}>All</Button>
        <Button onClick={() => handleCategoryFilter("electronics")}>
          Electronics
        </Button>
        <Button onClick={() => handleCategoryFilter("jewelery")}>
          Jewelery
        </Button>
        <Button onClick={() => handleCategoryFilter("men's clothing")}>
          Men's Clothing
        </Button>
        <Button onClick={() => handleCategoryFilter("women's clothing")}>
          Women's Clothing
        </Button>
      </Box>
    </Stack>
  );
};
export default Header;