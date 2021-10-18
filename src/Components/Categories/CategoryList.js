import React, { Component } from "react";
import { connect } from "react-redux";

class CategoryList extends Component {
  render() {
    return (
      <div>
        <h2>Category List</h2>
        <h3>Seçili Kategori : {this.props.currentCategory.CategoryName}</h3>
      </div>
    );
  }
}

function mapStateToProps(state) {   // the function is mean that connect to state in redux to props in components
  return {
    currentCategory: state.changeCategoryReducer,
  };
}

export default connect(mapStateToProps)(CategoryList);
