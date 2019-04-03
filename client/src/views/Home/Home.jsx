import React from "react";
import * as myProjectService from "../../services/myProjectService";
import { Col } from "reactstrap";
// react plugin used to create charts
// import { Line, Pie } from "react-chartjs-2";
// function that returns a color based on an interval of numbers

// import Stats from "components/Stats/Stats.jsx";

// import {
//   dashboard24HoursPerformanceChart,
//   dashboardEmailStatisticsChart,
//   dashboardNASDAQChart
// } from "variables/charts.jsx";

class Home extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     image: "",
  //     name: "",
  //     date: "",
  //     // horoscopes: []
  //   };
  // }

  // componentDidMount() {
  //   this.setState({
  //     // image: state.image,
  //     // name: state.name,
  //     // date: state.date
  //   });

  //   myProjectService
  //     .getHoroscopes()
  //     .then(this.onSuccess)
  //     .catch(this.onError);
  // }

  // onSuccess = resp => {
  //   console.log("successs get horoscopes");
  //   console.log(resp.data.items);
  //   this.setState({
  //     horoscopes: resp.data.items
  //   });
  //   // console.log(this.state.horoscopes[2]);
  // };

  // onError = () => {
  //   console.log("Error on horoscopes");
  // };

  // mapScraper = astro => {
  //   // let astro = this.state.horoscopes;
  //   console.log("astro", astro);
  //   return (
  //     <React.Fragment>
  //       <Col lg={12}>
  //         <div className="mr-auto   text-center">
  //           <img src={astro.image} alt="..." />
  //         </div>
  //         <div className="mr-auto   text-center"> {astro.name} </div>
  //         <div className="mr-auto   text-center"> {astro.date}</div>
  //       </Col>
  //     </React.Fragment>
  //   );
  // };

  render() {
    return (
      <div className="content text-center">
        <img
          src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/766/yoga-in-beautiful-places-main-1516368886.jpg?resize=5760:*"
          alt=""
          className="img-responsive"
        />
        <br />
        <br />
        <Col md={12} className="text-center">
          <div className="text-center">
            <blockquote className="blockquote blockquote-muted text-center">
              "True yoga is not about the shape of your body, but the shape of
              your life. Yoga is not to be performed; yoga is to be lived. Yoga
              doesn’t care about what you have been; yoga cares about the person
              you are becoming. Yoga is designed for a vast and profound
              purpose, and for it to be truly called yoga, its essence must be
              embodied.
              <br />
              <br />
              <small>– Aadil Palkhivala</small>
            </blockquote>
          </div>
        </Col>
        <br />
      </div>
    );
  }
}

export default Home;
