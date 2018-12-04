import React, { Component } from "react";
import { StyleSheet, css } from 'aphrodite';

// details.layout
// details.text
// details.image

export default class QuizMultipleChoice extends Component {

  constructor(props) {
    super(props);
    this.state = {
      currentQuestion: 0,
      currentAnswer: 0,
      total: 0
    };
  }

  componentDidMount(){
    this.setState({ total: this.props.details.questions.length, currentAnswer: this.props.details.questions[0].connector});
  }

  setQuestion(id){
    this.setState({currentQuestion: id + 1, currentAnswer: this.props.details.questions[id + 1].connector})
  }
  
  checkAnswer(id, buttonClicked){
    this.state.currentAnswer == 99 ? null :
    id == this.state.currentAnswer ? 
         (this.refs.question.classList.add(css(ss.phaseOut)), 
         this.refs[buttonClicked].classList.add(css(ss.correct)),
         setTimeout(() => {this.setQuestion(this.state.currentQuestion), this.refs.question.classList.remove(css(ss.phaseOut)),  this.refs[buttonClicked].classList.remove(css(ss.correct))}, 1200 ))
    : 
        (this.refs[buttonClicked].classList.add(css(ss.wrong)),
        setTimeout(() => {this.refs[buttonClicked].classList.remove(css(ss.wrong))},1000))
  }

  render() {
    return (
      <section className={css(ss.section)}>
        <div className={css(ss.questionHold)}>
            {this.props.details.questions[this.state.currentQuestion] ? 
                <div ref={'question'} className={css(ss.question)}>
                    <p className={css(ss.text)}>{this.props.details.questions[this.state.currentQuestion].text}</p>
                </div>
            : null }
        </div>
        <div className={css(ss.answerHold)}>
            {this.props.details.options.map((block) => 
                <div style={{width: 'calc('+ ((1/this.props.details.options.length)*100) + '% - 60px)'}} ref={'answer'+block.id} onKeyDown={(event) => event.keyCode == 32 ? this.checkAnswer(block.id, 'answer'+block.id) : null } onClick={() => this.checkAnswer(block.id, 'answer'+block.id)} tabIndex={'4'} key={block.id} className={css(ss.answer)}>
                    {block.text}
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
    fontSize:'larger',
    fontFamily:'Crimson Text',
    textAlign:'center',
  },
  answerHold:{
      width:'100%',
      display:'flex',
      justifyContent:'center',
      alignItems:'center',
      paddingBottom:40,
      '@media (max-width: 700px)': {
        flexDirection:'column'
      },
  },
  answer:{
      padding:15,
      minHeight:130,
      textAlign:'center',
      display:'flex',
      justifyContent:'center',
      alignItems:'center',
      backgroundColor:'#0e5bea',
      fontSize:15,
      borderRadius:10,
      margin:12,
      cursor:'pointer',
      fontWeight:'600',
      color:'#fff',
      transition: 'all .2s ease-in-out',
        ':hover':{
            backgroundColor: '#0046bb'
        },
        ':focus':{
            backgroundColor: '#0046bb'
        },
        '@media (max-width: 700px)': {
            width: 'calc(100% - 60px)',
            marginTop:5
        },
  },
  correct:{
      backgroundColor:'green',
      ':focus':{
          backgroundColor:'green'
      },
      ':hover':{
          backgroundColor:'green'
      }
  },
  wrong:{
      backgroundColor:'red',
      ':focus':{
        backgroundColor:'red'
    },
    ':hover':{
        backgroundColor:'red'
    }
  }
});