import React from 'react'
import Layout from '../components/layout'
import Head from 'next/head'
import Grid from '@material-ui/core/Grid'

const help = () => {
    return (
        <Layout>
            <Head>
                <title>HELP</title>
                <meta
                    name="viewport"
                    content="initial-scale=1.0, width=device-width"
                    key="viewport"
                />
                <link rel="shortcut icon" href="https://avatars1.githubusercontent.com/u/46496244?s=400&u=9611ffb5e3cb7039ee5c6bdee55ee12668d53a7c&v=4" />
            </Head>
            <Grid container direction="row" justify="center" alignitems="center">
                <Grid item xs={12}>
                    <h2>Help</h2>
                </Grid>
            </Grid>
        </Layout>
    )
}

export default help