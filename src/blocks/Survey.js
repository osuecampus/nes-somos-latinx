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
    const surveyResults = <div>{this.props.details.options.map(option => <p className={css(ss.text)}>{option.answer}: {option.value}</p>)}</div>

    return (
      <section className={css(ss.section)}>
        <div className={css(ss.question)}>
          <p className={css(ss.text)}>{this.props.details.question}</p>
        </div>
          {this.props.details.options.map(option => 
            <button onKeyPress={e => e.which === 13 ? this.changeSlide(option.answer) : null} onClick={() => this.answerSurvey(option.answer)} className={css(ss.option)}>{option.answer}</button>)}
        {this.state.answer ? surveyResults : null}
      </section>
    );
  }
}

const ss = StyleSheet.create({
  section: {
    width: 'calc(100% - 30px)',
    borderRadius:10,
    padding:15,
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
    fontSize: 18,
    color: '#fff',
    textDecoration: 'none',
    textAlign: 'center',
    padding: '12px 0px 10px 10px',
    fontWeight: '700',
    borderRadius:45,
    backgroundColor:'#1f60e2',
    transition:'all .2s ease-in-out',
    '@media (max-width: 700px)': {
      width: 'calc(100% - 70px)',
      marginTop:25,
      marginLeft:0,
      marginBottom:35,
    }
  }
});