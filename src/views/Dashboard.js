import React from 'react';
import clsx from 'clsx';
import QuickCountTile from '../components/QuickCountTile';
import TrendsWidget from '../components/TrendsWidget';
import CalendarWidget from '../components/CalendarWidget';
import ExpenseRevenueWidget from '../components/ExpenseRevenueWidget';
import CustomerActivityTile from '../components/CustomerActivityTile';
import '../styles/dashboard.scss';
import Accounts from './Accounts';

const drawerWidth = 240;

const classes = {
    root: {
        display: 'flex',
    },
    paper: {
        display: 'flex',
        overflow: 'auto',
        flexDirection: 'column',
    },
    fixedHeight: {
        height: 240,
    },
};

export default function Dashboard() {
    const [selectedIndex, setSelectedIndex] = React.useState(1);

    const handleListItemClick = (event, index) => {
        setSelectedIndex(index);
    };
    const fixedHeightPaper = clsx("tile");

    return (
        <div className={"dashboard"}>
            <div className={"quickCountGrid"}>
                <QuickCountTile
                    className={"quickCountTile greenGradient"}
                    subject={"Revenue"}
                    count={"14.6k"}
                    rateDelta={"0.12"}
                />
                <QuickCountTile
                    className={"quickCountTile orangeGradient"}
                    subject={"Expenses"}
                    count={"8.1k"}
                    rateDelta={"-0.07"}
                />
                <QuickCountTile
                    className={"quickCountTile blueGradient"}
                    subject={"Orders"}
                    count={"126"}
                    rateDelta={"0.03"}
                />
            </div>
            <div className={"dashboardGrid"}>
                <TrendsWidget title="Trends" className={"tile trendsTile"} xs={12} md={12} lg={12}/>
                <ExpenseRevenueWidget title="Expense/Revenue" className={"tile sumamryTile"} xs={12} md={12} lg={12}/>
                <CalendarWidget title="Calendar" className={"tile calendarTile"} xs={12} md={12} lg={12}/>
                <CustomerActivityTile title="Customer Activity" className={"tile customerActivityTile"} xs={12} md={12} lg={12}>
                    <Accounts />
                </CustomerActivityTile>
            </div>
        </div>
    );
}
