import React from "react";
import { Row, Col } from "reactstrap";

// import icons from "variables/icons";
import Articles from "../../components/Articles";

class Blogs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      certifications: "",
      specializations: "",
      yogaStyle: "",
      bio: "",
      rates: "",
      location: "",
      website: "",
      email: "",
      phone: "",
      image: ""
    };
  }
  render() {
    // let props = this.props;
    return (
      <div className="content">
        <Row>
          {/* <Col md={8}>
            <Card className="demo-icons"> */}
          {/* <ProfileCard {...props} /> */}

          {/* <CardHeader> */}
          {/* <CardTitle>100 Awesome Nucleo Icons</CardTitle>
                <p className="card-category">
                  Handcrafted by our friends from{" "}
                  <a href="https://nucleoapp.com/?ref=1712">NucleoApp</a>
                </p> */}
          {/* </CardHeader> */}
          {/* <CardBody className="all-icons">
                <div id="icons-wrapper"> */}
          {/* <ProfileCard data={this.state} /> */}

          {/* <section>
                    <ul>
                      {icons.map((prop, key) => {
                        return (
                          <li key={key}>
                            <i className={"nc-icon " + prop.name} />
                            <p>{prop.name}</p>
                            <em>{prop.content}</em>
                          </li>
                        );
                      })}
                    </ul>
                  </section> */}
          {/* </div>
              </CardBody>
            </Card>
          </Col> */}

          <Col md={12}>
            <Articles data={this.state} />
          </Col>
        </Row>
      </div>
    );
  }
}

export default Blogs;
