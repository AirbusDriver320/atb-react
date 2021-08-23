import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Carousel from 'react-bootstrap/Carousel';
import { useRef } from "react";

import './slider.styles.css';

function Slider({data}) {
    const ref = useRef(null);

    const onPrevClick = () => {
      ref.current.prev();
    };
    const onNextClick = () => {
      ref.current.next();
    };

    return (
        <Row className='my-5'>
            <Col md={7}>
                <Carousel ref={ref}>
                    <Carousel.Item>
                        <div className='d-flex justify-content-end'>
                            <Image src={data.slider.slides[2].image} className='d-block w-75 img-margin' fluid />
                            <Image src={data.slider.slides[0].image} className='d-block w-75 img-margin' fluid />                            
                        </div>
                        <div className="text-end subtext">
                            <p><b>{data.slider.slides[0].title}</b>
                                <svg className="mx-2 minus" id="i-minus" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="64" height="64" fill="none" stroke="currentcolor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1">
                                    <path d="M2 16 L30 16" />
                                </svg>
                                {data.slider.slides[0].id}
                            </p>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className='d-flex justify-content-end'>
                            <Image src={data.slider.slides[0].image} className='d-block w-75 img-margin' fluid />
                            <Image src={data.slider.slides[1].image} className='d-block w-75 img-margin' fluid />                            
                        </div>
                        <div className="text-end subtext">
                            <p><b>{data.slider.slides[1].title}</b>
                                <svg className="mx-2 minus" id="i-minus" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="64" height="64" fill="none" stroke="currentcolor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1">
                                    <path d="M2 16 L30 16" />
                                </svg>
                                {data.slider.slides[1].id}
                            </p>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className='d-flex justify-content-end'>
                            <Image src={data.slider.slides[1].image} className='d-block w-75 img-margin' fluid />
                            <Image src={data.slider.slides[2].image} className='d-block w-75 img-margin' fluid />                            
                        </div>
                        <div className="text-end subtext">
                            <p><b>{data.slider.slides[2].title}</b>
                                <svg className="mx-2 minus" id="i-minus" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="64" height="64" fill="none" stroke="currentcolor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1">
                                    <path d="M2 16 L30 16" />
                                </svg>
                                {data.slider.slides[2].id}
                            </p>
                        </div>
                    </Carousel.Item>
                </Carousel>
            </Col>
            <Col md={5} className='slider-desc'>
                <h1 className='display-6 mt-4 mx-5'>
                    <b>{data.slider.description}</b>
                    <div className='mt-4'>
                        <Image src={ data.slider.leftArrow } className='img-button' onClick={onNextClick} />
                        <Image src={ data.slider.rightArrow } className='img-button' onClick={onPrevClick} />
                    </div>
                </h1>
            </Col>
        </Row>
    )
}

export default Slider;