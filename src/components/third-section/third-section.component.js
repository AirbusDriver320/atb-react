import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import './third-section.styles.css';

function ThirdSection({data}) {

    return (
        <Container>
            <Row className='mt-5'>
                <Col md={1}></Col>
                <Col md={5}>
                    <p className='mx-4 mx-md-0'>{data.thirdSectionLeftContent}</p>
                </Col>
                <Col md={5}>
                    <p className='mx-4 mx-md-0'>{data.thirdSectionRightContent}</p>
                </Col>
                <Col md={1}></Col>
            </Row>
        </Container>
    )
}

export default ThirdSection;