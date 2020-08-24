import React from 'react';
import Paper from "@material-ui/core/Paper";
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';

export default function QuickCountTile(props) {

    return (
        <Paper className={props.className}>
            <Grid container>
                <Grid item>
                    <Typography className={"subject"}>{props.subject}</Typography>
                    <Typography className={"count"}>{props.count}</Typography>
                </Grid>
                <Grid item style={{display: 'flex', flexDirection: 'row', alignItems: 'flex-end'}}>
                    {parseFloat(props.rateDelta) > 0 ?
                        <ArrowUpwardIcon className={"arrowIcon"} /> :
                        <ArrowDownwardIcon className={"arrowIcon"} />}
                    <Typography className={"rate"}>{Math.round(Math.abs(props.rateDelta) * 100)}%</Typography>
                </Grid>
            </Grid>
        </Paper>
    );
}