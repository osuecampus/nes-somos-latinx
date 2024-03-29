import React, { Component } from "react";
import { StyleSheet, css } from 'aphrodite/no-important';

// details.layout
// details.text
// details.image

export default class CardReveal extends Component {

	cardReveal(selectedCard, revealedCard){
		this.refs[selectedCard].classList.add(css(ss.cardFlip));
		setTimeout(() => { this.refs[revealedCard].classList.add(css(ss.revealFlip)) }, 200);
	}

	cardHide(selectedCard, revealedCard){
		this.refs[selectedCard].classList.remove(css(ss.cardFlip));
		setTimeout(() => { this.refs[revealedCard].classList.remove(css(ss.revealFlip)) }, 200);
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
            <div style={{maxWidth: (100/(this.props.details.cards.length))+'%'}} tabIndex={'4'} onKeyDown={(event) => event.keyCode == 13 ? this.cardReveal('card'+block.id, 'reveal'+block.id) : null } onClick={() => this.cardReveal('card'+block.id, 'reveal'+block.id)} ref={'card'+block.id} className={css(ss.card)}>
              <p style={{fontSize:32}} className={css(ss.cardText)}>{this.props.language == 'en' ? block.revealText: block.revealTextEs}</p>
            </div>
            <div tabIndex={'4'} onKeyDown={(event) => event.keyCode == 13 ? this.cardHide('card'+block.id, 'reveal'+block.id) : null } onClick={() => this.cardHide('card'+block.id, 'reveal'+block.id)} style={{maxWidth: (100/(this.props.details.cards.length))+'%'}} ref={'reveal'+block.id} className={css(ss.reveal)}>
              {block.text ? <div className={css(ss.cardText)}>{this.props.language == 'en' ? block.text : block.es}</div> : null }
              {block.textTwo ? <div className={css(ss.cardText)}>{this.props.language == 'en' ? block.textTwo : block.esTwo}</div> : null }
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
      alignItems:'space-around',
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
    flex:'1 1 auto',
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
    backgroundColor: '#aa0076',
    height: 330,
    width: 275,

    transform: 'rotateY(-0deg)',
    backfaceVisibility: 'hidden',
    border: '1px solid rgba(0,0,0,.15)',
    borderRadius: 3,
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
        border: '1px solid #ff66d7',
        backgroundColor: '#ff66d7'
    },
    '@media (max-width: 950px)': {
      width:'100%!important',
      maxWidth:'100%!important'
    }
  },
  reveal:{
    position: 'absolute',
    backgroundColor: '#aa0076',
    height: 330,
    width: 275,
   cursor:'pointer',
    transform: 'rotateY(-90deg)',
    backfaceVisibility: 'hidden',
    border: '1px solid #aa0076',
    color:'#fff',
    textAlign:'center',
    borderRadius: 3,
    overflow:'auto',
    fontSize:'smaller',
    fontFamily:'Crimson Text',
    flexDirection:'column',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 0,
    transition: 'all .2s ease-in-out',
    '@media (max-width: 950px)': {
      width:'100%!important',
      maxWidth:'100%!important'
	},
	':hover': {
        border: '1px solid #ff66d7',
        backgroundColor: '#ff66d7'
    },
  },
  cardFlip:{
      transform:'rotateY(90deg)',
  },
  revealFlip:{
    transform:'rotateY(0deg)',
},
});