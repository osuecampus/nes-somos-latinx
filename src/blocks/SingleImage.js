import React, { Component } from "react";
import { StyleSheet, css } from 'aphrodite';

// details.layout
// details.text
// details.image

export default class SingleImage extends Component {

  render() {
    return (
      <section className={css(ss.section)}>
        <img className={css(ss.image)} alt={this.props.details.imageAlt} title={this.props.details.imageAlt} src={this.props.language == 'es'  && this.props.details.esUrl ? this.props.details.esUrl : this.props.details.url} />
        <div style={{background: 'linear-gradient(153deg, '+ this.props.details.colorOne +' 0%, '+ this.props.details.colorTwo +' 100%)', height:'100%', width:'100%',position:'absolute', opacity:this.props.details.opacity, top:0,}} />
      </section>
    );
  }
}

const ss = StyleSheet.create({
  section: {
      width: 'auto',
      maxWidth:'100%',
      overflow:'hidden',
      display:'flex',
      borderRadius:3,
      alignItems:'center',
      justifyContent:'center',
      position:'relative'
  },
  image:{
	maxHeight:575,
	height:575,
    maxWidth:'100%',
	zIndex:1
  }
});