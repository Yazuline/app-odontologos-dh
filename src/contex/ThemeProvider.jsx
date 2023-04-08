import { createContext, useContext, useState } from "react";


const themeStyle={
    dark:{
        background:'#4B4453',
        textcolor:'white'

    },

    light:{
        background:'white',
        textcolor:'#282c34'

    }
    
}


const ThemeContex = createContext()



function ThemeProvider(props){
    const [theme, setTheme]=useState('light')
    const toggleTheme=()=> theme ==='light' ? setTheme('dark'): setTheme('light')
    const value ={theme: themeStyle[theme],  toggleTheme, themeName:theme}
    return< ThemeContex.Provider  value={value} {...props}/>
}

const useTheme =()=> useContext(ThemeContex)

export {ThemeProvider as default, useTheme}
