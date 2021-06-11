import React from 'react';
import '../BudgetTracker.css';

const ViewBudget = (props) => {
	return (
		<>
			<span className="budgetSum">Budget: ${props.budget}</span>
			<button type='button' className='btn btn-primary' onClick={props.handleEditClick}>
				Edit
			</button>
		</>
	);
};

export default ViewBudget;