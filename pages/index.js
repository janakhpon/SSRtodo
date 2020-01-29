import React from 'react'
import Fab from '@material-ui/core/Fab'
import AddIcon from '@material-ui/icons/Add'
import Layout from '../components/layout'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Head from 'next/head'
import Grid from '@material-ui/core/Grid'
import CustomTextField from '../components/CustomTextField'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogTitle from '@material-ui/core/DialogTitle'
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/styles'
import Item from '../components/Item'

const useStyles = makeStyles(theme => ({
  itemcontainer: {
    marginTop: theme.spacing(4),
  },
}));

const INITIAL_STATE = {
  title: "",
  body: "",
  visibility: false,
  author: ""
}

const index = () => {
  const [values, setValues] = React.useState(INITIAL_STATE)
  const [checked, setChecked] = React.useState(false);
  const [open, setOpen] = React.useState(false)
  const classes = useStyles()
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const handleChange = (e) => {
    e.persist();
    setValues(previousValues => ({
      ...previousValues, [e.target.name]: e.target.value
    }))
  }


  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

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
            <AddIcon onClick={handleClickOpen}/>
          </Fab>
        </Grid>
        <Grid item xs={1}>

        </Grid>
        <Grid item xs={8}>
          <TextField id="outlined-basic" label="Outlined" variant="outlined" fullWidth />
        </Grid>
      </Grid>
      <Grid container direction="row" justify="center" alignitems="center">
          <Item />
      </Grid>

      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
        PaperProps={{
          classes: {
            root: classes.expand
          }
        }}
      >
        <DialogTitle id="responsive-dialog-title">{" Don't Forget to choose your privacy options!"}</DialogTitle>
        <DialogContent>
          <CustomTextField
            onChange={handleChange}
            value={values.title}
            autoFocus
            margin="dense"
            id="name"
            name="title"
            label="Task Title"
            type="text"
            fullWidth
          />
          <CustomTextField
            autoFocus
            onChange={handleChange}
            value={values.body}
            margin="dense"
            id="body"
            name="body"
            label="Task Description"
            type="text"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button autoFocus color="primary">
            SAVE
          </Button>
          <Button onClick={handleClose} color="primary" autoFocus>
            CANCEL
          </Button>
        </DialogActions>
      </Dialog>

    </Layout>
  )
}

export default index