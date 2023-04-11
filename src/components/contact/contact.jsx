import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import contactImg from "../../assets/img/contact-img.svg"
import TrackVisibility from 'react-on-screen';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import PhoneIcon from '@mui/icons-material/Phone';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import "./contact.css";
import 'animate.css';
import axios from 'axios';

const Contact = () => {
    const formInitialDetails = {
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: ""
    }

    const [formDetails, setFormDetails] = useState(formInitialDetails);
    const [buttonText, setButtonText] = useState('Send');
    const [status, setStatus] = useState({});

    const onFormUpdate = (_category, _value) => {
        setFormDetails({
            ...formDetails,
            [_category]: _value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        let body = `Email:${formDetails.email}, Name:${formDetails.firstName}${formDetails.lastName}, Phone:${formDetails.phone}, message:${formDetails.message}`
        if (formDetails.message.length < 5) {
            setButtonText("Fill The Input Mssege Plz");
        }
        else {
            setButtonText("Sending...");
        }
        console.log(body);
        let url = "https://calm-puce-angler-slip.cyclic.app/email/sendemail";
        try {
            let resp = await axios({
                url: url,
                method: "POST",
                data: body
            })
            setButtonText("Send");
            setFormDetails(formInitialDetails);
            console.log(resp.data)
            return resp;
        }
        catch (err) {
            if (!err) {
                setStatus({ success: true, message: 'Message sent successfully' });
            } else {
                setStatus({ success: false, message: 'Something went wrong, please try again later Or sent Us an Email.' });
            }
            setButtonText("Send");
            setFormDetails(formInitialDetails);
            throw err;
        }
    };

    return (
        <section className="contact" id="connect">
            <Container>
                <Row className="align-items-center">
                    <Col size={12} md={6}>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="Contact Us" />
                            }
                        </TrackVisibility>
                    </Col>
                    <Col size={12} md={6}>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                                    <h2>Get In Touch</h2>
                                    <ul className='list-unstyled d-flex align-items-center justify-content-center'>
                                        <li>
                                            <LinkedInIcon />
                                            <a target={'_blank'} href='https://www.linkedin.com/in/yonatan-nasimov-391681248/'>Linkedin</a>
                                        </li>
                                        <li>
                                            <GitHubIcon />
                                            <a target={'_blank'} href='https://github.com/YonatanNasimov'>Github</a>
                                        </li>
                                        <li>
                                            <PhoneIcon />
                                            +972-54-721-1498
                                        </li>
                                        <li>
                                            <EmailIcon />
                                            yonatannasimov@gmail.com
                                        </li>
                                    </ul>
                                    <form onSubmit={handleSubmit}>
                                        <Row>
                                            <Col size={12} sm={6} className="px-1">
                                                <input type="text" value={formDetails.firstName} placeholder="First Name..." onChange={(e) => onFormUpdate('firstName', e.target.value)} />
                                            </Col>
                                            <Col size={12} sm={6} className="px-1">
                                                <input type="text" value={formDetails.lasttName} placeholder="Last Name..." onChange={(e) => onFormUpdate('lastName', e.target.value)} />
                                            </Col>
                                            <Col size={12} sm={6} className="px-1">
                                                <input type="email" value={formDetails.email} placeholder="Email Address..." onChange={(e) => onFormUpdate('email', e.target.value)} />
                                            </Col>
                                            <Col size={12} sm={6} className="px-1">
                                                <input type="tel" value={formDetails.phone} placeholder="Phone Number..." onChange={(e) => onFormUpdate('phone', e.target.value)} />
                                            </Col>
                                            <Col size={12} className="px-1 ">
                                                <textarea rows="6" value={formDetails.message} placeholder="message..." onChange={(e) => onFormUpdate('message', e.target.value)}></textarea>
                                                <button type="submit"><span>{buttonText}</span></button>
                                            </Col>
                                            {
                                                status.message &&
                                                <Col>
                                                    <p className={status.success === false ? "text-danger" : "text-success"}>{status.message}</p>
                                                </Col>
                                            }
                                        </Row>
                                    </form>
                                </div>}
                        </TrackVisibility>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Contact