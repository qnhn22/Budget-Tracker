import { Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useRef } from 'react';
import { useBudgets } from '../contexts/BudgetsContext';

function AddExpenseModal({ show, handleClose, defaultBudgetId }) {
    const descriptionRef = useRef()
    const amountRef = useRef()
    const budgetIdRef = useRef()
    const { addExpense, budgets } = useBudgets()

    function handleSubmit(e) {
        e.preventDefault()
        addExpense({
            description: descriptionRef.current.value,
            amountRef: parseFloat(amountRef.current.value),
            budgetId: budgetIdRef.current.value
        })
        handleClose()
    }

    return (
        <Modal show={show} onHide={handleClose}>
            <Form onSubmit={handleSubmit}>
                <Modal.Header closeButton>
                    <Modal.Title>New Expense</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Group className='mb-3' controlId='description'>
                        <Form.Label>Description</Form.Label>
                        <Form.Control ref={descriptionRef} type='text' required />
                    </Form.Group>
                    <Form.Group className='mb-3' controlId='amount'>
                        <Form.Label>Amount</Form.Label>
                        <Form.Control ref={amountRef} type='number' required min={0} step={0.1} />
                    </Form.Group>
                    <Form.Group className='mb-3' controlId='budgetId'>
                        <Form.Label>Budget</Form.Label>
                        <Form.Select ref={amountRef} type='number' required min={0} step={0.1} />
                    </Form.Group>
                    <div className='d-flex justify-content-end'>
                        <Button type='submit' color='primary'>Add</Button>
                    </div>
                </Modal.Body>
            </Form>
        </Modal>
    )
}

export default AddBudgetModala