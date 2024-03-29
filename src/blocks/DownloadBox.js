import React, { Component } from "react";
import { StyleSheet, css } from 'aphrodite';

// details.layout
// details.text
// details.image

export default class DownloadBox extends Component {

  render() {
    return (
      <section className={css(ss.section)}>
        <div className={css(ss.innerBox)}>
          <p className={css(ss.text)}><img alt={'PDF Download Icon'} className={css(ss.icon)} src={'./assets/img/icon-pdf.svg'} />  {this.props.details.text}</p>
          <a tabIndex={'4'} download className={css(ss.button)} target={'_blank'} href={this.props.details.link} alt={this.props.details.text}>Download</a>
        </div>
      </section>
    );
  }
}

const ss = StyleSheet.create({
  section: {
    display:'flex',
    width:'100%',
  },
  icon:{
    height:34,
    marginRight: 10
  },
  innerBox:{
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
      width:'100%',
      padding:0
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
      width: 'calc(100% - 70px)',
      marginTop:25,
      marginLeft:0,
      marginBottom:35,
    },
    ':hover': {
        backgroundColor: '#0046bb'
    }
  },
  text:{
    width:'calc(100% - 250px)',
    fontFamily: 'Open Sans',
    fontSize: 20,
    display:'flex',
    alignItems:'center',
    lineHeight: '28px',
    '@media (max-width: 700px)': {
      width: '100%',
      textAlign:'center',
      marginTop:35,
    }
  }
});