import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const UserCards = () => {
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');
  const usersPerPage = 5;

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      const data = await response.json();
      setUsers(data);
    };

    fetchUsers();
  }, []);



  // Filter users based on the search term
  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredUsers.length / usersPerPage);
  const startIndex = currentPage * usersPerPage;
  const currentUsers = filteredUsers.slice(startIndex, startIndex + usersPerPage);

  const handleNext = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevious = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };


  return (
    <div style={{ textAlign: 'center' }}>
      <h1>User Cards</h1>
      <input
        type="text"
        placeholder="Search by name"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{ marginBottom: '20px', padding: '8px', width: '200px' }}
      />
      <Container>
        <Row>
        {currentUsers.map(user => (
          <Col md={3} key={user.id} style={{ border: '1px solid #ccc', margin: '10px', padding: '10px', borderRadius: '5px', width: '200px' }}>
            <h2>{user.name}</h2>
            <p>Email: {user.email}</p>
            <p>Phone: {user.phone}</p>
          </Col>
        ))}

        </Row>
      </Container>
      <div>
        <button onClick={handlePrevious} disabled={currentPage === 0}>Previous</button>
        <button onClick={handleNext} disabled={currentPage === totalPages - 1}>Next</button>
      </div>
    </div>
  );
};

export default UserCards;


// import React, { useEffect, useState } from 'react';
// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';
// import Col from 'react-bootstrap/Col';
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';

// const Cards = ({ users }) => {
//     return (
//         <Row>
//             <h2 className='fs-2 fw-bold text-dark py-5 text-center'>User Information</h2>
//             {users.map((user) => (
//                 <Col lg="4" key={user.id}>
//                     <Card className='m-3'>
//                         <Card.Body>
//                             <Card.Title>{user.name}</Card.Title>
//                             <Card.Text>
//                                 Email: {user.email}
//                                 <br />
//                                 Phone: {user.phone}
//                             </Card.Text>
//                             <Button variant="primary">More</Button>
//                         </Card.Body>
//                     </Card>
//                 </Col>
//             ))}
//         </Row>
//     );
// };

// const Data = () => {
//     const [users, setUsers] = useState([]);
//     const [searchTerm, setSearchTerm] = useState('');

//     useEffect(() => {
//         const fetchUsers = async () => {
//             try {
//                 const response = await fetch('https://jsonplaceholder.typicode.com/users');
//                 if (!response.ok) {
//                     throw new Error('Network response was not ok');
//                 }
//                 const data = await response.json();
//                 setUsers(data);
//             } catch (error) {
//                 console.error('Fetch error:', error);
//             }
//         };

//         fetchUsers();
//     }, []);

//     const filteredUsers = users.filter(user =>
//         user.name.toLowerCase().includes(searchTerm.toLowerCase())
//     );

//     return (
//         <div style={{ textAlign: 'center' }}>
//             <input
//                 type="text"
//                 placeholder="Search by name"
//                 value={searchTerm}
//                 onChange={(e) => setSearchTerm(e.target.value)}
//                 style={{ marginBottom: '20px', padding: '8px', width: '200px' }}
//             />
//             <Container>
//                 <Cards users={filteredUsers} />
//             </Container>
//         </div>
//     );
// };

// export default Data;
