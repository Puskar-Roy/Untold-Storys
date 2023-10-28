import React from 'react'
import styles from './feature.module.css'
import Image from 'next/image'
const Featured = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <b className={styles.bold}>Hey PusKar here !</b> Discover My Stories And  Creative Ideas.
      </h1>
      <div className={styles.post}>
        <div className={styles.imageContainer}>
          <Image src="/p1.jpeg" alt="" fill className={styles.image}/>
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.postTitle}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
          <p className={styles.postDesc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo asperiores culpa molestias dignissimos. Voluptatibus, pariatur.Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo asperiores culpa molestias dignissimos. Voluptatibus, pariatur.  </p>
          <button className={styles.postBtn}>Read More</button>
        </div>
      </div>
    </div>
  )
}

export default Featured
