import React, { Component } from "react";
// import { RouterIndex } from "./components/Routes/Index";
import "./App.css";
import Store from "./components/redux/store";

import { Row, Col, Container } from "reactstrap";

class App extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col>
            {/* <RouterIndex /> */}
            <Store />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;
