import React, { Component } from "react";

// REDUX //
import { connect } from "react-redux";

class Content extends Component {
  componentDidMount() {

  }

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className={'contentArea ' + this.props.fontSize }>
     This is a test.
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    fontSize: state.fontSize
  };
};

const mapDispatchToProps = dispatch => {
  return {

  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Content);