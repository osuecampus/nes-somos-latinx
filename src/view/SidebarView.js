import React, { Component } from "react";

// REDUX //
import { connect } from "react-redux";
import { loadContent, loadAnswers } from "../redux/Actions";

// COMPONENTS //
import Tree from "../components/Tree";
import ProgressBar from "../components/ProgressBar";
import SearchBar from "../components/SearchBar";

class SidebarView extends Component {

  constructor(props) {
    super(props);
    this.state = {
      searchContents: ''
    };
  }

  setSearch(e){
    this.setState({searchContents: e.target.value})
  }

  render() {


    return (
      <div role="navigation" className={'sidebarView'}>
        <div className={'titleHolder'}>
          <img className={'somosLogo'} src={'../assets/img/somos-logo.svg'} />
        </div>

        { this.props.content[0] ? this.props.content[0].config.progressBar ? 
          <ProgressBar />
        : null : null}

        { this.props.content[0] ? this.props.content[0].config.search ? 
          <SearchBar />
        : null : null}

        <div className={'treeHolder'}>
          <Tree />        
        </div>
     
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    content: state.content,
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
)(SidebarView);