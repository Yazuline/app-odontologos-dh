import React from 'react'
import CardUser from '../../common/card/CardUser';
import styles from "./favorite.module.css"
import { useTheme } from '../../../contex/ThemeProvider';



const Favorite = () => {
  const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
  const { theme, toggleTheme, themeName } = useTheme();
  console.log(favorites)
  
  return (
    <>
    <div style={{ backgroundColor: theme.background, color: theme.textColor }}>
    <div className={styles.containerCards}>
    {favorites.map(user => (
      <CardUser key={user.id} user={user} />
    ))}
  </div>
  </div>
  </>
  )
}

export default Favorite