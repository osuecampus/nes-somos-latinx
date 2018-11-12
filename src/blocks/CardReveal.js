import React, { Component } from "react";
import { StyleSheet, css } from 'aphrodite';

// details.layout
// details.text
// details.image

export default class CardReveal extends Component {

    cardReveal(){
        this.card.classList.add(css(ss.cardFlip));
        setTimeout(() => { this.reveal.classList.add(css(ss.revealFlip)) }, 200);
    }

  render() {
    return (
      <section className={css(ss.section) + ' lightenUp'}>
        <div tabIndex={'4'} onKeyDown={(event) => event.keyCode == 32 ? this.cardReveal() : null } onClick={() => this.cardReveal()} ref={(card) => this.card = card} className={css(ss.card)}>
            {this.props.details.revealText}
        </div>
        <div ref={(reveal) => this.reveal = reveal} className={css(ss.reveal)}>
            {this.props.details.text ? <div className={css(ss.quoteBox)}>{this.props.details.text}</div> : null }
            {this.props.details.textTwo ? <div className={css(ss.quoteBox)}>{this.props.details.textTwo}</div> : null }
            {this.props.details.textThree ? <div className={css(ss.quoteBox)}>{this.props.details.textThree}</div> : null }
        </div>
      </section>
    );
  }
}

const ss = StyleSheet.create({
  section: {
      width: '100%',
      display:'flex',
      justifyContent:'center',
      alignItems:'center',
      flexDirection:'row',
      marginTop:75,
      marginBottom:75,
      height:250,
      position:'relative'
  },
  card:{
    position: 'absolute',
    backgroundColor: 'rgba(255,255,255,.1)',
    height: 250,
    width: 250,
    transform: 'rotateY(-0deg)',
    backfaceVisibility: 'hidden',
    border: '1px solid rgba(0,0,0,.15)',
    borderRadius: 10,
    display: 'flex',
    textAlign:'center',
    color:'#404040',
    cursor:'pointer',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily:'Crimson Text',
    padding: 25,
    transition: 'all .2s ease-in-out',
    ':hover': {
        border: '1px solid #505050',
        backgroundColor: 'rgb(0, 0, 0, .05)'
    }
  },
  reveal:{
    position: 'absolute',
    backgroundColor: '#1f60e2',
    height: 250,
    width: 250,
    transform: 'rotateY(-90deg)',
    backfaceVisibility: 'hidden',
    border: '1px solid #1f60e2',
    color:'#fff',
    textAlign:'center',
    borderRadius: 10,
    fontSize:'smaller',
    fontFamily:'Crimson Text',
    flexDirection:'column',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 25,
    transition: 'all .2s ease-in-out',
  },
  cardFlip:{
      transform:'rotateY(90deg)',
  },
  revealFlip:{
    transform:'rotateY(0deg)',
},
});