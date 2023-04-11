import React from 'react'
import Carousel from "react-multi-carousel";
import { Col, Container, Row } from 'react-bootstrap';
import { skilsArr } from '../../data';
import colorSharp from "../../assets/img/color-sharp.png"
import { responsive } from "../../responsive"
import "react-multi-carousel/lib/styles.css";
import "./skils.css"

const Skils = () => {

    return (
        <section className='skill' id='skills'>
            <Container>
                <Row>
                    <Col>
                        <div className='skill-bx'>
                            <h2>Skills</h2>
                            <p>Let Me Show You What I Know:</p>
                            <Carousel responsive={responsive} infinite={true} className='skill-slider'>
                                {skilsArr.map(item => {
                                    return (
                                        <div className='item p-2'
                                            key={item.id}>
                                            <div>
                                                <img src={item.img} alt="skill image" />
                                                <h5>{item.desc}</h5>
                                            </div>
                                        </div>
                                    )
                                })}
                            </Carousel>
                            <h4 className='text-light p-3'>There Is Always Something To Learn...</h4>
                        </div>
                    </Col>
                </Row>
            </Container>
            <img className='background-image-left' src={colorSharp} alt='background' />
        </section>
    )
}

export default Skils