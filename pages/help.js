import React from 'react'
import Layout from '../components/layout'
import Head from 'next/head'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import { useTheme, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    Paper: {
        background: '#1d3557',
        color: 'white',
        height: '60vh',
        padding: '1rem',
    },
}))

const help = () => {
    const classes = useStyles()

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
            <Paper elevation={1} className={classes.Paper}>
                <Grid container direction="row" justify="center" alignitems="center">
                    <Grid item xs={12} style={{ textAlign: 'center', marginTop: '2rem' }}>
                        <h2 className="h2-help">Help</h2>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography paragraph style={{ marginTop: '1rem'}}>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high
                            heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly
                            browned, 6 to 8 minutes. Transfer shrimp to a large plate and set aside, leaving chicken
                            and chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes, onion, salt and
                            pepper, and cook, stirring often until thickened and fragrant, about 10 minutes. Add
                            saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
                        </Typography>
                    </Grid>
                </Grid>
            </Paper>
        </Layout>
    )
}

export default help