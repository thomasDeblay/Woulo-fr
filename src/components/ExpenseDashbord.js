import React from 'react';
import ExpenseList from './ExpenseList';
import ExpenseListFilters from './ExpenseListFilters';
import ExpensesSummary from './ExpensesSummary'

const ExpenseDashbord = () => (
    <div>
     <ExpensesSummary />
     <ExpenseList />
     <ExpenseListFilters />
    </div>
);

export default ExpenseDashbord;
