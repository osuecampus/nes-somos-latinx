import React, { Component } from "react";
import { StyleSheet, css } from 'aphrodite';

// details.layout
// details.text
// details.image

export default class Carousel extends Component {
  constructor(props) {
      super(props);
    
      this.state = {
        slideIndex: 0
      }
  }

  changeSlide(delta) {
    if (this.state.slideIndex + delta < 0) {
      this.setState({
        slideIndex: this.props.details.images.length - 1
      })
    }
    else if (this.state.slideIndex + delta >= this.props.details.images.length) {
      this.setState({
        slideIndex: 0
      })
    }
    else {
      this.setState({
        slideIndex: this.state.slideIndex + delta
      });
    }
  }

  render() {
    return (
      <section className={css(ss.section)}>
        <img className={css(ss.slide)} alt={this.props.details.images[this.state.slideIndex].imageAlt} title={this.props.details.images[this.state.slideIndex].imageAlt} src={this.props.details.images[this.state.slideIndex].url} />
        
        <div className={css(ss.controls)}>
          <button tabIndex={'4'} className={css(ss.button)} target={'_blank'} onKeyPress={e => e.which === 13 ? this.changeSlide(-1) : null} onClick={() => this.changeSlide(-1)}>Prev</button>
          <button tabIndex={'4'} className={css(ss.button)} target={'_blank'} onKeyPress={e => e.which === 13 ? this.changeSlide(1) : null} onClick={() => this.changeSlide(1)}>Next</button>
        </div>
        
      </section>
    );
  }
}

const ss = StyleSheet.create({
  section: {
    width: 'auto',
    maxWidth:'100%',
    overflow:'hidden',
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    flexDirection: 'row',
    paddingBottom:100,
    position:'relative',
    width:'100%'
  },
  slide: {
    maxHeight:575,
    maxWidth:400,
    borderRadius:0,
    width:'100%',
  },
  controls:{
    flexDirection: "row",
    margin: 20,
    position:'absolute',
    bottom:0
  },
  button:{
    width:100,
    fontFamily: 'Open Sans',
    background:'rgb(170, 0, 118)',
    fontSize: 18,
    color: '#fff',
    margin:'0px 5px',
    cursor:'pointer',
    border:'none',
    textDecoration: 'none',
    textAlign: 'center',
    padding: '12px 0px',
    fontWeight: '600',
    borderRadius:3,
    transition:'all .2s ease-in-out',
    '@media (max-width: 700px)': {
      width: 'calc(100% - 70px)',
      marginTop:5,
      marginLeft:0,
      marginBottom:5,
    },
    ':hover': {
        backgroundColor: 'rgb(255, 102, 215)'
    }
  }
});