import React, { Component } from "react";
import { StyleSheet, css } from 'aphrodite';

// details.layout
// details.text
// details.image

export default class SubjectBlock extends Component {

  render() {
    return (
      <section style={{ height: this.props.details.backgroundType == 'image' ||  this.props.details.backgroundType == 'color' ? 350 : 'initial',   background: this.props.details.backgroundType == 'image' ? 'url('+this.props.details.backgroundValue+')' : this.props.detailsBackgroundType == 'none' ? 'transparent': this.props.details.backgroundValue }} className={css(ss.section)}>
        <p style={{ fontSize: this.props.details.size ? 'larger' : 'inherit', textAlign: this.props.details.align}} className={css(ss.text)}>{this.props.details.text}</p>
      </section>
    );
  }
}

const ss = StyleSheet.create({
  section: {
      width: '100%',
      display:'flex',
      alignItems:'center',
      backgroundPosition: 'left',
      backgroundSize: 'cover'
  },
  text:{
    width:'100%',
    fontFamily:'Open Sans',
    fontWeight:'800',
    color:'#000'
  }
});