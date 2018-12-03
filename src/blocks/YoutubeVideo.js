import React, { Component } from "react";
import { StyleSheet, css } from 'aphrodite';

export default class YoutubeVideo extends Component {

  render() {
    return (
      <section className={css(ss.section)}>
        <iframe className={css(ss.video)} src={this.props.details.youtubeUrl} frameborder="0" allow="accelerometer; encrypted-media; gyroscope;" allowfullscreen></iframe>
      </section>
    );
  }
}

const ss = StyleSheet.create({
  section: {
      width: '100%',
      display:'flex',
      alignItems:'center',
      borderRadius:10,
    overflow:'hidden',
  },
  video:{
    width:'100%',
    height:520,
    '@media(max-width:500px)':{
        height:265
    }
  }
});