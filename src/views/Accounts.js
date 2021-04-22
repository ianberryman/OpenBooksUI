import React from 'react';
import clsx from 'clsx';
import {
    DataGrid
} from '@material-ui/data-grid';
import '../styles/dashboard.scss';
import AccountsStore from '../store/AccountsStore';
import { observer, useObserver } from 'mobx-react-lite';


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

export default observer(({ accountsStore }) => {

    const columns = [
        { field: 'col1', headerName: 'Column 1', width: 150 },
        { field: 'col2', headerName: 'Column 2', width: 150 },
    ];
//{accountsStore.accounts.map(acct => {
//     return <li key={acct.id}>{acct.id}</li>
// })}
    return (
        <div style={{ height: 300, width: '100%' }}>
            <button onClick={() => accountsStore.addAccount({ id: Math.random(), col1: 'Material-UI', col2: 'is Amazing' })} >Add</button>
            <DataGrid rows={accountsStore.accounts.slice()} columns={columns} />      
        </div>
    );
});