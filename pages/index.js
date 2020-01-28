import React from 'react'
import Fab from '@material-ui/core/Fab'
import AddIcon from '@material-ui/icons/Add'
import Layout from '../components/layout'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button'
import Head from 'next/head'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  itemcontainer: {
    marginTop: theme.spacing(4),
  },
}));



const index = () => {
  const classes = useStyles()
  return (
    <Layout>
      <Head>
        <title>HOME</title>
        <meta
          name="viewport"
          content="initial-scale=1.0, width=device-width"
          key="viewport"
        />
        <link rel="shortcut icon" href="https://avatars1.githubusercontent.com/u/46496244?s=400&u=9611ffb5e3cb7039ee5c6bdee55ee12668d53a7c&v=4" />
      </Head>
      <Grid container direction="row" justify="center" alignitems="center">
        <Grid item xs={3}>
          <Fab color="primary" aria-label="add">
            <AddIcon />
          </Fab>
        </Grid>
        <Grid item xs={1}>

        </Grid>
        <Grid item xs={8}>
          <TextField id="outlined-basic" label="Outlined" variant="outlined" fullWidth />
        </Grid>
      </Grid>
      <Grid container direction="row" justify="center" alignitems="center">
        <Grid item xs={1}>
        </Grid>
        <Grid item xs={10} className={classes.itemcontainer}>
          <Grid container direction="row" justify="center" alignitems="center">
            <Grid item xs={6}>
              <p>Hello this is my first task in this application. </p>
            </Grid>
            <Grid item xs={3}>
              <Button variant="contained" color="primary">
                Primary
            </Button>
            </Grid>
            <Grid item xs={3}>
              <Button variant="contained" color="primary">
                Primary
            </Button>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={1}>
        </Grid>
      </Grid>
    </Layout>
  )
}

export default index