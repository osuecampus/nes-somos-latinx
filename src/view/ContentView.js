import React, { Component } from "react";

// REDUX //
import { connect } from "react-redux";
import { loadContent, loadAnswers } from "../redux/Actions";

// COMPONENTS //
import Content from "../components/Content";
import Toolbar from "../components/Toolbar";

class ContentView extends Component {
  componentDidMount() {

  }

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {

    return (
      <div className={'contentView' + (this.props.mobile == 1 ? ' fullScreen' : ' showSidebar' ) }>
        <Content />
        <Toolbar />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    mobile: state.mobile
  };
};

const mapDispatchToProps = dispatch => {
  return {

  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ContentView);