import React from 'react';
import Paper from "@material-ui/core/Paper";
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import {
    BarChart,
    Legend,
    XAxis,
    YAxis,
    Tooltip,
    Bar,
    ResponsiveContainer
} from 'recharts';

export default function TrendsTile(props) {

    const data = [
        {
            name: 'April 2021', revenue: 100, expense: 25
        }
    ]

    return (
        <Paper className={props.className}>
            <Grid container direction={"column"} style={{height: '100%'}}>
                <Grid item style={{height: '100%'}}>
                    <Typography className={"title"}>{props.title}</Typography>
                    <ResponsiveContainer width='100%' height='90%'>
                        <BarChart width={730} height={250} data={data}>
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Bar dataKey="revenue" stackId='a' fill="#8884d8" />
                            <Bar dataKey="expense" stackId='a' fill="#82ca9d" />
                        </BarChart>
                    </ResponsiveContainer>
                </Grid>
            </Grid>
        </Paper>
    );
}