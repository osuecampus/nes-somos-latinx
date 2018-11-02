import React, { Component } from "react";

// REDUX //
import { connect } from "react-redux";


class Reader extends Component {
  componentDidMount() {

  }

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
  }

  pause() {
    window.speechSynthesis.pause()
    this.setState({ playing: false })
  }

  resume() {
    window.speechSynthesis.resume()
    this.setState({ playing: true })
  }

  componentWillReceiveProps () {

    
    }
    
  

  componentDidUpdate(){
    if(this.props.readerText !== this.state.text){
          
        this.setState({text: this.props.readerText});
        this.speak(this.props.readerText);
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
        readerText: state.readerText
    };
  };
  
  const mapDispatchToProps = dispatch => {
    return {

    };
  };
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Reader);