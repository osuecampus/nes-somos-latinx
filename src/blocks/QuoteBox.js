import React, { Component } from "react";
import { StyleSheet, css } from 'aphrodite';

// details.layout
// details.text
// details.image

export default class AudioBlock extends Component {

  render() {
    return (
      <section className={css(ss.section)}>
        <div className={css(ss.text)}>{this.props.details.text}</div>
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
  text:{
    width:'calc(100% - 50px)',
    padding:25,
    borderRadius:3,
    fontSize:'smaller',
    backgroundColor:'rgba(100,100,100,.12)',
    fontFamily:'Crimson Text'
  }
});