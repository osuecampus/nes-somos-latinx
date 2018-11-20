import React, { Component } from "react";
import { StyleSheet, css } from 'aphrodite';

// details.layout
// details.text
// details.image

export default class AudioBlock extends Component {

    constructor(props) {
        super(props);
        this.state = {
          buttonDisplay:'flex',
          transcriptDisplay:'none'
        };
      }

      showTranscript(){
          this.setState({
              buttonDisplay:'none',
              transcriptDisplay:'flex'
          })
      }

  render() {
    return (
      <section className={css(ss.section)}>
        <div className={css(ss.row)}>
          <audio tabIndex={'4'} className={css(ss.audio)} controls>
              <source src={this.props.details.audioUrl} type="audio/mp3" />
              <p>Your browser doesn't support HTML5 audio. Here is <a href={this.props.details.audioUrl}>link to the audio file</a> instead.</p>
          </audio>
          <div tabIndex={'4'} onClick={() => this.showTranscript()} onKeyDown={(event) => event.keyCode == 32 ? this.showTranscript() : null } style={{display: this.state.buttonDisplay}} className={css(ss.button)}>Transcript</div>
        </div>
        <div style={{display: this.state.transcriptDisplay}} className={css(ss.transcript)}>{this.props.details.audioTranscript}</div>
      </section>
    );
  }
}

const ss = StyleSheet.create({
  section: {
      width: '100%',
      display:'flex',
      alignItems:'center',
      flexDirection:'column',
  },
  audio:{
      width:'100%',
  },
  row:{
    display:'flex',
    flexDirection:'row',
    width:'100%',
  },
  button:{
    width:150,
    height:55,
    color:'#fff',
    backgroundColor:'#1f60e2',
    justifyContent:'center',
    alignItems:'center',
    borderRadius:45,
    fontSize:16,
    marginLeft:15,
    fontWeight: '600',
    cursor:'pointer',
    transition:'all .2s ease-in-out',
    ':hover':{
        backgroundColor: '#0046bb',
        color:'#fff',
    }
  },
  transcript:{
    width:'calc(100% - 50px)',
    padding:25,
    borderRadius:10,
    marginTop:25,
    fontSize:'smaller',
    backgroundColor:'rgba(100,100,100,.12)',
    fontFamily:'Crimson Text'
  }
});