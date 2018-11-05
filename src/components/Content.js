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
      <div role="main" id={'contentArea'} className={'contentArea ' + this.props.fontSize }>
     This is a test. I need this content to last longer so I can test pausing and restarting content.
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