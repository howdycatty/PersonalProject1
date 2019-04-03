import React from "react";
import * as myProjectService from "../services/myProjectService";
import { Card, CardBody, Row, Col } from "reactstrap";

class Articles extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      yogaArticles: []
    };
  }

  componentDidMount() {
    myProjectService
      .getYogaArticles()
      .then(this.onSuccess)
      .catch(this.onError);
  }

  onSuccess = resp => {
    console.log("successs get articles");
    console.log(resp.data.items);
    this.setState({
      yogaArticles: resp.data.items
    });
  };

  onError = () => {
    console.log("Error on get articles");
  };

  mapArticles = articles => {
    console.log("articles", articles);
    const path = "https://www.gaiam.com" + articles.link;
    return (
      <React.Fragment key={articles.title}>
        <Col md={6}>
          <Card className="card-user">
            <CardBody>
              <Col>
                <Row>
                  <div className="mr-auto   text-center">
                    <img src={articles.image} alt="..." />
                  </div>

                  <div className="author">
                    <a href={this.props.link ? this.props.link : "#"}>
                      <br />
                      <br />
                      <br />
                      <br />
                      <img src={this.props.avatar} alt={this.props.avatarAlt} />
                      <h5 className="title">{articles.title} </h5>
                    </a>
                    <p className="description">{this.props.description}</p>
                  </div>
                  <p className="description text-center">{articles.excerpt}</p>
                  <a href={path}>Read More</a>
                </Row>
              </Col>
            </CardBody>
          </Card>
        </Col>
      </React.Fragment>
    );
  };

  render() {
    const articleList = this.state.yogaArticles.map(this.mapArticles);
    return (
      <React.Fragment>
        <div className="content ">
          <Row>{articleList}</Row>
        </div>
      </React.Fragment>
    );
  }
}

export default Articles;
