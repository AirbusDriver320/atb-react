import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

import './first-section.styles.css';

function FirstSection({ data }) {

    return (
        <div>
            <Container className='mt-5'>
                <Row>
                    <Col md={1}></Col>
                    <Col className='mt-4' md={5}>
                        <h1 classname='display-6 mx-4 mx-md-0'><b>{data.title}</b></h1>
                        <p className='mt-4 mx-4 mx-md-0'>{data.content}</p>
                    </Col>
                    <Col md={5}>
                        <Image className='me-0 ms-auto mt-0 mt-md-5 img2' src={data.firstSectionImage2} />
                    </Col>
                    <Col md={1}></Col>
                </Row>
            </Container>
            <Row>
                <Col>
                    <Image className='img1-bg' src={data.firstSectionImage1} fluid />
                </Col>
            </Row>
        </div>
    )
}

export default FirstSection;