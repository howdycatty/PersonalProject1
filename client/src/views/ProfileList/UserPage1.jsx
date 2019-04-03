import React from "react";
import * as myProjectService from "../../services/myProjectService";

import {
  // Card, CardBody, CardFooter, Col,
  Row
} from "reactstrap";

// import CardAuthor from "components/CardElements/CardAuthor.jsx";
// import Button from "components/CustomButton/CustomButton.jsx";
import Dropdown from "components/DropdownClass";
import YogaPerson from "components/YogaPerson";
import _ from "lodash";

class UserPage1 extends React.Component {
  constructor() {
    super();
    this.state = {
      myProject: [],
      orderBy: "firstName",
      order: "asc",
      dropdownActive: true
    };
    this.doOrderBy = this.doOrderBy.bind(this);
    this.doOrder = this.doOrder.bind(this);
    this.toggle = this.toggle.bind(this);
  }
  //////////////////////////////
  componentDidMount() {
    console.log("mounted");
    myProjectService
      .getAllProfiles()
      .then(this.onGetAllSuccess)
      .catch(this.onError);
  }
  onGetAllSuccess = response => {
    console.log("successful get all profiles");

    this.setState({
      myProject: response.data.items
    });

    console.log(response.data);
  };
  onDeleteSuccess = () => {};

  onError = () => {
    console.log("error");
  };

  onProfileUpdate = (e, yoga) => {
    let id = yoga.id;
    this.props.history.push("/createprofile/" + id, yoga);
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
  //////////////////////////////////////
  toggle(e) {
    e.preventDefault();
    let isActive = this.state.dropdownActive;
    isActive = !isActive;
    this.setState({ dropdownActive: isActive });
  }
  doOrderBy(e) {
    e.preventDefault();
    const newOrderBy = e.target.getAttribute("data-value");
    this.setState({ orderBy: newOrderBy });
  }
  doOrder(e) {
    e.preventDefault();
    const newOrder = e.target.getAttribute("data-value");
    this.setState({ order: newOrder });
  }
  render() {
    const orderBy = this.state.orderBy;
    const order = this.state.order;
    let sorted = this.state.myProject;

    sorted = _.orderBy(
      sorted,
      item => {
        return item[orderBy];
      },
      order
    );

    const items = sorted.map(item => {
      return (
        <YogaPerson yoga={item} key={item.id} orderBy={this.state.orderBy} />
      );
    });

    return (
      <React.Fragment>
        <div className="content">
          <div className="clearfix">
            <Dropdown
              toggle={this.toggle}
              dropdownActive={this.state.dropdownActive}
              doOrderBy={this.doOrderBy}
              doOrder={this.doOrder}
              orderBy={this.state.orderBy}
              order={this.state.order}
            />
          </div>
          <Row tag="div">{items}</Row>
        </div>
      </React.Fragment>
    );
  }
}

export default UserPage1;
