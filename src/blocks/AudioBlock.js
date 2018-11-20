import React, { Component } from "react";
import { StyleSheet, css } from 'aphrodite';

// details.layout
// details.text
// details.image

export default class AudioBlock extends Component {

  render() {
    return (
      <section className={css(ss.section)}>
        <audio className={css(ss.audio)} controls>
            <source src={this.props.details.audioUrl} type="audio/mp3" />
            <p>Your browser doesn't support HTML5 audio. Here is <a href={this.props.details.audioUrl}>link to the audio file</a> instead.</p>
        </audio>
      </section>
    );
  }
}

const ss = StyleSheet.create({
  section: {
      width: '100%',
      display:'flex',
      alignItems:'center',
  },
  audio:{
      width:'100%',
  },
  text:{
    width:'100%',
    fontFamily:'Crimson Text',
  }
});