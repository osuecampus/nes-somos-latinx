import React, { Component } from "react";

// REDUX //
import { connect } from "react-redux";
import { detectDimensions } from "../redux/Actions";

// COMPONENTS //


class Toolbar extends Component {
  componentDidMount() {

  }

  constructor(props) {
    super(props);
    this.state = {};
  }



  render() {

    let icon = 0;
    if(this.props.mobile == true){
        icon = 1;
    }

    return (
      <div className={'toolbarHolder' + (this.props.mobile == 1 ? ' fullScreenToolbar' : '' )}>
        <div onClick={() => this.props.detectDimensions(this.props.mobile)} className={'expandGroup'}>
            <div tabIndex={'1'} className={'toolExpand toolPlaceholder'}>
                <div className={'toolIcon'}>
                    { icon == 0 ? <svg alt={'Expand View'} id="toolExpand" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 336.1 336.1"><title>Expand View</title><g><path d="M64.06,0h46c6.55,0,10,3.48,10,10q0,13.88,0,27.74c0,6.91-3.38,10.33-10.23,10.33h-58c-3.78,0-3.79,0-3.79,3.7q0,29,0,58c0,6.91-3.38,10.31-10.24,10.32H9.37c-5.53,0-9.34-3.68-9.34-9.17Q0,63.81,0,16.71C.05,8,8.22.06,17.08,0,32.74,0,48.4,0,64.06,0Z" transform="translate(0 0)"/><path d="M63.62,336.09q-22.87,0-45.75,0A17.64,17.64,0,0,1,0,318.15q0-46,0-92C0,219.45,3.47,216,10.19,216q14.12,0,28.25,0c6,0,9.64,3.62,9.64,9.66q0,29.37,0,58.75c0,3.56,0,3.58,3.66,3.58h58c6.91,0,10.32,3.38,10.33,10.24q0,13.62,0,27.25c0,7.27-3.28,10.59-10.47,10.59Q86.61,336.11,63.62,336.09Z" transform="translate(0 0)"/><path d="M272.46,0q22.88,0,45.73,0a17.66,17.66,0,0,1,17.89,17.91q0,46.23,0,92.46c0,6.15-3.62,9.69-9.86,9.7H297.5c-5.81,0-9.47-3.67-9.48-9.54q0-29.23,0-58.47c0-4,0-4-4-4H225.78c-6.17,0-9.75-3.57-9.76-9.76q0-14.23,0-28.49C216,3.51,219.57,0,226,0Z" transform="translate(0 0)" /><path d="M336.09,272.17q0,23,0,46a17.73,17.73,0,0,1-17.91,17.93q-46.38,0-92.75,0c-5.67,0-9.39-3.68-9.41-9.37q0-14.62,0-29.25c0-5.83,3.69-9.45,9.6-9.45q29.24,0,58.49,0c3.89,0,3.9,0,3.9-3.85v-58c0-6.71,3.45-10.14,10.17-10.15q14.11,0,28.25,0c6,0,9.65,3.61,9.65,9.65Q336.13,248.92,336.09,272.17Z" transform="translate(0 0)"/></g></svg> : <svg id="revealSidebar" alt={'Reveal Sidebar'} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 335.98 293.96"><title>Reveal Sidebar</title><path d="M168,0H322c3.85,0,7.5.66,10.34,3.53A12.15,12.15,0,0,1,336,12.31q0,14.25,0,28.5c0,7.9-5,13-12.91,13.1-11.66.09-23.33,0-35,0l-273.69,0a25,25,0,0,1-3-.09C4.31,53,0,48.17,0,41q0-13.76,0-27.5C0,5,5,.05,13.54,0,25,0,36.54,0,48,0H168Z"/><path d="M168.12,120H321.84c3.75,0,7.34.58,10.19,3.27a12.13,12.13,0,0,1,3.93,9.14q0,14.13,0,28.25c0,8.17-5,13.22-13.27,13.25-11.58.05-23.16,0-34.74,0q-136.47,0-272.94,0a25.41,25.41,0,0,1-5.45-.47c-6-1.35-9.53-5.87-9.55-12q0-14,0-28C0,125.07,5,120.06,13.4,120c11.5,0,23,0,34.5,0H168.12Z"/><path d="M168,240H322c3.76,0,7.34.62,10.17,3.34a12.3,12.3,0,0,1,3.85,9.18q0,14.13,0,28.24c0,8-5,13.1-13.14,13.14-11.58.06-23.16,0-34.74,0l-273.69,0a21.14,21.14,0,0,1-4-.26C3.75,292.39,0,287.85,0,281q0-13.87,0-27.75c0-8.18,5-13.22,13.26-13.26,11.58-.05,23.16,0,34.74,0H168Z"/></svg> }
                </div>
            </div>
        </div>
        <div className={'accessibilityGroup'}>
            <div tabIndex={'1'} className={'toolFont toolPlaceholder'}>
                <div className={'toolIcon'}>
                    <svg alt={'Change Font Size'} id="toolFont" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 466.46 335.78"><defs></defs><title>Change Font Size</title><path className="lightTool" d="M160,303.71c-.2-.82-.3-1.47-.5-2.08-4-12.27-8.09-24.53-12.09-36.81A2.24,2.24,0,0,0,144.9,263q-32.84,0-65.66,0a2.25,2.25,0,0,0-2.52,1.81c-4,12.28-8.06,24.54-12.09,36.81-.2.62-.32,1.26-.52,2.1.78.07,1.36.15,2,.16h9c5.53,0,8.8,3.08,8.93,8.6.12,5,.11,10,0,15s-3.5,8.27-8.57,8.27q-33.42,0-66.83,0c-5.21,0-8.56-3.37-8.59-8.59q0-7.51,0-15a8,8,0,0,1,8.23-8.27c3.73-.06,7.46-.09,11.19,0a2.41,2.41,0,0,0,2.75-2q8.15-23.68,16.41-47.34,10.51-30.19,21-60.4,13.38-38.49,26.77-77a8.21,8.21,0,0,1,8.24-5.83q17.53,0,35.08,0a8.31,8.31,0,0,1,8.36,5.94q6.83,19.63,13.65,39.27,14.37,41.32,28.76,82.64,8.82,25.4,17.61,50.81c1.4,4,2.88,8.07,4.23,12.14a2.14,2.14,0,0,0,2.42,1.7c3.68-.08,7.35,0,11,0,5,0,8.48,3.23,8.6,8.27q.18,7.85,0,15.7c-.11,4.7-3.69,7.93-8.59,7.93q-28.15,0-56.3,0c-3.51,0-7,0-10.52,0-5.17,0-8.47-3.25-8.55-8.45s-.06-10.14,0-15.2a8,8,0,0,1,8.24-8.24c3.06-.05,6.13,0,9.19,0C158.47,303.84,159.12,303.76,160,303.71ZM87.23,229.86c.92,0,1.52.11,2.12.11h45.42c2.18,0,2.24-.09,1.55-2.16q-4.35-13.06-8.72-26.13c-2.89-8.66-5.93-17.26-8.65-26-2.18-7-4-14.12-5.91-21.19-.32-1.19-.45-2.43-.68-3.65a1.4,1.4,0,0,0-.58.9c-1.42,5.9-2.44,11.92-4.31,17.66-6.37,19.46-13,38.83-19.58,58.24C87.69,228.27,87.52,228.91,87.23,229.86Z"/><path d="M370,287.79c-.29-1.22-.44-2.19-.74-3.11-6-18.35-12.11-36.7-18.09-55.07-.65-2-1.62-2.77-3.73-2.77q-49.12.07-98.24,0c-2.06,0-3.12.67-3.78,2.7-6,18.38-12,36.72-18.08,55.08-.3.92-.48,1.89-.79,3.15,1.17.1,2,.22,2.93.23,4.5,0,9,0,13.49,0,8.27,0,13.17,4.6,13.36,12.87.18,7.49.17,15,0,22.49s-5.24,12.38-12.83,12.38q-50,0-100,0c-7.8,0-12.81-5-12.86-12.85q-.06-11.25,0-22.5c0-7.13,5.12-12.26,12.32-12.37,5.58-.09,11.16-.12,16.74,0,2.32.06,3.36-.74,4.12-2.93Q176,249.69,188.36,214.3q15.72-45.2,31.45-90.38,20-57.58,40.06-115.17A12.29,12.29,0,0,1,272.19,0q26.25,0,52.5,0c6.13,0,10.49,3.11,12.5,8.88q10.23,29.37,20.42,58.76,21.52,61.83,43,123.66,13.22,38,26.35,76c2.1,6.06,4.31,12.08,6.33,18.17a3.19,3.19,0,0,0,3.63,2.54c5.49-.11,11-.07,16.49,0,7.57,0,12.69,4.83,12.87,12.37q.29,11.75,0,23.5c-.17,7-5.53,11.86-12.87,11.86q-42.1,0-84.23,0c-5.25,0-10.5,0-15.75,0-7.73-.06-12.67-4.88-12.79-12.65-.11-7.58-.09-15.17,0-22.75.08-7.25,5.08-12.21,12.33-12.33,4.58-.08,9.17,0,13.75,0C367.72,288,368.7,287.88,370,287.79ZM261.13,177.29c1.37.07,2.27.17,3.16.17h68c3.26,0,3.35-.13,2.32-3.24q-6.51-19.54-13.05-39.09c-4.32-12.95-8.88-25.84-12.94-38.87-3.26-10.47-6-21.13-8.85-31.72-.48-1.77-.68-3.63-1-5.45a2.08,2.08,0,0,0-.87,1.35c-2.12,8.82-3.65,17.82-6.46,26.42C281.88,116,271.91,145,262.12,174,261.81,174.92,261.55,175.87,261.13,177.29Z"/></svg>
                </div>
            </div>
            <div tabIndex={'1'} className={'toolTheme toolPlaceholder'}>
                <div className={'toolIcon'}>
                    <svg alt={'Change Color Theme'} id="toolTheme"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 383.92 383.45"><defs></defs><title>Change Color Theme</title><g><g><path d="M207.56,0c4.69.65,9.38,1.27,14.06,2a184.68,184.68,0,0,1,49.91,14.81A191,191,0,0,1,377,140.45a212,212,0,0,1,6.69,42.6c.65,10.53-.28,20.63-4.24,30.38-5.9,14.54-16.06,25.1-30.2,31.87-9.45,4.52-19.47,6.16-29.84,6.16-16.75,0-33.5.24-50.25-.07-16-.31-26.92,10.72-29.38,24.33a27.66,27.66,0,0,0,2.36,17.55A61.62,61.62,0,0,1,249,325.41c-1.49,21.63-10.88,38.69-29.78,50-8.43,5-17.8,6.87-27.44,7.62-35.71,2.76-68-7.52-98-26.11a199,199,0,0,1-67.52-69.3A187.62,187.62,0,0,1,2,217.92,182.82,182.82,0,0,1,.15,184.3c1.51-33.66,10.23-65.17,28.17-94A193.83,193.83,0,0,1,58,53.46,189.55,189.55,0,0,1,173.65.47,13,13,0,0,0,175.56,0ZM293.9,215.52h0c9.5,0,19,.08,28.5,0,15-.15,26.08-11.19,25.58-26.08a180.54,180.54,0,0,0-2.76-27.28c-6.52-34.66-23.12-63.75-49.44-87.28a155.64,155.64,0,0,0-114.93-39,158,158,0,0,0-35.79,6.56A152.64,152.64,0,0,0,91.45,71.65,155,155,0,0,0,54.2,117.22C40,143.77,34.46,172.17,36.45,202.15a153.14,153.14,0,0,0,15.3,57.09,160.07,160.07,0,0,0,37.72,49.6c16.8,15.07,35.65,26.49,57.21,33.32,15.7,5,31.7,6.83,48.09,4.42a18.65,18.65,0,0,0,12.62-7.38c6.88-9.16,7.72-19.11,2.83-29.42-8.72-18.39-9.49-37.07-1-55.56,11.33-24.72,31.07-37.53,58.21-38.64C276.22,215.22,285.07,215.52,293.9,215.52Z"/><path className="lightTool" d="M192.11,71.49A24.19,24.19,0,0,1,216,95.6c0,12.83-11.07,24-24.1,23.76-14.07-.28-23.85-11.22-23.85-24.44C168.09,82.19,179.1,71.48,192.11,71.49Z"/><path className="lightTool" d="M240.08,119.18c0-12.83,11.13-23.73,24.14-23.66a24.32,24.32,0,0,1,23.82,24c0,12.88-11,23.9-23.94,23.92A24.2,24.2,0,0,1,240.08,119.18Z"/><path className="lightTool" d="M72.08,191.2c0-12.84,11.11-23.74,24.12-23.68a24.36,24.36,0,0,1,23.84,24c0,12.86-11,23.9-23.92,23.93A24.19,24.19,0,0,1,72.08,191.2Z"/><path className="lightTool" d="M96.08,119.25c0-12.85,11.07-23.77,24.07-23.73S144,106.59,144,119.76c0,12.69-11.06,23.67-23.88,23.72A24.19,24.19,0,0,1,96.08,119.25Z"/></g></g></svg>
                </div>
            </div>
            <div tabIndex={'1'} className={'toolReader toolPlaceholder'}>
                <div className={'toolIcon'}>
                    <svg alt={'Read This To Me'} id="toolReader" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 431.34 359.34"><defs></defs><title>Read This To Me</title><g id="K6XQiH.tif"><path d="M191.72,180q0,62,0,124c0,9.69-5.21,16.67-13.68,18.81-6.85,1.73-12.45-.35-17.27-5.17q-31.12-31.1-62.16-62.27a12.17,12.17,0,0,0-9.6-3.94c-23,.18-46,.1-69,.09-12.61,0-20-7.44-20-20.07q0-52.36,0-104.73C0,118,4.9,111,12.77,108.78a27.9,27.9,0,0,1,7.4-.92q35.37-.1,70.74,0a8.1,8.1,0,0,0,6.36-2.63q31.65-31.8,63.43-63.47c6.71-6.71,15.31-7.71,23.19-2.6,5.91,3.83,7.81,9.72,7.82,16.38q0,38.74,0,77.49Q191.73,156.55,191.72,180Z" transform="translate(0 0)"/><path className="lightTool" d="M308.37,342.23c.09-6.6,2.32-11.43,7.13-14.88,9-6.45,17.92-13,25.92-20.72a183.8,183.8,0,0,0,24.33-28.73,174.2,174.2,0,0,0,29.81-89.39,176.24,176.24,0,0,0-9.52-66.3,172.62,172.62,0,0,0-37.84-62.6,190.22,190.22,0,0,0-32-27c-6.44-4.37-8.74-10.64-7.48-18,1.22-7.21,5.76-11.91,12.78-13.91a17.66,17.66,0,0,1,15,2.56A212.8,212.8,0,0,1,373,33.81a209.36,209.36,0,0,1,52.48,96,176.49,176.49,0,0,1,5.23,34.26c.39,9.46.89,19,.38,28.41a206.23,206.23,0,0,1-12.63,60.4,211.42,211.42,0,0,1-79.41,101.44c-3.34,2.27-6.66,4.24-10.79,4.85C317.1,360.81,307.65,350.86,308.37,342.23Z" transform="translate(0 0)"/><path className="lightTool" d="M268.34,283.36c-.28-7.61,2.49-12.47,7.47-16.41,6.65-5.26,13.66-10.21,19.58-16.21a98.71,98.71,0,0,0,25.77-46.65,103,103,0,0,0-17.49-86,107.12,107.12,0,0,0-27.32-25.37A17.54,17.54,0,0,1,269,72.62a17.4,17.4,0,0,1,26.85-9.5,138.73,138.73,0,0,1,41.31,41.07,134.48,134.48,0,0,1,20.15,51.25,189.54,189.54,0,0,1,2,19.35c1.19,17.62-1.88,34.66-7.69,51.23a134.69,134.69,0,0,1-27.23,45.89A141.8,141.8,0,0,1,296.15,296c-7.44,4.83-15,4.52-21.74-1A15.43,15.43,0,0,1,268.34,283.36Z" transform="translate(0 0)"/><path className="lightTool" d="M244.4,239.1c-7.16.47-14.11-5.08-16.39-11.95a17.53,17.53,0,0,1,5.78-19.3c2.7-2.08,5.75-3.76,8.25-6,15.44-14.08,12.76-37.59-5.45-48.34A18,18,0,0,1,227.32,140c-1.48-9.6,6.31-19.14,16-19.79,5.43-.36,9.93,1.66,14.21,4.54,17,11.47,27.31,27.29,29.51,47.67,2.57,23.84-6.19,43.37-24.63,58.55a47.67,47.67,0,0,1-9,5.88c-2.75,1.36-5.91,1.92-8.89,2.84Z" /></g></svg>
                </div>
            </div>
        </div>
     
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
      mobile: state.mobile
  };
};

const mapDispatchToProps = dispatch => {
  return {
    detectDimensions: (bool) => dispatch(detectDimensions(bool))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Toolbar);