import React from 'react';
import '../styles/Form.css'
import { Container } from 'react-bootstrap';
import Select from './Select';
import SubHeader from './SubHeader';

const Form = () => (
    <Container className='containerFormComponent'>
        <SubHeader />
        <Select />
    </Container>
);

export default Form;