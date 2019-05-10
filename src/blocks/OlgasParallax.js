import React, { Component } from "react";
import { StyleSheet, css } from 'aphrodite';


const parallax = () => {
  
}

export default class OlgasParallax extends Component {

    constructor(props){
        super(props);
        this.state = {
            scroll:0
        }
    }

    componentDidMount() {
      window.addEventListener('scroll', this.parallax, false);
  }

  componentWillUnmount() {
      window.removeEventListener('scroll', this.parallax, false);
  }


  

    parallax = () => {
      this.state.scroll !== window.scrollY  * -.075 ?
      this.setState({
        scroll:window.scrollY * -.075
    })
         : null
      
    }

  render() {


    return (
      <section style={{height: this.props.details.subtext ? 200 : this.props.details.title ? 100 : 50}} className={css(ss.section)}>
        <div style={{position:'absolute', clip:'rect(0,auto,auto,0)', width:'100%', height:'100%'}}>
            <div style={{position:'fixed', transform: 'translateZ(0px)', top:0, left:0, width:'100%', height:'100%',background:'url("../assets/img/pattern-' + this.props.details.type + '.png") 0px '+(this.state.scroll)+'px,linear-gradient(342deg, ' + this.props.details.colorOne + ' 0%, '+ this.props.details.colorTwo +' 100%), '+ this.props.details.colorTwo+''}} ></div>
            {this.props.details.title ? <h1 style={{color:this.props.details.color == 'yellow' ? '#aa0076' : this.props.details.color = 'blue' ? '#aa0076' : '#aa0076' }} className={css(ss.title)}>{this.props.details.title}</h1> : null }
            {this.props.details.subtext ? <p style={{color:this.props.details.color == 'yellow' ? '#aa0076' : this.props.details.color = 'blue' ? '#aa0076' : '#aa0076' }} className={css(ss.subtext)}>{this.props.details.subtext}</p> : null }
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
      transform: 'translateZ(0px)'
  },
  title:{
    position:'absolute',
    zIndex:4,
    top:15,
    margin:0,
    width:'calc(100% - 30px)',
    left:15,
    height:'calc(100% - 30px)',
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    background:'#fff',
    borderRadius:3,
    fontWeight:'900',
    '@media (max-width: 950px)': {
      fontSize:26
    }
  },
  subtext:{
    position:'absolute',
    zIndex:4,
    top:15,
    margin:0,
    width:'calc(100% - 30px)',
    fontSize:25,
    left:15,
    height:'calc(100% - 30px)',
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    textAlign:'center',
    background:'#fff',
    borderRadius:3,
    fontFamily:'Crimson Text',
    fontWeight:'400',
  },

  text:{
    width:'100%',
    fontFamily:'Crimson Text',
  }
});