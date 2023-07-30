import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

const Cards = ( item ) => {  
  return (
    <Card >
      <CardActionArea sx={{position:"relative"}} >
        <CardMedia 
          component="img"
         
          sx={{ width: '100%', height: '100%' }}
          image={item.image}
          alt={item.title}
        />
        <CardContent sx={{position:"absolute"}}>
          <Typography gutterBottom variant="h5" component="div">
            {item.price} $ 
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {item.description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default Cards;
