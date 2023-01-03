import { Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function AddBudgetModal({ show, handleClose }) {
    return (
        <Modal show={show} onHide={handleClose}>
            <Form onSubmit={handleSubmit}>
                <Modal.Header closeButton>
                    <Modal.Title>New Budget</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Group className='mb-3' controlId='name'>
                        <Form.Label>Name</Form.Label>
                        <Form.Control type='text' required />
                    </Form.Group>
                    <Form.Group className='mb-3' controlId='availability'>
                        <Form.Label>Availability</Form.Label>
                        <Form.Control type='number' required min={0} step={0.1} />
                    </Form.Group>
                    <div className='d-flex justify-content-end'>
                        <Button type='submit' color='primary'>Add</Button>
                    </div>
                </Modal.Body>
            </Form>
        </Modal>
    )
}

export default AddBudgetModal