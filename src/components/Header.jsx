import React, { useState } from "react";
import { Box, Button, Stack, Typography } from "@mui/material";
const Header = ({ data, setSelectedCategory }) => {
  const [activeCategory, setActiveCategory] = useState(""); // Track the active category
  const handleCategoryFilter = (category) => {
    setSelectedCategory(category);
    setActiveCategory(category); // Update the active category on button click
  };
  return (
    <Stack>
      <Typography sx={{ textAlign: "center" }} variant="h2">
        Product List
      </Typography>
      <Box sx={{ textAlign: "center", letterSpacing:"1" }}>
        {/* Düzeltme 2: Pass the category value to the click handler */}
        <Button
          onClick={() => handleCategoryFilter("")}
          variant={activeCategory === "" ? "contained" : "text"}
          sx={{border:"1px solid lightBlue"}} 
          
        >
          All
        </Button>
        <Button
          onClick={() => handleCategoryFilter("electronics")}
          variant={activeCategory === "electronics" ? "contained" : "outlined"}
          sx={{border:"1px solid lightBlue"}} 
        >
          Electronics
        </Button>
        <Button
          onClick={() => handleCategoryFilter("jewelery")}
          variant={activeCategory === "jewelery" ? "contained" : "outlined"}
          sx={{border:"1px solid lightBlue"}} 
        >
          Jewelery
        </Button>
        <Button
          onClick={() => handleCategoryFilter("men's clothing")}
          variant={
            activeCategory === "men's clothing" ? "contained" : "outlined"
          }
          sx={{border:"1px solid lightBlue"}} 
        >
          Men's Clothing
        </Button>
        <Button
          onClick={() => handleCategoryFilter("women's clothing")}
          variant={
            activeCategory === "women's clothing" ? "contained" : "outlined"
          }
          sx={{border:"1px solid lightBlue"}} 
        >
          Women's Clothing
        </Button>
      </Box>
    </Stack>
  );
};
export default Header;
