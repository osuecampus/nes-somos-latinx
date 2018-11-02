import React, { Component } from "react";

// REDUX //
import { connect } from "react-redux";
import { playPauseReader, restartReader } from "../redux/Actions";


class Reader extends Component {
  componentDidMount() {}

  constructor(props) {
    super(props);
    this.state = {
        started: false,
        playing: false,
        text: ''
  };
  this.text = ''
    if ('speechSynthesis' in window) {} 
    else {console.warn('The current browser does not support the speechSynthesis API.')}
  }

speak(boom) {
    window.speechSynthesis.speak(new SpeechSynthesisUtterance(boom))
    this.setState({ started: true, playing: true })
  }

  cancel() {
    window.speechSynthesis.cancel()
    this.setState({ started: false, playing: false })
    this.props.playPauseReader(1)
  }

  pause() {
    window.speechSynthesis.pause()
    this.setState({ playing: false })
  }

  resume() {
    window.speechSynthesis.resume()
    this.setState({ playing: true })
  }

   componentDidUpdate(){
    if(this.props.readerText !== this.state.text){
        this.setState({text: this.props.readerText});
    }
    if(this.props.play == 1){
      this.props.playPauseReader(2);
      if(this.state.started == true){
        this.resume();
      }
      else{
        this.speak(this.props.readerText);
      }
  }
  if(this.props.play == -1){
    this.props.playPauseReader(0);
      this.pause();
}
  if(this.props.restartTrigger == 1){
    this.props.restartReader(0);
    if(this.state.started == true){
      this.cancel();
    }
    else{
      this.props.playPauseReader(1)
    }
}
}

  componentDidMount () {
    const events = [
      { name: 'start', action: this.props.onStart },
      { name: 'error', action: this.props.onError },
      { name: 'pause', action: this.props.onPause },
      { name: 'resume', action: this.props.onResume }
    ]

  }

  componentWillUnmount () {
    this.cancel()
  }

  render () {
    return null
  }
}

const mapStateToProps = state => {
    return {
        readerText: state.readerText,
        play: state.play,
        restartTrigger: state.restartTrigger
    };
  };
  
  const mapDispatchToProps = dispatch => {
    return {
      playPauseReader: (value) => dispatch(playPauseReader(value)),
      restartReader: (value) => dispatch(restartReader(value))
    };
  };
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Reader);