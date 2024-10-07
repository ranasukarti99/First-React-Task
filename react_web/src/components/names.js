import React, { useEffect, useState } from 'react';
import Col from 'react-bootstrap/esm/Col';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Button from 'react-bootstrap/esm/Button';

function Data() {
    const [users, setUsers] = useState([]);
    const [sortedNames, setSortedNames] = useState([]);

    useEffect(() => {
        const listen = setInterval(() => {
            fetch('https://jsonplaceholder.typicode.com/users')
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    return response.json();
                })
                .then(data => {
                    setUsers(data);
                })
                .catch(err => {
                    console.error('Fetch error:', err);
                });
        }, 2000);

        return () => clearInterval(listen);
    }, []);

    const handleSort = () => {
        const names = users.map(user => user.name);
        const sorted = names.sort((a, b) => a.localeCompare(b));
        setSortedNames(sorted);
    };

    return (
        <div className='text-center'>
            <Container>
                <Row>
                    <Col>
                        <Button onClick={handleSort}>Names</Button>
                        <ul>
                            {sortedNames.map((name, index) => (
                                <li key={index} className='text-start'>{name}</li>
                            ))}
                        </ul>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Data;



