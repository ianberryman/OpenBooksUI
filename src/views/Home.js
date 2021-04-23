import React, {useState} from 'react';
import Dashboard from './Dashboard';
import Accounts from './Accounts';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import Grid from '@material-ui/core/Grid';
import NotificationsIcon from '@material-ui/icons/Notifications';
import '../styles/home.scss';
import {MainListItems} from "../components/MainMenuItems";
import SearchInput from "../components/SearchInput";
import Logo from "../components/Logo";
import SettingsIcon from "../components/SettingsIcon";
import {Redirect, Route, Switch, useRouteMatch} from "react-router-dom";
import {connect} from 'react-redux';
import AvatarIcon from '../components/AvatarIcon';


const mapStateToProps = (state) => {
    return {
        userInitial: state.userInitial || "TU",
        isScreenSmall: state.ui.isScreenSmall
    }
};

function Home(props) {
    const [open, setOpen] = useState(false);
    const {path, url} = useRouteMatch();

    const handleDrawerOpen = () => {
        setOpen(true);
    };
    const handleDrawerClose = () => {
        setOpen(false);
    }

    const toggleDrawer = () => {
        if (props.isScreenSmall) setOpen(!open);
    }

    return (
        <div style={{height: '100%'}}>
            <CssBaseline />
            <AppBar className={"appBar"}>
                <Toolbar className={"toolbar"}>
                    <Logo onClick={toggleDrawer} />
                    <Typography color="inherit" noWrap className={"title hideOnSmallScreen"}>
                        OpenBooks
                    </Typography>
                    <SearchInput className={"hideOnSmallScreen"}/>
                    <IconButton color="inherit" className={"toRight"}>
                        <Badge badgeContent={4} color="error">
                            <NotificationsIcon />
                        </Badge>
                    </IconButton>
                    <SettingsIcon/>
                    <AvatarIcon />
                </Toolbar>
            </AppBar>
            <Toolbar />
            <Grid container direction={"row"} style={{height: '100%'}}>
                <Drawer
                    variant={props.isScreenSmall ? "temporary" : "permanent"}
                    classes={{paper: "drawerPaper"}}
                    open={open}
                    onClose={handleDrawerClose}
                >
                    {props.isScreenSmall &&
                        <Toolbar />
                    }
                    <Divider />
                    <MainListItems onListClick={handleDrawerClose} />
                </Drawer>
                <div className={"content"}>
                    <Switch>
                        <Route path={["/dashboard"]} component={Dashboard}></Route>
                        <Route path={["/invoices"]} component={Dashboard}></Route>
                        <Route path={["/bills"]} component={Dashboard}></Route>
                        <Route path={`/customers`} component={Dashboard} />
                        <Route path={`/vendors`} component={Dashboard} />
                        <Route path={["/calendar"]} component={Dashboard}></Route>
                        <Route path={["/accounts"]} component={Accounts}></Route>
                        <Route path={["/reports"]} component={Dashboard}></Route>
                        <Redirect from={"/"} to={"/dashboard"} />
                    </Switch>
                </div>
            </Grid>
        </div>
    );
}

export default connect(mapStateToProps)(Home);