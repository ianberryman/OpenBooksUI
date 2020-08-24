import React from "react";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";

export default function ContextMenu(props) {

    return (
        <Menu
            open={props.open}
            onClose={props.handleClose}
            anchorEl={props.anchorEl}
            getContentAnchorEl={null}
            anchorOrigin={{vertical: 'bottom', horizontal: 'center'}}
            transformOrigin={{vertical: 'top', horizontal: 'right'}}
            classes={{
                paper: "pop-context settings paper"}}
            PopoverClasses={{root: "pop-context"}}
        >
            {props.children}
        </Menu>
    );
}