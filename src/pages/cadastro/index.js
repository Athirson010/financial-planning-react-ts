import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as axios from 'axios';

export default function Home() {
    const [nutri, setNutri] = useState([]);
    
    useEffect(() => {
        axios({
            method: 'get',
            url: 'http://localhost:8080/cep/08581015',
        }).then(function (response) {
                console.log(response.data);
            });
     
    }, []);

    return (
        <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Nome:</Form.Label>
                <Form.Control type="email" placeholder="Digite seu nome" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email:</Form.Label>
                <Form.Control type="email" placeholder="Digite seu email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Data de nascimento:</Form.Label>
                <Form.Control type="Date" placeholder="Digite seu email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Senha</Form.Label>
                <Form.Control type="password" placeholder="senha" />
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    );
}