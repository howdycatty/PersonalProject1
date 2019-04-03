import React from "react";
import * as myProjectService from "../services/myProjectService";
import {
  //  CardTitle,
  Row,
  Col
} from "reactstrap";
import Button from "components/CustomButton/CustomButton.jsx";
import * as schemas from "../components/models/yogaSchemas";

// const validate = ({ firstName, lastName }) => {
//   return {
//     firstName:
//       !firstName || firstName.trim().length === 0
//         ? "First Name is required"
//         : false,
//     lastName:
//       !lastName || lastName.trim().length === 0
//         ? "Last Name is required"
//         : false
//   };
// };

// const Input = ({ label, error, onChange, name, value }) => (
//   <label>
//     {label}:
//     <input name={name} type="text" value={value} onChange={onChange} />
//     {error && <span style={errorStyle}>{error}</span>}
//   </label>
// );

// const errorStyle = { color: "red" };

class CreateProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // myProject: []
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
      // id: 0

      // yoga: {}
    };

    this.validation = schemas.getYogaSchema;
    // this.state = props.intitialState;
  }

  componentDidMount() {
    console.log(this.props.location.state);
    if (this.props.location.state !== undefined) {
      let newState = this.props.location.state;
      // this.setState({ myProject: newState.myProject });
      this.setState({
        firstName: newState.firstName,
        lastName: newState.lastName,
        certifications: newState.certifications,
        specializations: newState.specializations,
        yogaStyle: newState.yogaStyle,
        bio: newState.bio,
        rates: newState.rates,
        location: newState.location,
        image: newState.image,
        website: newState.website,
        email: newState.email,
        phone: newState.phone,
        id: newState.id
      });
    } else {
      return null;
    }
  }
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();
    const payload = {
      // myProject: this.state.myProject
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      certifications: this.state.certifications,
      specializations: this.state.specializations,
      yogaStyle: this.state.yogaStyle,
      bio: this.state.bio,
      rates: this.state.rates,
      location: this.state.location,
      image: this.state.image,
      website: this.state.website,
      email: this.state.email,
      phone: this.state.phone,
      id: this.state.id
    };
    if (this.props.location.state === undefined) {
      myProjectService
        .submitProfile(payload)
        .then(this.onSuccess)
        .catch(this.onError);
    } else {
      myProjectService
        .updateProfile(this.props.location.state.id, payload)
        .then(this.onSuccess)
        .catch(this.onError);
    }

    // this.props.location.state === undefined
    //   ? myProjectService
    //       .submitProfile(payload)
    //       .then(this.onSuccess)
    //       .catch(this.onError)
    //   : myProjectService
    //       .updateProfile(this.props.location.state, payload)
    //       .then(this.onSuccess)
    //       .catch(this.onError);
  };

  onSuccess = payload => {
    console.log("successful  ya", payload);
    this.props.history.push("/profilelist/");
    console.log(this.props);
    // const id = e.target.id;
    // this.props.history.push("/icons/" + id);
    // console.log(this.props.match.params.id);
  };

  onError = () => {
    console.log("boo boo");
  };

  render() {
    // const validate = ({ firstName, lastName }) => {
    //   return {
    //     firstName:
    //       !firstName || firstName.trim().length === 0
    //         ? "First Name is required"
    //         : false,
    //     lastName:
    //       !lastName || lastName.trim().length === 0
    //         ? "Last Name is required"
    //         : false
    //   };
    // };

    // const errors = validate;
    return (
      <React.Fragment>
        <div className="content">
          <Row>
            <Col xs={2} />
            <Col xs={8}>
              <div className="content-wrapper">
                <div className="content-heading" />
                <div className="row">
                  <div className="col-xl-12">
                    <div className="card card-default">
                      <div className="card-body">
                        <section className="flat-row contact-2">
                          <div className="container">
                            <div className="row">
                              <div className="col-md-12">
                                <div className="reservation-page-right" />
                              </div>
                              <div className="col-md-12">
                                <div className="reservation-page-center">
                                  <div className="reservation-page-form">
                                    <div className="title-section">
                                      {/* <CardTitle className="title text-center"> */}
                                      <h3 className=" text-center">
                                        Create Profile
                                      </h3>
                                      {/* </CardTitle> */}
                                    </div>
                                    <form
                                      id="reservation-form"
                                      action="contact/contact-process.php"
                                      noValidate="novalidate"
                                    >
                                      <div className="reservation-page-input-box">
                                        <label>First Name</label>
                                        <input
                                          type="text"
                                          className="form-control"
                                          placeholder="First Name"
                                          name="firstName"
                                          id="form-firstName"
                                          data-error="Subject field is required"
                                          required
                                          value={this.state.firstName}
                                          onChange={e => this.handleChange(e)}
                                        />

                                        {/* {errors.firstName && (
                                          <span className="error">
                                            {errors.firstName}
                                          </span>
                                        )} */}
                                      </div>
                                      <div className="reservation-page-input-box">
                                        <label>Last Name</label>
                                        <input
                                          type="text"
                                          className="form-control"
                                          placeholder="Last Name"
                                          name="lastName"
                                          id="form-lastName"
                                          data-error="Subject field is required"
                                          required
                                          value={this.state.lastName}
                                          onChange={e => this.handleChange(e)}
                                        />
                                      </div>
                                      <div className="reservation-page-input-box">
                                        <label>Certifications</label>
                                        <input
                                          type="email"
                                          className="form-control"
                                          placeholder="Enter your certifications"
                                          name="certifications"
                                          id="form-certifications"
                                          data-error="Subject field is required"
                                          required
                                          value={this.state.certifications}
                                          onChange={e => this.handleChange(e)}
                                        />
                                      </div>
                                      <div className="reservation-page-input-box">
                                        <label>Specializations</label>
                                        <input
                                          type="text"
                                          className="form-control"
                                          placeholder="Your specializations"
                                          name="specializations"
                                          id="form-specializations"
                                          data-error="Specializations field is required"
                                          required
                                          value={this.state.specializations}
                                          onChange={e => this.handleChange(e)}
                                        />
                                      </div>
                                      <div className="reservation-page-input-box">
                                        <label>Yoga Style</label>
                                        <input
                                          type="text"
                                          className="form-control"
                                          placeholder="Enter style of Yoga"
                                          name="yogaStyle"
                                          id="form-yogaStyle"
                                          data-error="Yoga Style field is required"
                                          required
                                          value={this.state.yogaStyle}
                                          onChange={e => this.handleChange(e)}
                                        />
                                      </div>

                                      <div className="reservation-page-textarea">
                                        <label>Bio</label>
                                        <textarea
                                          className="form-control your-bio"
                                          placeholder="Write a brief bio about yourself.."
                                          name="bio"
                                          id="form-bio"
                                          // defaultValue={""}
                                          value={this.state.bio}
                                          onChange={e => this.handleChange(e)}
                                        />
                                      </div>

                                      <div className="reservation-page-input-box">
                                        <label>Rates</label>
                                        <input
                                          type="text"
                                          className="form-control"
                                          placeholder="Enter rates"
                                          name="rates"
                                          id="form-rates"
                                          data-error="Rates field is required"
                                          required
                                          value={this.state.rates}
                                          onChange={e => this.handleChange(e)}
                                        />
                                      </div>

                                      <div className="reservation-page-input-box">
                                        <label>Location</label>
                                        <input
                                          type="text"
                                          className="form-control"
                                          placeholder="Enter your location"
                                          name="location"
                                          id="form-location"
                                          data-error="Location field is required"
                                          required
                                          value={this.state.location}
                                          onChange={e => this.handleChange(e)}
                                        />
                                      </div>

                                      <div className="reservation-page-input-box">
                                        <label>Image</label>
                                        <input
                                          type="text"
                                          className="form-control"
                                          placeholder="Enter image URL"
                                          name="image"
                                          id="form-image"
                                          data-error="Image field is required"
                                          required
                                          value={this.state.image}
                                          onChange={e => this.handleChange(e)}
                                        />
                                      </div>

                                      <div className="reservation-page-input-box">
                                        <label>Website</label>
                                        <input
                                          type="text"
                                          className="form-control"
                                          placeholder="Enter website URL"
                                          name="website"
                                          id="form-website"
                                          data-error="Website field is required"
                                          required
                                          value={this.state.website}
                                          onChange={e => this.handleChange(e)}
                                        />
                                      </div>

                                      <div className="reservation-page-input-box">
                                        <label>Email</label>
                                        <input
                                          type="text"
                                          className="form-control"
                                          placeholder="Enter your email"
                                          name="email"
                                          id="form-email"
                                          data-error="Email field is required"
                                          required
                                          value={this.state.email}
                                          onChange={e => this.handleChange(e)}
                                        />
                                      </div>

                                      <div className="reservation-page-input-box">
                                        <label>Phone</label>
                                        <input
                                          type="text"
                                          className="form-control"
                                          placeholder="Enter your phone number"
                                          name="phone"
                                          id="form-phone"
                                          data-error="Phone number field is required"
                                          required
                                          value={this.state.phone}
                                          onChange={e => this.handleChange(e)}
                                        />
                                      </div>

                                      <br />
                                      <div className="reservation-booking">
                                        <Row>
                                          <div
                                            onClick={e => this.onSubmit(e)}
                                            className="update ml-auto mr-auto"
                                          >
                                            <Button
                                              // disabled={!isEnabled}
                                              color="primary"
                                            >
                                              Submit Profile
                                            </Button>
                                          </div>
                                        </Row>

                                        <br />
                                        <br />
                                      </div>
                                    </form>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </section>
                      </div>
                    </div>
                  </div>
                </div>{" "}
              </div>
            </Col>
            <Col xs={2} />
          </Row>
        </div>
      </React.Fragment>
    );
  }
}

export default CreateProfile;
