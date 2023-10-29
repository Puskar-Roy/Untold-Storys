import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from './card.module.css'
const Card = () => {
    return (
        <div className={styles.container}>

            <div className={styles.imageContainer}>
                <Image src="/p1.jpeg" alt="" fill className={styles.image} />
            </div>
            <div className={styles.textContainer}>
                <div className={styles.detail}>
                    <span className={styles.date}>12/11/23 - </span>
                    <span className={styles.category}>CULTURE</span>
                </div>
                <Link href="/">
                    <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam.</h1>
                </Link>
                <p className={styles.desc}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus, voluptatum in. Excepturi fugit harum aliquam dolorem magnam dolores necessitatibus. Voluptates vitae sit provident eos atque iste, vel numquam nihil! Vel pariatur reprehenderit debitis molestias nemo.</p>
                <Link href="/" className={styles.link}>Read More</Link>
            </div>


        </div>
    )
}

export default Card
