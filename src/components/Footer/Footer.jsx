import styles from './footer.module.css'
import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <div className={styles.logo}>
          <Image className={styles.mypic} src="/myimg.jpg" alt='mypic' height={50} width={50} />
          <h1 className={styles.logoText}>Puskar Roy</h1>
        </div>
        <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque inventore molestiae dolore non similique nulla. Inventore eum corporis consectetur odit saepe distinctio similique iure pariatur. Inventore id ratione voluptates earum.</p>
        <div className={styles.icons}>
          <Image src="/facebook.png" alt="facebook" width={18} height={18} />
          <Image src="/instagram.png" alt="instagram" width={18} height={18} />
          <Image src="/tiktok.png" alt="tiktok" width={18} height={18} />
          <Image src="/youtube.png" alt="youtube" width={18} height={18} />
        </div>
      </div>
      <div className={styles.links}>
        <div className={styles.lists}>
          <span className={styles.listsTitle}>Links</span>
          <Link href="/">Homepage</Link>
          <Link href="/">Blog</Link>
          <Link href="/">About</Link>
          <Link href="/">Contact</Link>
        </div>
        <div className={styles.lists}>
          <span className={styles.listsTitle}>Tags</span>
          <Link href="/">Style</Link>
          <Link href="/">Fashion</Link>
          <Link href="/">Coading</Link>
          <Link href="/">Travel</Link>
        </div>
        <div className={styles.lists}>
          <span className={styles.listsTitle}>Socials</span>
          <Link href="/">Facebook</Link>
          <Link href="/">Instagram</Link>
          <Link href="/">Discord</Link>
          <Link href="/">Twitter</Link>
        </div>
      </div>
    </div>
  )
}

export default Footer
