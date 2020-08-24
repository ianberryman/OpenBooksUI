import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import IconButton from "@material-ui/core/IconButton";
import MaterialSettingsIcon from "@material-ui/icons/Settings";
import MenuItem from "@material-ui/core/MenuItem";
import Toolbar from "@material-ui/core/Toolbar";
import Switch from '@material-ui/core/Switch';
import React, { useState } from "react";
import ContextMenu from "./ContextMenu";
import { connect } from 'react-redux';
import setTheme from '../styles/themeSelector';

const mapStateToProps = (state) => {
    return {
        theme: state.ui.theme
    }
}

function AvatarIcon(props) {

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
                <Avatar>{props.userInitial}</Avatar>
            </IconButton>
            <ContextMenu open={open}
                         handleClose={handleClose}
                         anchorEl={anchorEl} >
                <MenuItem onClick={(event) => event.stopPropagation()}
                          className={"pop-context settings menuitem"}>
                    <Typography>Dark Mode</Typography>
                    <Switch checked={props.theme === 'dark'}
                            onChange={() => setTheme(props.theme === 'dark' ? 'light' : 'dark')}
                            name="toggleDarkMode" />
                </MenuItem>
            </ContextMenu>
        </div>
    );
}

export default connect(mapStateToProps)(AvatarIcon);