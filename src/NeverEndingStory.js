import React, { Component } from "react";

// REDUX //
import { connect } from "react-redux";
import { loadContent, showScroll, setCurrentPage, setCurrentUnit, detectDimensions, changeFontSize, changeTheme} from "./redux/Actions";

// COMPONENTS //
import { Footer } from "osu-application";
import { Link, Route, Redirect } from 'react-router-dom';

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

    setTimeout(() => {localStorage.getItem('nes-' + process.env.PROJECT_NAME + '-current-unit') ? this.props.setCurrentUnit(localStorage.getItem('nes-' + process.env.PROJECT_NAME + '-current-unit')) : null},15);
    setTimeout(() => {localStorage.getItem('nes-' + process.env.PROJECT_NAME + '-current-page') ? this.props.setCurrentPage(localStorage.getItem('nes-' + process.env.PROJECT_NAME + '-current-page'), this.props.currentUnit) : this.props.setCurrentPage(0, 0)},25);

    // SET LOCATION IF FIRST TIME //
    setTimeout(() => { this.props.currentUnit == 0 && this.props.currentPage == 0 ? this.props.setCurrentPage(0, 0): null; },100);

    // SET UP ENVIRONMENT BASED ON LOCALSTORAGE PRESETS //
    localStorage.getItem('nes-' + process.env.PROJECT_NAME + '-font-size') ? this.props.changeFontSize(localStorage.getItem('nes-' + process.env.PROJECT_NAME + '-font-size')) : null;
    localStorage.getItem('nes-' + process.env.PROJECT_NAME + '-theme') ? this.props.changeTheme(localStorage.getItem('nes-' + process.env.PROJECT_NAME + '-theme')) : null;
    localStorage.getItem('nes-' + process.env.PROJECT_NAME + '-dimensions') == 'false' ? this.props.detectDimensions(false) : this.props.detectDimensions(true);

    // LOAD CONTENT AND SET DIMENSIONS //
    this.props.loadContent();
    this.detectDimensions();
    this.detectSidebar();
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
      setTimeout(() => {this.refs.app.classList.add('mobile')},5)
    } else {
      this.refs.app.classList.remove('mobile');
    }
  }

  detectSidebar(){
    this.refs.app.classList.add('sidebar-left');
  }

  restart(){
    setTimeout(()=>{this.forceUpdate()},50)
  }

  render() {
    let footerTheme = 'light';
    if(this.props.theme == 'lightLook'){
      footerTheme = 'light';
    }
    else{
      footerTheme = 'dark';
    }
    let sidebarSide =  'sidebar-' + (this.props.content[0] ? this.props.content[0].config.sidebar : '');
    let mobileActive = this.props.mobile ? ' mobile' : '';
    return (
    
      
      <div ref={'app'}  style={{height:'100%'}}>

      <Route exact path="/:unit/:page" exact render={ (route) => <div>
      {this.props.setCurrentUnit(route.match.params.unit)}
      {this.props.setCurrentPage(route.match.params.page)}
        {
          this.props.content[0] ? 
        
        this.props.content[0].sections[route.match.params.unit] && this.props.content[0].sections[route.match.params.unit].content[route.match.params.page] ?
          <div>
        <SidebarView />
        <ContentView />
        <div className={footerTheme + (this.props.mobile == 1 ? ' showLogo' : ' hideLogo' )}>
          <Footer theme={footerTheme} />
        </div>
        </div>
        : <Redirect to="/0/0"/> : null }

</div> } />

<Route path="/:unit" exact render={(route) => (<Redirect to={'/'+route.match.params.unit+'/0'}/>) }  />
<Route path="/" exact render={(route) => (<Redirect to={'/0/0'}/>) }  />

        </div>
      
      
    )
    
  }
}

const mapStateToProps = state => {
  return {
    mobile: state.mobile,
    content: state.content,
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