import React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';

const Cards = ({ title, price, image, description }) => {
  return (
    <ImageList sx={{ width: 500, height: 450 }}>
      <ImageListItem key="Subheader" cols={2}>
        
      </ImageListItem>

      <ImageListItem>
        <img
          src={`${image}?w=248&fit=crop&auto=format`}
          srcSet={`${image}?w=248&fit=crop&auto=format&dpr=2 2x`}
          alt={title}
          loading="lazy"
        />
        <ImageListItemBar
          title={title}
          subtitle={price}
          actionIcon={
            <IconButton sx={{ color: 'rgba(255, 255, 255, 0.54)' }} aria-label={`info about ${description}`}>
              💙
            </IconButton >
          }
        />
      </ImageListItem>
    </ImageList>
  );
};

export default Cards;
