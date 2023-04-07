import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { IconButton } from '@mui/material';
import { Link } from 'react-router-dom';

const CardUser = ({user}) => {
  const [favorites, setFavorites] = useState(JSON.parse(localStorage.getItem('favorites')) || []);

  const handleLike = () => {
    const newFavorites = [...favorites, user];
    setFavorites(newFavorites);
    localStorage.setItem('favorites', JSON.stringify(newFavorites));
  }

  return (
    <Card sx={{ Width: 100, height:500 }}>
      <CardHeader
        title={user.name}
        subheader={user.address.city}
      />
      <CardMedia
        component="img"
        height="200"
        image="/images/doctor.jpg"
      />
      <CardContent sx={{ height:50 }}>
        <Typography variant="body2" color="text.secondary">
          {user.company.catchPhrase}
          <br></br>
          <Link to={`/detalle/${user.id}`}> Ver detalle</Link>
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites" onClick={handleLike}>
          <FavoriteIcon color={favorites.includes(user) ? "error": "disabled"} />
        </IconButton>
      </CardActions>
    </Card>
  )
}

export default CardUser
