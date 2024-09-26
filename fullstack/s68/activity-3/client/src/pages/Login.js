import React, { useState, useEffect, useContext } from 'react';
import { Form, Button } from 'react-bootstrap';
import { Notyf } from 'notyf';
import 'notyf/notyf.min.css';
import UserContext from '../UserContext';

export default function Login() {
    const { setUser } = useContext(UserContext); 
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isActive, setIsActive] = useState(false); 

    const notyf = new Notyf();

    const authentication = (e) => {
        e.preventDefault();
        fetch('http://localhost:4000/users/login', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email: email,
                password: password
            })
        })
        .then(res => {
            if (!res.ok) {
                return res.json().then(errorData => {
                    throw new Error(errorData.message || 'Network response was not ok');
                });
            }
            return res.json();
        })
        .then(data => {
            localStorage.setItem('token', data.access);
            retrieveUserDetails(data.access);

            notyf.success('Login Successful! Welcome!');

            setEmail('');
            setPassword('');
        })
        .catch(err => {
            console.error("Error:", err);
            notyf.error('Login Failed! Please check your credentials and try again.');
        });
    }

    const retrieveUserDetails = (token) => {
        fetch('http://localhost:4000/users/details', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        .then(res => {
            if (!res.ok) {
                throw new Error('Network response was not ok');
            }
            return res.json();
        })
        .then(data => {
            setUser({
                id: data.user._id,
                isAdmin: data.user.isAdmin
            });
        })
        .catch(err => {
            console.error("Error fetching user details:", err);
        });
    };

    useEffect(() => {
        setIsActive(email !== '' && password !== '');
    }, [email, password]);

    return (
        <Form onSubmit={authentication}>
            <h1 className="my-5 text-center">Login</h1>
            <Form.Group controlId="userEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control 
                    type="email" 
                    placeholder="Enter email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
            </Form.Group>

            <Form.Group controlId="password">
                <Form.Label>Password</Form.Label>
                <Form.Control 
                    type="password" 
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
            </Form.Group>

            <Button variant={isActive ? "primary" : "danger"} type="submit" id="submitBtn" disabled={!isActive}>
                Submit
            </Button>
        </Form>
    );
}
