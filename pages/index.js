import Head from 'next/head'
import Container, { siteTitle } from "../components/Container";
// import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import stickynotes from '../styles/Notes.module.css'
//import { Element, animateScroll as scroll } from "react-scroll";

export default function Home() {
  return (
    <Container main>
      <Head>
        <title>{siteTitle}</title>
        <meta name="description" content="Need a pick me up or need a pick up line?" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* <p className={styles.icon}><FontAwesomeIcon icon={faHome} size="xs" /></p> */}
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to Rhyme and Dine!
        </h1>
        <p className={styles.description}>
          Get started by clicking {' '}<Link href="/rhyme"><a><code className={styles.code}>here</code></a></Link>
        </p>
        <ul className={stickynotes.lists}>
          <li className={stickynotes.space}>
            <Link href="/background">
              <a href="#" className={stickynotes.stickynote}>
                <h2 className={stickynotes.title}>Background</h2>
                <p className={stickynotes.note}>Find out the history of rhyme</p>
              </a>
            </Link>
          </li>
          <li className={stickynotes.space}>
            <Link href="/learn">
              <a href="#" className={stickynotes.stickynote2}>
                <h2 className={stickynotes.title}>Learn</h2>
                <p className={stickynotes.note}>Learn how to rhyme</p>
              </a>
            </Link>
          </li>
          <li className={stickynotes.space}>
            <Link href="/rhyme">
              <a href="#" className={stickynotes.stickynote3}>
                <h2 className={stickynotes.title}>Generate</h2>
                <p className={stickynotes.note}>Want some rhymes?</p>
              </a>
            </Link>
          </li>
          <li className={stickynotes.space}>
            <Link href="/mood">
              <a href="#" className={stickynotes.stickynote4}>
                <h2 className={stickynotes.title}>Mood</h2>
                <p className={stickynotes.note}>Put in your mood and get some rhymes!</p>
              </a>
            </Link>
          </li>
        </ul>
      </main>

      {/* <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}Shanguin
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer> */}
    </Container>
  )
}
