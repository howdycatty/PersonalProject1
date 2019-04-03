import React from "react";
import * as myProjectService from "../../services/myProjectService";
import { Card, CardBody, Row, Col } from "reactstrap";

class Horoscopes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      image: "",
      name: "",
      date: "",
      link: "",
      horoscopes: []
    };
  }

  componentDidMount() {
    this.setState({
      // image: state.image,
      // name: state.name,
      // date: state.date
    });

    myProjectService
      .getHoroscopes()
      .then(this.onSuccess)
      .catch(this.onError);
  }

  onSuccess = resp => {
    console.log("successs get horoscopes");
    console.log(resp.data.items);
    this.setState({
      horoscopes: resp.data.items
    });
    // console.log(this.state.horoscopes[2]);
  };

  onError = () => {
    console.log("Error on horoscopes");
  };

  mapScraper = astro => {
    // let astro = this.state.horoscopes;
    console.log("astro", astro);
    return (
      <React.Fragment>
        <Col lg={3}>
          <Card className="card-user">
            <CardBody>
              <div className="mr-auto   text-center">
                <img src={astro.image} alt="..." />
              </div>
              <a href={astro.link} className="mr-auto   text-center">
                <h4>{astro.name}</h4>
              </a>
              <div className="mr-auto   text-center"> {astro.date}</div>
            </CardBody>
          </Card>
        </Col>
      </React.Fragment>
    );
  };

  render() {
    const horoscopesList = this.state.horoscopes.map(this.mapScraper);
    return (
      <React.Fragment>
        <div className="content text-center">
          <div>
            <Row>{horoscopesList}</Row>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Horoscopes;
