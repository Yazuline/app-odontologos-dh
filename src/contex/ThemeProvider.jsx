import { createContext, useContext, useState } from "react";


const themeStyle={
    dark:{
        background:'#282c34',
        textcolor:'white'

    },

    light:{
        background:'white',
        textcolor:'#282c34'

    }
    
}


const ThemeContex = createContext()



function ThemeProvider(props){
    const [theme, setTheme]=useState('dark')
    const toggleTheme=()=> theme ==='dark' ? setTheme('light'): setTheme('dark')
    const value ={theme: themeStyle[theme],  toggleTheme, themeName:theme}
    return< ThemeContex.Provider  value={value} {...props}/>
}

const useTheme =()=> useContext(ThemeContex)

export {ThemeProvider as default, useTheme}
