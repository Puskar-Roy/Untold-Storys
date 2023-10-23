import React from 'react'
import styles from './themechange.module.css'
import Image from 'next/image'
const ThemeChange = () => {
  return (
    <div className={styles.container}>
        <Image src="/moon.png" width={14} height={14}/>
        <div className={styles.ball}></div>
        <Image src="/sun.png" width={14} height={14}/>
      
    </div>
  )
}

export default ThemeChange
