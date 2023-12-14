"use client"
import { createContext, useEffect, useState } from "react";


export const ThemeContext = createContext();



export const ThemeContextProvider = ({children})=>{
    const [currentTheme, setCurrentTheme] = useState("");

    useEffect(() => {
        if (typeof window !== undefined) {
            const value = localStorage.getItem('theme');
            setCurrentTheme(value || "light");
        }
    }, [])
    const [theme,setTheme] = useState(()=>{
        currentTheme
    })
    const toggle = ()=>{
        setTheme(theme === "light" ? "dark" : "light");
    }
    useEffect(()=>{
        localStorage.setItem('theme',theme)
    },[theme])
    return <ThemeContext.Provider value={{theme, toggle}}>{children}</ThemeContext.Provider>
}