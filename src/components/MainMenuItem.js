import React from "react";
import {NavLink} from "react-router-dom";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import DashboardIcon from "@material-ui/icons/Dashboard";
import ListItemText from "@material-ui/core/ListItemText";
import List from "@material-ui/core/List";

export default function MainMenuItem(props) {

    return (
        <NavLink to={props.href}>
            <ListItem button
                      selected={props.isSelected}
                      className={props.isSelected ? "selected" : ""}
            >
                <ListItemIcon>
                    {props.icon}
                </ListItemIcon>
                <ListItemText primary={props.text} className={"menuLink"}/>
            </ListItem>
        </NavLink>
    );
}