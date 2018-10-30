import React, { Component } from "react";

// REDUX //
import { connect } from "react-redux";
import { loadContent, loadAnswers } from "../redux/Actions";

// COMPONENTS //


class Content extends Component {
  componentDidMount() {

  }

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className={'contentArea'}>
     This is a test.
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
)(Content);