import React, { Component } from "react";
import { StyleSheet, css } from 'aphrodite';

// details.layout
// details.text
// details.image

export default class Text extends Component {

  render() {
    return (
      <section className={css(ss.section)}>
        <p className={css(ss.text)}>{this.props.language == 'en' ? this.props.details.text : this.props.details.es}</p>
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
  text:{
    width:'100%',
    fontFamily:'Crimson Text',
  }
});