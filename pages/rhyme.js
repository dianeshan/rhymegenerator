import Link from 'next/link';
import Head from 'next/head';
import SimpleCard from '../components/SimpleCard';
import Button from '@material-ui/core/Button';
import styles from '../styles/Home.module.css';

import Container, { siteTitle } from "../components/Container";

export default function Rhyme() {
    //var things = ['Rock', 'Paper', 'Scissor'];
    //var thing = things[Math.floor(Math.random() * things.length)];

    var quotes = [
        "Don\'t beat your meat, eat your meat.",
        "Feeling cold but wish I was bold.",
        "Made an oopsie so going poopsie.",
        "Am exhausted, brain feeling losted.",
        "Feeling like a gamer, but not a lamer.",
        "Snuggle yourself, so you don't end up on a shelf.",
        "Butterfly pose, if you like toes.",
        "Use a mouse, to catch yourself a spouse.",
        "Eat some ice to fend off the mice",
        "A chipmunk can smash a punk",
        "Workout with us so you don\'t turn into a bus",
        "Poke a friend with a pen to turn them into a ten",
        "Point at some glasses and get A's in classes",
        "Put in some earbuds and soak in some suds",
        "Put on your hood to get rid of morning wood",
        "Drink some tea if you need to pee",
        "Three peas in a pod all in one great pod",
        "Go to the Wild West to escape the test",
        "Be a nerd not a turd",
        "Eat some SunChips to grow big lips",
        "Do a FaceTime and eat a lime",
        "If you want to be hot, lay on a cot",
        "What's up! Use a cup",
        "Hang out in the car so you don\'t run into a bar",
        "If you have a swollen eye eat some pie",
        "Eat ice cream and slides to overcome the high and low tides",
        "Go to the mall but make sure you don\'t fall",
        "Be with your mom because she\'s the bomb",
        "Lift up your arm to do some harm",
        "Eat an eraser so you don\'t have to use a razor",
        "Hang out with parents or your car will have dents",
        "Do some rehab or take a cab",
        "Spread some confetti to find a yeti",
        "Have a drink and give us a wink",
        "Be tacky or be wacky",
        "Want a tape baby, call us maybe!",
        "Don't be sad, be a lad",
        "Eat a bun if you want a hun"
    ]

    function newQuote() {
        var randomNum = Math.floor(Math.random() * (quotes.length));
        document.getElementById("quotedisp").innerHTML = quotes[randomNum];
    }

    function showRhyme() {
        var x = document.getElementById("myDIV");
        if (x.style.display === "none") {
            x.style.display = "block";
        } else {
            x.style.display = "none";
        }
    }

    return (
        <>
            <Container main>
                <Head>
                    <title>{siteTitle}</title>
                    <meta name="description" content="Need a pick me up or need a pick up line?" />
                    <link rel="icon" href="/favicon.ico" />
                </Head>

                <main className={styles.main}>
                    <h1 className={styles.title}>Time to Get Down to Business</h1>
                    <Button onClick={showRhyme} variant="contained" color="primary">Click here</Button>
                    <div id="myDIV" style={{ display: "none" }}>
                        <SimpleCard></SimpleCard>
                    </div>
                    <Button onClick={newQuote}>New Rhyme</Button>
                    {/* <h2>
                        <Link href="/">
                            <a>Back to home</a>
                        </Link>
                    </h2> */}
                </main>
            </Container>
        </>
    )
}