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
  componentDidMount() {
    this.props.loadContent();
  }

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div style={{height:'100%'}}>
        <SidebarView />
        <ContentView />
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {

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