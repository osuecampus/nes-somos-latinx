import React, { Component } from "react";

// REDUX //
import { connect } from "react-redux";
import { loadContent, setCurrentUnit, setCurrentPage, detectDimensions } from "../redux/Actions";

// COMPONENTS //
import CircularProgressbar from 'react-circular-progressbar';

class Tree extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      currentPageState: 0,
      currentUnitState: 0,
      mobileView: false,
    };
  }

  componentDidMount(){
    this.setState({currentPageState: this.props.currentPage, currentUnitState: this.props.currentUnit});
    window.addEventListener("resize", this.detectDimensions.bind(this));
    this.detectDimensions();
  }

  componentDidUpdate(){
    if(this.state.currentPageState !== this.props.currentPage || this.state.currentUnitState !== this.props.currentUnit){
      this.setState({
        currentPageState: this.props.currentPage,
        currentUnitState: this.props.currentUnit
      });
      this.forceUpdate();
    }
  }

  addActivePage(plot){
    this.refs[plot].classList.toggle('activePage')
  }

  addActiveUnit(plot){
    this.refs[plot].classList.toggle('activeUnit')
  }

  pageChoice(unit, page){
    this.props.setCurrentUnit(unit);
    this.props.setCurrentPage(page, unit.toString());
  }

  detectDimensions() {
    if(window.innerWidth < 1000) {
      this.setState({mobileView: true})
    } else {
      this.setState({mobileView: false})
    }
  }

  render() {
    
    return (
      <div className={'contentTree'}>

    { this.props.content[0] ? this.props.content[0].sections.map((plot) => { return (
          <div onKeyDown={(event) => event.keyCode == 32 ? (this.addActivePage('hidden'+plot.id), this.addActiveUnit('unit'+plot.id)) : null } tabIndex={'2'} key={plot.id} className={'treeBranch' + (this.props.currentUnit == plot.id ? ' activeTreeUnit' : '')}>  
            {this.props.content[0].sections.length > 1 ? 
            <div onClick={() => {this.addActivePage('hidden'+plot.id), this.addActiveUnit('unit'+plot.id)}} ref={'unit'+plot.id} className={'unitBlock'}>
              <h2>{plot.title}</h2>
              <div className={'downProgress'}>
                {this.props.theme == 'lightLook' ? 
                  <img alt="Show Pages" title="Show Pages" src={'./assets/img/icon-arrow-light.svg'} />
                  :
                  <img alt="Show Pages" title="Show Pages" src={'./assets/img/icon-arrow.svg'} />
                }
                {this.props.content[0].config.progressBar == true ?
                localStorage.getItem('nes-' + process.env.PROJECT_NAME + '-progress-'+ plot.id) ?
                <CircularProgressbar
                  percentage={ (Object.keys(JSON.parse(localStorage.getItem('nes-' + process.env.PROJECT_NAME + '-progress-'+ plot.id))).length / this.props.content[0].sections[plot.id].content.length) * 100 }
                  styles={{
                    path: { stroke: this.props.theme == 'lightLook' ? 'rgba(0,0,0,.5)' : 'rgba(255,255,255,.5)', transition:'all .2s ease-in-out' },
                    root:{ width:26, height:26, position:'absolute', transition:'all .2s ease-in-out'}
                  }}
                />
                : null : null }
                {this.props.content[0].config.progressBar == true ?
                localStorage.getItem('nes-' + process.env.PROJECT_NAME + '-progress-'+ plot.id) ?
                (Object.keys(JSON.parse(localStorage.getItem('nes-' + process.env.PROJECT_NAME + '-progress-'+ plot.id))).length == this.props.content[0].sections[plot.id].content.length) ? <svg id="done" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 220.6 220.81"><title>icon-checkmark</title><g><path className="checkmarkBlue" d="M0,110.19C-.69,51.51,47.52-.35,110.93,0,173,.35,220.68,51.32,220.6,110.6c-.07,58.22-46.7,110.45-110.57,110.21C44.42,220.56-1,166.75,0,110.19Zm90.74,19.65L60.3,100.54l-16.39,17.6q23,23.05,47.8,47.94L177,78,159.43,61.12Z"/><path className="checkmarkWhite" d="M90.76,129.84l68.67-68.72L177,78,91.71,166.08q-24.79-24.89-47.8-47.94l16.39-17.6Z"/></g></svg> : null 
                : null : null }
              </div>
            </div> 
            : 
            <div ref={'unit'+plot.id} style={{pointerEvents:'none'}} className={'unitBlock'}>
            <h2>{plot.title}</h2>
            <div className={'downProgress'}>
             
              {this.props.content[0].config.progressBar == true ?
              localStorage.getItem('nes-' + process.env.PROJECT_NAME + '-progress-'+ plot.id) ?
              <CircularProgressbar
                percentage={ (Object.keys(JSON.parse(localStorage.getItem('nes-' + process.env.PROJECT_NAME + '-progress-'+ plot.id))).length / this.props.content[0].sections[plot.id].content.length) * 100 }
                styles={{
                  path: { stroke: this.props.theme == 'lightLook' ? 'rgba(0,0,0,.5)' : 'rgba(255,255,255,.5)', transition:'all .2s ease-in-out' },
                  root:{ width:26, height:26, position:'absolute', transition:'all .2s ease-in-out'}
                }}
              />
              : null : null }
              {this.props.content[0].config.progressBar == true ?
              localStorage.getItem('nes-' + process.env.PROJECT_NAME + '-progress-'+ plot.id) ?
              (Object.keys(JSON.parse(localStorage.getItem('nes-' + process.env.PROJECT_NAME + '-progress-'+ plot.id))).length == this.props.content[0].sections[plot.id].content.length) ? <svg id="done" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 220.6 220.81"><title>icon-checkmark</title><g><path className="checkmarkBlue" d="M0,110.19C-.69,51.51,47.52-.35,110.93,0,173,.35,220.68,51.32,220.6,110.6c-.07,58.22-46.7,110.45-110.57,110.21C44.42,220.56-1,166.75,0,110.19Zm90.74,19.65L60.3,100.54l-16.39,17.6q23,23.05,47.8,47.94L177,78,159.43,61.12Z"/><path className="checkmarkWhite" d="M90.76,129.84l68.67-68.72L177,78,91.71,166.08q-24.79-24.89-47.8-47.94l16.39-17.6Z"/></g></svg> : null 
              : null : null }
            </div>
          </div>
          
          }
            
            {this.props.content[0].sections.length > 1 ? 
            <div ref={'hidden'+plot.id} className={'hiddenPages'}>
            { plot.content.map((plex) => { return (
                <div tabIndex={'2'} onKeyDown={(event) => event.keyCode == 32 ? (this.pageChoice(plot.id, plex.id), (this.state.mobileView ? this.props.detectDimensions(false) : null)) :null}  onClick={() => {this.pageChoice(plot.id, plex.id), (this.state.mobileView ? this.props.detectDimensions(false) : null)}} key={plex.id} className={'unitPage' + (this.props.currentPage == plex.id && this.props.currentUnit == plot.id ? ' activeTreePage' : '')}>
                  <a href={'#'}>{plex.title}</a>
                  {this.props.content[0].config.progressBar == true ?
                  localStorage.getItem('nes-' + process.env.PROJECT_NAME + '-progress-'+ plot.id) ? localStorage.getItem('nes-' + process.env.PROJECT_NAME + '-progress-'+ plot.id).includes(plex.id) ? <svg id="checkmark" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 220.6 220.81"><title>icon-checkmark</title><g><path className="checkmarkBlue" d="M0,110.19C-.69,51.51,47.52-.35,110.93,0,173,.35,220.68,51.32,220.6,110.6c-.07,58.22-46.7,110.45-110.57,110.21C44.42,220.56-1,166.75,0,110.19Zm90.74,19.65L60.3,100.54l-16.39,17.6q23,23.05,47.8,47.94L177,78,159.43,61.12Z"/><path className="checkmarkWhite" d="M90.76,129.84l68.67-68.72L177,78,91.71,166.08q-24.79-24.89-47.8-47.94l16.39-17.6Z"/></g></svg>
                  :null : null : null }
                </div>
            )})}
            </div>
            :
            <div ref={'hidden'+plot.id} className={''}>
            { plot.content.map((plex) => { return (
                <div tabIndex={'2'} onKeyDown={(event) => event.keyCode == 32 ? (this.pageChoice(plot.id, plex.id), (this.state.mobileView ? this.props.detectDimensions(false) : null)) :null}  onClick={() => {this.pageChoice(plot.id, plex.id), (this.state.mobileView ? this.props.detectDimensions(false) : null)}} key={plex.id} className={'unitPage' + (this.props.currentPage == plex.id && this.props.currentUnit == plot.id ? ' activeTreePage' : '')}>
                  <a href={'#'}>{plex.title}</a>
                  {this.props.content[0].config.progressBar == true ?
                  localStorage.getItem('nes-' + process.env.PROJECT_NAME + '-progress-'+ plot.id) ? localStorage.getItem('nes-' + process.env.PROJECT_NAME + '-progress-'+ plot.id).includes(plex.id) ? <svg id="checkmark" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 220.6 220.81"><title>icon-checkmark</title><g><path className="checkmarkBlue" d="M0,110.19C-.69,51.51,47.52-.35,110.93,0,173,.35,220.68,51.32,220.6,110.6c-.07,58.22-46.7,110.45-110.57,110.21C44.42,220.56-1,166.75,0,110.19Zm90.74,19.65L60.3,100.54l-16.39,17.6q23,23.05,47.8,47.94L177,78,159.43,61.12Z"/><path className="checkmarkWhite" d="M90.76,129.84l68.67-68.72L177,78,91.71,166.08q-24.79-24.89-47.8-47.94l16.39-17.6Z"/></g></svg>
                  :null : null : null }
                </div>
            )})}
            </div> 
            }
          </div>
            
    )}

    ) : ''}

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
)(Tree);