import React, { Component } from "react";

// REDUX //
import { connect } from "react-redux";
import { loadContent, setCurrentUnit, setCurrentPage, detectDimensions } from "../redux/Actions";

// COMPONENTS //
import CircularProgressbar from 'react-circular-progressbar';

// ROUTER //
import { Link, Redirect } from 'react-router-dom';

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
    this.refs[plot].classList.toggle('activePage');
    window.scrollTo(0, 0);
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
            <div onClick={() => { this.props.content[0].sections[plot.id].content.length > 1 ? (this.addActivePage('hidden'+plot.id), this.addActiveUnit('unit'+plot.id)) : window.location.href = './#/'+plot.id+'/0' }} ref={'unit'+plot.id} className={'unitBlock'  + (this.props.currentUnit == plot.id ? ' activeUnit' : '')}>
              <h2>
              {plot.title == 'icon' ? <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 293.69 202.56"><title>icon-install</title><g id="zyRhzm.tif"><path d="M146.54,202.35c-38.16,0-76.33-.47-114.48.2-19.62.35-33.27-13.63-32-32.41C.3,167,0,163.8.21,160.65c.35-4.86,2.84-7.2,7.67-7.38,3.33-.13,6.72.28,10-.23,1.33-.21,2.78-2,3.45-3.43.58-1.23.14-3,.14-4.45q0-60.48,0-121a58.18,58.18,0,0,1,.25-7C22.91,7.18,29.92.69,40,.12,41.36.05,42.7,0,44,0Q146.76,0,249.49,0c7.73,0,15,1.36,19.06,8.46a29.16,29.16,0,0,1,3.54,13.68c.26,41.32.15,82.65.16,124,0,7.1,0,7.1,7,7.11,14,0,14.56.56,14.44,14.73a69.73,69.73,0,0,1-1,13.41c-2.28,11-13.26,20.31-24.64,20.76-9.65.38-19.33.22-29,.23Q192.77,202.38,146.54,202.35Zm.56-14.13q57.74,0,115.48,0c5.82,0,11.53-1.09,14.26-6.43,1.89-3.72,2-8.54,2-12.86,0-.54-5.5-1.07-8.45-1.59a4.21,4.21,0,0,0-.5,0c-10,0-11.63-1.65-11.63-11.59v-132c0-8.23-1.37-9.61-9.6-9.61H45.16c-8.2,0-9.21,1-9.21,9.17V154.81c0,1.67.07,3.35-.07,5-.41,4.91-2.72,7.23-7.6,7.47-3.32.17-6.71-.25-10,.27A5.15,5.15,0,0,0,14.88,171c-1.14,10.75,5,17.21,16.24,17.22Q89.11,188.28,147.1,188.22Z"/><path d="M86.5,153.23c10.82,0,21.64.08,32.46,0,4.36-.05,7.24,1.48,8.87,5.72a5.16,5.16,0,0,0,3.88,2.52c10.15.21,20.31.23,30.46,0a5.53,5.53,0,0,0,4-2.92c1.37-3.4,3.58-5.2,7.11-5.2q34.22-.07,68.43,0c4.39,0,6.76,2.61,7,6.86s-2.94,7.1-7.82,7.13q-27,.15-53.94,0c-4.46,0-7.94.43-11.29,4.37-2.21,2.59-7,4-10.66,4.18-12,.51-24,.63-35.94,0-4.07-.23-8.62-2.54-11.75-5.28-2.52-2.19-4.58-3.22-7.73-3.2-17.15.08-34.3,0-51.45,0-1.33,0-2.67,0-4,0-5.54-.14-8.93-3-8.82-7.28s3.08-6.78,8.66-6.81C64.85,153.18,75.68,153.23,86.5,153.23Z"/><path d="M134.67,100.44c2.77-3.76,4.27-6.43,6.35-8.52q15.51-15.54,31.27-30.81c3.77-3.67,8.05-3.93,11-1s3,7.31-.76,11q-21,21-42.27,41.68c-3.85,3.76-8.11,3.76-11.94,0q-8.58-8.34-16.77-17.08c-3.4-3.63-3.27-7.68-.14-10.59s6.7-2.76,10.15.71C125.67,90,129.37,94.51,134.67,100.44Z"/></g></svg> : null }
              {plot.title}</h2>
              <div style={{display: this.props.content[0].sections[plot.id].content.length > 1 ? 'flex' : 'none' }} className={'downProgress'}>
                {this.props.theme == 'lightLook' ? 
                  <svg id="Layer_1" alt="Show Pages" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 202.37 126.95"><title>icon-arrow-light</title><path d="M184.25,4.05c-5.31-5.31-9.52-5.34-14.77-.1L104.27,69.1c-2.67,2.66-2.68,2.66-5.41-.07L78.7,48.85Q55.84,25.94,32.92,3.11C29-.84,24.08-1,20.3,2.64c-5.73,5.59-11.44,11.19-16.93,17C1.87,21.23,1.19,23.59,0,25.85,1.1,28,1.76,30,3,31.49c1.88,2.3,4.17,4.27,6.28,6.39Q21.69,50.21,34,62.61c6.62,6.68,13.15,13.45,19.77,20.12l24,24c5.79,5.76,11.47,11.67,17.47,17.15,4.84,4.39,8.71,4,13.31-.61l24-24,24.7-24.7,24.88-24.89c5.77-5.76,11.46-11.61,17.34-17.25,4.33-4.16,3.52-10.08-.31-13.59C194.05,14.05,189.25,9,184.25,4.05Z"/></svg>
                  :
                  <svg id="Layer_1" alt="Show Pages" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 202.37 126.95"><title>icon-arrow-light</title><path d="M184.25,4.05c-5.31-5.31-9.52-5.34-14.77-.1L104.27,69.1c-2.67,2.66-2.68,2.66-5.41-.07L78.7,48.85Q55.84,25.94,32.92,3.11C29-.84,24.08-1,20.3,2.64c-5.73,5.59-11.44,11.19-16.93,17C1.87,21.23,1.19,23.59,0,25.85,1.1,28,1.76,30,3,31.49c1.88,2.3,4.17,4.27,6.28,6.39Q21.69,50.21,34,62.61c6.62,6.68,13.15,13.45,19.77,20.12l24,24c5.79,5.76,11.47,11.67,17.47,17.15,4.84,4.39,8.71,4,13.31-.61l24-24,24.7-24.7,24.88-24.89c5.77-5.76,11.46-11.61,17.34-17.25,4.33-4.16,3.52-10.08-.31-13.59C194.05,14.05,189.25,9,184.25,4.05Z"/></svg>
                }
                {this.props.content[0].config.progressBar == true ?
                localStorage.getItem('nes-' + process.env.PROJECT_NAME + '-progress-'+ plot.id) ?
                <CircularProgressbar
                  percentage={ (Object.keys(JSON.parse(localStorage.getItem('nes-' + process.env.PROJECT_NAME + '-progress-'+ plot.id))).length / this.props.content[0].sections[plot.id].content.length) * 100 }
                  styles={{
                    path: { stroke: this.props.theme == 'lightLook' ? 'rgba(0,0,0,0)' : 'rgba(255,255,255,0)', transition:'all .2s ease-in-out' },
                    root:{ width:26, height:26, position:'absolute', transition:'all .2s ease-in-out'}
                  }}
                />
                : null : null }
                {this.props.content[0].config.progressBar == true ?
                localStorage.getItem('nes-' + process.env.PROJECT_NAME + '-progress-'+ plot.id) ?
                (Object.keys(JSON.parse(localStorage.getItem('nes-' + process.env.PROJECT_NAME + '-progress-'+ plot.id))).length == this.props.content[0].sections[plot.id].content.length) ? null : null 
                : null : null }
              </div>
            </div> 
            : 
            <div ref={'unit'+plot.id} style={{pointerEvents:'none'}} className={'unitBlock' + (this.props.currentUnit == plot.id ? ' activeUnit' : '')}>
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
            <div ref={'hidden'+plot.id} className={'hiddenPages'  + (this.props.currentUnit == plot.id ? ' activePage' : '')}>
            { plot.content.map((plex) => { return (
                <Link to={'/'+plot.id+'/'+plex.id} tabIndex={'2'} onKeyDown={(event) => event.keyCode == 32 ? (this.pageChoice(plot.id, plex.id), (this.state.mobileView ? this.props.detectDimensions(false) : null)) :null}  onClick={() => {this.pageChoice(plot.id, plex.id), (this.state.mobileView ? this.props.detectDimensions(false) : null)}} key={plex.id} className={'unitPage' + (this.props.currentPage == plex.id && this.props.currentUnit == plot.id ? ' activeTreePage' : '')}>
                  {plex.title}
                  {this.props.content[0].config.progressBar == true ?
                  localStorage.getItem('nes-' + process.env.PROJECT_NAME + '-progress-'+ plot.id) ? localStorage.getItem('nes-' + process.env.PROJECT_NAME + '-progress-'+ plot.id).includes(plex.id) ? <svg id="checkmark" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 220.6 220.81"><title>icon-checkmark</title><g><path className="checkmarkBlue" d="M0,110.19C-.69,51.51,47.52-.35,110.93,0,173,.35,220.68,51.32,220.6,110.6c-.07,58.22-46.7,110.45-110.57,110.21C44.42,220.56-1,166.75,0,110.19Zm90.74,19.65L60.3,100.54l-16.39,17.6q23,23.05,47.8,47.94L177,78,159.43,61.12Z"/><path className="checkmarkWhite" d="M90.76,129.84l68.67-68.72L177,78,91.71,166.08q-24.79-24.89-47.8-47.94l16.39-17.6Z"/></g></svg>
                  :null : null : null }
                </Link>
            )})}
            </div>
            :
            <div ref={'hidden'+plot.id} className={''}>
            { plot.content.map((plex) => { return (
                <Link to={'/'+plot.id+'/'+plex.id} tabIndex={'2'} onKeyDown={(event) => event.keyCode == 32 ? (this.pageChoice(plot.id, plex.id), (this.state.mobileView ? this.props.detectDimensions(false) : null)) :null}  onClick={() => {this.pageChoice(plot.id, plex.id), (this.state.mobileView ? this.props.detectDimensions(false) : null)}} key={plex.id} className={'unitPage' + (this.props.currentPage == plex.id && this.props.currentUnit == plot.id ? ' activeTreePage' : '')}>
                  {plex.title}
                  {this.props.content[0].config.progressBar == true ?
                  localStorage.getItem('nes-' + process.env.PROJECT_NAME + '-progress-'+ plot.id) ? localStorage.getItem('nes-' + process.env.PROJECT_NAME + '-progress-'+ plot.id).includes(plex.id) ? <svg id="checkmark" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 220.6 220.81"><title>icon-checkmark</title><g><path className="checkmarkBlue" d="M0,110.19C-.69,51.51,47.52-.35,110.93,0,173,.35,220.68,51.32,220.6,110.6c-.07,58.22-46.7,110.45-110.57,110.21C44.42,220.56-1,166.75,0,110.19Zm90.74,19.65L60.3,100.54l-16.39,17.6q23,23.05,47.8,47.94L177,78,159.43,61.12Z"/><path className="checkmarkWhite" d="M90.76,129.84l68.67-68.72L177,78,91.71,166.08q-24.79-24.89-47.8-47.94l16.39-17.6Z"/></g></svg>
                  :null : null : null }
                </Link>
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