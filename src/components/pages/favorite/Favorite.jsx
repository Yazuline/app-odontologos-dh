import React from 'react'
import CardUser from '../../common/card/CardUser';
import styles from "./favorite.module.css"



const Favorite = () => {
  const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
  
  console.log(favorites)
  
  return (
    <div className={styles.containerCards}>
    {favorites.map(user => (
      <CardUser key={user.id} user={user} />
    ))}
  </div>
  )
}

export default Favorite