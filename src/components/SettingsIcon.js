import IconButton from "@material-ui/core/IconButton";
import MaterialSettingsIcon from "@material-ui/icons/Settings";
import MenuItem from "@material-ui/core/MenuItem";
import Toolbar from "@material-ui/core/Toolbar";
import React, { useState } from "react";
import ContextMenu from "./ContextMenu";


export default function SettingsIcon(props) {

    const [open, setOpen] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);

    const handleOpen = () => {
        setOpen(true);
    }

    const handleClose = () => {
        setOpen(false);
    }

    const toggleOpen = (event) => {
        setAnchorEl(event.currentTarget);
        setOpen(!open);
    }

    return (
        <div onClick={(event) => toggleOpen(event)}>
            <IconButton color="inherit">
                <MaterialSettingsIcon />
            </IconButton>
            <ContextMenu open={open}
                             handleClose={handleClose}
                             anchorEl={anchorEl} >
                <MenuItem onClick={() => handleClose()} className={"pop-context settings menuitem"}>Test1</MenuItem>
                <MenuItem onClick={() => handleClose()} className={"pop-context settings menuitem"}>Test2</MenuItem>
                <MenuItem onClick={() => handleClose()} className={"pop-context settings menuitem"}>Test3</MenuItem>
            </ContextMenu>
        </div>
    );
}