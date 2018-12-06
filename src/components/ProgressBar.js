import React, { Component } from "react";

// REDUX //
import { connect } from "react-redux";
import { loadContent, setCurrentUnit, setCurrentPage, detectDimensions } from "../redux/Actions";

// COMPONENTS //
import CircularProgressbar from 'react-circular-progressbar';

class ProgressBar extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
    };
  }



  render() {
    return (
        <div className={'progressHolder'}>
            
        </div>
    );
  }
}

const mapStateToProps = state => {
  return {
      content: state.content,
      theme: state.theme,
      currentPage: state.currentPage,
      currentUnit: state.currentUnit
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setCurrentUnit: (value) => dispatch(setCurrentUnit(value)),
    setCurrentPage: (value, unit) => dispatch(setCurrentPage(value, unit)),
    detectDimensions: (bool) => dispatch(detectDimensions(bool)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProgressBar);