import React from 'react';
import './ExpensesList.css';
import ExpenseItem from './ExpenseItem';

function ExpensesList(props){

    if(props.items.length===0)
    {
        return (<h2 className='expenses-list__fallback'>Expenses Not Found!</h2>)
    }
    return (
        <ul>
           {props.items.map(expense=>(<ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}/>))}
        </ul>
    );
}

export default ExpensesList;