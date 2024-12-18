import { useState, useEffect, useContext } from 'react';
import { Form, Button } from 'react-bootstrap';
import { Notyf } from 'notyf';
import 'notyf/notyf.min.css';
import UserContext from '../UserContext';

export default function Register() {
    const { user } = useContext(UserContext);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [isActive, setIsActive] = useState(false);

    const notyf = new Notyf(); // Create Notyf instance

    function registerUser(e) {
        e.preventDefault();

        fetch('http://localhost:4000/users/register', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email: email,
                password: password
            })
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);

            if (data.message === "Registered Successfully") {
                setEmail('');
                setPassword('');
                setConfirmPassword('');

                notyf.success('Registration Successful! Thank you for registering!');
            } 
        })
        .catch(err => {
            console.error('Error:', err);
            notyf.error('Registration Failed! Please try again.');
        });
    }

    useEffect(() => {
        setIsActive(
            email !== "" && 
            password !== "" && 
            confirmPassword !== "" && 
            password === confirmPassword
        );
    }, [email, password, confirmPassword]);

    return (
        <Form onSubmit={registerUser}>
            <h1 className="my-5 text-center">Register</h1>
            <Form.Group>
                <Form.Label>Email:</Form.Label>
                <Form.Control 
                    type="email"
                    placeholder="Enter Email" 
                    required 
                    value={email} 
                    onChange={e => setEmail(e.target.value)}
                />
            </Form.Group>
            <Form.Group>
                <Form.Label>Password:</Form.Label>
                <Form.Control 
                    type="password" 
                    placeholder="Enter Password" 
                    required 
                    value={password} 
                    onChange={e => setPassword(e.target.value)}
                />
            </Form.Group>
            <Form.Group>
                <Form.Label>Confirm Password:</Form.Label>
                <Form.Control 
                    type="password" 
                    placeholder="Confirm Password" 
                    required 
                    value={confirmPassword} 
                    onChange={e => setConfirmPassword(e.target.value)}
                />
            </Form.Group>
            <Button 
                variant="primary" 
                type="submit" 
                disabled={!isActive}
            >
                Submit
            </Button>
        </Form>
    );
}
