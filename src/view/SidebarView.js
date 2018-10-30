import React, { Component } from "react";

// REDUX //
import { connect } from "react-redux";
import { loadContent, loadAnswers } from "../redux/Actions";

// COMPONENTS //


class SidebarView extends Component {
  componentDidMount() {

  }

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className={'sidebarView'}>
        <div className={'branding'}>
          <img src={'./assets/img/logo-dark.svg'} className={'logo'} alt={'Oregon State University'} title={'Oregon State University'} />
        </div>
        <div className={'titleHolder'}>
          <h1>An Introduction to Student-Centered Peer Education</h1>
        </div>
        <div className={'searchHolder'}>
          <input tabIndex={'1'} className={'searchInput'} placeholder={'Search for content'} />
        </div>
        <div className={'treeHolder'}>
        
        </div>
     
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
)(SidebarView);