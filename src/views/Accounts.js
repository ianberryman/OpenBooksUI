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

//

function Accounts(props) {
    const accountsStore = useContext(MobxContext).accountsStore;

    const columns = [
        { field: 'currency', headerName: 'Currency', width: 150 },
        { field: 'rate', headerName: 'Rate', width: 150 },
    ];

    return (
        <Paper style={{ height: '90vh', width: '100%' }} className="paper">
            <button onClick={() => accountsStore.addAccount({currency: 'USD', rate: '1.00' })}>Add</button>
            <select onChange={(event) => {
                accountsStore.retrieveExchangeRatesByCurrency(event.target.value)
            }}>
                {accountsStore.exchangeRates.map(rate => {
                    return <option key={rate.id} value={rate.currency}>{rate.currency}</option>
                })}
            </select>
            <DataGrid rows={accountsStore.exchangeRates} columns={columns} onCellClick={(cell, event) => {
                cell.row.setRate(1.010101);
            }} />            
        </Paper>
    );
}

export default observer(Accounts);