import React from 'react'
import Card from 'react-bootstrap/Card';
import { currencyFormatter } from './utils';
import ProgressBar from 'react-bootstrap/ProgressBar';
import { Stack, Button } from 'react-bootstrap';

function BudgetCard({ name, amount, availability }) {
    let className = ""
    if (amount > availability) {
        className = "bg-danger bg-opacity-10"
    } else {
        className = "bg-light"
    }
    console.log(amount)
    console.log(availability)

    return (
        <Card className={className}>
            <Card.Body >
                <Card.Title className='d-flex justify-content-between align-items-baseline fw-normal mb-3'>
                    <div className='me-2'>{name}</div>
                    <div className='d-flex align-items-baseline'>{currencyFormatter.format(amount)} /
                        <span className='text-muted fs-6 ms-1'>{availability}</span>
                    </div>
                </Card.Title>
                <ProgressBar className='rounded-pill' variant={getProBarVar(amount, availability)}
                    min={0} max={availability} now={amount}></ProgressBar>
                <Stack direction='horizontal' gap="2" className='mt-4'>
                    <Button size="sm" variant="outline-primary" className='ms-auto'>Add Expense</Button>
                    <Button size="sm" variant="outline-secondary">View Expense</Button>
                    <Button size="sm" variant="outline-success">Remove Expense</Button>
                </Stack>
            </Card.Body>
        </Card>
    )
}

function getProBarVar(amount, availability) {
    const ratio = amount / availability

    if (ratio < 0.5) {
        return "danger"
    } else if (ratio < 0.75) {
        return "warning"
    } else {
        return "danger"
    }
}

export default BudgetCard