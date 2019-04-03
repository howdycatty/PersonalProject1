import React from "react";
import * as myProjectService from "../services/myProjectService";

import { Card, CardBody, CardFooter, Row, Col } from "reactstrap";

import CardAuthor from "components/CardElements/CardAuthor.jsx";
import Button from "components/CustomButton/CustomButton.jsx";

// class YogaPerson extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       myProject: []
//     };
//   }
//   render() {
//     const { data, orderBy } = this.props;
//     const input = categories; // array from the bottom of this script
//     const output = input.map(item => {
//       return (
//         <div>
//           <small className={orderBy === item ? "active" : null}>{item}:</small>{" "}
//           {data[item]}
//         </div>
//       );
//     });
//     return (
//       <div className="media">
//         <div className="media-left">
//           <img
//             className="media-object"
//             src={data.image}
//             alt={`${data.firstName} ${data.lastName}`}
//           />
//         </div>
//         <div className="media-body">
//           <h4 className="media-heading">
//             <span className={orderBy === "firstName" ? "active" : null}>
//               {data.firstName}{" "}
//             </span>
//             <span className={orderBy === "lastName" ? "active" : null}>
//               {data.lastName}
//             </span>
//           </h4>
//           <div>
//             <small>bio:</small> {data.bio}
//           </div>
//           {output}
//           <div>
//             <small>email:</small> <a href={data.email}> {data.email} </a>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }
// const names = [
//   ["firstName", "first name"],
//   ["lastName", "last name"],
//   ["certifications", "certifications"],
//   ["specializations", "specializations"],
//   ["yogaStyle", "yoga style"],
//   ["location", "location"],
//   ["rates", "rates"]
// ];
// const categories = [
//   "certifications",
//   "specializations",
//   "yogaStyle",
//   "location",
//   "rates"
// ];
// const data = [{ myProject }];

// export default YogaPerson;

class YogaPerson extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      myProject: []
    };
  }

  componentDidMount() {
    console.log("mounted");
    // myProjectService
    //   .getAllProfiles()
    //   .then(this.onGetAllSuccess)
    //   .catch(this.onError);
  }

  onGetAllSuccess = response => {
    console.log("successful get all profiles");
    this.setState({
      myProject: response.data.items
    });

    console.log(response.data.items);
  };

  onDeleteSuccess = () => {};

  onError = () => {
    console.log("error");
  };

  onProfileUpdate = (e, yoga) => {
    let id = yoga.id;
    this.props.history.push("/register/" + id, yoga);
  };

  onProfileDelete(e, yoga) {
    let id = yoga.id;

    myProjectService
      .deleteProfile(id)
      .then(response => {
        let list = [...this.state.myProject];
        let newList = list.filter(object => object.id !== yoga.id);
        this.setState({ myProject: [...newList] }, () =>
          console.log(this.state)
        );
      })
      .catch(this.onError);
  }

  mapProject = yoga => {
    // const input = categories; // array from the bottom of this script
    // const output = input.map(item => {
    //   return (
    //     <div>
    //       <small className={orderBy === item ? "active" : null}>{item}:</small>{" "}
    //       {myProject[item]}
    //     </div>
    //   );
    // });
    return (
      //   <div classname="row">
      <React.Fragment classname="row" key={yoga.id}>
        <Col md={4}>
          <Card className="card-user">
            <div className="image">
              <img
                src={
                  "https://images.pexels.com/photos/262325/pexels-photo-262325.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                }
                alt="..."
              />
            </div>
            <CardBody>
              <CardAuthor
                avatar={yoga.image}
                avatarAlt="..."
                title={yoga.firstName + " " + yoga.lastName}
                // className={orderBy === "firstName" ? "active" : null}
              />
              <div className="description text-center {}">
                {" "}
                <strong>Certifications: </strong>
                {yoga.certifications}
              </div>
              <div className="description text-center">
                {" "}
                <strong>Specializations: </strong>
                {yoga.specializations}
              </div>
              <div className="description text-center">
                {" "}
                <strong>Yoga Style: </strong>
                {yoga.yogaStyle}
              </div>
              <div className="description text-center">
                {" "}
                Rates: {yoga.rates}
              </div>
              <div className="description text-center">
                {" "}
                <strong>Location: </strong>
                {yoga.location}
              </div>

              <div className="description text-center">
                <strong>Bio: </strong>
                {yoga.bio}
              </div>
            </CardBody>
            <hr />
            <Col lg={12} className="mr-auto   text-center">
              <div>
                <small>{yoga.website}</small>
              </div>
            </Col>
            <hr />
            <Col lg={12} className="mr-auto   text-center">
              <div>
                <small>{yoga.email}</small>
              </div>
            </Col>
            <hr />
            <Col lg={12} className="mr-auto   text-center">
              <div>
                <small>{yoga.phone}</small>
              </div>
            </Col>

            <CardFooter>
              {/* <hr />
              <div className="button-container">
                <Row>
                  <Col xs={6} sm={6} md={6} lg={6} className="ml-auto">
                    <div>
                      <small>{yoga.email}</small>
                    </div>
                  </Col>
                  <Col xs={6} sm={6} md={6} lg={4} className="mr-auto ml-auto">
                    <div>
                      <small>{yoga.phone}</small>
                    </div>
                  </Col>
                </Row>
              </div> */}

              <hr />
              <Row>
                <div
                  onClick={e => this.onProfileUpdate(e, yoga)}
                  className=" ml-auto mr-auto"
                >
                  <Button size="sm" color="success">
                    Update
                  </Button>
                </div>
                <div
                  onClick={e => this.onProfileDelete(e, yoga)}
                  className=" ml-auto mr-auto"
                >
                  <Button size="sm" color="danger">
                    Delete
                  </Button>
                </div>
              </Row>
            </CardFooter>
          </Card>
        </Col>
      </React.Fragment>
      //   </div>
    );
  };

  render() {
    // const profileList = this.state.myProject.map(this.mapProject);
    // const categories = ["let's see ... ", "job", "city", "gender"];
    // const { myProject, orderBy } = this.props;
    // const input = categories; // array from the bottom of this script
    // const output = input.map(item => {
    //   return (
    //     <div>
    //       <small className={orderBy === item ? "active" : null}>{item}:</small>{" "}
    //       {myProject[item]}
    //     </div>
    //   );
    // });
    return (
      <React.Fragment>
        {this.mapProject(this.props.yoga)}
        {/* {profileList} */}
      </React.Fragment>
    );
  }

  //   render() {
  //     const categories = ["certification ", "job", "city", "gender"];
  //     const { myProject, orderBy } = this.props;
  //     const input = categories; // array from the bottom of this script
  //     const output = input.map(item => {
  //       return (
  //         <div>
  //           <small className={orderBy === item ? "active" : null}>{item}:</small>{" "}
  //           {myProject[item]}
  //         </div>
  //       );
  //     });
  //     return (
  //       <div className="media">
  //         <div className="media-left">
  //           <img
  //             className="media-object"
  //             style={{ objectFit: "contain" }}
  //             height="400"
  //             width="200"
  //             src={myProject.image}
  //             alt={`${myProject.firstName} ${myProject.lastName}`}
  //           />
  //         </div>
  //         <div className="media-body">
  //           <h4 className="media-heading">
  //             <span className={orderBy === "firstName" ? "active" : null}>
  //               {myProject.firstName}{" "}
  //             </span>
  //             <span className={orderBy === "lastName" ? "active" : null}>
  //               {myProject.lastName}
  //             </span>
  //           </h4>
  //           <div>
  //             <small>about:</small> {myProject.rates}
  //           </div>
  //           {output}
  //           <div>
  //             <small>email:</small>{" "}
  //             <a href={myProject.email}> {myProject.email} </a>
  //           </div>
  //         </div>
  //       </div>
  //     );
  //   }
}

export default YogaPerson;
