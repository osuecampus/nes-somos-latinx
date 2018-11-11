import React, { Component } from "react";

// REDUX //
import { connect } from "react-redux";

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
      <div className={'contentView' + (this.props.mobile == 1 ? ' fullScreen' : ' showSidebar' ) + ' ' + this.props.theme }>
        <div className={'blade'} />
        <Content />
        <Toolbar />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    mobile: state.mobile,
    theme: state.theme
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