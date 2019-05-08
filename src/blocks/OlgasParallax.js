import React, { Component } from "react";
import { StyleSheet, css } from 'aphrodite';


export default class OlgasParallax extends Component {

    constructor(props){
        super(props);
        this.state = {
            scroll:0
        }
    }

    parallax(){
        this.state.scroll !== window.scrollY  * -.6 ?
        this.setState({
            scroll:window.scrollY * -.6
        }) : null
    }

  render() {

    window.addEventListener('scroll', (e) => {
       this.parallax()
    })


    return (
      <section className={css(ss.section)}>
        <div style={{position:'absolute', clip:'rect(0,auto,auto,0)', width:'100%', height:'100%'}}>
            <div style={{position:'fixed', top:0, left:0, width:'100%', height:'100%',background:'url("../assets/img/pattern-' + this.props.details.type + '.png") 0px '+(this.state.scroll)+'px,linear-gradient(342deg, ' + this.props.details.colorOne + ' 0%, '+ this.props.details.colorTwo +' 100%), '+ this.props.details.colorTwo+''}} >
            
            </div>
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
      position:'relative',
      overflow:'hidden',
      height:40
  },

  text:{
    width:'100%',
    fontFamily:'Crimson Text',
  }
});