import Container from 'react-bootstrap/Container';
import { Stack, Button } from 'react-bootstrap';
import BudgetCard from './BudgetCard';

function App() {
  return (
    <Container className='mt-3'>
      <Stack direction='horizontal' gap={2} className="mb-4">
        <h1 className='me-auto'>Budgetify</h1>
        <Button variant='primary'>Add Budget</Button>
        <Button variant='secondary'>Add Expense</Button>
      </Stack>
      <Container fluid>
        <BudgetCard name={"Housing"} amount={2500} availability={2000} />
        <BudgetCard name={"Food"} amount={800} availability={1200} />
        <BudgetCard name={"Entertainment"} amount={500} availability={1000} />
        <BudgetCard />
      </Container>
    </Container>
  )
}

export default App;
