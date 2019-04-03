import React from "react";
import * as myProjectService from "../services/myProjectService";

import { Card, CardBody, CardFooter, Row, Col } from "reactstrap";

import CardAuthor from "components/CardElements/CardAuthor.jsx";
// import FormInputs from "components/FormInputs/FormInputs.jsx";
import Button from "components/CustomButton/CustomButton.jsx";

import damirBosnjak from "assets/img/damir-bosnjak.jpg";
// import Register from "components/Register";

class ProfileCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      myProject: []
    };
  }
  componentDidMount() {
    debugger;
    console.log(this.props.data);
  }
  //   componentDidMount() {
  //     console.log("mounted");
  //     myProjectService
  //       .getAllProfiles()
  //       .then(this.onGetAllSuccess)
  //       .catch(this.onError);
  //   }

  //   onGetAllSuccess = response => {
  //     console.log("successful get all profiles");
  //     // debugger;
  //     this.setState({
  //       myProject: response.data.items
  //     });

  //     console.log(response.data.items);
  //   };

  //   onError = () => {
  //     console.log("get all profiles error");
  //   };

  // onSubmit = e => {
  //   e.preventDefault();
  //   // console.log(values);
  //   debugger;
  //   const payload = this.props.data;
  //   console.log(payload);
  //   myProjectService
  //     .submitProfile(payload)
  //     .then(this.onSuccess)
  //     .catch(this.onError);
  // };

  // onSuccess = () => {
  //   console.log("successful ya");
  //   // console.log(this.props.match.params.id);
  // };

  // onError = () => {
  //   console.log("boo boo");
  // };

  render() {
    return (
      <React.Fragment>
        <div className="content">
          <Row>
            {/* <React.Fragment key={yoga.id}> */}
            {/* <div className="content"> */}
            {/* <Row> */}
            <Col md={12}>
              <Card className="card-user">
                <div className="image">
                  <img src={damirBosnjak} alt="..." />
                </div>
                <CardBody>
                  <CardAuthor
                    avatar={this.props.data.image}
                    avatarAlt="..."
                    title={
                      this.props.data.firstName + " " + this.props.data.lastName
                    }
                  />
                  <p className="description text-center">
                    {" "}
                    Certifications: {this.props.data.certifications}
                  </p>
                  <p className="description text-center">
                    {" "}
                    Specializations: {this.props.data.specializations}
                  </p>
                  <p className="description text-center">
                    {" "}
                    Yoga Style: {this.props.data.yogaStyle}
                  </p>
                  <p className="description text-center">
                    {" "}
                    Rates: {this.props.data.rates}
                  </p>
                  <p className="description text-center">
                    {" "}
                    Location: {this.props.data.location}
                  </p>

                  <p className="description text-center">
                    Bio: {this.props.data.bio}
                  </p>
                </CardBody>
                {/* <p className="description text-center"> Website: </p> */}
                <hr />
                <Col lg={12} className="mr-auto   text-center">
                  <h7>
                    Website:
                    <br />
                    <small>{this.props.data.website}</small>
                  </h7>
                </Col>

                <CardFooter>
                  <hr />
                  <div className="button-container">
                    <Row>
                      <Col xs={6} sm={6} md={6} lg={6} className="ml-auto">
                        {/* <Col xs={6} sm={6} md={6} lg={3} className="ml-auto"> */}
                        <h7>
                          Email:
                          <br />
                          <small>{this.props.data.email}</small>
                        </h7>
                      </Col>
                      <Col
                        xs={6}
                        sm={6}
                        md={6}
                        lg={4}
                        className="mr-auto ml-auto"
                      >
                        <h7>
                          Phone:
                          <br />
                          <small>{this.props.data.phone}</small>
                        </h7>
                      </Col>
                    </Row>
                  </div>

                  <hr />
                  <Row>
                    <div onClick={this.onSubmit} className=" ml-auto mr-auto">
                      <Button size="sm" color="primary">
                        Confirm
                      </Button>
                    </div>
                    <div
                      //    onClick={this.onSubmit}
                      className=" ml-auto mr-auto"
                    >
                      <Button size="sm" color="success">
                        Update
                      </Button>
                    </div>
                    <div
                      //    onClick={this.onSubmit}
                      className=" ml-auto mr-auto"
                    >
                      <Button size="sm" color="danger">
                        Delete
                      </Button>
                    </div>
                  </Row>

                  {/* <Row>
                    <div
                      //    onClick={this.onSubmit}
                      className="update ml-auto mr-auto"
                    >
                      <Button color="primary" round>
                        Update
                      </Button>
                    </div>
                  </Row> */}
                </CardFooter>
              </Card>
            </Col>{" "}
          </Row>
        </div>
      </React.Fragment>
    );
  }
}

export default ProfileCard;
