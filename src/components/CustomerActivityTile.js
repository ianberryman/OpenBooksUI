import React from 'react';
import Paper from "@material-ui/core/Paper";
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

export default function CustomerActivityTile(props) {

    return (
        <Paper className={props.className}>
            <Grid container direction={"column"}>
                <Grid item>
                    <Typography className={"title"}>{props.title}</Typography>
                    <List>
                    </List>
                </Grid>
            </Grid>
        </Paper>
    );
}