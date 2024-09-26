import { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link, NavLink } from 'react-router-dom';
import UserContext from '../UserContext';

export default function AppNavbar() {

	const { user } = useContext(UserContext);

	console.log(user);

	return (
		<Navbar bg="primary" expand="lg">
			<Container fluid>
			    <Navbar.Brand as={Link} to="/">Tasks</Navbar.Brand>
			    <Navbar.Toggle aria-controls="basic-navbar-nav" />
			    <Navbar.Collapse id="basic-navbar-nav">
				    <Nav className="ms-auto">
				        <Nav.Link as={NavLink} to="/" exact>Home</Nav.Link>
				        {(user.id !== null) 
                            ? 
								<>
                                    <Nav.Link as={NavLink} to="/tasks" exact>Add Task</Nav.Link>
									<Nav.Link as={Link} to="/addTask">Tasks</Nav.Link>
									<Nav.Link as={Link} to="/logout">Logout</Nav.Link>
								</>
							: 
								<>
									<Nav.Link as={Link} to="/login">Login</Nav.Link>
									<Nav.Link as={Link} to="/register">Register</Nav.Link>
								</>
						}
				    </Nav>
			    </Navbar.Collapse>
			</Container>
		</Navbar>
	)
}
