import React,{useContext} from 'react';
import {GlobalContext} from "../context/GlobalState";

function IncomeExpenses() {
    const {transactions} = useContext(GlobalContext)
    const amounts = transactions.map(transaction => parseInt(transaction.amount));
    const totalIncome = amounts.reduce((acc, item) => (acc += (item>0 ? item:0 )), 0).toFixed(2);
    const totalExpense = amounts.reduce((acc, item) => (acc += (item<0 ? Math.abs(item):0 )), 0).toFixed(2);
    return (
        <div>
            <div className="inc-exp-container">
                <div>
                    <h4>Income</h4>
                    <p className="money plus">{totalIncome}</p>
                </div>
                <div>
                    <h4>Expense</h4>
                    <p className="money minus">{totalExpense}</p>
                </div>
            </div>
        </div>
    );
}

export default IncomeExpenses;