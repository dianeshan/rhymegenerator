import Link from 'next/link';
import styles from '../styles/Home.module.css'
import Head from 'next/head';
import Button from '@material-ui/core/Button';
import { Grid, } from '@material-ui/core';
import { Form } from '../components/Form';
import Input from '../components/controls/Input';
import Container, { siteTitle } from "../components/Container";

export default function Mood() {
    return (
        <>
            <Container main>
                <Head>
                    <title>{siteTitle}</title>
                    <meta name="description" content="Need a pick me up or need a pick up line?" />
                    <link rel="icon" href="/favicon.ico" />
                </Head>
                <main className={styles.main}>
                    <h1>Put in Your Mood and Grab Some Food</h1>
                    <Form>
                        <Grid container>
                            <Grid item xs={12}>
                                <Input
                                    name="Mood"
                                    label="Mood"
                                // value={values.fullName}
                                // onChange={handleInputChange}
                                // error={errors.fullName}
                                />
                            </Grid>
                            <div>
                                <Button className={styles.generate} variant="contained" color="primary" type="submit">Generate</Button>
                            </div>
                        </Grid>
                    </Form>
                </main>
            </Container>
        </>
    )
}
