import { Card, CardBody } from 'reactstrap';
import Base from '../components/Base';
import userContext from '../context/userContext';

const About = () => {
  return (
    <userContext.Consumer>
      {(object) => (
        <Base>
          <div className="container">
            <h1 className="mb-4">About Us</h1>
            <div className="row">
              <div className="col-md-6">
                <Card className="shadow-sm mb-4">
                  <CardBody>
                    <h2>Our Mission</h2>
                    <p>
                      At MyBlogs, our mission is to provide a platform for
                      everyone to share their thoughts, stories, and ideas
                      through blogging. We aim to create a community where users
                      can connect, learn, and inspire each other.
                    </p>
                  </CardBody>
                </Card>
              </div>
              <div className="col-md-6">
                <Card className="shadow-sm mb-4">
                  <CardBody>
                    <h2>Our Vision</h2>
                    <p>
                      We envision a world where blogging is a powerful tool for
                      expression, creativity, and knowledge-sharing. Our vision
                      is to empower individuals to become confident writers
                      while fostering a supportive and inclusive blogging
                      community.
                    </p>
                  </CardBody>
                </Card>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <Card className="shadow-sm">
                  <CardBody>
                    <h2>Meet Our Team</h2>
                    <p>
                      Our team consists of passionate individuals who are
                      dedicated to making MyBlogs a great platform for bloggers
                      worldwide. We believe in teamwork, innovation, and
                      continuous improvement.
                    </p>
                    <p>
                      <strong>Shiva Srivastava</strong> - Founder & CEO <br />
                      <strong>Shiva Srivastava</strong> - Chief Editor <br />
                      <strong>Shiva Srivastava</strong> - Head of Development
                      <br />
                      <strong>Shiva Srivastava</strong> - Content Manager <br />
                      <strong>Shiva Srivastava</strong> - Marketing Manager
                    </p>
                  </CardBody>
                </Card>
              </div>
            </div>
          </div>
          <h1>Welcome, {object.user.login && object.user.data.name}!</h1>
        </Base>
      )}
    </userContext.Consumer>
  );
};

export default About;
