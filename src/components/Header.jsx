import React, { useState } from "react";
import "../index.css"
import { Box, Button, Stack, Typography } from "@mui/material";
const Header = ({ data, setSelectedCategory }) => {
  const [activeCategory, setActiveCategory] = useState(""); // Track the active category
  const handleCategoryFilter = (category) => {
    setSelectedCategory(category);
    setActiveCategory(category); // Update the active category on button click

  };
  return (
    <Stack>
      <Typography className="title" sx={{ textAlign: "center" }} variant="h2">
        Product List
      </Typography>
      <Box sx={{ textAlign: "center",  }}>
        {/* Düzeltme 2: Pass the category value to the click handler */}
        <Button
          onClick={() => handleCategoryFilter("")}
          variant={activeCategory === "" ? "contained" : "text"}
          sx={{border:"1px solid lightBlue", marginRight:".5rem", }} 
          
        >
          All
        </Button>
        <Button
          onClick={() => handleCategoryFilter("electronics")}
          variant={activeCategory === "electronics" ? "contained" : "outlined"}
          sx={{border:"1px solid lightBlue", marginRight:".5rem"}} 
        >
          Electronics
        </Button>
        <Button
          onClick={() => handleCategoryFilter("jewelery")}
          variant={activeCategory === "jewelery" ? "contained" : "outlined"}
          sx={{border:"1px solid lightBlue", marginRight:".5rem"}} 
        >
          Jewelery
        </Button>
        <Button
          onClick={() => handleCategoryFilter("men's clothing")}
          variant={
            activeCategory === "men's clothing" ? "contained" : "outlined"
          }
          sx={{border:"1px solid lightBlue", marginRight:".5rem"}} 
        >
          Men's Clothing
        </Button>
        <Button
          onClick={() => handleCategoryFilter("women's clothing")}
          variant={
            activeCategory === "women's clothing" ? "contained" : "outlined"
          }
          sx={{border:"1px solid lightBlue", marginRight:".5rem"}} 
        >
          Women's Clothing
        </Button>
      </Box>
    </Stack>
  );
};
export default Header;
