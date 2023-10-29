"use client"
import React, { useContext } from 'react'
import styles from './themechange.module.css'
import Image from 'next/image'
import { ThemeContext } from '@/context/ThemeContext'

const ThemeChange = () => {
  const {theme , toggle}  = useContext(ThemeContext)
  return (
    <div className={styles.container} onClick={toggle} style={theme === "dark" ? {background: "#fff" } : { background: "#0f172a" }}>
        <Image src="/moon.png" alt='logo' width={14} height={14}/>
      <div className={styles.ball} style={theme === "dark" ? { left: 1, background: "#0f172a" } : { right: 1, background: "#fff" } }></div>
        <Image src="/sun.png" alt='logo' width={14} height={14}/>
    </div>
  )
}

export default ThemeChange
