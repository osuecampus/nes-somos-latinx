import React, { Component } from "react";
import { StyleSheet, css } from 'aphrodite';

// details.layout
// details.text
// details.image

export default class MessengerBubble extends Component {

  render() {
    return (
      <section className={this.props.details.side == 'left' ? css(ss.sectionLeft) : css(ss.sectionRight)}>
        <div className={ this.props.details.side == 'left' ? css(ss.bubbleLeft) : css(ss.bubbleRight)}>
            <p className={css(ss.name)}>{this.props.details.name}</p>
            <p className={css(ss.text)}>{this.props.details.text}</p>
            <svg className={ this.props.details.side == 'left' ? css(ss.leftTail) : css(ss.rightTail) } xmlns="http://www.w3.org/2000/svg" viewBox="0 0 118 97.29"><title>ios-bubble</title><g><path className={this.props.details.side == 'left' ? css(ss.leftColor) : css(ss.rightColor)} d="M68.61,0H0V72.63c9.3-1,18,.94,28.19,6.07C56,92.69,86,99.44,118,96.69,82.86,71.57,69.64,38.44,68.61,0Z"/></g></svg>
        </div>
      </section>
    );
  }
}

const ss = StyleSheet.create({
    sectionLeft: {
        width: '100%',
        display:'flex',
        alignItems:'center',
    },
    sectionRight: {
        width: '100%',
        display:'flex',
        alignItems:'center',
        justifyContent:'flex-end'
    },
  bubbleLeft:{
    maxWidth:600,
    width:'calc(100% - 40px)',
    marginLeft:20,
    padding:15,
    borderRadius:10,
    background:'#0e5bea',
    color:'#fff',
    position:'relative'
  },
  bubbleRight:{
    maxWidth:600,
    width:'calc(100% - 40px)',
    marginRight:20,
    padding:15,
    borderRadius:10,
    background:'#0034b7',
    color:'#fff',
    position:'relative'
  },
  name:{
    color:'#fff',
    fontSize:'smaller',
    fontWeight:'900'
  },
  leftColor:{
    fill:'#0e5bea',
  },
  rightColor:{
    fill:'#0034b7',
  },
  leftTail:{
    left: -25,
    bottom: -13,
    position: 'absolute',
    backfaceVisibility: 'visible',
    transform: 'rotateY(180deg)',
    height: 50,
    zIndex: 0,
  },
  rightTail:{
    right: -25,
    bottom: -13,
    position: 'absolute',
    height: 50,
    zIndex: 0,
  },
  text:{
    width:'100%',
    color:'#fff',
    position:'relative',
    zIndex:1,
    fontFamily:'Crimson Text',
  }
});