import React, { useState } from "react";
import data from "../helper/data";
import Cards from "../components/Cards";

import { Box } from "@mui/material";
import Header from "../components/Header";


const Home = () => {
  const[state, setState]=useState("")
 
  const filterButton=data.filter(item=>item.category.includes((state)))
  return (
    <div>
      <Header data={data}/>
    <Box
      sx={{
        container: "-moz-initial",
        margin: "14px ",
        display: "grid",
        justifyContent: "center",
        gap: "1rem",
        gridTemplateColumns: "repeat(4, 1fr)",
      }}
      >
      {data.map((item) => (
        <Cards key={item.id} {...item} />
        ))}
    </Box>
        </div>
  );
};

export default Home;