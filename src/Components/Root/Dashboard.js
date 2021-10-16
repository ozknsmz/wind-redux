import React, { Component } from "react";
import { Col, Row } from "reactstrap";
import CatogoryList from "../Categories/CategorieList";
import ProductList from "../Products/ProductList";

export default class Dashboard extends Component {
  render() {
    return (
      <div>
        <Row>
          <Col xs="3">
            <CatogoryList />
          </Col>
          <Col xs="9">
            <ProductList />
          </Col>
        </Row>
      </div>
    );
  }
}
