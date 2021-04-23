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
import { theme } from '../styles/themeSelector'

export default function TrendsWidget(props) {

    const data = [
        {
            name: 'Jun 2021', revenue: 100, expense: 25
        },
        {
            name: 'Jul 2021', revenue: 100, expense: 25
        },
        {
            name: 'Aug 2021', revenue: 100, expense: 25
        },
        {
            name: 'Sep 2021', revenue: 100, expense: 25
        },
        {
            name: 'Oct 2021', revenue: 100, expense: 25
        },
        {
            name: 'Nov 2020', revenue: 100, expense: 25
        },
        {
            name: 'Dec 2020', revenue: 100, expense: 25
        },
        {
            name: 'Jan 2021', revenue: 100, expense: 25
        },
        {
            name: 'Feb 2021', revenue: 100, expense: 25
        },
        {
            name: 'Mar 2021', revenue: 100, expense: 25
        },
        {
            name: 'Apr 2021', revenue: 100, expense: 25
        }
    ]

    const renderOrange = (key, pixel = 10) => ({ height, width, fill, x, y, ...rest }) => {
        const xpercent = Math.trunc((pixel * 100) / Math.trunc(height || 1));
        return (
			<svg x={x} y={y} fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect fill={`url(#${key})`} width={width} height={height} />
                <defs>
                    <linearGradient id={key} x1="0%" y1="0%" x2="0%" y2="100%" gradientUnits="userSpaceOnUse">
                            <stop offset="0" stopColor="#f0a714" />
                            <stop offset="0.14285714285714285" stopColor="#f39a00" />
                            <stop offset="0.2857142857142857" stopColor="#f58c00" />
                            <stop offset="0.42857142857142855" stopColor="#f87d00" />
                            <stop offset="0.5714285714285714" stopColor="#fa6d00" />
                            <stop offset="0.7142857142857142" stopColor="#fc5a00" />
                            <stop offset="0.8571428571428571" stopColor="#fe4300" />
                            <stop offset="1" stopColor="#ff2100" />
                    </linearGradient>
                </defs>
            </svg>
        );
    };

    const renderGreen = (key, pixel = 10) => ({ height, width, fill, x, y, ...rest }) => {
        const xpercent = Math.trunc((pixel * 100) / Math.trunc(height || 1));
        return (
			<svg x={x} y={y} fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect fill={`url(#${key})`} width={width} height={height} />
                <defs>
                    <linearGradient id={key} x1="0%" y1="0%" x2="0%" y2="100%" gradientUnits="userSpaceOnUse">
                        <stop offset="0" stopColor="#14f06c" />
                        <stop offset="0.14285714285714285" stopColor="#00ea9a" />
                        <stop offset="0.2857142857142857" stopColor="#00e1c5" />
                        <stop offset="0.42857142857142855" stopColor="#00d6e8" />
                        <stop offset="0.5714285714285714" stopColor="#00c9ff" />
                        <stop offset="0.7142857142857142" stopColor="#00b9ff" />
                        <stop offset="0.8571428571428571" stopColor="#00a7ff" />
                        <stop offset="1" stopColor="#0093ff" />
                    </linearGradient>
                </defs>
            </svg>
        );
    };

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
                            <Bar dataKey="expense" stackId='a' fill="#f87d00" shape={renderOrange('expense')} />
                            <Bar dataKey="revenue" stackId='a' fill="#00e1c5" shape={renderGreen('revenue')} />
                        </BarChart>
                    </ResponsiveContainer>
                </Grid>
            </Grid>
        </Paper>
    );
}