"use client"
import React, { useState } from 'react'
import styles from './authLinks.module.css'
import Link from 'next/link'
const AuthLinks = () => {
    const status = "authenticated"
    const [open, setOpen] = useState(false);
    // const status = "notauthenticated"
    return (
        <>
            {status === "notauthenticated" ? (
                <Link href="/login">Login</Link>
            ) : (
                <>
                    <Link href="/write">Write</Link>
                    <span className={styles.link}>Logout</span>
                </>
            )}
            <div className={styles.burgur} onClick={()=>{
                setOpen( !open);
            }}>
                <div className={styles.line}></div>
                <div className={styles.line}></div>
                <div className={styles.line}></div>
            </div>
            {
                open &&
                (<div className={styles.responsiveMenu}>
                    <Link href="/" >Home</Link>
                    <Link href="/contact">Contact</Link>
                    <Link href="/about">About</Link>
                    {status === "notauthenticated" ? (
                        <Link href="/login">Login</Link>
                    ) : (
                        <>
                            <Link href="/write">Write</Link>
                            <span >Logout</span>
                        </>
                    )}
                </div>)

            }
        </>
    )
}

export default AuthLinks
