import React from 'react'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogTitle from '@material-ui/core/DialogTitle'
import { makeStyles } from '@material-ui/core/styles'
import CustomTextField from '../CustomTextField'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import { useTheme } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
    itemcontainer: {
        marginTop: theme.spacing(4),
    },
    Dialog: {
        background: '#1d3557',
        color: 'white',
    },
}));

const INITIAL_STATE = {
    title: "",
    body: "",
    visibility: false,
    author: ""
}

const Item = () => {
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
        <>
            <Grid item xs={12} className={classes.itemcontainer}>
                <Grid container direction="row" justify="center" alignitems="center">
                    <Grid item xs={12} md={8}>
                        <p>Hello this is my first task in this application. | 2 days ago</p>
                    </Grid>
                    <Grid item xs={4} md={2}>
                        <Button variant="contained" color="primary" onClick={handleClickOpen}>
                            UPDATE
                        </Button>
                    </Grid>
                    <Grid item xs={4} md={2}>
                        <Button variant="contained" color="primary">
                            REMOVE
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
            <Dialog
                fullScreen={fullScreen}
                open={open}
                onClose={handleClose}
                aria-labelledby="responsive-dialog-title"
                PaperProps={{
                    classes: {
                        root: classes.Dialog
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
        </>
    )
}

export default Item