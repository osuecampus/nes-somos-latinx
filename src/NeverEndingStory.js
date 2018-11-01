import React, { Component } from "react";

// REDUX //
import { connect } from "react-redux";
import { loadContent } from "./redux/Actions";

// COMPONENTS //
import { Header, Footer, GA } from "react-starter";

// VIEWS //
import ContentView from "./view/ContentView";
import SidebarView from "./view/SidebarView";


// CSS //
import "./assets/css/styles.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.props.loadContent();
    this.detectDimensions();
    window.addEventListener("resize", this.detectDimensions.bind(this));
  }

  detectDimensions() {
    if(window.innerWidth < 1000) {
      this.refs.app.classList.add('mobile');
    } else {
      this.refs.app.classList.remove('mobile');
    }
  }

  render() {
    let footerTheme = 'light';
    if(this.props.theme == 'lightLook'){
      footerTheme = 'light';
    }
    else{
      footerTheme = 'dark';
    }

    return (
      <div ref={'app'} style={{height:'100%'}}>
        <SidebarView />
        <ContentView />
        <div className={footerTheme}>
        <Footer theme={footerTheme} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    theme: state.theme
  };
};

const mapDispatchToProps = dispatch => {
  return {
    loadContent: () => dispatch(loadContent())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);