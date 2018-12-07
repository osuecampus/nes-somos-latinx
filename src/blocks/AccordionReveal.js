import React, { Component } from "react";
import { StyleSheet, css } from 'aphrodite';

// details.layout
// details.text
// details.image

export default class AccordionReveal extends Component {

    accordionReveal(selectedAccordion, revealedAccordion){
      this.refs[revealedAccordion].classList.toggle(css(ss.hide));
      this.refs[revealedAccordion].classList.toggle(css(ss.show));
      this.refs[selectedAccordion].classList.toggle(css(ss.plus));
      this.refs[selectedAccordion].classList.toggle(css(ss.minus));
    }

  render() {
    
    

    return (
      <section className={css(ss.section) + ' lightenUp'}>
        {this.props.details.accordions.map((block) => 
          <div key={block.id} className={css(ss.accordion)}>
            <div tabIndex={'4'} onKeyDown={(event) => event.keyCode == 32 ? this.accordionReveal('accordion'+block.id, 'reveal'+block.id) : null } onClick={() => this.accordionReveal('accordion'+block.id, 'reveal'+block.id)} ref={'accordion'+block.id} className={css(ss.accordionTitle, ss.plus)}>
              {block.revealText}
              <sup className={css(ss.plusNegative)}>+</sup>
              <sub className={css(ss.plusNegative)}>-</sub>
            </div>
            <div ref={'reveal'+block.id} className={css(ss.reveal, ss.hide)}>
              {block.text ? <div className={css(ss.text)}>{block.text}</div> : null }
              {block.html ? <div className={css(ss.html)} dangerouslySetInnerHTML={{__html: block.html}}/> : null }
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
      flexDirection:'column',
      marginTop:75,
      marginBottom:75,
      border:'1px solid #acacac',
      borderRadius:10,
      overflow:'hidden',
      backgroundColor:'rgba(255,255,255,.05)'
  },
  plus:{
    ':nth-child(1n) > sup':{
      display:'flex'
    },
    ':nth-child(1n) > sub':{
      display:'none'
    }
  },
  minus:{
    ':nth-child(1n) > sup':{
      display:'none'
    },
    ':nth-child(1n) > sub':{
      display:'flex'
    }
  },
  hide:{
    display:'none',
  },
  show:{
    display:'flex',
  },
  accordion:{
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    flexDirection:'column'
  },
  html:{
    width:'100%'
  },
  accordionTitle:{
    width:'calc(100% - 75px)',
    fontFamily:'Crimson Text',
    display:'flex',
    position:'relative',
    fontWeight:'600',
    outline:0,
    position:'relative',
    textAlign:'left',
    borderBottom:'1px solid rgba(200,200,200,.25)',
    padding:25,
    paddingRight:50,
    cursor:'pointer',
    transition:'all .2s ease-in-out',
    ':hover':{
      backgroundColor:'rgba(200,200,200,.1)',
      color:'#0e5bea'
    },
    ':focus':{
      backgroundColor:'rgba(200,200,200,.1)',
      color:'#0e5bea'
    }
  },
  plusNegative:{
    position:'absolute',
    right:25,
    top:15,
    fontSize:36,
    fontWeight:'900'
  },
  reveal:{
    width:'calc(100% - 50px)',
    fontSize:'smaller',
    fontFamily:'Crimson Text',
    paddingTop:75,
    paddingBottom:75,
    flexDirection:'column',
    borderBottom:'1px solid rgba(200,200,200,.25)',
    alignItems: 'center',
    padding: 25,
    backgroundColor:'rgba(255,255,255,.05)',
    transition: 'all .2s ease-in-out',
  },
});