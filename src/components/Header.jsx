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
          onClick={() => handleCategoryFilter("sedan")}
          variant={activeCategory === "sedan" ? "contained" : "outlined"}
          sx={{border:"1px solid lightBlue", marginRight:".5rem"}} 
        >
          sedan
        </Button>
        <Button
          onClick={() => handleCategoryFilter("suv")}
          variant={activeCategory === "suv" ? "contained" : "outlined"}
          sx={{border:"1px solid lightBlue", marginRight:".5rem"}} 
        >
          suv
        </Button>
        <Button
          onClick={() => handleCategoryFilter("pickup")}
          variant={
            activeCategory === "pickup" ? "contained" : "outlined"
          }
          sx={{border:"1px solid lightBlue", marginRight:".5rem"}} 
        >
          pickup
        </Button>
        <Button
          onClick={() => handleCategoryFilter("sports")}
          variant={
            activeCategory === "sports" ? "contained" : "outlined"
          }
          sx={{border:"1px solid lightBlue", marginRight:".5rem"}} 
        >
          sports
        </Button>
      </Box>
    </Stack>
  );
};
export default Header;
