import { useState } from 'react';
import PropTypes from 'prop-types';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom'


export default function CourseCard({courseProp}) {

    console.log(courseProp);

    const { _id, name, description, price} = courseProp;

    //State hook
    /*
        Syntax:
        const [getter, setter] = useState(initialGetterValue);
    */

    // const [count, setCount] = useState(0);
    // console.log(useState(0));

    // const [slots, setSlots] = useState(10);

    // function enroll(){
    //     if (slots > 0) {
    //         setCount(count + 1);
    //         console.log('Enrollees: ' + count);
    //         setSlots(slots - 1);
    //         console.log('Seats: ' + slots)
    //     } else {
    //         alert("No more slots available");
    //     }
    // }

    

    return (
        <Card>
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Subtitle>Description:</Card.Subtitle>
                <Card.Text>{description}</Card.Text>
                <Card.Subtitle>Price:</Card.Subtitle>
                <Card.Text>PhP {price}</Card.Text>
                <Link className="btn btn-primary" to={`/courses/${_id}`}>Details</Link>
            </Card.Body>
        </Card>
    )
}

//Validations
CourseCard.propTypes = {
        courseProp: PropTypes.shape({
            name: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
            price: PropTypes.number.isRequired
        })
    }