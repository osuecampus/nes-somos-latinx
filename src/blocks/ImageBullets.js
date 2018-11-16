import React, { Component } from "react";
import { StyleSheet, css } from 'aphrodite';

// details.layout
// details.text
// details.image

export default class ImageBullets extends Component {

  render() {
    return (
      <section className={css(ss.section)}>
      
        {this.props.details.map((block) => 
            <div className={css(ss.line)} key={block.key}>
                <div className={css(ss.image)}>
                    <img className={css(ss.img)} src={block.image} alt={block.imageAlt} title={block.imageAlt} />
                </div>
                <p className={css(ss.text)}>{block.text}</p>
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
      flexDirection:'column'
  },
  line:{
    width:'100%',
    display:'flex',
    paddingTop:10,
    paddingBottom:10
  },
  text:{
    fontFamily:'Crimson Text',
    display:'flex',
    alignItems:'center',
    paddingLeft:25
  },
  image:{
      display:'flex',
      justifyContent:'center',
      alignItems:'center',
      width:80,
      minWidth:80
  },
  img:{
      width:'90%',
  }
});