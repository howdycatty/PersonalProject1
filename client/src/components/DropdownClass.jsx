import React from "react";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";
import { FaCheck } from "react-icons/fa";

class DropdownClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      myProject: [],
      dropdownOpen: false,
      firstName: "",
      lastName: "",
      certifications: "",
      specializations: "",
      yogaStyle: "",
      rates: "",
      location: ""
    };
    this.toggle = this.toggle.bind(this);
  }
  toggle() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }

  // renderDropdown = () => {
  //   debugger;
  //   if (this.props.dropdownActive === true) {
  //     return (
  //       <ul className="dropdown-menu">
  //         {this.props.output}
  //         <li className="divider" />
  //         <li>
  //           <a href="#" onClick={this.props.doOrder} data-value="asc">
  //             ascending {this.props.order === "asc" ? this.props.checked : null}
  //           </a>
  //         </li>
  //         <li>
  //           <a href="#" onClick={this.props.doOrder} data-value="desc">
  //             descending{" "}
  //             {this.props.order === "desc" ? this.props.checked : null}
  //           </a>
  //         </li>
  //       </ul>
  //     );
  //   } else {
  //     return null;
  //   }
  // };

  render() {
    const {
      // dropdownActive,
      // toggle,
      orderBy,
      order,
      doOrderBy,
      doOrder
    } = this.props;
    const checked = (
      <span>
        <FaCheck />
      </span>
    );
    // const checked = <span className="glyphicon glyphicon-ok"> * </span>;
    const names = [
      ["firstName", "First Name"],
      ["lastName", "Last Name"],
      ["certifications", "Certifications"],
      ["specializations", "Specializations"],
      ["yogaStyle", "Yoga Style"],
      ["rates", "Rates"],
      ["location", "Location"]
    ];

    // const input = names; // array from the bottom of this script
    const output = names.map(item => {
      return (
        <div>
          <li>
            <a href="#" onClick={doOrderBy} data-value={item[0]}>
              {item[1]} {orderBy === item[0] ? checked : null}
            </a>
          </li>
          <li className="divider" />
        </div>
      );
    });

    // let renderDropdown = () => {
    //   debugger;
    //   if (dropdownActive === true) {
    //     return (
    //       <ul className="dropdown-menu">
    //         {output}
    //         <li className="divider" />
    //         <li>
    //           <a href="#" onClick={doOrder} data-value="asc">
    //             ascending {order === "asc" ? checked : null}
    //           </a>
    //         </li>

    //         <li>
    //           <a href="#" onClick={doOrder} data-value="desc">
    //             descending {order === "desc" ? checked : null}
    //           </a>
    //         </li>
    //       </ul>
    //     );
    //   } else {
    //     return null;
    //   }
    // };
    return (
      <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
        <DropdownToggle caret>Sort Items By</DropdownToggle>
        <DropdownMenu>
          {/* <DropdownItem header>Select to order by: </DropdownItem> */}
          <DropdownItem>{output}</DropdownItem>
          <DropdownItem href="#" onClick={doOrder} data-value="desc">
            Descending > Z-A{order === "desc" ? checked : null}
          </DropdownItem>
          <DropdownItem onClick={doOrder} data-value="asc">
            {" "}
            Ascending > A-Z{order === "asc" ? checked : null}
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
      // <div
      //   className={
      //     dropdownActive ? "dropdown  pull-right open" : "dropdown pull-right "
      //   }
      // >
      //   <a className="btn btn-info" onClick={toggle} href="#">
      //     Sort items by
      //     <span className="caret" />
      //   </a>
      //   <ul className="dropdown-menu">
      //     {output}
      //     <li className="divider" />
      //     <li>
      //       <a href="#" onClick={doOrder} data-value="asc">
      //         ascending {order === "asc" ? checked : null}
      //       </a>
      //     </li>
      //     <li>
      //       <a href="#" onClick={doOrder} data-value="desc">
      //         descending {order === "desc" ? checked : null}
      //       </a>
      //     </li>
      //   </ul>
      // </div>
    );
  }
}

export default DropdownClass;
