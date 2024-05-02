import { Card, CardBody } from 'reactstrap';
import Base from '../components/Base';
import userContext from '../context/userContext';

const Services = () => {
  return (
    <userContext.Consumer>
      {(object) => (
        <Base>
          <div className="container">
            <h1 className="mb-4">Our Services</h1>
            <div className="row">
              <div className="col-md-6">
                <Card className="shadow-sm mb-4">
                  <CardBody>
                    <h2>Blog Creation</h2>
                    <p>
                      We offer a user-friendly platform to create and manage
                      your own blogs effortlessly. With our intuitive interface,
                      you can start sharing your stories in no time.
                    </p>
                  </CardBody>
                </Card>
              </div>
              <div className="col-md-6">
                <Card className="shadow-sm mb-4">
                  <CardBody>
                    <h2>Community Engagement</h2>
                    <p>
                      Join our vibrant community of bloggers and readers. Engage
                      with fellow bloggers, share feedback, and discover new
                      perspectives. Together, we can create a supportive and
                      inspiring environment.
                    </p>
                  </CardBody>
                </Card>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <Card className="shadow-sm mb-4">
                  <CardBody>
                    <h2>Customization Options</h2>
                    <p>
                      Customize your blog to reflect your personality and style.
                      Choose from a variety of themes, fonts, and colors to
                      create a unique look that represents you.
                    </p>
                  </CardBody>
                </Card>
              </div>
              <div className="col-md-6">
                <Card className="shadow-sm mb-4">
                  <CardBody>
                    <h2>Technical Support</h2>
                    <p>
                      Our dedicated support team is here to assist you with any
                      technical issues or questions you may have. We are
                      committed to ensuring that your blogging experience is
                      smooth and hassle-free.
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

export default Services;
