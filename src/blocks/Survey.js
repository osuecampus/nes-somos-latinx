import React, { Component } from "react";
import { StyleSheet, css } from 'aphrodite';

export default class Survey extends Component {
  constructor(props) {
    super(props);

    this.state = { answer: null }
  }

  answerSurvey(answer) {
    this.setState({
      answer
    })
  }

  render() {
    const surveyResults = <div>{this.props.details.options.map((option, index) => <p key={index} className={css(ss.text)}>{option.answer}: {option.value}</p>)}</div>

    return (
      <section className={css(ss.section)}>
        <div className={css(ss.question)}>
          <p className={css(ss.text)}>{this.props.details.question}</p>
        </div>
        {!this.state.answer ?
          this.props.details.options.map((option, index) => 
            <button tabIndex={'4'} key={index} id={index} onKeyPress={e => e.which === 13 ? this.changeSlide(option.answer) : null} onClick={() => this.answerSurvey(option.answer)} style={{color:this.props.details.color, background:this.props.details.background}} className={css(ss.option)}>{option.answer}</button>)
        
          : <div>Thanks!</div>}
      </section>
    );
  }
}

const ss = StyleSheet.create({
  section: {
    borderRadius:3,
    padding:35,
      backgroundColor:'rgba(192,192,192,.2)',
    display:'flex',
    alignItems:'center',
    flexDirection:'column',
    '@media (max-width: 700px)': {
      padding:0,
      paddingTop:15,
      paddingBottom:15
    }
  },
  question:{
      opacity:1,
      transform:'scale(1)',
      transition: 'all .2s ease-in-out',
      '@media (max-width: 700px)': {
        width:'calc(100% - 30px)',
    },
    marginBottom: 10
  },
  text:{
    width:'100%',
    fontSize:'larger',
    fontFamily:'Crimson Text',
    textAlign:'center',
  },
  option: {
    width:500,
    margin: 10,
    fontFamily: 'Open Sans',
    fontSize: 20,
    border:'none',
    padding:16,
    textDecoration: 'none',
    textAlign: 'center',
    fontWeight: '600',
    cursor:'pointer',
    borderRadius:3,
    transition:'all .2s ease-in-out',
    '@media (max-width: 700px)': {
      width: 'calc(100% - 70px)',
      marginTop:5,
      marginLeft:0,
      marginBottom:5,
    }
  }
});