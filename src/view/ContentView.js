import React, { Component } from "react";

// REDUX //
import { connect } from "react-redux";
import { loadContent, loadAnswers } from "../redux/Actions";

// COMPONENTS //


class ContentView extends Component {
  componentDidMount() {

  }

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
     Test
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {

  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ContentView);