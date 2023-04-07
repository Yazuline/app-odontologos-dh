import { createContext, useState } from "react";



export const AuthContex = createContext()

const AuthContexProvider = ({children}) => {
  
  const   [userData, setUserData] = useState({name:"", email:"", phone:"", website:"", address:""})
   
   const data ={
     userData,
     setUserData

   }
  return (
    <AuthContex.Provider value={data}>
        {children}
    </AuthContex.Provider>
  )
}

export default AuthContexProvider