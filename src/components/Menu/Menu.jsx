import React from 'react'
import styles from './menu.module.css'
import Image from 'next/image'
import Link from 'next/link'
const Menu = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.subtitle}>Whats Trending</h2>
      <h1 className={styles.title}>Most Popular</h1>
      <div className={styles.items}>
        <Link href="/" className={styles.item}>
          
          <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles.travel}`}>
              Travel
            </span>
            <h3>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            </h3>
            <div className={styles.details}>
              <span className={styles.name}>Puskar Roy </span>
              <span className={styles.date}>- 10/12/24</span>
            </div>
          </div>
        </Link>
        <Link href="/" className={styles.item}>
          
          <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles.culture}`}>
              Culture
            </span>
            <h3>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            </h3>
            <div className={styles.details}>
              <span className={styles.name}>Puskar Roy </span>
              <span className={styles.date}>- 10/12/24</span>
            </div>
          </div>
        </Link>
        <Link href="/" className={styles.item}>
          
          <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles.food}`}>
              Food
            </span>
            <h3>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            </h3>
            <div className={styles.details}>
              <span className={styles.name}>Puskar Roy </span>
              <span className={styles.date}>- 10/12/24</span>
            </div>
          </div>
        </Link>
        <Link href="/" className={styles.item}>
          <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles.style}`}>
              Style
            </span>
            <h3>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            </h3>
            <div className={styles.details}>
              <span className={styles.name}>Puskar Roy </span>
              <span className={styles.date}>- 10/12/24</span>
            </div>
          </div>
        </Link>
      </div>
      <h2 className={styles.subtitle}>Chosen By The Editor</h2>
      <h1 className={styles.title}>Editors Pack</h1>
      <div className={styles.items}>
        <Link href="/" className={styles.item}>
          <div className={styles.imageContainer}>
            <Image src="/p1.jpeg" alt='' fill className={styles.image}/>
          </div>
          <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles.travel}`}>
              Travel
            </span>
            <h3>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            </h3>
            <div className={styles.details}>
              <span className={styles.name}>Puskar Roy </span>
              <span className={styles.date}>- 10/12/24</span>
            </div>
          </div>
        </Link>
        <Link href="/" className={styles.item}>
          <div className={styles.imageContainer}>
            <Image src="/p1.jpeg" alt='' fill className={styles.image}/>
          </div>
          <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles.culture}`}>
              Culture
            </span>
            <h3>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            </h3>
            <div className={styles.details}>
              <span className={styles.name}>Puskar Roy </span>
              <span className={styles.date}>- 10/12/24</span>
            </div>
          </div>
        </Link>
        <Link href="/" className={styles.item}>
          <div className={styles.imageContainer}>
            <Image src="/p1.jpeg" alt='' fill className={styles.image}/>
          </div>
          <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles.food}`}>
              Food
            </span>
            <h3>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            </h3>
            <div className={styles.details}>
              <span className={styles.name}>Puskar Roy </span>
              <span className={styles.date}>- 10/12/24</span>
            </div>
          </div>
        </Link>
        <Link href="/" className={styles.item}>
          <div className={styles.imageContainer}>
            <Image src="/p1.jpeg" alt='' fill className={styles.image}/>
          </div>
          <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles.style}`}>
              Style
            </span>
            <h3>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            </h3>
            <div className={styles.details}>
              <span className={styles.name}>Puskar Roy </span>
              <span className={styles.date}>- 10/12/24</span>
            </div>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default Menu
