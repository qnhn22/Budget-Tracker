import Container from 'react-bootstrap/Container';
import { Stack, Button } from 'react-bootstrap';
import BudgetCard from './components/BudgetCard';
import AddBudgetModal from './components/AddBudgetModal';
import { useState } from 'react';
import { useBudgets } from "./contexts/BudgetsContext.js"

function App() {
  const [showAddBudgetModal, setShowAddBudgetModal] = useState(false)
  const { budgets } = useBudgets()

  const showAddBudget = () => {
    setShowAddBudgetModal(false)
  }

  return (
    <>
      <Container className='mt-3'>
        <Stack direction='horizontal' gap={2} className="mb-4">
          <h1 className='me-auto'>Budgetify</h1>
          <Button variant='primary' onClick={() => setShowAddBudgetModal(true)}>Add Budget</Button>
          <Button variant='secondary'>Add Expense</Button>
        </Stack>
        <Container fluid>
          {/* {budgets.map(budget => (
            <BudgetCard
              key={budget.id}
              name={budget.name}
              amount={budget.}
          ))} */}
          <BudgetCard name={"Housing"} amount={2500} availability={2000} />
          <BudgetCard name={"Food"} amount={800} availability={1200} />
          <BudgetCard name={"Entertainment"} amount={500} availability={1000} />
          <BudgetCard />
        </Container>

      </Container>
      <AddBudgetModal show={showAddBudgetModal} handleClose={showAddBudget} />
    </>
  )
}

export default App;
