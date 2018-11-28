import React, { Component } from "react";
import { StyleSheet, css } from 'aphrodite';

export default class SectionedArrow extends Component {

  render() {
    return (
      <section className={css(ss.section)}>
        <div className={css(ss.rowContainer)}>
            <div style={{backgroundColor: this.props.details[0].background}} className={css(ss.chunkStart)}>
                <p className={css(ss.text)}>{this.props.details[0].text}</p>
            </div>
            <div style={{backgroundColor: this.props.details[1].background}} className={css(ss.chunkMiddle)}>
                <p className={css(ss.text)}>{this.props.details[1].text}</p>
            </div>
            <div style={{backgroundColor: this.props.details[2].background}} className={css(ss.chunkEnd)}>
                <svg className={css(ss.tip)} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 58 86.6"><title>Arrow</title><polygon style={{fill: this.props.details[2].background}} points="58 43.3 0 0 0 86.6 58 43.3"/></svg>
                <p className={css(ss.text)}>{this.props.details[2].text}</p>
            </div>
        </div>
      </section>
    );
  }
}

const ss = StyleSheet.create({
  section: {
      width: '100%',
      display:'flex',
      alignItems:'center',
      flexDirection:'row',
      marginTop:0,
      paddingTop:0,
      paddingBottom:35,
      '@media (max-width: 700px)': {
        width:'90%',
        flexDirection:'column',
        paddingTop:0,
        marginTop:0,
      }
  },
  rowContainer:{
    width:'calc(100% - 100px)',
    display:'flex',
      alignItems:'center',
      flexDirection:'row',
      marginTop:20,
      paddingTop:35,
      paddingBottom:35,
      '@media (max-width: 700px)': {
        width:'90%',
        flexDirection:'column'
      }
  },
  chunkStart:{
    borderTopLeftRadius:80,
    borderBottomLeftRadius:80,
    height:100,
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    '@media (max-width: 700px)': {
        width:'100%',
        maxWidth:200,
        paddingTop:30,
        paddingBottom:15,
        borderBottomLeftRadius:0,
        borderTopRightRadius:80,
        flexDirection:'column'
      }
  },
  chunkMiddle:{
    height:100,
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    '@media (max-width: 700px)': {
        width:'100%',
        maxWidth:200,
        paddingTop:30,
        paddingBottom:15,
        flexDirection:'column'
      }
  },
  chunkEnd:{
    height:100,
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    position:'relative',
    '@media (max-width: 700px)': {
        width:'100%',
        maxWidth:200,
        paddingTop:30,
        paddingBottom:15,
        marginBottom:100,
        flexDirection:'column'
      }
  },
  tip:{
    height:'calc(100% + 70px)',
    position:'absolute',
    right:-70,
    '@media (max-width: 700px)': {
        width:'calc(100% + 70px)',
        maxWidth:210,
        minWidth:210,
        width:210,
        height:'initial',
        right:'initial',
        bottom:-190,
        transform:'rotate(90deg)'
      }
  },
  text:{
    fontFamily:'Crimson Text',
    position:'relative',
    display:'flex',
    alignItems:'center',
    textAlign:'center',
    paddingLeft:25,
    paddingRight:25,
    color:'#fff',
    fontSize:'smaller'
  }
});