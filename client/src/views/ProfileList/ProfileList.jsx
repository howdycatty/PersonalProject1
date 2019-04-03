import React from "react";
import * as myProjectService from "../../services/myProjectService";
import Pagination from "react-paginating";

import { Card, CardBody, CardFooter, Row, Col } from "reactstrap";

import CardAuthor from "components/CardElements/CardAuthor.jsx";
// import FormInputs from "components/FormInputs/FormInputs.jsx";
import Button from "components/CustomButton/CustomButton.jsx";

class ProfileList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      myProject: [],
      pageIndex: 0,
      pageSize: 3,
      totalCount: 12,
      totalPages: 4,
      currentPage: 1
    };
  }

  componentDidMount() {
    console.log("mounted");
    myProjectService
      .getAllProfiles()
      .then(this.onGetAllSuccess)
      .catch(this.onError);

    myProjectService
      .getProfilePage(0, this.state.pageSize)
      .then(this.onGetProfilePageSuccess)
      .catch(this.onGetProfilePageError);
  }

  handlePageChange = page => {
    this.setState({
      currentPage: page
    });
    myProjectService
      .getProfilePage(page - 1, this.state.pageSize)
      .then(this.onGetProfilePageSuccess)
      .catch(this.onGetProfilePageError);
  };

  onGetProfilePageSuccess = response => {
    console.log("Profile page success");
    this.setState({
      myProject: response.data.item.pagedItems
    });
    console.log("hi", response.data.item.pagedItems);
  };

  onGetProfilePageError = response => {
    console.log("Profile page Error");
  };

  onGetAllSuccess = response => {
    console.log("successful get all profiles");
    this.setState({
      myProject: response.data.items
    });

    console.log(response.data);
  };

  onDeleteSuccess = () => {
    // console.log("delete success");
    // let list = [...this.state.myProject];
    // console.log(this.state.replies);
    // let newList = list.filter(object => object.id !== myProject.id);
    // // console.log(newComments);
    // this.setState({ list: [...newList] }, () => console.log(this.state));
  };

  onError = () => {
    console.log("error");
  };

  onProfileUpdate = (e, yoga) => {
    let id = yoga.id;
    this.props.history.push("/createprofile/" + id, yoga);
  };

  onProfileDelete(e, yoga) {
    let id = yoga.id;
    // this.props.history.push("/user-page/", yoga);

    myProjectService
      .deleteProfile(id)
      .then(response => {
        let list = [...this.state.myProject];
        let newList = list.filter(object => object.id !== yoga.id);
        // console.log(newComments);
        this.setState({ myProject: [...newList] }, () =>
          console.log(this.state)
        );
      })
      .catch(this.onError);
  }

  mapProject = yoga => {
    return (
      <React.Fragment key={yoga.id}>
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
              />
              <p className="description text-center">
                {" "}
                Certifications: {yoga.certifications}
              </p>
              <p className="description text-center">
                {" "}
                Specializations: {yoga.specializations}
              </p>
              <p className="description text-center">
                {" "}
                Yoga Style: {yoga.yogaStyle}
              </p>
              <p className="description text-center"> Rates: {yoga.rates}</p>
              <p className="description text-center">
                {" "}
                Location: {yoga.location}
              </p>

              <p className="description text-center">Bio: {yoga.bio}</p>
            </CardBody>
            <hr />
            <Col lg={12} className="mr-auto   text-center">
              <small>
                Website:
                <br />
                <div>{yoga.website}</div>
              </small>
            </Col>

            <CardFooter>
              <hr />
              <div className="button-container">
                <Row>
                  <Col xs={6} sm={6} md={6} lg={6} className="ml-auto">
                    <small>
                      Email:
                      <br />
                      <div>{yoga.email}</div>
                    </small>
                  </Col>
                  <Col xs={6} sm={6} md={6} lg={4} className="mr-auto ml-auto">
                    <small>
                      Phone:
                      <br />
                      <div>{yoga.phone}</div>
                    </small>
                  </Col>
                </Row>
              </div>

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
    );
  };

  pagination = () => {
    const { currentPage } = this.state;
    return (
      <Pagination
        total={this.state.totalCount}
        limit={this.state.pageSize}
        pageCount={this.state.totalPage}
        currentPage={currentPage}
      >
        {({
          pages,
          currentPage,
          hasNextPage,
          hasPreviousPage,
          previousPage,
          nextPage,
          totalPages,
          getPageItemProps
        }) => (
          <nav>
            <div className="pagination">
              <li
                className="page-item"
                {...getPageItemProps({
                  pageValue: 1,
                  onPageChange: this.handlePageChange
                })}
              >
                <a className="page-link" aria-label="Previous">
                  <span aria-hidden="true">«</span>
                </a>
              </li>
              {hasPreviousPage && (
                <li
                  {...getPageItemProps({
                    pageValue: previousPage,
                    onPageChange: this.handlePageChange
                  })}
                  className="page-item"
                >
                  <a className="page-link">{"<"}</a>
                </li>
              )}
              {pages.map(page => {
                let activePage = null;
                if (currentPage === page) {
                  activePage = { backgroundColor: "#37bc9b" };
                }
                return (
                  <li className="page-item" key={page}>
                    <a
                      className="page-link"
                      style={activePage}
                      {...getPageItemProps({
                        pageValue: page,
                        onPageChange: this.handlePageChange
                      })}
                    >
                      {page}
                    </a>
                  </li>
                );
              })}
              {hasNextPage && (
                <li
                  className="page-item"
                  {...getPageItemProps({
                    pageValue: nextPage,
                    onPageChange: this.handlePageChange
                  })}
                >
                  <a className="page-link">{">"}</a>
                </li>
              )}
              <li
                className="page-item"
                {...getPageItemProps({
                  pageValue: totalPages,
                  onPageChange: this.handlePageChange
                })}
              >
                <a className="page-link" aria-label="Next">
                  <span aria-hidden="true">»</span>
                </a>
              </li>
            </div>
          </nav>
        )}
      </Pagination>
    );
  };

  render() {
    const profileList = this.state.myProject.map(this.mapProject);
    return (
      <React.Fragment>
        <div className="content">
          <Row>{profileList}</Row>
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          {this.pagination()}
        </div>
      </React.Fragment>
    );
  }
}

export default ProfileList;
