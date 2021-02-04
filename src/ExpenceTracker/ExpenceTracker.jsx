import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { Balance } from './Components/Balance';
import { IncomeExpenses } from './Components/IncomeExpences';
import { TransactionList } from './Components/TransactionList';
import { AddTransaction } from './Components/AddTransaction';

import { GlobalProvider } from './Context/ClobalState';

import './Tracker.css';

function ExpenceTracker() {
  const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexDirection: 'column',
      width: 330,
      margin: 30,
    }, 
  }));

  const classes = useStyles();

  return (
    <GlobalProvider>
      <div className="tracker-container">
        <Paper className={classes.root} elevation={3} >
          <Balance />
          <IncomeExpenses />
          <AddTransaction />
        </Paper>
        <Paper className={classes.root} elevation={3} >
          <TransactionList />
        </Paper>
      </div>
    </GlobalProvider>
  );
}

export default ExpenceTracker;