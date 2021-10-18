import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux"; // this import for connect actions in reducer
import * as categoryActions from "../../Redux/Actions/CategoryActions";
import { ListGroup, ListGroupItem } from "reactstrap";
class CategoryList extends Component {
  componentDidMount() {
    this.props.actions.getCategories();
  }

  render() {
    return (
      <div>
        <h2>Category List</h2>
        <ListGroup>
          {this.props.categories.map(category => (
            <ListGroupItem key={category.id}>{category.categoryName}</ListGroupItem>
          ))}
        </ListGroup>
        <h3>Seçili Kategori : {this.props.currentCategory.CategoryName}</h3>
      </div>
    );
  }
}

function mapStateToProps(state) {
  // the function is mean that connect to state in redux to props in components
  return {
    currentCategory: state.changeCategoryReducer,
    categories: state.categoryListReducer,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      getCategories: bindActionCreators(
        categoryActions.getCategories,
        dispatch
      ),
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryList);
