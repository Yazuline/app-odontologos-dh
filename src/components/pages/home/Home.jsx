import axios from 'axios'
import React, { useEffect, useState } from 'react'
import CardUser from '../../common/card/CardUser'
import styles from "./home.module.css"


const Home = () => {
  
const [users, setUsers] =useState([])
useEffect(()=>{

  axios
       .get("https://jsonplaceholder.typicode.com/users")
       .then(res => setUsers(res.data))
       .catch(err=> console.log(err))

}, [])
   
  return (
<>
<div>
  {
    users.map((user)=>{
      return (
        <>
        <div className={styles.containerCards}> 
        <CardUser user={user} key={user.id}/>
        
        </div>
        </>
      )
    })
  }
</div>
</>
  )
}

export default Home