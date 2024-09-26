import { Button, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <Row>
            <Col className="p-4 text-center">
                <h1>Welcome To Our Inventory Manager</h1>
                <p>Create, Update, Delete, and View Our Items</p>
                <Button as={Link} to="/items" variant="primary">Check Our Items</Button>
            </Col>
        </Row>
    );
}
