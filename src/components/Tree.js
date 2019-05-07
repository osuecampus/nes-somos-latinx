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
              {plot.title == 'Home' ? <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 190.32 179.51"><title>icon-home</title><g id="yGZTwU.tif"><path d="M21.09,136.47c0-12.67,0-25.33,0-38,0-4.89.15-5,5.11-5h1c5.85,0,5.89,0,5.9,5.77q0,31.24,0,62.49c0,5.78,0,5.8,5.86,5.82,8,0,16,0,24,0,5.11,0,5.25-.16,5.26-5.41,0-13.84,0-27.67,0-41.5,0-6.21,0-6.24,6-6.24q21.25,0,42.5,0c5.22,0,5.37.16,5.39,5.3,0,14.17,0,28.33,0,42.5,0,5.21.14,5.33,5.31,5.36q12.26,0,24.5,0c5.15,0,5.3-.15,5.31-5.37q0-31,0-62a20.85,20.85,0,0,1,.21-4.48c.17-.78,1.11-1.92,1.78-2a40.71,40.71,0,0,1,8,0c.74.08,1.66,1.45,1.92,2.38a15.49,15.49,0,0,1,.15,4q0,36.49,0,73c0,6.43,0,6.46-6.2,6.46q-23.51,0-47,0c-6,0-6,0-6-6.16,0-13.67,0-27.34,0-41,0-6,0-6-6.18-6s-12.33,0-18.5,0c-4.87,0-5.09.24-5.1,5.09,0,13.66,0,27.33,0,41,0,1.34,0,2.67,0,4,0,2.05-1,3.07-3,3.06-2.83,0-5.66,0-8.5,0q-21.24,0-42.49,0c-5,0-5.09-.13-5.11-5C21.06,161.8,21.09,149.13,21.09,136.47Z"/><path d="M95.44,16.37a40.62,40.62,0,0,0-3.28,2.42c-6,5.47-12.11,10.93-18.07,16.5C61.44,47.12,48.86,59,36.22,70.86c-8.75,8.2-17.6,16.28-26.3,24.53-2.09,2-3.66,2-5.34-.22-5.48-7.06-6.9-4.87.53-11.71,8.57-7.9,17-15.94,25.52-23.9Q61.28,30.9,91.94,2.26c3.22-3,3.29-3,6.47,0q13.36,12.41,26.69,24.85,28.41,26.66,56.79,53.37c2.3,2.16,4.66,4.28,7.05,6.35,1.77,1.53,1.86,3,.13,4.59a2.92,2.92,0,0,0-.32.38c-5.1,6.59-5,6.53-11.13.83q-39.19-36.7-78.46-73.33C98.09,18.26,96.84,17.44,95.44,16.37Z"/><path d="M169.28,31.61c0,4.32.05,8.64,0,13s-.35,4.64-4.93,4.74c-6.81.16-7.06-.07-7.08-6.75,0-4,0-8,0-12-.06-4.94-.21-5.11-5-5.16s-9.31,0-14-.05c-3.9-.08-4.14-.41-4.31-4.36-.34-7.65-.31-7.69,7.5-7.69,7.64,0,15.28,0,22.92,0,4.55,0,4.79.3,4.86,4.79S169.28,27.12,169.28,31.61Z"/></g></svg> : null }
              {plot.title == 'Stories' ? <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 31 34.43"><title>icon-stories</title><path d="M12.6,10.88l-.06.17h.15Z" transform="translate(0 0.02)"/><polygon points="9.89 25.81 9.96 25.81 9.9 25.78 9.89 25.81"/><polygon points="9.38 27.1 6.7 33.95 7.9 34.42 10.62 27.49 10.46 27.1 9.38 27.1"/><polygon points="10.62 27.49 13.47 34.43 14.66 33.94 11.85 27.1 10.77 27.1 10.62 27.49"/><polygon points="10.46 27.1 10.62 27.49 10.77 27.1 10.46 27.1"/><path d="M10.08,12.34a5.45,5.45,0,0,0,1-1.29H8.55a3.22,3.22,0,0,1-4.06,0H4a3.83,3.83,0,0,0-1.78.46,4.86,4.86,0,0,0,.92,1A2.53,2.53,0,0,1,4,12.34Z" transform="translate(0 0.02)"/><path d="M13.6,12.34a7.16,7.16,0,0,1-.91-1.29h-.15a6.85,6.85,0,0,1-.74,1.29Z" transform="translate(0 0.02)"/><path d="M15.47,12.34h5.31a2.44,2.44,0,0,1,1.45.47A6.09,6.09,0,0,0,23.31,12a3.82,3.82,0,0,0-2.53-1H14.22A6.13,6.13,0,0,0,15.47,12.34Z" transform="translate(0 0.02)"/><path d="M4,25.79a2.53,2.53,0,0,1-2.51-2.51V14.85a2.44,2.44,0,0,1,.57-1.57,6.31,6.31,0,0,1-.86-1,3.74,3.74,0,0,0-1,2.54v8.43A3.82,3.82,0,0,0,4,27.08h5.4l.5-1.29Z" transform="translate(0 0.02)"/><path d="M29.63,11.12h0a1.36,1.36,0,0,0-.68.18l-4.49,2.53a3.66,3.66,0,0,0-.33-.79,7.07,7.07,0,0,1-1.05.77,2.66,2.66,0,0,1,.23,1H24.6v.39l5-2.83h0a.09.09,0,0,1,.09.09h0V25.62c0,.06,0,.1-.14.08l-5-3.14v.36H23.29v.36a2.53,2.53,0,0,1-2.51,2.51H10l.73.28.64-.26.52,1.27h8.93a3.81,3.81,0,0,0,3.72-3l4.39,2.75a1.37,1.37,0,0,0,1.88-.48,1.33,1.33,0,0,0,.19-.73V12.5A1.38,1.38,0,0,0,29.63,11.12Z" transform="translate(0 0.02)"/><polygon points="10.14 26.32 10.69 26.09 9.96 25.81 9.89 25.81 9.38 27.1 10.46 27.1 10.14 26.32"/><polygon points="10.69 26.09 11.1 26.25 10.77 27.1 11.85 27.1 11.33 25.83 10.69 26.09"/><polygon points="10.46 27.1 10.77 27.1 11.1 26.25 10.69 26.09 10.14 26.32 10.46 27.1"/><path d="M2.24,11.51a5.14,5.14,0,0,1-1-3,5.24,5.24,0,0,1,10.47-.46,3.53,3.53,0,0,1,0,.46A5.2,5.2,0,0,1,11,11h1.46l.06-.17a7.46,7.46,0,0,1-.84-3.43,7.58,7.58,0,0,1,.35-2.27A6.5,6.5,0,1,0,1.22,12.31,4,4,0,0,1,2.24,11.51Z" transform="translate(0 0.02)"/><path d="M10.08,12.34H11.8a6.85,6.85,0,0,0,.74-1.29H11.08A5.45,5.45,0,0,1,10.08,12.34Z" transform="translate(0 0.02)"/><path d="M2.08,13.28a2.55,2.55,0,0,1,1.08-.78,4.86,4.86,0,0,1-.92-1,3.87,3.87,0,0,0-1,.8A6,6,0,0,0,2.08,13.28Z" transform="translate(0 0.02)"/><path d="M12.6,10.88l.09.17h1.53A6.08,6.08,0,0,1,13,7.45,6.17,6.17,0,1,1,23.31,12a4,4,0,0,1,.8,1,7.44,7.44,0,1,0-12-7.86A6.52,6.52,0,0,1,13,8.53,6.49,6.49,0,0,1,12.6,10.88Z" transform="translate(0 0.02)"/><path d="M23.31,12a5.94,5.94,0,0,1-1.08.78,2.51,2.51,0,0,1,.83,1A7.93,7.93,0,0,0,24.11,13,4,4,0,0,0,23.31,12Z" transform="translate(0 0.02)"/><path d="M15.47,12.34a6.11,6.11,0,0,1-1.25-1.29H12.69a7.16,7.16,0,0,0,.91,1.29Z" transform="translate(0 0.02)"/><path d="M12.6,10.88A6.49,6.49,0,0,0,13,8.53a6.48,6.48,0,0,0-.93-3.35,7.58,7.58,0,0,0-.35,2.27A7.32,7.32,0,0,0,12.6,10.88Z" transform="translate(0 0.02)"/><path d="M22.46,7.45a3.25,3.25,0,1,0-3.25,3.25h0A3.27,3.27,0,0,0,22.46,7.45Zm-3.25,2a2,2,0,1,1,2-2,2,2,0,0,1-2,2Z" transform="translate(0 0.02)"/><path d="M9.77,8.66a3.25,3.25,0,1,0-5.28,2.39H8.55A3.23,3.23,0,0,0,9.77,8.66ZM6.44,10.48a2,2,0,1,1,2-2v.13A2,2,0,0,1,6.44,10.48Z" transform="translate(0 0.02)"/><path d="M6.38,11.77a3.17,3.17,0,0,0,2.17-.72H4.49A3.21,3.21,0,0,0,6.38,11.77Z" transform="translate(0 0.02)"/><polygon points="23.29 21.77 24.58 22.59 24.58 15.26 23.29 15.99 23.29 21.77"/><polygon points="23.29 22.94 24.58 22.94 24.58 22.59 23.29 21.77 23.29 22.94"/><polygon points="24.58 15.26 24.58 14.87 23.29 14.87 23.29 14.88 23.29 15.99 24.58 15.26"/></svg>  : null }
              {plot.title == 'Education' ? <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50.83 32.05"><title>icon-education</title><path d="M24.62,15.3a4.55,4.55,0,0,1-1.89.76c.17.14.33.28.49.44h.22l2.08-1.59a3,3,0,0,1-.43-.05A3.27,3.27,0,0,1,24.62,15.3Z"/><path d="M22.27,9.23h-.09l.09,0Z"/><path d="M38.31,21.37c-.83,1.08-2.72,4.29-2.21,10.68l1.33-.11c-.48-6.09,1.36-9,1.94-9.76s.73-2.64.62-4.34H38.65C38.75,19.36,38.71,20.85,38.31,21.37Z"/><path d="M33.53,13.65a3.31,3.31,0,0,1-.8.74l1.77,0A3,3,0,0,1,33.53,13.65Z"/><path d="M19.2,32l1.34,0s0-2,0-3.47a3.47,3.47,0,0,1-1.33-.87C19.25,28.86,19.2,32,19.2,32Z"/><path d="M48.6,7.9H46.2V9.23h2.4a.86.86,0,0,1,.89.79v5.7a.86.86,0,0,1-.89.78H46.2v1.34h2.4a2.18,2.18,0,0,0,2.23-2.12V10A2.18,2.18,0,0,0,48.6,7.9Z"/><path d="M7.68,8,1.22,11.27a2.15,2.15,0,0,0-1.22,2,2.18,2.18,0,0,0,1.41,1.92l6.36,2.55a1.26,1.26,0,0,0,.43.08h0V7.9A1.06,1.06,0,0,0,7.68,8ZM8,16.41,1.9,14a.83.83,0,0,1-.56-.74.82.82,0,0,1,.48-.77L8,9.36Z"/><rect x="39.05" y="7.9" width="5.82" height="1.34"/><path d="M9.57,16.5V9.23h7.34V7.9H8.23a1.22,1.22,0,0,1,.58.17A1.08,1.08,0,0,1,9.33,9v7.74a1.08,1.08,0,0,1-.48.9,1.17,1.17,0,0,1-.62.2h4.84a10.36,10.36,0,0,1-.21-1.34Z"/><path d="M23.31,16.6l.13-.1h-.22Z"/><path d="M25.64,16.5l-1.53,1.18c0,.05.07.1.1.16H38.65c0-.45-.07-.9-.12-1.34Z"/><path d="M39.88,16.5c0,.43.08.88.11,1.34h4.88V16.5Z"/><path d="M38.53,16.5c0,.44.09.89.12,1.34H40c0-.46-.07-.91-.11-1.34Z"/><path d="M23.31,16.6c.11.12.22.23.32.36a5.63,5.63,0,0,1,.48.72l1.53-1.18h-2.2Z"/><polygon points="46.2 9.23 46.2 7.9 44.87 7.9 44.87 9.23 44.87 16.5 44.87 17.84 46.2 17.84 46.2 16.5 46.2 9.23"/><path d="M9.33,16.74V9a1.08,1.08,0,0,0-.52-.93,1.22,1.22,0,0,0-.58-.17v9.94a1.17,1.17,0,0,0,.62-.2A1.08,1.08,0,0,0,9.33,16.74Z"/><path d="M32.86,12a2.71,2.71,0,0,0,0-.4V9.23h-.07v2.51C32.83,11.84,32.85,11.94,32.86,12Z"/><path d="M35.85,14.76H36a3,3,0,0,0,1.12-.22c-.7,0-1.61-.08-2.64-.11A2.93,2.93,0,0,0,35.85,14.76Z"/><path d="M34.24,4.09a1.68,1.68,0,0,1,1.61-1.22H36a1.69,1.69,0,0,1,1.69,1.69V7.9h1.34V4.56a3,3,0,0,0-3-3h-.17A3,3,0,0,0,34,2.16a3.17,3.17,0,0,1,.21,1.11Z"/><path d="M36.88,13.18a14.26,14.26,0,0,1,1.68.19,3,3,0,0,0,.49-1.63V9.23H37.71v2.51A1.69,1.69,0,0,1,36.88,13.18Z"/><path d="M34.85,13.09a1.69,1.69,0,0,1-.65-1,3.38,3.38,0,0,1-.3,1Z"/><path d="M32.83,7.9h.07v-4a2.81,2.81,0,0,0-.07.65Z"/><path d="M36,13.42h-.17a1.64,1.64,0,0,1-1-.33l-1,0a3.25,3.25,0,0,1-.37.59,3,3,0,0,0,1,.78c1,0,1.94.07,2.64.11a3,3,0,0,0,1.42-1.17,14.26,14.26,0,0,0-1.68-.19A1.66,1.66,0,0,1,36,13.42Z"/><rect x="37.71" y="7.9" width="1.34" height="1.34"/><rect x="32.83" y="7.9" width="0.07" height="1.34"/><path d="M27.5,7.9h.18V3.27a2,2,0,0,0-.12-.64,3.39,3.39,0,0,0-.06.64Z"/><path d="M32.3,13h.83a3,3,0,0,1-.27-1A1.92,1.92,0,0,1,32.3,13Z"/><path d="M28.71,13h.69a2,2,0,0,1-.45-.72A3.58,3.58,0,0,1,28.71,13Z"/><path d="M27.56,12.28a2,2,0,0,0,.12-.64V9.23H27.5v2.41A3.39,3.39,0,0,0,27.56,12.28Z"/><path d="M34.2,12.05c0-.13,0-.27,0-.41V9.23h-.08v2.51A1.55,1.55,0,0,0,34.2,12.05Z"/><path d="M34.24,4.09a1.5,1.5,0,0,0-.08.47V7.9h.08Z"/><path d="M30.77,14.91H31a3.34,3.34,0,0,0,1.77-.52c-1.22,0-2.52,0-3.8-.05A3.23,3.23,0,0,0,30.77,14.91Z"/><path d="M30.77,1.34H31A1.94,1.94,0,0,1,32.9,3.27v.64A3.06,3.06,0,0,1,34,2.16,3.26,3.26,0,0,0,31,0h-.19a3.24,3.24,0,0,0-2.51,1.2A3.35,3.35,0,0,1,29,2.63,1.94,1.94,0,0,1,30.77,1.34Z"/><path d="M33.53,13.65a3.06,3.06,0,0,1-.4-.61H32.3a1.91,1.91,0,0,1-1.34.54h-.19A1.9,1.9,0,0,1,29.4,13h-.69a3.71,3.71,0,0,1-.45.71,2.87,2.87,0,0,0,.67.63c1.28,0,2.58,0,3.8.05A3.31,3.31,0,0,0,33.53,13.65Z"/><rect x="34.16" y="7.9" width="0.07" height="1.34"/><rect x="27.5" y="7.9" width="0.18" height="1.34"/><path d="M32.86,12a3,3,0,0,0,.27,1l.77,0a3.38,3.38,0,0,0,.3-1,1.55,1.55,0,0,1,0-.31V9.23H32.9v2.41A2.71,2.71,0,0,1,32.86,12Z"/><path d="M32.9,3.91v4h1.26V4.56a1.5,1.5,0,0,1,.08-.47V3.27A3.17,3.17,0,0,0,34,2.16,3.06,3.06,0,0,0,32.9,3.91Z"/><path d="M33.53,13.65a3.25,3.25,0,0,0,.37-.59l-.77,0A3.06,3.06,0,0,0,33.53,13.65Z"/><rect x="32.9" y="7.9" width="1.26" height="1.34"/><path d="M29,12.28a3.39,3.39,0,0,0,.07-.64V9.23h-.19v2.41A2,2,0,0,0,29,12.28Z"/><path d="M22.31,9.27v0h0v0Z"/><path d="M25.55,1.34h.19a1.93,1.93,0,0,1,1.82,1.29,3.25,3.25,0,0,1,.7-1.43A3.25,3.25,0,0,0,25.74,0h-.19A3.26,3.26,0,0,0,23,1.29a3.28,3.28,0,0,1,.67,1.81A1.93,1.93,0,0,1,25.55,1.34Z"/><path d="M22.27,7.9h0V3.27a1,1,0,0,0,0-.17c0,.06,0,.11,0,.17Z"/><path d="M29,3.27A3.39,3.39,0,0,0,29,2.63a2,2,0,0,0-.12.64V7.9H29Z"/><path d="M27.56,12.28a2,2,0,0,1-1.73,1.29,3.19,3.19,0,0,1-.74,1.29,3,3,0,0,0,.43.05l2.34-1.8A3.43,3.43,0,0,1,27.56,12.28Z"/><path d="M25.52,14.91h.22a3.25,3.25,0,0,0,2.52-1.2,3.3,3.3,0,0,1-.4-.6Z"/><rect x="22.27" y="7.9" width="0.04" height="1.34"/><rect x="28.83" y="7.9" width="0.18" height="1.34"/><path d="M27.68,3.27V7.9h1.15V3.27A2,2,0,0,1,29,2.63a3.35,3.35,0,0,0-.69-1.43,3.25,3.25,0,0,0-.7,1.43A2,2,0,0,1,27.68,3.27Z"/><path d="M27.56,12.28a3.43,3.43,0,0,0,.3.83L28,13h.71a3.58,3.58,0,0,0,.24-.72,2,2,0,0,1-.12-.64V9.23H27.68v2.41A2,2,0,0,1,27.56,12.28Z"/><path d="M28.23,13H28l-.14.11a3.3,3.3,0,0,0,.4.6,3.71,3.71,0,0,0,.45-.71Z"/><rect x="27.68" y="7.9" width="1.15" height="1.34"/><path d="M17.11,9.23h-.2v.09Z"/><path d="M23.65,9.81V9.23h0v.56Z"/><path d="M18.24,3.27a1.94,1.94,0,0,1,1.94-1.93h.19A1.93,1.93,0,0,1,22.29,3.1,3.28,3.28,0,0,1,23,1.29,3.26,3.26,0,0,0,20.37,0h-.19a3.27,3.27,0,0,0-3.27,3.27V7.9h1.33Z"/><path d="M23.65,3.27c0-.06,0-.11,0-.17a1,1,0,0,0,0,.17V7.9h0Z"/><rect x="23.61" y="7.9" width="0.04" height="1.34"/><path d="M17.11,9.23a6.47,6.47,0,0,1,1.13-.29v-1H16.91V9.23Z"/><path d="M22.31,3.27V7.9h1.3V3.27a1,1,0,0,1,0-.17A3.28,3.28,0,0,0,23,1.29a3.28,3.28,0,0,0-.67,1.81A1,1,0,0,1,22.31,3.27Z"/><path d="M23.61,9.79V9.23h-1.3v0A9.52,9.52,0,0,1,23.61,9.79Z"/><rect x="22.31" y="7.9" width="1.3" height="1.34"/><path d="M16.91,10.77V9.32a4.78,4.78,0,0,0-.62.26c-2.79,1.48-3.69,4.14-3.43,6.92h1.35A5.26,5.26,0,0,1,16.91,10.77Z"/><path d="M23.05,18.49a4.58,4.58,0,0,1,.48,2.65l1.33.14a5.89,5.89,0,0,0-.65-3.44h-.32Z"/><path d="M24.37,10.23a7.15,7.15,0,0,0-.72-.42v1.54c.64.44,1,1,1,1.3a2.35,2.35,0,0,1-.14.62,2,2,0,0,0,1,.3h.28a4.89,4.89,0,0,0,.15-.78A2.91,2.91,0,0,0,24.37,10.23Z"/><path d="M22.27,10.66V9.26l-.09,0H18.24v1.08A7.55,7.55,0,0,1,22.27,10.66Z"/><path d="M19.25,27.4a22.17,22.17,0,0,0-3.42-4.11l-.52-.54,1-.78c-.3-.48-.59-1-.85-1.48a13.37,13.37,0,0,1-1-2.65H13.07a13.58,13.58,0,0,0,1.21,3.27,26.37,26.37,0,0,0,5,6.55Z"/><path d="M22.73,16.06a4.55,4.55,0,0,0,1.89-.76,3.27,3.27,0,0,0,.47-.44,3.2,3.2,0,0,1-1.42-.55,4.57,4.57,0,0,1-2.57.51,3,3,0,0,1-.73.09h-.13L20,16a5.68,5.68,0,0,1,1,.46h2.21C23.06,16.34,22.9,16.2,22.73,16.06Z"/><path d="M20.58,28.53h0l.26-1.3A2,2,0,0,1,20.5,27a1.18,1.18,0,0,1,.08.38Z"/><path d="M16.32,22l-1,.78.52.54a22.17,22.17,0,0,1,3.42,4.11v.26a3.47,3.47,0,0,0,1.33.87V27.38A1.18,1.18,0,0,0,20.5,27,23.29,23.29,0,0,1,16.32,22Z"/><path d="M22.62,17.84a4.57,4.57,0,0,1,.43.65l.84-.65Z"/><path d="M22.18,9.23a8.85,8.85,0,0,0-3.94-.29v.29Z"/><path d="M14.21,16.5H12.86a10.36,10.36,0,0,0,.21,1.34h1.39A12.77,12.77,0,0,1,14.21,16.5Z"/><path d="M21,16.5a6,6,0,0,1,1.23.92l1.07-.82-.09-.1Z"/><path d="M23.89,17.84h.32c0-.06-.07-.11-.1-.16Z"/><path d="M23.31,16.6l-1.07.82q.18.18.36.39l0,0h1.27l.22-.16a5.63,5.63,0,0,0-.48-.72C23.53,16.83,23.42,16.72,23.31,16.6Z"/><path d="M25.55,13.57a2,2,0,0,1-1-.3,2,2,0,0,1-.69,1,.75.75,0,0,1-.15.09,3.2,3.2,0,0,0,1.42.55,3.19,3.19,0,0,0,.74-1.29h-.28Z"/><path d="M22.31,9.27h0v1.4l0,0Z"/><path d="M23.63,11.34h0V9.81l0,0v1.54Z"/><path d="M16.91,10.77h0a4.68,4.68,0,0,1,1.32-.45V9.23H17.11l-.2.09Z"/><path d="M21.1,14.82a7.19,7.19,0,0,1-.82-.08l0,.17h.13A3,3,0,0,0,21.1,14.82Z"/><path d="M18.24,8.94a6.47,6.47,0,0,0-1.13.29h1.13Z"/><path d="M23.61,11.33V9.79a9.52,9.52,0,0,0-1.3-.52v1.41A6.57,6.57,0,0,1,23.61,11.33Z"/></svg> : null }
              {plot.title == 'Resources' ? <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 35.71 29.33"><title>icon-resources</title><path d="M32.64,29.33H3.08A3.07,3.07,0,0,1,0,26.26V2A2,2,0,0,1,2,0h13.7a2,2,0,0,1,2,2v1.9H32.64A3.08,3.08,0,0,1,35.71,7V26.26A3.07,3.07,0,0,1,32.64,29.33ZM2,1.31A.73.73,0,0,0,1.31,2V26.26A1.77,1.77,0,0,0,3.08,28H32.64a1.77,1.77,0,0,0,1.76-1.77V7a1.76,1.76,0,0,0-1.76-1.76H16.48V2a.74.74,0,0,0-.74-.73Z"/><path d="M32.64,29.33H3.08A3.07,3.07,0,0,1,0,26.26V9.56H35.71v16.7A3.07,3.07,0,0,1,32.64,29.33ZM1.31,10.87V26.26A1.77,1.77,0,0,0,3.08,28H32.64a1.77,1.77,0,0,0,1.76-1.77V10.87Z"/><path d="M18.89,26.53H16.82a1,1,0,0,1-1-1v-.14a6.14,6.14,0,0,1-.59-.25l-.1.1a1.08,1.08,0,0,1-1.48,0l-1.45-1.46a1,1,0,0,1,0-1.47l.1-.1a4.35,4.35,0,0,1-.25-.59h-.14a1,1,0,0,1-1-1V18.47a1,1,0,0,1,1-1H12a5.09,5.09,0,0,1,.25-.6l-.1-.1a1,1,0,0,1-.31-.73,1,1,0,0,1,.31-.74l1.46-1.46a1.07,1.07,0,0,1,1.47,0l.1.1.59-.25v-.14a1,1,0,0,1,1-1h2.07a1,1,0,0,1,1,1v.14l.59.25.1-.1a1.06,1.06,0,0,1,1.48,0l1.46,1.46a1.07,1.07,0,0,1,.3.74,1,1,0,0,1-.3.73l-.1.1q.13.3.24.6h.14a1,1,0,0,1,1.05,1v2.06a1,1,0,0,1-1.05,1H23.7a6.07,6.07,0,0,1-.24.59l.1.1a1.05,1.05,0,0,1,0,1.47L22.1,25.2a1,1,0,0,1-1.48,0l-.1-.1a6.14,6.14,0,0,1-.59.25v.14A1,1,0,0,1,18.89,26.53Zm-1.8-1.31h1.53v-.86l.49-.12a5.36,5.36,0,0,0,1.21-.51l.43-.25.61.61L22.44,23l-.61-.61.26-.44a4.91,4.91,0,0,0,.5-1.21l.13-.48h.86V18.74h-.86l-.13-.49a4.91,4.91,0,0,0-.5-1.21l-.26-.43.61-.61-1.08-1.08-.61.6-.43-.25a5.07,5.07,0,0,0-1.21-.5l-.49-.13v-.86H17.09v.86l-.49.13a4.84,4.84,0,0,0-1.2.5l-.44.25-.61-.6L13.27,16l.61.61-.26.43a4.91,4.91,0,0,0-.5,1.21l-.13.49h-.86v1.53H13l.13.48a4.91,4.91,0,0,0,.5,1.21l.26.44-.61.61,1.08,1.08.61-.61.44.25a5.28,5.28,0,0,0,1.2.51l.49.12Zm-2.55-.94Zm-1.46-8.47Zm4.78,6.88A3.19,3.19,0,1,1,21,19.5,3.19,3.19,0,0,1,17.86,22.69Zm0-5.07a1.88,1.88,0,1,0,1.87,1.88A1.88,1.88,0,0,0,17.86,17.62Z"/></svg> : null }
              {plot.title == 'About' ? <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 179.59 374.69"><title>icon-about</title><path d="M0,226.54H55c1,15.85,1.67,30.7,2.95,45.51a92.45,92.45,0,0,0,3.62,18.22C66.54,307,76.5,313,95,310.81c13.07-1.53,22.53-12.09,23-27.4,1-34.84,1.79-69.71,2-104.57.32-55.78.08-111.55.08-167.33V0h59c.18,3.28.46,6,.46,8.73-.06,87.88.35,175.75-.5,263.62-.29,29.6-6.53,57.93-29.78,79.75-33.08,31-102.11,32.68-129.35-11.37-12-19.36-15.64-41-18-63C1.38,273.14.63,268.56,0,264Z"/></svg> : null }
              {plot.title == 'Contact' ? <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 216.23 166.23"><title>icon-contact</title><g id="ekGbk0.tif"><path d="M108.49,0q49.23,0,98.44,0c8.17,0,9.31,1.18,9.3,9.2q0,73.45,0,146.91c0,8.85-1.26,10.11-10.11,10.11q-98,0-195.88,0C1,166.23,0,165.22,0,155.83Q0,82.12,0,8.42C0,1.33,1.27,0,8.55,0Q58.53,0,108.49,0ZM12.36,20.72a28.2,28.2,0,0,0-.44,3q0,63-.08,125.92c0,4.41,2.33,4.71,5.71,4.7q90.45-.06,180.9.06c4.64,0,6-1.54,6-6-.13-40.81-.07-81.62-.09-122.43,0-1.5-.26-3-.46-5.26C202.05,22.21,201,23,200.08,24q-42.2,40.47-84.36,81c-7.09,6.8-8.14,6.81-15.06.16q-42.18-40.48-84.37-81C15.25,23.12,14.11,22.22,12.36,20.72Zm9.92-8.39a30.2,30.2,0,0,0,2.32,3.11q40.28,38.84,80.55,77.67c2.47,2.39,4,1.79,6.19-.3q39.87-38.52,79.83-77a29.46,29.46,0,0,0,2.61-3.52Z"/></g></svg> : null }
              
              
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
            
            {
              
              this.props.content[0].sections[plot.id].content.length > 1 ?
              this.props.content[0].sections.length > 1 ? 

              
              

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
            : 
            <div ref={'hidden'+plot.id} style={{position:'absolute', top:-54}} className={''}>
            { plot.content.map((plex) => { return (
                <Link style={{fontSize:0, background:'transparent'}} to={'/'+plot.id+'/'+plex.id} tabIndex={'2'} onKeyDown={(event) => event.keyCode == 32 ? (this.pageChoice(plot.id, plex.id), (this.state.mobileView ? this.props.detectDimensions(false) : null)) :null}  onClick={() => {this.pageChoice(plot.id, plex.id), (this.state.mobileView ? this.props.detectDimensions(false) : null)}} key={plex.id} className={'unitPage' + (this.props.currentPage == plex.id && this.props.currentUnit == plot.id ? ' activeTreePage' : '')}>
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