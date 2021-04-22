import React, { useContext } from 'react';
import clsx from 'clsx';
import {
    DataGrid
} from '@material-ui/data-grid';
import '../styles/dashboard.scss';
import AccountsStore from '../store/AccountsStore';
import { observer, useObserver } from 'mobx-react-lite';
import { MobxContext } from '../index';
import { Paper } from '@material-ui/core';


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

export function Accounts(props) {
    const accountsStore = useContext(MobxContext).accountsStore;

    const columns = [
        { field: 'col1', headerName: 'Column 1', width: 150 },
        { field: 'col2', headerName: 'Column 2', width: 150 },
    ];

    return (
        <Paper style={{ height: '90vh', width: '100%' }}>
            <button onClick={() => {
                console.log("Adding account");
                accountsStore.addAccount({ id: Math.random(), col1: 'Material-UI', col2: 'is Amazing' })}
             }>Add</button>
            <DataGrid rows={accountsStore.accounts.slice()} columns={columns} />
        </Paper>
    );
}

export default observer(Accounts);