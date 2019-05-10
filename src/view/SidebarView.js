import React, { Component } from "react";

// REDUX //
import { connect } from "react-redux";
import { setLanguage } from "../redux/Actions";

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

  setLanguage(){
    this.props.language == 'en' ?
      this.props.setLanguage('es')
      : this.props.setLanguage('en')
  }

  render() {
    let language = this.props.language == 'en' ? '' : ' esActive';

    return (
      <div role="navigation" className={'sidebarView'}>
        <div className={'titleHolder'}>
          <img className={'somosLogo'} src={'./assets/img/somos-logo.svg'} />
        </div>

        <div className={'languageHolder'}>
          <div className={'languagetitle'}>
            En Espa&ntilde;ol
          </div>
          <div onClick={() => this.setLanguage()} className={'pillHold' + language}>
            <div className={'ball'} />
          </div>
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
    theme: state.theme,
    language: state.language
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setLanguage: (value) => dispatch(setLanguage(value))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SidebarView);