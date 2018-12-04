import React, { Component } from "react";
import { StyleSheet, css } from 'aphrodite';

// details.layout
// details.text
// details.image

export default class TimelineArrow extends Component {

  render() {
    return (
      <section className={css(ss.section)}>
        <div className={css(ss.arrowHold)}>
            <svg className={css(ss.arrowHeadTop)} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 86.6 62"><title>tri-top</title><polygon style={{fill:'#444'}} points="43.3 0 0 62 86.6 62 43.3 0"/></svg>
            <div className={css(ss.arrowHandle)}></div>
            <svg className={css(ss.arrowHeadBottom)} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 86.6 62"><title>tri-bottom</title><polygon style={{fill:'#444'}} points="43.3 62 86.6 0 0 0 43.3 62"/></svg>
        </div>
        <div className={css(ss.blockHold)}>
            {this.props.details.events.map((block) => 
                <div style={{background: block.background}} className={css(ss.blocker)} key={block.id}>
                    {block.text ? <p style={{color: block.color}} className={css(ss.text)}>{block.text}</p> : null }
                </div>
            )}
        </div>
      </section>
    );
  }
}

const ss = StyleSheet.create({
  section: {
      width: '100%',
      display:'flex',
      flexDirection:'row',
      justifyContent:'center',
      alignItems:'center'
  },
  arrowHold:{
    width:50,
    position:'relative',
    height:300,
  },
  arrowHeadBottom:{
    width:26,
    position:'absolute',
    bottom:0,
    left:2,
  },
  blocker:{
    margin:10,
    padding:15,
    borderRadius:10
  },
  arrowHeadTop:{
    width:26,
    position:'absolute',
    top:0,
    left:2,
  },
  arrowHandle:{
    height:'calc(100% - 10px)',
    width:5,
    left:12,
    background:'#444',
    top:5,
    position:'absolute'
  },
  blockHold:{
    width:'calc(100% - 50px)',
    maxWidth:600,
    display:'flex',
    flexDirection:'column'
  },
  text:{
    width:'100%',
    fontFamily:'Crimson Text',
    fontSize:'smaller',
    textAlign:'center'
  }
});