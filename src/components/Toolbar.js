import React, { Component } from "react";

// REDUX //
import { connect } from "react-redux";
import { detectDimensions, changeFontSize, changeTheme, setReaderText, playPauseReader, restartReader } from "../redux/Actions";

// COMPONENTS //
import Reader from "./Reader";

class Toolbar extends Component {
  componentDidMount() {}

  constructor(props) {
    super(props);
    this.state = {}
  }

changeSize(size){
    this.props.changeFontSize(size);
    window.document.activeElement.blur();
}

changeTheme(theme){
    this.props.changeTheme(theme);
    window.document.activeElement.blur();
}

componentDidMount(){
}

readMe(){
    let pageText = window.document.getElementById('readableContent').innerText;
    this.props.setReaderText(pageText);
}

accFont(){
    this.fontDialog.classList.add('forceShowFont');
    this.fontTitle.tabIndex = '89';
    this.smallFont.tabIndex = '90';
    this.mediumFont.tabIndex = '91';
    this.largeFont.tabIndex = '92';
    this.smallFont.focus();
}
accFontRecycle(){
    this.fontTitle.focus();
}
accFontExit(){
    setTimeout(() => {
        this.fontTitle.removeAttribute("tabindex");
        this.smallFont.removeAttribute("tabindex");
        this.mediumFont.removeAttribute("tabindex");
        this.largeFont.removeAttribute("tabindex");
        this.fontDialog.classList.remove('forceShowFont');
        this.fontDialog.focus();
    }, 50);
}

accTheme(){
    this.themeDialog.classList.add('forceShowTheme');
    this.themeTitle.tabIndex = '89';
    this.lightTheme.tabIndex = '90';
    this.darkTheme.tabIndex = '91';
    this.lightTheme.focus();
}
accThemeRecycle(){
    this.themeTitle.focus();
}
accThemeExit(){
    setTimeout(() => {
        this.themeTitle.removeAttribute("tabindex");
        this.lightTheme.removeAttribute("tabindex");
        this.darkTheme.removeAttribute("tabindex");
        this.themeDialog.classList.remove('forceShowTheme');
        this.themeDialog.focus();
    }, 50);
}

accSpeech(){
    this.speechDialog.classList.add('forceShowSpeech');
    this.speechTitle.tabIndex = '89';
    this.rewindSpeech.tabIndex = '90';
    this.playSpeech.tabIndex = '91';
    this.rewindSpeech.focus();
}
accSpeechRecycle(){
    this.speechTitle.focus();
}
accSpeechExit(){
    setTimeout(() => {
        this.speechTitle.removeAttribute("tabindex");
        this.rewindSpeech.removeAttribute("tabindex");
        this.playSpeech.removeAttribute("tabindex");
        this.speechDialog.classList.remove('forceShowSpeech');
        this.speechDialog.focus();
    }, 50);
}


  render() {
    let icon = 0;
    if(this.props.mobile == true){
        icon = 1;
    }
    
    var smoothScroll = {
        timer: null,
    
        stop: function () {
            clearTimeout(this.timer);
        },
    
        scrollTo: function (id, callback) {
            var settings = {
                duration: 1000,
                easing: {
                    outQuint: function (x, t, b, c, d) {
                        return c*((t=t/d-1)*t*t*t*t + 1) + b;
                    }
                }
            };
            var percentage;
            var startTime;
            var node = document.body;
            var nodeTop = node.offsetTop;
            var nodeHeight = node.offsetHeight;
            var body = document.body;
            var html = document.documentElement;
            var height = Math.max(
                body.scrollHeight,
                body.offsetHeight,
                html.clientHeight,
                html.scrollHeight,
                html.offsetHeight
            );
            var windowHeight = window.innerHeight
            var offset = window.pageYOffset;
            var delta = nodeTop - offset;
            var bottomScrollableY = height - windowHeight;
            var targetY = (bottomScrollableY < delta) ?
                bottomScrollableY - (height - nodeTop - nodeHeight + offset):
                delta;
    
            startTime = Date.now();
            percentage = 0;
    
            if (this.timer) {
                clearInterval(this.timer);
            }
    
            function step () {
                var yScroll;
                var elapsed = Date.now() - startTime;
    
                if (elapsed > settings.duration) {
                    clearTimeout(this.timer);
                }
    
                percentage = elapsed / settings.duration;
    
                if (percentage > 1) {
                    clearTimeout(this.timer);
    
                    if (callback) {
                        callback();
                    }
                } else {
                    yScroll = settings.easing.outQuint(0, elapsed, offset, targetY, settings.duration);
                    window.scrollTo(0, yScroll);
                    this.timer = setTimeout(step, 10);     
                }
            }
    
            this.timer = setTimeout(step, 10);
        }
    };
   

    return (
      <div role="region" aria-label="toolbar" className={'toolbarHolder' + (this.props.mobile == 1 ? ' fullScreenToolbar' : '' ) + ' ' + this.props.theme }>
        <div onClick={() => this.props.detectDimensions(this.props.mobile)} className={'expandGroup'}>
            <div onKeyDown={(event) => event.keyCode == 32 ? this.props.detectDimensions(this.props.mobile):null}  tabIndex={'3'} className={'toolExpand toolPlaceholder'}>
                <div className={'toolIcon'}>
                    { icon == 0 ? <svg alt={'Expand View'} id="toolExpand" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 336.1 336.1"><title>Expand View</title><g><path d="M64.06,0h46c6.55,0,10,3.48,10,10q0,13.88,0,27.74c0,6.91-3.38,10.33-10.23,10.33h-58c-3.78,0-3.79,0-3.79,3.7q0,29,0,58c0,6.91-3.38,10.31-10.24,10.32H9.37c-5.53,0-9.34-3.68-9.34-9.17Q0,63.81,0,16.71C.05,8,8.22.06,17.08,0,32.74,0,48.4,0,64.06,0Z" transform="translate(0 0)"/><path d="M63.62,336.09q-22.87,0-45.75,0A17.64,17.64,0,0,1,0,318.15q0-46,0-92C0,219.45,3.47,216,10.19,216q14.12,0,28.25,0c6,0,9.64,3.62,9.64,9.66q0,29.37,0,58.75c0,3.56,0,3.58,3.66,3.58h58c6.91,0,10.32,3.38,10.33,10.24q0,13.62,0,27.25c0,7.27-3.28,10.59-10.47,10.59Q86.61,336.11,63.62,336.09Z" transform="translate(0 0)"/><path d="M272.46,0q22.88,0,45.73,0a17.66,17.66,0,0,1,17.89,17.91q0,46.23,0,92.46c0,6.15-3.62,9.69-9.86,9.7H297.5c-5.81,0-9.47-3.67-9.48-9.54q0-29.23,0-58.47c0-4,0-4-4-4H225.78c-6.17,0-9.75-3.57-9.76-9.76q0-14.23,0-28.49C216,3.51,219.57,0,226,0Z" transform="translate(0 0)" /><path d="M336.09,272.17q0,23,0,46a17.73,17.73,0,0,1-17.91,17.93q-46.38,0-92.75,0c-5.67,0-9.39-3.68-9.41-9.37q0-14.62,0-29.25c0-5.83,3.69-9.45,9.6-9.45q29.24,0,58.49,0c3.89,0,3.9,0,3.9-3.85v-58c0-6.71,3.45-10.14,10.17-10.15q14.11,0,28.25,0c6,0,9.65,3.61,9.65,9.65Q336.13,248.92,336.09,272.17Z" transform="translate(0 0)"/></g></svg> : <svg id="revealSidebar" alt={'Reveal Sidebar'} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 335.98 293.96"><title>Reveal Sidebar</title><path d="M168,0H322c3.85,0,7.5.66,10.34,3.53A12.15,12.15,0,0,1,336,12.31q0,14.25,0,28.5c0,7.9-5,13-12.91,13.1-11.66.09-23.33,0-35,0l-273.69,0a25,25,0,0,1-3-.09C4.31,53,0,48.17,0,41q0-13.76,0-27.5C0,5,5,.05,13.54,0,25,0,36.54,0,48,0H168Z"/><path d="M168.12,120H321.84c3.75,0,7.34.58,10.19,3.27a12.13,12.13,0,0,1,3.93,9.14q0,14.13,0,28.25c0,8.17-5,13.22-13.27,13.25-11.58.05-23.16,0-34.74,0q-136.47,0-272.94,0a25.41,25.41,0,0,1-5.45-.47c-6-1.35-9.53-5.87-9.55-12q0-14,0-28C0,125.07,5,120.06,13.4,120c11.5,0,23,0,34.5,0H168.12Z"/><path d="M168,240H322c3.76,0,7.34.62,10.17,3.34a12.3,12.3,0,0,1,3.85,9.18q0,14.13,0,28.24c0,8-5,13.1-13.14,13.14-11.58.06-23.16,0-34.74,0l-273.69,0a21.14,21.14,0,0,1-4-.26C3.75,292.39,0,287.85,0,281q0-13.87,0-27.75c0-8.18,5-13.22,13.26-13.26,11.58-.05,23.16,0,34.74,0H168Z"/></svg> }
                </div>
            </div>
        </div>
        <div className={'accessibilityGroup'}>
            <div onKeyDown={(event) => event.keyCode == 32 ? this.accFont():null} tabIndex={'3'} ref={(fontDialog) => this.fontDialog = fontDialog} className={'fontChange'}>
                <svg className={'rightArrow'} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 58 86.6"><polygon points="58 43.3 0 0 0 86.6 58 43.3"/></svg>
                <h3 ref={(fontTitle) => this.fontTitle = fontTitle}>Font Size</h3>
                <div onKeyDown={(event) => (event.keyCode == 32 ? (this.accFontExit(), this.changeSize('small')):null, event.keyCode == 27 ? this.accFontExit():null)} ref={(smallFont) => this.smallFont = smallFont } onClick={ () => this.changeSize('small')} className={'fontSmall fontSelection' + (this.props.fontSize == 'small' ? ' activeSize' : '')}>
                    <svg id="smallLetter" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 335.86 335.78"><title>Small Font</title><path d="M239.37,287.79c-.29-1.22-.44-2.19-.74-3.11-6-18.35-12.11-36.7-18.09-55.07-.65-2-1.62-2.77-3.73-2.77q-49.12.07-98.24,0c-2.06,0-3.12.67-3.78,2.7-6,18.38-12.05,36.72-18.08,55.08-.3.92-.48,1.89-.79,3.15,1.17.1,2,.22,2.93.23,4.49,0,9,0,13.49,0,8.27,0,13.17,4.6,13.36,12.87.18,7.49.17,15,0,22.49s-5.24,12.38-12.83,12.38q-50,0-100,0c-7.8,0-12.81-5-12.86-12.85Q0,311.65,0,300.4c0-7.13,5.12-12.26,12.31-12.37,5.59-.09,11.17-.12,16.75,0,2.31.06,3.36-.74,4.11-2.93Q45.4,249.69,57.76,214.3q15.72-45.2,31.45-90.38L129.26,8.75A12.31,12.31,0,0,1,141.59,0q26.25,0,52.49,0c6.14,0,10.5,3.11,12.51,8.88Q216.82,38.27,227,67.66q21.51,61.83,43,123.66,13.21,38,26.35,76c2.1,6.06,4.31,12.08,6.33,18.17a3.19,3.19,0,0,0,3.63,2.54c5.49-.11,11-.07,16.49,0,7.57,0,12.69,4.83,12.87,12.37q.27,11.75,0,23.5c-.17,7-5.53,11.86-12.87,11.86q-42.11,0-84.23,0c-5.25,0-10.5,0-15.75,0-7.73-.06-12.68-4.88-12.79-12.65-.11-7.58-.09-15.17,0-22.75.08-7.25,5.08-12.21,12.33-12.33,4.58-.08,9.16,0,13.75,0C237.12,288,238.09,287.88,239.37,287.79ZM130.53,177.29c1.37.07,2.27.17,3.16.17h68c3.26,0,3.35-.13,2.32-3.24q-6.51-19.54-13-39.09c-4.33-12.95-8.88-25.84-12.94-38.87-3.26-10.47-6-21.13-8.85-31.72-.48-1.77-.68-3.63-1-5.45a2,2,0,0,0-.87,1.35c-2.12,8.82-3.65,17.82-6.46,26.42C151.28,116,141.31,145,131.52,174,131.21,174.92,131,175.87,130.53,177.29Z"/></svg>
                </div>
                <div onKeyDown={(event) => (event.keyCode == 32 ? (this.accFontExit(), this.changeSize('medium')):null, event.keyCode == 27 ? this.accFontExit():null)} ref={(mediumFont) => this.mediumFont = mediumFont } onClick={ () => this.changeSize('medium')} className={'fontMedium fontSelection' + (this.props.fontSize == 'medium' ? ' activeSize' : '')}>
                    <svg id="mediumLetter" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 335.86 335.78"><title>Medium Font</title><path d="M239.37,287.79c-.29-1.22-.44-2.19-.74-3.11-6-18.35-12.11-36.7-18.09-55.07-.65-2-1.62-2.77-3.73-2.77q-49.12.07-98.24,0c-2.06,0-3.12.67-3.78,2.7-6,18.38-12.05,36.72-18.08,55.08-.3.92-.48,1.89-.79,3.15,1.17.1,2,.22,2.93.23,4.49,0,9,0,13.49,0,8.27,0,13.17,4.6,13.36,12.87.18,7.49.17,15,0,22.49s-5.24,12.38-12.83,12.38q-50,0-100,0c-7.8,0-12.81-5-12.86-12.85Q0,311.65,0,300.4c0-7.13,5.12-12.26,12.31-12.37,5.59-.09,11.17-.12,16.75,0,2.31.06,3.36-.74,4.11-2.93Q45.4,249.69,57.76,214.3q15.72-45.2,31.45-90.38L129.26,8.75A12.31,12.31,0,0,1,141.59,0q26.25,0,52.49,0c6.14,0,10.5,3.11,12.51,8.88Q216.82,38.27,227,67.66q21.51,61.83,43,123.66,13.21,38,26.35,76c2.1,6.06,4.31,12.08,6.33,18.17a3.19,3.19,0,0,0,3.63,2.54c5.49-.11,11-.07,16.49,0,7.57,0,12.69,4.83,12.87,12.37q.27,11.75,0,23.5c-.17,7-5.53,11.86-12.87,11.86q-42.11,0-84.23,0c-5.25,0-10.5,0-15.75,0-7.73-.06-12.68-4.88-12.79-12.65-.11-7.58-.09-15.17,0-22.75.08-7.25,5.08-12.21,12.33-12.33,4.58-.08,9.16,0,13.75,0C237.12,288,238.09,287.88,239.37,287.79ZM130.53,177.29c1.37.07,2.27.17,3.16.17h68c3.26,0,3.35-.13,2.32-3.24q-6.51-19.54-13-39.09c-4.33-12.95-8.88-25.84-12.94-38.87-3.26-10.47-6-21.13-8.85-31.72-.48-1.77-.68-3.63-1-5.45a2,2,0,0,0-.87,1.35c-2.12,8.82-3.65,17.82-6.46,26.42C151.28,116,141.31,145,131.52,174,131.21,174.92,131,175.87,130.53,177.29Z"/></svg>
                </div>
                <div onKeyDown={(event) => (event.keyCode == 32 ? (this.accFontExit(), this.changeSize('large')):null, event.keyCode == 9 ? this.accFontRecycle():null, event.keyCode == 27 ? this.accFontExit():null)} ref={(largeFont) => this.largeFont = largeFont } onClick={ () => this.changeSize('large')} className={'fontLarge fontSelection' + (this.props.fontSize == 'large' ? ' activeSize' : '')}>
                    <svg id="largeLetter" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 335.86 335.78"><title>Large Font</title><path d="M239.37,287.79c-.29-1.22-.44-2.19-.74-3.11-6-18.35-12.11-36.7-18.09-55.07-.65-2-1.62-2.77-3.73-2.77q-49.12.07-98.24,0c-2.06,0-3.12.67-3.78,2.7-6,18.38-12.05,36.72-18.08,55.08-.3.92-.48,1.89-.79,3.15,1.17.1,2,.22,2.93.23,4.49,0,9,0,13.49,0,8.27,0,13.17,4.6,13.36,12.87.18,7.49.17,15,0,22.49s-5.24,12.38-12.83,12.38q-50,0-100,0c-7.8,0-12.81-5-12.86-12.85Q0,311.65,0,300.4c0-7.13,5.12-12.26,12.31-12.37,5.59-.09,11.17-.12,16.75,0,2.31.06,3.36-.74,4.11-2.93Q45.4,249.69,57.76,214.3q15.72-45.2,31.45-90.38L129.26,8.75A12.31,12.31,0,0,1,141.59,0q26.25,0,52.49,0c6.14,0,10.5,3.11,12.51,8.88Q216.82,38.27,227,67.66q21.51,61.83,43,123.66,13.21,38,26.35,76c2.1,6.06,4.31,12.08,6.33,18.17a3.19,3.19,0,0,0,3.63,2.54c5.49-.11,11-.07,16.49,0,7.57,0,12.69,4.83,12.87,12.37q.27,11.75,0,23.5c-.17,7-5.53,11.86-12.87,11.86q-42.11,0-84.23,0c-5.25,0-10.5,0-15.75,0-7.73-.06-12.68-4.88-12.79-12.65-.11-7.58-.09-15.17,0-22.75.08-7.25,5.08-12.21,12.33-12.33,4.58-.08,9.16,0,13.75,0C237.12,288,238.09,287.88,239.37,287.79ZM130.53,177.29c1.37.07,2.27.17,3.16.17h68c3.26,0,3.35-.13,2.32-3.24q-6.51-19.54-13-39.09c-4.33-12.95-8.88-25.84-12.94-38.87-3.26-10.47-6-21.13-8.85-31.72-.48-1.77-.68-3.63-1-5.45a2,2,0,0,0-.87,1.35c-2.12,8.82-3.65,17.82-6.46,26.42C151.28,116,141.31,145,131.52,174,131.21,174.92,131,175.87,130.53,177.29Z"/></svg>
                </div>
            </div>


            {5 == 0 ? 
            <div onKeyDown={(event) => event.keyCode == 32 ? this.accSpeech():null} tabIndex={'3'} ref={(speechDialog) => this.speechDialog = speechDialog} className={'speechChange'}>
                <svg className={'rightArrow'} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 58 86.6"><polygon points="58 43.3 0 0 0 86.6 58 43.3"/></svg>
                <h3 ref={(speechTitle) => this.speechTitle = speechTitle}>Reader</h3>
                <div onKeyDown={(event) => (event.keyCode == 32 ? (this.accSpeechExit(), this.props.restartReader(1)):null, event.keyCode == 27 ? this.accSpeechExit():null)} ref={(rewindSpeech) => this.rewindSpeech = rewindSpeech } onClick={ () => this.props.restartReader(1)} className={'voiceSelection'}>
                    <svg id="rewind" alt={'Rewind Content'} title={'Rewind Content'} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 313.88 314"><title>Rewind Content</title><g><path d="M36.34,59.65C24.78,48.37,13.08,37,0,24.2L121,0c-8.13,40.64-16,79.94-24.23,121.2l-36-37.11a71.08,71.08,0,0,0-4.78,5.48C9.48,157.5,43.68,252.78,122.8,276c71.52,20.94,145.15-24.34,156.61-98,8-51.35-11.17-92.49-53.68-122.41-4.61-3.24-6.63-6.39-6.37-12,.41-9.09.11-18.21.11-27.55,37.76,12.42,84,57.41,92.7,118.4,10.86,75.73-31.33,138.7-89,165.36C162.39,328,90.15,313.44,43,263.43.78,218.62-19.26,131.79,36.34,59.65Z"/></g></svg>
                </div>
                {this.props.play == 0 || this.props.play == 1  ? 
                    <div onKeyDown={(event) => (event.keyCode == 32 ? (this.accSpeechExit(), this.props.playPauseReader(1)):null, event.keyCode == 9 ? this.accSpeechRecycle():null, event.keyCode == 27 ? this.accSpeechExit():null)} ref={(playSpeech) => this.playSpeech = playSpeech } onClick={ () => this.props.playPauseReader(1)} className={'voiceSelection'}>
                        <svg id="play" alt={'Play Content'} title={'Play Content'} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 335.28 383.35"><title>Play Content</title><g data-name="2L9Og2.tif"><path d="M0,191.73q0-77.49,0-155C.1,21.19,6.6,9.37,21.35,3.07,32.87-1.84,44.16-.75,54.86,5.56q59.21,34.89,118.32,69.92c47.76,28.22,95.35,56.74,143.37,84.5,24.3,14.05,25.13,48.08,1.46,62.23s-47.22,28.16-70.87,42.15q-54.42,32.19-108.89,64.28c-28,16.52-55.87,33.16-83.92,49.54C29.85,392.46.16,375.54.08,347.21-.07,295.38,0,243.56,0,191.73Zm35.65-.38q0,73,0,146c0,7.39,3,9.11,9.32,5.39q34.87-20.52,69.71-41.13Q190,257,265.25,212.5c8.61-5.09,17.22-10.16,25.8-15.28,6.23-3.72,6.3-7.25.29-11-.7-.44-1.41-.88-2.13-1.3q-38.92-23-77.85-46Q142.95,98.44,74.51,58.07c-10-5.93-20.06-11.88-30.17-17.69-5.52-3.16-8.48-1.37-8.65,5,0,.67,0,1.33,0,2Q35.7,119.37,35.69,191.35Z"/></g></svg>
                    </div> : 
                    <div onKeyDown={(event) => (event.keyCode == 32 ? (this.accSpeechExit(), this.props.playPauseReader(-1)):null, event.keyCode == 9 ? this.accSpeechRecycle():null, event.keyCode == 27 ? this.accSpeechExit():null)} ref={(playSpeech) => this.playSpeech = playSpeech } onClick={ () => this.props.playPauseReader(-1)} className={'voiceSelection'}>
                        <svg id="pause" alt={'Pause Content'} title={'Pause Content'} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 336.22 337.18"><title>Pause Content</title><g><path d="M.07,167.65q0-65.73,0-131.44A35.88,35.88,0,0,1,35.79.11Q72-.13,108.26.1a36.36,36.36,0,0,1,35.93,36.05q.06,132.45,0,264.89c0,17.73-13.72,33.24-31.42,35-9.25.92-18.6.92-27.91,1-14.83.15-29.66.19-44.48,0-14-.19-26.33-4.18-34.38-16.67a36.34,36.34,0,0,1-6-20.27C.13,255.94.07,211.8.07,167.65Zm36.13.71q0,61.5,0,123c0,7.71,1,8.73,8.58,8.73H98.27c9.24,0,9.8-.56,9.81-10q0-75.49,0-151,0-47,0-94c0-7.2-2.26-9.06-9.43-8.81-5.65.19-11.31-.11-17-.1-11.81,0-23.63.36-35.43.14-8.25-.15-10,1.22-10,9.55Q36.19,107.13,36.2,168.36Z"/><path d="M192.07,168.11q0-66,0-132a35.86,35.86,0,0,1,35.76-36q36.24-.22,72.47,0a36.37,36.37,0,0,1,35.89,36.1q.06,132.44,0,264.88c0,17.71-13.72,33.67-31.46,34.86-18.08,1.22-36.26,1-54.4,1.08a256.88,256.88,0,0,1-26.91-1,35.15,35.15,0,0,1-31.35-35Q192,234.59,192.07,168.11Zm36.13.25q0,61.5,0,123c0,7.71,1,8.73,8.58,8.73h53.49c9.24,0,9.8-.56,9.81-10q0-75.48,0-151,0-47,0-94c0-7.2-2.26-9.06-9.43-8.81-5.65.19-11.31-.11-17-.1-11.81,0-23.62.36-35.43.14-8.25-.15-10,1.22-10,9.55Q228.19,107.13,228.2,168.36Z"/></g></svg>   
                    </div> }
                
            </div>
            : null}

            <Reader />

            <div onClick={() => this.fontDialog.focus()}  className={'toolFont toolPlaceholder'}>
                <div className={'toolIcon'}>
                    <svg alt={'Change Font Size'} id="toolFont" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 466.46 335.78"><defs></defs><title>Change Font Size</title><path className="lightTool" d="M160,303.71c-.2-.82-.3-1.47-.5-2.08-4-12.27-8.09-24.53-12.09-36.81A2.24,2.24,0,0,0,144.9,263q-32.84,0-65.66,0a2.25,2.25,0,0,0-2.52,1.81c-4,12.28-8.06,24.54-12.09,36.81-.2.62-.32,1.26-.52,2.1.78.07,1.36.15,2,.16h9c5.53,0,8.8,3.08,8.93,8.6.12,5,.11,10,0,15s-3.5,8.27-8.57,8.27q-33.42,0-66.83,0c-5.21,0-8.56-3.37-8.59-8.59q0-7.51,0-15a8,8,0,0,1,8.23-8.27c3.73-.06,7.46-.09,11.19,0a2.41,2.41,0,0,0,2.75-2q8.15-23.68,16.41-47.34,10.51-30.19,21-60.4,13.38-38.49,26.77-77a8.21,8.21,0,0,1,8.24-5.83q17.53,0,35.08,0a8.31,8.31,0,0,1,8.36,5.94q6.83,19.63,13.65,39.27,14.37,41.32,28.76,82.64,8.82,25.4,17.61,50.81c1.4,4,2.88,8.07,4.23,12.14a2.14,2.14,0,0,0,2.42,1.7c3.68-.08,7.35,0,11,0,5,0,8.48,3.23,8.6,8.27q.18,7.85,0,15.7c-.11,4.7-3.69,7.93-8.59,7.93q-28.15,0-56.3,0c-3.51,0-7,0-10.52,0-5.17,0-8.47-3.25-8.55-8.45s-.06-10.14,0-15.2a8,8,0,0,1,8.24-8.24c3.06-.05,6.13,0,9.19,0C158.47,303.84,159.12,303.76,160,303.71ZM87.23,229.86c.92,0,1.52.11,2.12.11h45.42c2.18,0,2.24-.09,1.55-2.16q-4.35-13.06-8.72-26.13c-2.89-8.66-5.93-17.26-8.65-26-2.18-7-4-14.12-5.91-21.19-.32-1.19-.45-2.43-.68-3.65a1.4,1.4,0,0,0-.58.9c-1.42,5.9-2.44,11.92-4.31,17.66-6.37,19.46-13,38.83-19.58,58.24C87.69,228.27,87.52,228.91,87.23,229.86Z"/><path d="M370,287.79c-.29-1.22-.44-2.19-.74-3.11-6-18.35-12.11-36.7-18.09-55.07-.65-2-1.62-2.77-3.73-2.77q-49.12.07-98.24,0c-2.06,0-3.12.67-3.78,2.7-6,18.38-12,36.72-18.08,55.08-.3.92-.48,1.89-.79,3.15,1.17.1,2,.22,2.93.23,4.5,0,9,0,13.49,0,8.27,0,13.17,4.6,13.36,12.87.18,7.49.17,15,0,22.49s-5.24,12.38-12.83,12.38q-50,0-100,0c-7.8,0-12.81-5-12.86-12.85q-.06-11.25,0-22.5c0-7.13,5.12-12.26,12.32-12.37,5.58-.09,11.16-.12,16.74,0,2.32.06,3.36-.74,4.12-2.93Q176,249.69,188.36,214.3q15.72-45.2,31.45-90.38,20-57.58,40.06-115.17A12.29,12.29,0,0,1,272.19,0q26.25,0,52.5,0c6.13,0,10.49,3.11,12.5,8.88q10.23,29.37,20.42,58.76,21.52,61.83,43,123.66,13.22,38,26.35,76c2.1,6.06,4.31,12.08,6.33,18.17a3.19,3.19,0,0,0,3.63,2.54c5.49-.11,11-.07,16.49,0,7.57,0,12.69,4.83,12.87,12.37q.29,11.75,0,23.5c-.17,7-5.53,11.86-12.87,11.86q-42.1,0-84.23,0c-5.25,0-10.5,0-15.75,0-7.73-.06-12.67-4.88-12.79-12.65-.11-7.58-.09-15.17,0-22.75.08-7.25,5.08-12.21,12.33-12.33,4.58-.08,9.17,0,13.75,0C367.72,288,368.7,287.88,370,287.79ZM261.13,177.29c1.37.07,2.27.17,3.16.17h68c3.26,0,3.35-.13,2.32-3.24q-6.51-19.54-13.05-39.09c-4.32-12.95-8.88-25.84-12.94-38.87-3.26-10.47-6-21.13-8.85-31.72-.48-1.77-.68-3.63-1-5.45a2.08,2.08,0,0,0-.87,1.35c-2.12,8.82-3.65,17.82-6.46,26.42C281.88,116,271.91,145,262.12,174,261.81,174.92,261.55,175.87,261.13,177.29Z"/></svg>
                </div>
            </div>
   
            {5 == 0 ? 
            <div onClick={() => {this.speechDialog.focus(), this.readMe()}}  className={'toolReader toolPlaceholder'}>
                <div className={'toolIcon'}>
                    <svg alt={'Read This To Me'} id="toolReader" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 289.72 258.97"><title>Read This To Me</title><g><path d="M0,235.33c1.92-7.83,3-16,5.89-23.43,12.22-32,37.35-46.54,72.46-51-20-4.79-35-13.63-44.61-29.75C24,114.83,22,97.45,28,79.42,36.58,53.57,63.6,35.55,89.78,37.84c30,2.61,53.48,24.52,57.29,53.43,4.17,31.66-12.58,54.43-52.29,69.77,19.61,2.32,36.68,7.89,50.84,20.41,20.08,17.76,27.19,40.67,26.07,66.63-.33,7.6-5.71,10.68-12.86,10.72-13.35.07-26.69,0-40,0-34,0-68.09-.16-102.13.13C9.06,259,3.55,256.77,0,250Z"/><path d="M289.72,82.13c-.39,26.7-9.79,51.2-28.74,72-6.75,7.4-14.05,8.61-19.74,3.35s-5.88-11.66,1.19-19.22c26.75-28.58,28.7-69.73,12.42-98.25-3.6-6.32-8.26-12.1-12.95-17.7-5.78-6.91-6.29-13.41-.71-18.7s12.3-4.81,18.59,1.9C279.59,26.62,289.57,51.74,289.72,82.13Z"/><path d="M228.86,80.72C228,95.27,223.67,109,213,120.1c-5.57,5.81-12.79,6.59-18.08,2-4.92-4.26-5.24-11.5-.77-17.56,13.74-18.65,13.72-29.91-.09-48.28-4.54-6-4.06-12.86,1.22-17.44s11.92-4.12,17.39,1.61C223.23,51.54,228,65.08,228.86,80.72Z"/></g></svg>
                </div>
            </div>
            : null}
        </div>
        { this.props.scrolled ? (
        <div onClick={() => smoothScroll.scrollTo('top')} className={'topGroup'}>
            <div onKeyDown={(event) => event.keyCode == 32 ? smoothScroll.scrollTo('top'):null}  tabIndex={'3'} className={'toolExpand toolPlaceholder'}>
                <div className={'toolIcon'}>
                    <svg  alt={'Scroll Back To The Top'} id="backToTop" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 287.81 335.81"><title>Back To Top</title><g id="sB6yC3.tif"><path d="M115.62,162.59c-1.31,1.23-2.66,2.42-3.92,3.69q-20.16,20.16-40.31,40.3a45,45,0,0,1-6.86,5.78,16.74,16.74,0,0,1-21.2-1.65c-4.55-4.15-8.87-8.56-13.14-13-7.61-7.95-7.59-18,.19-25.8C48.11,154,66,136.3,83.72,118.47q22.92-23,45.73-46.11c9-9.11,20-9,29,0,19,19.16,38.14,38.14,57.17,57.25q21,21.06,41.84,42.27c7.61,7.75,7.58,17.95.05,25.88-3.56,3.74-7.25,7.36-10.94,11-8.73,8.58-18.33,8.85-27.37.44-6.34-5.9-12.33-12.17-18.46-18.3Q188,178.21,175.3,165.46c-1-1-2.17-1.89-4.14-3.58-.17,2.73-.37,4.45-.37,6.17q0,71,0,142c0,2.83.11,5.68-.13,8.49-.89,10.2-8.31,17-18.58,17.22-5.16.08-10.33.05-15.5,0-11.91-.09-19.34-7.33-19.45-19.38-.15-18.16,0-36.33,0-54.5q0-46.74,0-93.49v-5.31Z"/><path d="M143.87,0q61.49,0,123,0c13.68,0,20.86,7.27,21,21.07q0,6.24,0,12.49c-.13,12.87-7.34,20.15-20.22,20.15q-99,.06-197.94,0c-16.66,0-33.33,0-50,0C7.47,53.66.12,46.21,0,34Q0,27.25,0,20.51C.09,7.39,7.37,0,20.41,0Q82.14,0,143.87,0Z"/></g></svg>
                </div>
            </div>
        </div>) 
        : null
        }
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
      mobile: state.mobile,
      fontSize: state.fontSize,
      theme: state.theme,
      play: state.play,
      scrolled: state.scrolled
  };
};

const mapDispatchToProps = dispatch => {
  return {
    detectDimensions: (bool) => dispatch(detectDimensions(bool)),
    changeFontSize: (size) => dispatch(changeFontSize(size)),
    changeTheme: (theme) => dispatch(changeTheme(theme)),
    setReaderText: (text) => dispatch(setReaderText(text)),
    playPauseReader: (value) => dispatch(playPauseReader(value)),
    restartReader: (value) => dispatch(restartReader(value))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Toolbar);