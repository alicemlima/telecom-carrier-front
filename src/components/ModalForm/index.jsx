import React from "react";
import { useCallback } from "react";
import { useSelector } from 'react-redux';
import { Modal, Button, Form, InputGroup, Col } from "react-bootstrap"
import { phoneNumberMask, floatPriceMask } from "../../utils/mask";
import "./style.module.css"
const ModalForm = (props) => {
    const {
        items: data,
      } = useSelector(state => state.data);

    let dataRows = data.length;

    const [formValues, setFormValues] = React.useState({
        id: (dataRows) + 1,
        value: "",
        monthyPrice: "",
        monthySetupPrice: "",
        currency: "R$"

    });

    const handleKeyUp = useCallback((e) => {
        phoneNumberMask(e)
    }, []);
    const handleKeyUpPrice = useCallback((e) => {
        floatPriceMask(e)
    }, []);

    const handleSubmit = async (e) => {
      e.preventDefault();
      e.stopPropagation();
      console.log(formValues)
    };

    const handleChange = e => {
        const { name, value } = e.target
        setFormValues({
            ...formValues, [name]: value
        });
    };


    return (
        <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        >
        <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
            Register a new phone number
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
        <Form.Group as={Col} controlId="formNumber">
          <Form.Label>Phone Number</Form.Label>
          <InputGroup>
            <InputGroup.Text id="inputGroupPrepend">+55</InputGroup.Text>
            <Form.Control
                required
                type="tel" 
                maxLength="10"
                placeholder="Enter number"
                onKeyUp={handleKeyUp}
                name="value"
                onChange={handleChange}
                value={formValues.value || ''}
            />
          </InputGroup>
          <Form.Text className="text-muted">
                DDD XXXX-XXXX
           </Form.Text>
        </Form.Group>

            <Form.Group as={Col} controlId="formMonthy" >
                <Form.Label>Monthy Price</Form.Label>
                <InputGroup>
                <InputGroup.Text>R$</InputGroup.Text>
                <Form.Control
                    required
                    type="number"
                    maxLength="3"
                    placeholder="Enter Number"
                    onKeyUp={handleKeyUpPrice}
                    autoComplete="off"
                    name="monthyPrice"
                    onChange={handleChange}
                    value={formValues.monthyPrice || ''}
                />
                </InputGroup>
            </Form.Group>

            <Form.Group as={Col} controlId="formMonthy">
                <Form.Label>Monthy Setup Price</Form.Label>
                <InputGroup>
                <InputGroup.Text>R$</InputGroup.Text>
                <Form.Control 
                    required
                    type="number"
                    maxLength="3" 
                    placeholder="Enter Number" 
                    onKeyUp={handleKeyUpPrice}
                    autoComplete="off"
                    name="monthySetupPrice"
                    onChange={handleChange}
                    value={formValues.monthySetupPrice || ''}
                />
                </InputGroup>
            </Form.Group>
            <Button onClick={handleSubmit} variant="primary" className="my-2" type="button">
                Submit
            </Button>
            </Form>
        </Modal.Body>
        </Modal>
    );
}

export default ModalForm;