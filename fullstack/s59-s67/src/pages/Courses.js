/*import { useState, useEffect, useContext } from 'react';
import AdminView from '../components/AdminView';
import CourseCard from '../components/CourseCard';
import UserView from '../components/UserView';
import UserContext from '../context/UserContext';

export default function Courses() {

    const {user} = useContext(UserContext);


    const [courses, setCourses] = useState([]);

    const fetchData = () => {

    	let fetchUrl = user.isAdmin === true ? "http://localhost:4000/courses/all" 
    	: 
    	"http://localhost:4000/courses/"

    	fetch(fetchUrl, {
    		headers: {
    			Authorization: `Bearer ${localStorage.getItem('token')}`
    		}
    	})
    	.then(res => res.json())
    	.then(data => {
    		// console.log(data)
    		setCourses(data)
    	});
    }


    useEffect(() => {
    	fetchData()
    }, [user]);

    return(
        (user.isAdmin === true)
        ?
            <AdminView coursesData={courses} fetchData={ fetchData }/>
        :
            <UserView coursesData={courses} />
    )
}*/

import { useState, useEffect, useContext } from 'react';
import AdminView from '../components/AdminView';
import CourseCard from '../components/CourseCard';
import UserView from '../components/UserView';
import UserContext from '../context/UserContext';
import SearchCourse from '../components/SearchCourse'; // Import the SearchCourse component
import { Container } from 'react-bootstrap';

export default function Courses() {
  const { user } = useContext(UserContext);
  const [courses, setCourses] = useState([]);

  const fetchData = () => {
    let fetchUrl = user.isAdmin ? 'http://localhost:4000/courses/all' : 'http://localhost:4000/courses/';

    fetch(fetchUrl, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setCourses(data);
      });
  };

  useEffect(() => {
    fetchData();
  }, [user]);

  return (
    <Container>
      {/* Include the SearchCourse component and pass setCourses and fetchData as props */}
      <SearchCourse setCourses={setCourses} fetchData={fetchData} />

      {user.isAdmin ? (
        <AdminView coursesData={courses} fetchData={fetchData} />
      ) : (
        <UserView coursesData={courses} />
      )}
    </Container>
  );
}

