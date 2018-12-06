import React, { Component } from "react";
import { StyleSheet, css } from 'aphrodite';

// details.layout
// details.text
// details.image

export default class CardReveal extends Component {

  cardReveal(selectedCard, revealedCard){
    this.refs[selectedCard].classList.add(css(ss.cardFlip));
    setTimeout(() => { this.refs[revealedCard].classList.add(css(ss.revealFlip)) }, 200);
  }
  componentWillReceiveProps(props){

    let revealFlip = window.document.querySelectorAll('.'+css(ss.revealFlip));
    let cardFlip = window.document.querySelectorAll('.'+css(ss.cardFlip));

    [].forEach.call(revealFlip, (div) => {div.classList.remove(css(ss.revealFlip))});
    [].forEach.call(cardFlip, (div) => {div.classList.remove(css(ss.cardFlip))});
    
}

  render() {
    return (
      <section className={css(ss.section) + ' lightenUp'}>
        {this.props.details.cards.map((block) => 
          <div key={block.id} className={css(ss.cardHolder)}>
            <div tabIndex={'4'} onKeyDown={(event) => event.keyCode == 32 ? this.cardReveal('card'+block.id, 'reveal'+block.id) : null } onClick={() => this.cardReveal('card'+block.id, 'reveal'+block.id)} ref={'card'+block.id} className={css(ss.card)}>
              <p className={css(ss.cardText)}>{block.revealText}</p>
            </div>
            <div ref={'reveal'+block.id} className={css(ss.reveal)}>
              {block.text ? <div className={css(ss.cardText)}>{block.text}</div> : null }
              {block.textTwo ? <div className={css(ss.cardText)}>{block.textTwo}</div> : null }
              {block.textThree ? <div className={css(ss.cardText)}>{block.textThree}</div> : null }
            </div>
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
      justifyContent:'center',
      alignItems:'center',
      flexDirection:'row',
      marginTop:75,
      marginBottom:75,
      height:250,
      position:'relative',
      '@media (max-width: 950px)': {
        flexDirection: 'column',
        height:'fit-content'
      }
  },
  cardHolder:{
    flex:1,
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    '@media (max-width: 950px)': {
      height:340
    }
  },
  cardText:{
    padding:15,
    color:'#fff',
    fontSize:'smaller'
  },
  card:{
    position: 'absolute',
    backgroundColor: '#1f60e2',
    height: 275,
    width: 275,
    transform: 'rotateY(-0deg)',
    backfaceVisibility: 'hidden',
    border: '1px solid rgba(0,0,0,.15)',
    borderRadius: 10,
    display: 'flex',
    textAlign:'center',
    color:'#fff',
    cursor:'pointer',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily:'Crimson Text',
    padding: 0,
    transition: 'all .2s ease-in-out',
    ':hover': {
        border: '1px solid #1148b9',
        backgroundColor: '#1148b9'
    }
  },
  reveal:{
    position: 'absolute',
    backgroundColor: '#1f60e2',
    height: 275,
    width: 275,
    transform: 'rotateY(-90deg)',
    backfaceVisibility: 'hidden',
    border: '1px solid #1f60e2',
    color:'#fff',
    textAlign:'center',
    borderRadius: 10,
    overflow:'auto',
    fontSize:'smaller',
    fontFamily:'Crimson Text',
    flexDirection:'column',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 0,
    transition: 'all .2s ease-in-out',
  },
  cardFlip:{
      transform:'rotateY(90deg)',
  },
  revealFlip:{
    transform:'rotateY(0deg)',
},
});