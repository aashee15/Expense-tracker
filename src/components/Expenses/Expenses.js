import React,{useState} from "react";
import './Expenses.css';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from "./ExpensesList";
import ExpensesChart from './ExpensesChart';

function Expenses(prop){

  const [filteredYear,setFilteredYear]=useState('2020');

function filterChangeHandler(selectedYear){
 setFilteredYear(selectedYear)
 console.log(filteredYear);
}

const filteredExpenses=prop.items.filter(expense=>{
  return (expense.date.getFullYear().toString()===filteredYear);
})


    return(
      <li>
      
        <Card className="expenses">
        <ExpensesFilter  selected={filteredYear} onFilterChange={filterChangeHandler}/>
        <ExpensesChart expenses={filteredExpenses}/>
        <ExpensesList items={filteredExpenses}/>
        </Card>
      </li>
    );
}

export default Expenses;