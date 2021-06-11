import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AppProvider } from './Context/AppContext';
import Budget from '../BudgetTrackerFiles/BudgetTrackerComponents/Budget';
import ExpenseTotal from '../BudgetTrackerFiles/BudgetTrackerComponents/ExpenseTotal';
import ExpenseList from '../BudgetTrackerFiles/BudgetTrackerComponents/ExpenseList';
import AddExpenseForm from '../BudgetTrackerFiles/BudgetTrackerComponents/AddExpenseForm';
import RemainingBudget from '../BudgetTrackerFiles/BudgetTrackerComponents/Remaining';

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