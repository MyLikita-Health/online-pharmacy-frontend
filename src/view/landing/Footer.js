import { Col, Row } from "reactstrap";

const Footer = () => {
  return (
    <footer>
      <Row className="container grid grid--footer">
        <Col className="logo-col">
          {/* <a href="#rekod" className="footer-logo">
            <img className="logo" alt="Rekod logo" src={rekod} />
          </a> */}
          <p className="copyright">
            Track your personal finance <br />
            Prepare for the future with Rekod
          </p>
          {/* <div className="bottom">
            <a href="#rekod"><img className="logo-store" src={app_store} alt="App Store Button" /></a>
            <a href="#rekod"><img className="logo-store" src={play_store} alt="Play Store Button" /></a>
          </div> */}
        </Col>
        <Col className="address-col">
          <p className="footer-heading">Contact us</p>
          <address className="contacts">
            <p>
              <a className="footer-link" href="tel: +234 806 528 4720">
                Phone: +2348120162101
              </a>
              <br />
              <a className="footer-link" href="mailto:hello@brainstorm.ng">
                {" "}
                Email: info@rekod.io
              </a>
            </p>
          </address>
          {/* <ul className="social-links">
            <li>
              <a className="footer-link" href="#rekod">
                <LogoInstagram
                  color={"#82c91e"}
                  rotate
                  height="30px"
                  width="30px"
                />
              </a>
            </li>
            <li>
              <a className="footer-link" href="#rekod">
                <LogoFacebook
                  color={"#82c91e"}
                  rotate
                  height="30px"
                  width="30px"
                />
              </a>
            </li>
            <li>
              <a className="footer-link" href="#rekod">
                <LogoTwitter
                  color={"#82c91e"}
                  rotate
                  height="30px"
                  width="30px"
                />
              </a>
            </li>
            <li>
              <a className="footer-link" href="#go">
                <LogoLinkedin
                  color={"#82c91e"}
                  rotate
                  height="30px"
                  width="30px"
                />
              </a>
            </li>
          </ul> */}
        </Col>
      </Row>
    </footer>
  );
};
export default Footer;
