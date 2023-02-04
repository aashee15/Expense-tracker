///import React from "react";
import "./ExpenseItem.css";
import ExpenseDate from './ExpenseDate';
import Expenses from "./Expenses";
import Card from '../UI/Card';

function ExpenseItem(prop) {


  return (
    <Card className="expense-item">
      <ExpenseDate date={prop.date}></ExpenseDate>
      <div className="expense-item__description">
        <h2>{prop.title}</h2>
        <div className="expense-item__price">{prop.amount}</div>
      </div>
    </Card>
  );
}

export default ExpenseItem;
