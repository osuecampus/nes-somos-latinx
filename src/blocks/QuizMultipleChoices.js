import React, { Component } from "react";
import { StyleSheet, css } from 'aphrodite';

// details.layout
// details.text
// details.image

export default class QuizMultipleChoices extends Component {

  constructor(props) {
    super(props);
    this.state = {
      currentQuestion: 0,
      currentAnswer: 0,
      total: 0
    };
  }

  
  checkAnswer(id, buttonClicked){
      console.log(id, buttonClicked);
    id == true ? 
         (this.refs[buttonClicked].classList.add(css(ss.correct)))
    : 
        (this.refs[buttonClicked].classList.add(css(ss.wrong)))
  }

  render() {
    return (
      <section className={css(ss.section)}>
        <div className={css(ss.questionHold)}>
            {this.props.details.question ? 
                <div ref={'question'} className={css(ss.question)}>
                    <p className={css(ss.text)}>{this.props.details.question}</p>
                </div>
            : null }
        </div>
        <div className={css(ss.answerHold)}>
            {this.props.details.options.map((block) => 
                <div ref={'answer'+block.id} onKeyDown={(event) => event.keyCode == 32 ? this.checkAnswer(block.valid, 'answer'+block.id) : null } onClick={() => this.checkAnswer(block.valid, 'answer'+block.id)} tabIndex={'4'} key={block.id} className={css(ss.answer)}>
                    <p className={css(ss.answerText)}>{block.text}</p>
                </div>
            )}
        </div>
        
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
    }
  },
  phaseOut:{
    opacity:0,
    transform:'scale(.6)',
  },
  questionHold:{
    width:'100%',
    maxWidth:650,
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    paddingBottom:35,
    paddingTop:50,
  },
  text:{
    width:'100%',
    fontSize:'smaller',
    fontFamily:'Crimson Text',
    textAlign:'center',
  },
  answerText:{
    width:'100%',
    fontFamily:'Crimson Text',
    textAlign:'center',
  },
  answerHold:{
      width:'100%',
      display:'flex',
      justifyContent:'center',
      flexDirection:'column',
      alignItems:'center',
      paddingBottom:40,
  },
  answer:{
      padding:35,
      textAlign:'center',
      display:'flex',
      justifyContent:'center',
      alignItems:'center',
      backgroundColor:'rgba(100,100,100,.25)',
      fontSize:15,
      borderRadius:10,
      width:'calc(100% - 100px)',
      margin:12,
      cursor:'pointer',
      fontWeight:'600',
      color:'#fff',
      transition: 'all .2s ease-in-out',
        ':focus':{
            backgroundColor: '#555'
        },
        '@media (max-width: 700px)': {
            width: 'calc(100% - 120px)',
            marginTop:5
        },
  },
  correct:{
      backgroundColor:'green',
      color:'#fff',
      ':focus':{
          backgroundColor:'green'
      },
      ':hover':{
          backgroundColor:'green'
      },
      ':first-child':{
        
        color:'#fff'
    }
  },
  wrong:{
    backgroundColor:'red',
    color:'#fff',
    ':focus':{
        backgroundColor:'red'
    },
    ':hover':{
        backgroundColor:'red'
    },
    ':first-child':{

        color:'#fff'
    }
  }
});