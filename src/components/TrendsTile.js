import React from 'react';
import Paper from "@material-ui/core/Paper";
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

export default function TrendsTile(props) {

    return (
        <Paper className={props.className}>
            <Grid container direction={"column"}>
                <Grid item>
                    <Typography className={"title"}>{props.title}</Typography>
                </Grid>
            </Grid>
        </Paper>
    );
}