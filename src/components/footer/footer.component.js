import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";

function Footer({data}) {

    return (
        <Container className='mt-3'>
            <Row>
                <Col md={2}></Col>
                <Col md={8}>
                    <p className='text-center mb-5 mx-4'><b>{data.footer}</b></p>
                </Col>
                <Col md={2}></Col>
            </Row>
        </Container>
    )
}

export default Footer;