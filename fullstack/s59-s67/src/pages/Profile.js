/*import { useState, useEffect, useContext } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Navigate } from 'react-router-dom';
import UserContext from '../context/UserContext';
import { Notyf } from 'notyf';
import 'notyf/notyf.min.css';

export default function Profile(){

    const notyf = new Notyf();

    const { user } = useContext(UserContext);

    const [details,setDetails] = useState({});

    useEffect(() => {
        fetch(`http://localhost:4000/users/details`, {
            headers: {
                Authorization: `Bearer ${ localStorage.getItem('token') }`
            }
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            // Set the user states values with the user details upon successful login.
            if (typeof data !== undefined) {

                setDetails(data);

            } else if (data.error === "User not found") {

                notyf.error("User not found.")

            } else {

                notyf.error("Something Went Wrong. Contact Your System Admin.")

            }
        });
    }, [])

    return (
        (user.id === null) ?
            <Navigate to="/courses" />
            :
            <Container className="mt-5 p-5 bg-primary text-white">
                <Row>
                    <Col className="p-5 bg-primary text-white">
                        <h1 className="my-5 ">Profile</h1>
                        <h2 className="mt-3">{`${details.firstName} ${details.lastName}`}</h2>
                        <hr />
                        <h4>Contacts</h4>
                        <ul>
                            <li>Email: {details.email}</li>
                            <li>Mobile No: {details.mobileNo}</li>
                        </ul>
                    </Col>
                </Row>
            </Container>
    )

}*/

import { useState, useEffect, useContext } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Navigate } from 'react-router-dom';
import UserContext from '../context/UserContext';
import { Notyf } from 'notyf';
import 'notyf/notyf.min.css';
import ResetPassword from '../components/ResetPassword';
import UpdateProfile from '../components/UpdateProfile'; // Import UpdateProfile

export default function Profile() {
    const notyf = new Notyf();

    const { user } = useContext(UserContext);
    const [details, setDetails] = useState({});
    const [showResetForm, setShowResetForm] = useState(false);
    const [showUpdateForm, setShowUpdateForm] = useState(false); // State to toggle update profile form

    useEffect(() => {
        fetch(`http://localhost:4000/users/details`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`,
            },
        })
            .then((res) => res.json())
            .then((data) => {
                if (data) {
                    setDetails(data);
                } else {
                    notyf.error("Something went wrong. Contact your system admin.");
                }
            });
    }, []);

    // Toggle reset password form
    const handleResetClick = () => {
        setShowResetForm(!showResetForm);
    };

    // Toggle update profile form
    const handleUpdateClick = () => {
        setShowUpdateForm(!showUpdateForm);
    };

    return user.id === null ? (
        <Navigate to="/courses" />
    ) : (
        <Container className="mt-5 p-5 bg-secondary text-white">
            <Row>
                <Col className="p-5 bg-secondary text-white">
                    <h1 className="my-5">Profile</h1>
                    <h2 className="mt-3">{`${details.firstName} ${details.lastName}`}</h2>
                    <hr />
                    <h4>Contacts</h4>
                    <ul>
                        <li>Email: {details.email}</li>
                        <li>Mobile No: {details.mobileNo}</li>
                    </ul>
                </Col>
            </Row>

            {/* Update Profile Section */}
            <Row className="mt-4">
                <Col>
                    <Button
                        variant={showUpdateForm ? 'danger' : 'primary'}
                        onClick={handleUpdateClick}
                    >
                        {showUpdateForm ? 'Cancel' : 'Update Profile'}
                    </Button>

                    {showUpdateForm && (
                        <div className="mt-4">
                            <h3>Update Profile</h3>
                            <UpdateProfile details={details} setDetails={setDetails} />
                        </div>
                    )}
                </Col>
            </Row>

            {/* Reset Password Section */}
            <Row className="mt-4">
                <Col>
                    <Button
                        variant={showResetForm ? 'danger' : 'primary'}
                        onClick={handleResetClick}
                    >
                        {showResetForm ? 'Cancel' : 'Reset Password'}
                    </Button>

                    {showResetForm && (
                        <div className="mt-4">
                            <h3>Reset Password</h3>
                            <ResetPassword />
                        </div>
                    )}
                </Col>
            </Row>
        </Container>
    );
}
