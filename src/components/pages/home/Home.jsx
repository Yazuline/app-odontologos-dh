import axios from 'axios'
import React, { useEffect, useState } from 'react'
import CardUser from '../../common/card/CardUser'
import styles from "./home.module.css"
import { useTheme } from '../../../contex/ThemeProvider'



const Home = () => {
const { theme, toggleTheme, themeName } = useTheme();
const [users, setUsers] =useState([])
useEffect(()=>{

  axios
       .get("https://jsonplaceholder.typicode.com/users")
       .then(res => setUsers(res.data))
       .catch(err=> console.log(err))

       const objetoJSON = JSON.stringify(users);
       localStorage.setItem(users, objetoJSON);

}, [])


  return (
<>
<div style={{ backgroundColor: theme.background, color: theme.textColor }}>

<div  className={styles.containerCards}>
  {
    users.map((user)=>{
      return (
       
        
        <CardUser key={user.id}  user={user} />
        
       
      
       
      )
    })
  }
</div>

</div>


</>
  )
}

export default Home