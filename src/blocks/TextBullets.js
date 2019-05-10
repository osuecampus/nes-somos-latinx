import React, { Component } from "react";
import { StyleSheet, css } from 'aphrodite';

export default class TextBullets extends Component {

  render() {
    return (
      <section className={css(ss.section)}>
      
        {this.props.details.map((block) => 
            <div className={css(ss.line)} key={block.key}>
                {block.number ? 
                  <div className={css(ss.numberDot)}>{block.number}</div>
                : 
                  <div className={css(ss.dot)} />
                }
                <p className={css(ss.text)}>{this.props.language == 'en' ? block.text : block.es}</p>
            </div>
        )}
      </section>
    );
  }
}

const ss = StyleSheet.create({
  section: {
      width: '100%',
      display:'flex',
      alignItems:'center',
      flexDirection:'column',
      marginTop:20
  },
  line:{
    width:'100%',
    display:'flex',
    alignItems:'center',
    paddingTop:10,
    paddingBottom:10
  },
  text:{
    fontFamily:'Crimson Text',
    display:'flex',
    alignItems:'center',
    paddingLeft:25
  },
  dot:{
    width:8,
    minWidth:8,
    height:8,
    marginLeft:20,
    borderRadius:45,
    background:'#1f60e2'
  },
  numberDot:{
    width:30,
    minWidth:30,
    height:30,
    marginLeft:20,
    borderRadius:45,
    color:'#fff',
    fontSize:14,
    fontWeight:'800',
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    background:'rgb(170, 0, 118)'
  }
});