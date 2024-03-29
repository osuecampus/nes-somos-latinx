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
        <div className={css(ss.text)}>
            {this.props.language == 'es' ? this.props.details.es : this.state.showAll ? this.props.details.text : this.props.details.summary + '..'}
            {!this.state.showAll && this.props.language == 'en' ? <div className={css(ss.hidden)}/>:null}
        </div>
        <div tabIndex='4' onKeyPress={e => e.which === 13 ?  this.revealText() : null } style={{display: this.props.language == 'es' ? 'none' : this.state.showAll ? 'none' : 'block'}} onClick={() => this.revealText()} className={css(ss.button)}>
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
    position:'relative'
  },
  hidden:{
    position:'absolute',
    bottom:0,
    height:2,
    width:'100%',
    background:'rgb(251,251,251)',
    boxShadow:'0px -5px 25px 25px rgba(251,251,251,.9)'
  },
  button:{
      color:'#fff',
      padding:'15px 26px',
      background:'#aa0076',
      borderRadius:3,
      fontSize:20,
      marginTop:20,
      cursor:'pointer',
      position:'relative',
      outline:0,
      transition:'all .2s ease-in-out',
      ':hover':{
          background:'#ff66d7'
      },
      ':focus':{
        background:'#ff66d7'
    }
  }
});