import React, { Component } from "react";
import { StyleSheet, css } from 'aphrodite';

// details.layout
// details.text
// details.image

export default class Divider extends Component {

  render() {
    return (
      <section className={css(ss.section)}>
        {this.props.details.format == "number" ? <div className={css(ss.character)}>{this.props.details.character}</div> : null }
        {this.props.details.format == "letter" ? <div className={css(ss.character)}>{this.props.details.character}</div> : null }
      </section>
    );
  }
}

const ss = StyleSheet.create({
  section: {
      width: '100%',
      display:'flex',
      justifyContent:'center',
      alignItems:'center',
      flexDirection:'row',
      background: '#0e5bea',
      borderRadius: 10,
      marginTop:75,
      marginBottom:75,
      height:3,
  },
  character:{
    width:36,
    height:36,
    borderRadius:45,
    fontFamily: 'Open Sans',
    fontSize: 18,
    color: '#fff',
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    fontWeight: '900',
    backgroundColor:'#0e5bea'
  }
});