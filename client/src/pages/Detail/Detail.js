import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";

class Detail extends Component {
  state = {
    petmed: {}
  };
  // When this component mounts, grab the petmed with the _id of this.props.match.params.id
  // e.g. localhost:3000/petmed/599dcb67f0f16317844583fc
  componentDidMount() {
    API.getPetMed(this.props.match.params.id)
      .then(res => this.setState({ petmed: res.data }))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1>
                {this.state.petmed.prescription}: {this.state.petmed.sig}
              </h1>
            </Jumbotron>
          </Col>
        </Row>
        <Row>
          <Col size="md-10 md-offset-1">
            <article>
              <h1>Pet's Name</h1>
              <p>
                {this.state.petmed.petname}
              </p>
              <h1>Prescriber</h1>
              <p>
                {this.state.petmed.prescriber}
              </p>
            </article>
          </Col>
        </Row>
        <Row>
          <Col size="md-2">
            <Link to="/">← Back</Link>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Detail;
