import React from 'react'
import Image from 'next/image'
import styles from './cardlist.module.css'
import Pagination from '../Pagination/Pagination'
import Card from '../Card/Card'
const CardList = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Recent Posts</h1>
      <div className={styles.posts}>
        <Card/>
        <Card/>
        <Card/>
      </div>
      <Pagination/>
    </div>
  )
}

export default CardList
