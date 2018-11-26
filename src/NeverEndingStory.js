import React, { Component } from "react";

// REDUX //
import { connect } from "react-redux";
import { loadContent, showScroll, setCurrentPage, setCurrentUnit, detectDimensions, changeFontSize, changeTheme} from "./redux/Actions";

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
    localStorage.getItem('nes-current-page') ? this.props.setCurrentPage(localStorage.getItem('nes-current-page'), this.props.currentUnit) : null;
    localStorage.getItem('nes-current-unit') ? this.props.setCurrentUnit(localStorage.getItem('nes-current-unit')) : null;
    setTimeout(() => {localStorage.getItem('nes-current-page') ? this.props.setCurrentPage(localStorage.getItem('nes-current-page'), this.props.currentUnit) : this.props.setCurrentUnit(0),setTimeout(()=>{this.props.setCurrentPage(0, 0)},50);localStorage.getItem('nes-current-unit') ? this.props.setCurrentUnit(localStorage.getItem('nes-current-unit')) : null;},80)
    localStorage.getItem('nes-font-size') ? this.props.changeFontSize(localStorage.getItem('nes-font-size')) : null;
    localStorage.getItem('nes-theme') ? this.props.changeTheme(localStorage.getItem('nes-theme')) : null;
    localStorage.getItem('nes-dimensions') == 'false' ? this.props.detectDimensions(false) : this.props.detectDimensions(true);
    this.props.loadContent();
    this.detectDimensions();
    window.addEventListener("resize", this.detectDimensions.bind(this));
    window.addEventListener('scroll', () =>{  
      if(document.body.scrollTop > 200){ 
        this.props.showScroll(true);
      }
      else{
        this.props.showScroll(false);
      }
    });
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
        <div className={footerTheme + (this.props.mobile == 1 ? ' showLogo' : ' hideLogo' )}>
          <Footer theme={footerTheme} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    mobile: state.mobile,
    theme: state.theme,
    currentPage: state.currentPage,
    currentUnit: state.currentUnit
  };
};

const mapDispatchToProps = dispatch => {
  return {
    loadContent: () => dispatch(loadContent()),
    showScroll: (boolean) => dispatch(showScroll(boolean)),
    setCurrentPage: (value, unit) => dispatch(setCurrentPage(value, unit)),
    setCurrentUnit: (value) => dispatch(setCurrentUnit(value)),
    detectDimensions: (value) => dispatch(detectDimensions(value)),
    changeFontSize: (value) => dispatch(changeFontSize(value)),
    changeTheme: (value) => dispatch(changeTheme(value))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);