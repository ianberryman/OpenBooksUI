import React from 'react';
import { useLocation } from 'react-router-dom';
import List from '@material-ui/core/List';
import DashboardIcon from '@material-ui/icons/Dashboard';
import TodayIcon from '@material-ui/icons/Today';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import ReceiptIcon from '@material-ui/icons/Receipt';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import BusinessIcon from '@material-ui/icons/Business';
import AssessmentIcon from '@material-ui/icons/Assessment';
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';
import { makeStyles } from '@material-ui/core/styles';
import '../styles/styles.scss';
import MainMenuItem from "./MainMenuItem";

export function MainListItems(props) {
    //const classes = useStyles();
    const currentPath = useLocation().pathname;

    return (
        <List onClick={() => props.onListClick()}>
            <MainMenuItem text={"Dashboard"} href={"/dashboard"} isSelected={currentPath.includes("dashboard")} icon={<DashboardIcon/>} />
            <MainMenuItem text={"Customers"} href={"/customers"} isSelected={currentPath.includes("customers")} icon={<AssignmentIndIcon/>} />
            <MainMenuItem text={"Bills"} href={"/bills"} isSelected={currentPath.includes("bills")} icon={<ReceiptIcon/>} />
            <MainMenuItem text={"Invoices"} href={"/invoices"} isSelected={currentPath.includes("invoices")} icon={<MonetizationOnIcon/>} />
            <MainMenuItem text={"Vendors"} href={"/vendors"} isSelected={currentPath.includes("vendors")} icon={<BusinessIcon/>} />
            <MainMenuItem text={"Accounts"} href={"/accounts"} isSelected={currentPath.includes("accounts")} icon={<AccountBalanceWalletIcon/>} />
            <MainMenuItem text={"Calendar"} href={"/calendar"} isSelected={currentPath.includes("calendar")} icon={<TodayIcon/>} />
            <MainMenuItem text={"Reports"} href={"/reports"} isSelected={currentPath.includes("reports")} icon={<AssessmentIcon/>} />
        </List>
    );
}
