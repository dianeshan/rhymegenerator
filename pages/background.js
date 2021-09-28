import Link from 'next/link';
import styles from '../styles/Home.module.css'
import Head from 'next/head';
import Typewritestyles from '../styles/Typewrite.module.css'
import Container, { siteTitle } from "../components/Container";

export default function Background() {
    return (
        <>
            <Container main>
                <Head>
                    <title>{siteTitle}</title>
                    <meta name="description" content="Need a pick me up or need a pick up line?" />
                    <link rel="icon" href="/favicon.ico" />
                </Head>
                <main className={styles.main}>
                    <h1 className={Typewritestyles.title}>Story of Rhyme</h1>
                    <span className={Typewritestyles.text}>(according to lime)</span>
                    <p>
                        Once upon a time, <br></br>
                        There was a piece of lime. <br></br>
                        It decided to spend a dime, <br></br>
                        On learning how to rhyme. <br></br>
                        <br></br>
                        Lime found a master, <br></br>
                        But he wanted to go faster, <br></br>
                        So he went and found a pastor, <br></br>
                        But then he got plastered to the alabaster. <br></br>
                        <br></br>
                        Lime was stuck for a while, <br></br>
                        All alone in the back of an aisle. <br></br>
                        However, he gained some style, <br></br>
                        And eventually learned to smile. <br></br>
                    </p>
                </main>
            </Container>
        </>
    )
}
