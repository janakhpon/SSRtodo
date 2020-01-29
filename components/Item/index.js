import React from 'react'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
    itemcontainer: {
        marginTop: theme.spacing(4),
    },
}));

const Item = () => {
    const classes = useStyles()
    return (
        <>
            <Grid item xs={1}>
            </Grid>
            <Grid item xs={10} className={classes.itemcontainer}>
                <Grid container direction="row" justify="center" alignitems="center">
                    <Grid item xs={6}>
                        <p>Hello this is my first task in this application. | 2 days ago</p>
                    </Grid>
                    <Grid item xs={2}>
                        <Button variant="contained" color="primary">
                            Primary
                        </Button>
                        <Grid item xs={2}>

                        </Grid>
                    </Grid>
                    <Grid item xs={2}>
                        <Button variant="contained" color="primary">
                            Primary
            </Button>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={1}>
            </Grid>
        </>
    )
}

export default Item