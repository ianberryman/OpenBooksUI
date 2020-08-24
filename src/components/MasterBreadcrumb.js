import React from "react";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import { Link } from 'react-router-dom';
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { config } from "../config/config";

export default function MasterBreadcrumb(props) {

    const pathnames = props.location.pathname.split('/').filter((x) => x);

    return (
        <Breadcrumbs aria-label="breadcrumb" classes={props.classes}>
            <Link to={config.ui.initialViewPath} key={config.ui.initialViewPath}>
                Home
            </Link>
            {pathnames.map((value, index) => {
                const last = index === pathnames.length - 1;
                const to = `/${pathnames.slice(0, index + 1).join('/')}`;

                return last ? (
                    <Typography color="textPrimary" key={to}>
                        {value[0].toUpperCase() + value.substring(1)}
                    </Typography>
                ) : (
                    <Link color="inherit" to={to} key={to}>
                        {value[0].toUpperCase() + value.substring(1)}
                    </Link>
                );
            })}
        </Breadcrumbs>
    );
}