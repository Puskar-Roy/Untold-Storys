import React from 'react'
import styles from './navbar.module.css'
import Image from 'next/image'
import Link from 'next/link'
import AuthLinks from '../AuthLinks/AuthLinks'
import ThemeChange from '../ThemeChange/ThemeChange'
const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.socials}>
        <Image src="/facebook.png" alt="facebook" width={24} height={24}/>
        <Image src="/instagram.png" alt="instagram" width={24} height={24} />
        <Image src="/tiktok.png" alt="tiktok" width={24} height={24} />
        <Image src="/youtube.png" alt="youtube" width={24} height={24} />
      </div>
      <div className={styles.logo}> Untold Storys </div>
      <div className={styles.links}> 
        <ThemeChange/>
        <Link href="/">Home</Link>
        <Link href="/contact">Contact</Link>
        <Link href="/about">About</Link>
        <AuthLinks/>
       </div>
    </div>
  )
}

export default Navbar
