import { useState } from 'react';
import { Form, Button, Spinner, Row, Col } from 'react-bootstrap';

export default function SearchCourse({ setCourses, fetchData }) {
  const [courseName, setCourseName] = useState('');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSearchByName = (e) => {
    e.preventDefault();

    if (courseName.trim() === '') {
      alert('Please enter a course name to search.');
      return;
    }

    setLoading(true);

    fetch('http://localhost:4000/courses/search', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
      body: JSON.stringify({
        courseName: courseName,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        setCourses(data);
      })
      .catch((err) => {
        console.error(err);
        alert('An error occurred while searching for courses.');
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const handleSearchByPrice = (e) => {
    e.preventDefault();

    if (!minPrice || !maxPrice) {
      alert('Please enter both min and max price.');
      return;
    }

    setLoading(true);

    fetch('http://localhost:4000/courses/search', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
      body: JSON.stringify({
        minPrice: minPrice,
        maxPrice: maxPrice,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setCourses(data);
        } else {
          console.error('Unexpected data format:', data);
          setCourses([]); // Clear courses if the data format is incorrect
        }
      })
      .catch((err) => {
        console.error(err);
        alert('An error occurred while searching for courses.');
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const handleResetName = () => {
    setCourseName('');
    fetchData(); // Fetch all courses and reset the view to the original state
  };

  const handleResetPrice = () => {
    setMinPrice('');
    setMaxPrice('');
    fetchData(); // Fetch all courses and reset the view to the original state
  };

  return (
    <div>
      {/* Search by Name */}
      <Form onSubmit={handleSearchByName} className="mb-4">
        <Form.Group controlId="courseName">
          <Form.Label>Search Courses by Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter course name"
            value={courseName}
            onChange={(e) => setCourseName(e.target.value)}
            className="p-2" // Adding padding
          />
        </Form.Group>
        <Row className="mt-3">
          <Col xs="auto">
            <Button variant="primary" type="submit" className="mr-2" disabled={loading || courseName.trim() === ''}>
              {loading ? <Spinner animation="border" size="sm" /> : 'Search'}
            </Button>
          </Col>
          <Col xs="auto">
            <Button variant="primary" onClick={handleResetName} disabled={loading}>
              Clear
            </Button>
          </Col>
        </Row>
      </Form>

      {/* Search by Price Range */}
      <Form onSubmit={handleSearchByPrice} className="mb-4">
        <Form.Group controlId="minPrice">
          <Form.Label>Min Price</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter minimum price"
            value={minPrice}
            onChange={(e) => setMinPrice(e.target.value)}
            className="p-2"
          />
        </Form.Group>
        <Form.Group controlId="maxPrice">
          <Form.Label>Max Price</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter maximum price"
            value={maxPrice}
            onChange={(e) => setMaxPrice(e.target.value)}
            className="p-2"
          />
        </Form.Group>
        <Row className="mt-3">
          <Col xs="auto">
            <Button variant="primary" type="submit" className="mr-2" disabled={loading || !minPrice || !maxPrice}>
              {loading ? <Spinner animation="border" size="sm" /> : 'Search'}
            </Button>
          </Col>
          <Col xs="auto">
            <Button variant="primary" onClick={handleResetPrice} disabled={loading}>
              Clear
            </Button>
          </Col>
        </Row>
      </Form>
    </div>
  );
}
