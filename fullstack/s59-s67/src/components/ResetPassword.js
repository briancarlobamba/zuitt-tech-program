import { useState } from 'react';
import { Form, Button, Spinner } from 'react-bootstrap';
import { Notyf } from 'notyf';
import 'notyf/notyf.min.css';

export default function ResetPassword() {
    const notyf = new Notyf();
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [loading, setLoading] = useState(false);

    const handleResetPassword = (e) => {
        e.preventDefault();

        if (newPassword !== confirmPassword) {
            notyf.error("Passwords do not match!");
            return;
        }

        setLoading(true);

        fetch('http://localhost:4000/users/reset-password', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${localStorage.getItem('token')}`,
            },
            body: JSON.stringify({
                newPassword: newPassword, // Use `newPassword` instead of `password`
            }),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.message === 'Password reset successfully') {
                    notyf.success(data.message);
                } else {
                    notyf.error(data.message || "Error resetting password.");
                }
            })
            .catch((err) => {
                notyf.error("Something went wrong. Try again.");
            })
            .finally(() => {
                setLoading(false);
                setNewPassword('');
                setConfirmPassword('');
            });
    };

    // Disable the button if the passwords are empty
    const isButtonDisabled = newPassword === '' || confirmPassword === '';

    return (
        <Form onSubmit={handleResetPassword} className="mt-4">
            <Form.Group controlId="newPassword">
                <Form.Label>New Password</Form.Label>
                <Form.Control
                    type="password"
                    placeholder="Enter new password"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    required
                />
            </Form.Group>
            <Form.Group controlId="confirmPassword" className="mt-3">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control
                    type="password"
                    placeholder="Confirm new password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                />
            </Form.Group>
            <Button
                variant="primary"
                type="submit"
                className="mt-4"
                disabled={isButtonDisabled || loading} // Disable when fields are empty or loading
            >
                {loading ? <Spinner animation="border" size="sm" /> : 'Reset Password'}
            </Button>
        </Form>
    );
}
