import React, { useContext } from 'react';
import { AppContext } from '../Context/AppContext';

const RemainingBudget = () => {
	const { expenses, budget } = useContext(AppContext);

	const totalExpenses = expenses.reduce((total, item) => {
		return (total += item.cost);
	}, 0);

	const alertType = totalExpenses > budget ? 'alert-danger' : 'alert-success';

	return (
		<div className={`alert p-4 ${alertType}`}>
			<span className="remainingSum">Remaining: ${budget - totalExpenses}</span>
		</div>
	);
};

export default RemainingBudget;