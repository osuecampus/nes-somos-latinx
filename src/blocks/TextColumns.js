import React, { Component } from "react";
import { StyleSheet, css } from 'aphrodite';

// details.layout
// details.text
// details.image

export default class TextColumns extends Component {

  render() {
    return (
      <section className={css(ss.section)}>
        {this.props.details.columns.map((block) => 
          <div style={{width: (( 1 / this.props.details.columns.length) * 100)+'%'}} className={css(ss.column)} key={block.id}>
            {block.image ? <img src={block.image} alt={block.imageAlt} title={block.imageAlt} /> : null } 
            {block.headline ? <h1 className={css(ss.headline)}>{block.headline}</h1> : null }
            {block.text ? <p className={css(ss.text)}>{block.text}</p> : null }
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
      flexDirection:'row',
      justifyContent:'space-around',
      alignItems:'flex-start',
      '@media (max-width: 700px)': {
        flexDirection: 'column',
        alignItems:'center',
      }
  },
  text:{
    width:'100%',
    fontFamily:'Crimson Text',
    fontSize:'smaller',
    textAlign:'center'
  },
  column:{
    display:'flex',
    padding:5,
    alignItems:'center',
    justifyContent:'flex-start',
    flexDirection:'column'
  },
  headline:{
    borderRadius:'50%',
    background:'#1f60e2',
    color:'#fff',
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    fontSize:28,
    fontWeight:'900',
    margin:0,
    width:60,
    height:60,
    marginBottom:15
  }
});