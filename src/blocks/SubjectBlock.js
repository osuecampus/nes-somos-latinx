import React, { Component } from "react";
import { StyleSheet, css } from 'aphrodite';

// details.layout
// details.text
// details.image

export default class SubjectBlock extends Component {

  render() {
    return (
      <section style={{ height: this.props.details.backgroundType == 'image' ||  this.props.details.backgroundType == 'color' ? 280 : 'initial',   background: this.props.details.backgroundType == 'image' ? 'url('+this.props.details.backgroundValue+')' : this.props.detailsBackgroundType == 'none' ? 'transparent': this.props.details.backgroundValue }} className={css(ss.section, (this.props.details.backgroundType == 'image' ? ss.wideLoad : null))}>
        <p style={{ fontSize: this.props.details.size ? 'larger' : 'inherit', textAlign: this.props.details.align}} className={css(ss.text,(this.props.details.backgroundType == 'image' ? ss.overlay : null) ) }>
          <span className={css(ss.innerText)}>
            {this.props.details.text}
          </span>
        </p>
      </section>
    );
  }
}

const ss = StyleSheet.create({
  section: {
      width:'100%',
      display:'flex',
      alignItems:'center',
      backgroundPosition: 'left',
      backgroundSize: 'cover',
      overflow:'hidden'
  },
  wideLoad:{
    width: '100%',
    marginLeft:0,
    '@media (max-width: 700px)': {
      width:'100%',
      marginLeft:0
    }
  },
  overlay:{
    height:'100%',
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    color:'#fff',
    backgroundColor: 'rgba(42, 0, 140, 0.4)',
    background: 'linear-gradient(160deg, rgba(42, 0, 140, 0.8) 0%, rgba(42,0,140,0) 100%), rgba(42, 0, 140, 0.4)'
  },
  text:{
    width:'100%',
    fontFamily:'Open Sans',
    fontWeight:'900',
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    textShadow:'0 1px 4px rgba(0, 0, 0, 0)'
  },
  innerText:{
    maxWidth:860,
    width:'100%',
  }
});