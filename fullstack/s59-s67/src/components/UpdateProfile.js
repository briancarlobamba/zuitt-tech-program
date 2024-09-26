import { useState } from 'react';
import { Form, Button, Spinner } from 'react-bootstrap';
import { Notyf } from 'notyf';
import 'notyf/notyf.min.css';

export default function UpdateProfile({ details, setDetails }) {
  const notyf = new Notyf();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [mobileNo, setMobileNo] = useState('');
  const [loading, setLoading] = useState(false);

  const handleUpdateProfile = (e) => {
    e.preventDefault();
    setLoading(true);

    fetch('http://localhost:4000/users/profile', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
      body: JSON.stringify({ firstName, lastName, mobileNo }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          notyf.success("Profile updated successfully!");
          setDetails(data); // Update parent state with the new details
        } else {
          notyf.error("Failed to update profile.");
        }
      })
      .catch((err) => {
        console.error(err);
        notyf.error("An error occurred.");
      })
      .finally(() => {
        setLoading(false);
        setFirstName(''); // Clear the input fields
        setLastName('');
        setMobileNo('');
      });
  };

  // Disable the button if any of the fields are empty
  const isButtonDisabled = !firstName || !lastName || !mobileNo;

  return (
    <Form onSubmit={handleUpdateProfile} className="mt-4">
      <Form.Group controlId="firstName">
        <Form.Label>First Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter first name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          required
        />
      </Form.Group>
      <Form.Group controlId="lastName" className="mt-3">
        <Form.Label>Last Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter last name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          required
        />
      </Form.Group>
      <Form.Group controlId="mobileNo" className="mt-3">
        <Form.Label>Mobile No</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter mobile number"
          value={mobileNo}
          onChange={(e) => setMobileNo(e.target.value)}
          required
        />
      </Form.Group>
      <Button
        variant="primary"
        type="submit"
        className="mt-4"
        disabled={isButtonDisabled || loading} // Disable when fields are empty or loading
      >
        {loading ? <Spinner animation="border" size="sm" /> : 'Update Profile'}
      </Button>
    </Form>
  );
}
