import React, { Component } from "react";
import { StyleSheet, css } from 'aphrodite';

// details.layout
// details.text
// details.image

export default class TabbedContentExplorer extends Component {

  render() {
    console.log(this.props.details.layout)
    return (
      <section className={css(ss.section)}>
        <p className={css(ss.text)}>{this.props.details.text}</p>
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