import Head from 'next/head'
import Image from 'next/image'
import Posts from '../modules/Posts'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Posts App</title>
        <meta name="description" content="Posts app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Posts />
    </div>
  )
}
