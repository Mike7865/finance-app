import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AppProvider } from './Context/AppContext';
import Budget from './BTComponents/Budget';
import ExpenseTotal from './BTComponents/ExpenseTotal';
import ExpenseList from './BTComponents/ExpenseList';
import AddExpenseForm from './BTComponents/AddExpenseForm';
import RemainingBudget from './BTComponents/Remaining';

const BudgetTracker = () => {
	return (
		<AppProvider>
			<div className='container budget-container'>
				<h1 className='mt-3'>Budget Planner</h1>
				<div className='row mt-3'>
					<div className='col-sm'>
						<Budget />
					</div>
					<div className='col-sm'>
						<RemainingBudget />
					</div>
					<div className='col-sm'>
						<ExpenseTotal />
					</div>
				</div>
				<h3 className='mt-3'>Expenses</h3>
				<div className='row '>
					<div className='col-sm'>
						<ExpenseList />
					</div>
				</div>
				<h3 className='mt-3'>Add Expense</h3>
				<div className='row mt-3'>
					<div className='col-sm'>
						<AddExpenseForm />
					</div>
				</div>
			</div>
		</AppProvider>
	);
};

export default BudgetTracker;