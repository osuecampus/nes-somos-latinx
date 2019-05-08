import React, { Component } from "react";
import { StyleSheet, css } from 'aphrodite';

// details.layout
// details.text
// details.image

export default class TextReveal extends Component {

    constructor(props){
        super(props);
        this.state = {
            showAll:false
        }
    }

    revealText(){
        this.setState({
            showAll:true
        })
    }

  render() {
    return (
      <section className={css(ss.section)}>
        <p className={css(ss.text, !this.state.showAll && ss.hidden)}>{this.state.showAll ? this.props.details.text : this.props.details.summary + '..'}</p>
        <div style={{display: this.state.showAll ? 'none' : 'block'}} onClick={() => this.revealText()} className={css(ss.button)}>
            Show All Text
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
      flexDirection:'column',
  },
  text:{
    width:'100%',
    fontFamily:'Crimson Text',
  },
  button:{
      color:'#fff',
      padding:'15px 26px',
      background:'#aa0076',
      borderRadius:3,
      fontSize:22,
      marginTop:20,
      cursor:'pointer',
      transition:'all .2s ease-in-out',
      ':hover':{
          background:'#ff66d7'
      }
  }
});