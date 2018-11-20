import React, { Component } from "react";
import { StyleSheet, css } from 'aphrodite';

// details.layout
// details.text
// details.image

export default class HighlightedBits extends Component {

  render() {
    return (
      <section className={css(ss.section)}>
        <div className={css(ss.bits)}>
            <p className={css(ss.text)}>
                {this.props.details.textBlocks.map((block) => 
                    block.type == 'text' ? 
                        <span key={block.id}> {block.text} </span>
                    : 
                        (<span key={block.id} className={css(ss.highlightedBit)} style={{backgroundColor: block.highlight, color: block.color}}> {block.text} </span>)
                    
                )}
            </p>
        </div>
        <div className={css(ss.legends)}>
            {this.props.details.legends.map((block) =>
                <div key={block.id} style={{background: block.highlight, color: block.color}} className={css(ss.legendHolder)}>
                        {block.text}
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
      alignItems:'center',
      flexDirection:'column'
  },
  legends:{
    width:'100%',
  },
  legendHolder:{
    width:'calc(100% - 30px)',
    minWidth:'calc(100% - 30px)',
    maxWidth:'calc(100% - 30px)',
    justifyContent:'center',
    alignItems:'center',
    padding:15,
    marginTop:15,
    fontSize:'smaller',
    borderRadius:10
  },
  legendTitle:{
      width:'100%'
  },
  text:{
    width:'100%',
    fontFamily:'Crimson Text',
  },
  highlightedBit:{
      borderRadius:4,
  }
});