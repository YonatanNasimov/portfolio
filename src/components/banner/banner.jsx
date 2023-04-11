import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { ArrowRightCircle } from "react-bootstrap-icons"
import HeaderImg from "../../assets/img/header-img.svg"
import "./banner.css"

const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const [index, setIndex] = useState(1);
    const toRotate = ["Full-Stack Developer", "Web Programer", "UX/UI Designer"];
    const period = 2000;

    useEffect(() => {
        const ticker = setInterval(() => {
            tick();
        }, delta);

        return () => { clearInterval(ticker) };
    }, [text])

    const tick = () => {
        const i = loopNum % toRotate.length;
        const fullText = toRotate[i];
        const updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta / 2);
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setIndex(prevIndex => prevIndex - 1);
            setDelta(period);
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setIndex(1);
            setDelta(500);
        } else {
            setIndex(prevIndex => prevIndex + 1);
        }
    }

    return (
        <section className='banner' id='home'>
            <Container>
                <Row className='align-items-center'>
                    <Col xs={12} md={6} xl={7}>
                        <span className='tagline'> Welcome To My Portfolio</span>
                        <h1>{"Hi I'm Yonatan Nasimov! "}
                            <span className='warp'>{text}</span>
                        </h1>
                        <p>
                            Full Stack Developer, and Web Programmer, UX/UI Designer - Building websites including design and security for clients in all areas.
                        </p>
                        <button>
                            <a href='#projects'>
                                Let's Connect
                            </a>
                            <ArrowRightCircle size={25} /></button>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={HeaderImg} alt='header img' />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Banner