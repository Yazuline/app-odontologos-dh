import React, { createContext } from "react";
import { Context } from "react";
import React from 'react'

export const AuthContex = createContext()

const AuthContexProvider = ({children}) => {
  return (
    <AuthContex.Provider>
        {children}
    </AuthContex.Provider>
  )
}

export default AuthContexProvider