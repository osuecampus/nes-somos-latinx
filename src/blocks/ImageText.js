import React, { Component } from "react";
import { StyleSheet, css } from 'aphrodite';

// details.layout
// details.text
// details.image

export default class ImageText extends Component {

  render() {
    console.log(this.props.details.layout)
    return (
      <section className={css(ss.section)} style={{ flexDirection: (this.props.details.layout == 'left' ? 'row' : 'row-reverse') }}>
        <img alt={this.props.details.alt} title={this.props.details.alt} className={css(ss.image)} src={this.props.details.image} />
        <p className={css(ss.text)}>{this.props.details.text}</p>
      </section>
    );
  }
}

const ss = StyleSheet.create({
  section: {
      width: '100%',
      display:'flex',
      justifyContent:'space-between',
      alignItems:'center',
      '@media (max-width: 700px)': {
        flexDirection: 'column',
      }
  },
  image:{
    width:'40%',
    borderRadius:10,
    '@media (max-width: 700px)': {
      width: '100%',
    }
  },
  text:{
    width:'55%',
    fontFamily:'Crimson Text',
    '@media (max-width: 700px)': {
      width: '100%',
    }
  }
});