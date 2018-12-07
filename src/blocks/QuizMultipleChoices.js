import React, { Component } from "react";
import { StyleSheet, css } from 'aphrodite';

// details.layout
// details.text
// details.image

export default class QuizMultipleChoices extends Component {

  componentDidMount(){
        this.correct = 0;
        this.total = 0;
        this.props.details.options.forEach((option) => {
            option.valid == true ? (this.total = this.total+1) : null
        });
  }

  
  checkAnswer(id, buttonClicked){
    id == true ? 
         (this.refs[buttonClicked].classList.add(css(ss.correct)), this.correct = this.correct + 1, console.log(this.correct), this.correct == this.total ? (this.refs.missionAccomplished.classList.add(css(ss.greatJob)), this.refs.missionStatement.classList.add(css(ss.correctResponse))) : null )
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
        <div ref={'missionAccomplished'} className={css(ss.hiddenJob)}>Great Job!</div>
        <p ref={'missionStatement'} className={css(ss.hiddenResponse)}>{this.props.details.correctStatement}</p>
        
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
    color:'#fff',
    fontSize:'smaller'
  },
  hiddenJob:{
    fontSize:0,
    marginBottom:0,
    transition:'all .2s ease-in-out',
  },
  hiddenResponse:{
    fontSize:0,
    maxWidth:650,
    marginBottom:0,
    fontFamily:'Crimson Text',
    transition:'all .2s ease-in-out',
  },
  greatJob:{
    fontWeight:'900',
    marginBottom:10,
    fontSize:36,
  },
  correctResponse:{
    marginBottom:30,
    fontSize:'smaller'
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
      backgroundColor:'#0e5bea',
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
      backgroundColor:'#31a900',
      color:'#fff',
      ':focus':{
          backgroundColor:'#31a900'
      },
      ':hover':{
          backgroundColor:'#31a900'
      }
  },
  wrong:{
    backgroundColor:'#e25714',
    color:'#fff',
    ':focus':{
        backgroundColor:'#e25714'
    },
    ':hover':{
        backgroundColor:'#e25714'
    }
  }
});