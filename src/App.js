import Container from 'react-bootstrap/Container';
import { Stack, Button } from 'react-bootstrap';
import BudgetCard from './components/BudgetCard';
import AddBudgetModal from './components/AddBudgetModal';
import AddExpenseModal from './components/AddExpenseModal'
import { useState } from 'react';
import { useBudgets } from "./contexts/BudgetsContext.js"

function App() {
  const { budgets, getBudgetExpenses } = useBudgets()

  const [showAddBudgetModal, setShowAddBudgetModal] = useState(false)
  const closeAddBudget = () => {
    setShowAddBudgetModal(false)
  }

  const [addExpenseModalBudgetId, setAddExpenseModalBudgetId] = useState()

  const [showAddExpenseModal, setShowAddExpenseModal] = useState(false)
  const closeAddExpense = () => {
    setShowAddExpenseModal(false)
  }

  function openAddExpenseModal(budgetId) {
    setShowAddExpenseModal(true)
    setAddExpenseModalBudgetId(budgetId)
  }

  return (
    <>
      <Container className='mt-3'>
        <Stack direction='horizontal' gap={2} className="mb-4">
          <h1 className='me-auto'>Budgetify</h1>
          <Button variant='primary' onClick={() => setShowAddBudgetModal(true)}>Add Budget</Button>
          <Button variant='secondary' onClick={openAddExpenseModal}>Add Expense</Button>
        </Stack>
        <Container fluid>
          <div>
            {budgets.map(budget => {
              const amount = getBudgetExpenses(budget.id).reduce(
                (total, expense) => total + expense.amount,
                0
              )

              return (
                <BudgetCard
                  key={budget.id}
                  name={budget.name}
                  amount={amount}
                  max={budget.max}
                  onAddExpenseClick={() => openAddExpenseModal(budget.id)}
                />
              )
            })}
            <UncategorizedBudgetCard />
          </div>
        </Container>

      </Container>
      <AddBudgetModal show={showAddBudgetModal} handleClose={closeAddBudget} />
      <AddExpenseModal show={showAddExpenseModal} handleClose={closeAddExpense} defaultBudgetId={addExpenseModalBudgetId} />
    </>
  )
}

export default App;
