import { Container,Col,Row } from 'reactstrap'

const Home = () => {
  return (
<>
  <section className="section-us" id="how">
    <div className="container">
      <div className="center">
        <span className="subheading">Who we are</span>
        <h2 className="heading-secondary">About Rekod Finance;</h2>
      </div>
      <Row className="">
        <Col className="feature col-lg-4  col-md-4 col-sm-12">
          {/* <CashSharp
            color={'#82c91e'}
            beat
            height="100px" 
            width="100px"
  
          /> */}
          <p className="feature-title">Wealth Management</p>
          <p className="feature-text">
            Become accountable to yourself. Maximize your wealth and prepare for your future.
          </p>
        </Col>
      <Col className="feature col-lg-4 col-md-4 col-sm-12">
        {/* <BarChart
          color={'#82c91e'}
          beat
          height="100px" 
          width="100px"
        /> */}
        <p className="feature-title">Finance Tracker</p>
        <p className="feature-text">
          Track your daily expenses and visualize your daily income and expenditure.
        </p>
      </Col>
      <Col className="feature col-lg-4 col-md-4 col-sm-12">
        {/* <WalletSharp
          color={'#82c91e'}
          beat
          height="100px" 
          width="100px"
     /> */}
        <p className="feature-title">Spend Control</p>
        <p className="feature-text">Join our premium community and get insights on how to maximize cost and increase wealth.</p>
      </Col>            
    </Row>            
    </div>
  </section>
  <div className="section-featured center">
    <blockquote className="heading-featured-in">"Beware of little expenses; a small leak will sink a great ship." <br/>
      <p className="">&mdash; Benjamin Franklin</p>
    </blockquote>
  </div>
  <section className="section-how" id="how">
    <Container className="container center">
      <span className="subheading">How it works</span>
      <h2 className="heading-secondary">What Rekod Finance does</h2>
    </Container>
    <Row>        
      <Col md={4} style={{paddingLeft:80}}>
        <h3 className="heading-tertiary">Daily Income Tracking</h3>
        <p className="step-descriptions">Use Rekod finance to track your daily income and expenditure.This would enable you identify irrelevant expenses and be intentional about planning, saving and investing for the future.</p>
      </Col>
      <Col md={8} className="center">
        {/* <img
          src={laptop}
          className="step-img"
          alt="rekod"
        /> */}
      </Col>
    </Row>
  </section>
  <section className="section-testimonials">
        <Container>
          <Row>
            <Col>
              <span className="subheading">Testimonials</span>
              <h2 className="heading-secondary">Our Customers can't do without us</h2>
            </Col>
          </Row>
          <Row className="">
            <div className="col-md-4">
              <blockquote>
                Rekod helps me articulate my daily income and expenditure. I am able to efficiently track my expenses
                and increase my savings.
                <cite>Nancy Craig</cite>
              </blockquote>
            </div>
            <div className="col-md-4">
              <blockquote>
                Without Rekod, I wouldnt have been able to categorize my expenses and identify where a bulk of my income
                is going into.
                <cite>Anu Michaels</cite>
              </blockquote>
            </div>
            <div className="col-md-4">
              <blockquote>
                Asides leveraging this platform to track my daily finance, I am part of the premium Rekod community and
                I am able to learn more about increasing my income and investing strategically.
                <cite>Joseph Johnson</cite>
              </blockquote>
            </div>
          </Row>
        </Container>
      </section>

  </>)
}
export default Home;