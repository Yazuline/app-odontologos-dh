import  React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { IconButton } from '@mui/material';

const CardUser = ({user}) => {

  
    return (

    <Card sx={{ Width: 100, height:500 }}>
    <CardHeader
     
         title={user.name}
         subheader={user.catchPhrase}
    />
    <CardMedia
      component="img"
      height="200"
      image="images/doctor.jpg"
     
      
    />
    <CardContent  sx={{ height:100 }}>
      <Typography variant="body2" color="text.secondary">
       {user.email}
      </Typography>
    </CardContent>
    <CardActions disableSpacing>
      <IconButton aria-label="add to favorites">
        {/*<FavoriteIcon color={movie.isLiked ? "error": "disabled"} onClick={()=>handleLike(movie)} />*/}
        <FavoriteIcon />
      </IconButton>
         
    </CardActions>
  
  </Card>
  )
}
export default CardUser