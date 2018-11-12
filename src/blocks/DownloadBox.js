import React, { Component } from "react";
import { StyleSheet, css } from 'aphrodite';

// details.layout
// details.text
// details.image

export default class DownloadBox extends Component {

  render() {
    console.log(this.props.details.layout)
    return (
      <section className={css(ss.section)}>
        <p className={css(ss.text)}>{this.props.details.text}</p>
        <a tabIndex={'4'} download className={css(ss.button)} target={'_blank'} href={this.props.details.link} alt={this.props.details.text}>Download</a>
      </section>
    );
  }
}

const ss = StyleSheet.create({
  section: {
      width: 'calc(100% - 70px)',
      display:'flex',
      padding:35,
      justifyContent:'space-between',
      alignItems:'center',
      flexDirection:'row',
      background: 'rgba(255,255,255,.1)',
      borderRadius: 10,
      border: '1px solid rgba(0,0,0,.15)',
      '@media (max-width: 700px)': {
        flexDirection: 'column',
      }
  },
  button:{
    width:200,
    fontFamily: 'Open Sans',
    fontSize: 22,
    color: '#fff',
    textDecoration: 'none',
    textAlign: 'center',
    padding: '18px 0px',
    fontWeight: '700',
    borderRadius:45,
    backgroundColor:'#1f60e2',
    transition:'all .2s ease-in-out',
    '@media (max-width: 700px)': {
      width: '100%',
      marginTop:25
    },
    ':hover': {
        backgroundColor: '#0046bb'
    }
  },
  text:{
    width:'calc(100% - 250px)',
    fontFamily: 'Open Sans',
    fontSize: 20,
    lineHeight: '28px',
    '@media (max-width: 700px)': {
      width: '100%',
    }
  }
});