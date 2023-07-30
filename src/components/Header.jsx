import { Box, Button, Stack, Typography } from '@mui/material'
import React from 'react'

const Header = () => {
  return (
    <Stack >
         <Typography sx={{ textAlign:"center"}} variant="h2">Product List</Typography>
        <Box sx={{textAlign:"center"}}>

        <Button>All</Button>
        <Button>Electronics</Button>
        <Button>Jewelery</Button>
        <Button>Men's Clothing</Button>
        <Button>Women's Clothing</Button>
        </Box>
        
    </Stack>
  )
}

export default Header