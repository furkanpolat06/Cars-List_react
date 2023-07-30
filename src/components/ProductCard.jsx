import React from 'react';
import data from '../helper/data';
import Cards from './Cards';
import { Box } from '@mui/material';

const ProductCard = () => {
  return (
    <Box sx={{ margin: '14px ', display:"grid", justifyContent:"center",
    gap:"1rem", gridTemplateColumns:"repeat(3, 1fr)" }}  >
            {data.map((item)=>(
                    <Cards key={item.id} {...item}/>
                )) }
        </Box>
  );
};

export default ProductCard;
