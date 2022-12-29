import React, { useContext, useState } from 'react';


const BudgetsContext = React.createContext()

export function useBudgets() {
    return useContext(BudgetsContext)
}

// in which we wrap our entire application 
export const BudgetsProvider = ({ children }) => {
    const [budgets, setBudgets] = useState([]);
    const [expenses, setExpenses] = useState([]);

    function getBudgetExpennses(budgetId) {
        return
    }

    function addExpense() {

    }

    function addBudget() {

    }

    function deleteBudget() {

    }

    function deleteExpense() {

    }

    return <BudgetsContext.Provider value={{
        budgets,
        expenses,
        getBudgetExpennses,
        addExpense,
        addBudget,
        deleteBudget,
        deleteExpense
    }}>{children}</BudgetsContext.Provider>
}