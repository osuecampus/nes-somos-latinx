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
    id == this.state.currentAnswer ? 
         (this.refs.question.classList.add(css(ss.phaseOut)), 
         this.refs[buttonClicked].classList.add(css(ss.correct)),
         setTimeout(() => {this.setQuestion(this.state.currentQuestion), this.refs.question.classList.remove(css(ss.phaseOut))}, 300 ))
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
                <div ref={'answer'+block.id} onKeyDown={(event) => event.keyCode == 32 ? this.checkAnswer(block.id, 'answer'+block.id) : null } onClick={() => this.checkAnswer(block.id, 'answer'+block.id)} tabIndex={'4'} key={block.id} className={css(ss.answer)}>
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
  },
  question:{
      opacity:1,
      transform:'scale(1)',
      transition: 'all .2s ease-in-out'
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
      width:150,
      height:55,
      display:'flex',
      justifyContent:'center',
      alignItems:'center',
      backgroundColor:'#0e5bea',
      fontSize:16,
      borderRadius:45,
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
            width: '100%',
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