import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/esm/Col';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';

const cardData = [
    {
        title: "title1",
        description: "my name is....",
        image: "Images"
    },
    {
        title: "title2",
        description: "my name is....",
        image: "Images"
    },
    {
        title: "title3",
        description: "my name is....",
        image: "Images"
    }, {
        title: "title4",
        description: "my name is....",
        image: "Images"
    }
]

function Cards() {
    return (
        <div className='py-3'>
            <Container>
                <Row>
                <h2 className='fs-2 fw-bold text-dark py-5 text-center'>Information</h2>
                    {
                        cardData.map((v, i) => {
                            return (
                                <Col lg="3">
                                    <Card className='m-3'>
                                        <Card.Body>
                                            <Card.Title>{v.title}</Card.Title>
                                            <Card.Text>
                                                {v.description}
                                            </Card.Text>
                                            <Button variant="primary">More</Button>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            )
                        })
                    }
                </Row>
            </Container>
        </div>
    );
}

export default Cards;