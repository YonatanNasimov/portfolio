import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "../newsletter/mailchimpForm";
import navIcon1 from "../../assets/img/nav-icon1.svg"
import gitHubIcon from "../../assets/img/iconmonstr-github-1.svg"
import "./footer.css"


export const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <footer className="footer">
            <Container>
                <Row className="align-items-center">
                    <MailchimpForm />
                    <Col size={12} sm={6}>
                        <div className="img">
                            <h4 className="p-0 m-0"> YONATAN NASIMOV</h4>
                            <br />
                            <strong className="h1 m-0 p-0">PORTFOLIO</strong>
                        </div>
                    </Col>
                    <Col size={12} sm={6} className="text-center text-sm-end">
                        <div className="social-icon">
                            <a target='_blank' href="https://www.linkedin.com/in/yonatan-nasimov-391681248/"><img src={navIcon1} alt="Icon" /></a>
                            <a target='_blank' href="https://github.com/YonatanNasimov"><img src={gitHubIcon} alt="Icon" /></a>
                        </div>
                        <p>Copyright {year}. All Rights Reserved Yonatan Nasimov</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}