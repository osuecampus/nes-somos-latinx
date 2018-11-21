import React, { Component } from "react";
import { StyleSheet, css } from 'aphrodite';

// details.layout
// details.text
// details.image

export default class QuizMultipleChoice extends Component {

  constructor(props) {
    super(props);
    this.state = {
      currentTab: 3,
    };
  }

  setTab(id){
    this.setState({currentTab: id});
  }

  render() {
    return (
      <section className={css(ss.section)}>
        <div className={css(ss.browserHold, ss.text)} dangerouslySetInnerHTML={{__html: this.props.details.browser[this.state.currentTab].htmlContent}}></div>
        <div className={css(ss.tabHold)}>
            {this.props.details.tabs[this.state.currentTab] ? <img className={css(ss.image)} src={this.props.details.tabs[this.state.currentTab].image} alt={this.props.details.tabs[this.state.currentTab].imageAlt} title={this.props.details.tabs[this.state.currentTab].imageAlt} /> : <img className={css(ss.image)} src={this.props.details.tabs[0].image} alt={this.props.details.tabs[0].imageAlt} title={this.props.details.tabs[0].imageAlt} /> }
                {this.props.details.tabs.map((block) => 
                <div onKeyDown={(event) => event.keyCode == 32 ? this.setTab(block.id) : null } onClick={() => this.setTab(block.id)} tabIndex={'4'} key={block.id} className={css(ss.tab)}>
                    <p className={css(ss.link)}>{block.text}</p>
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
      flexDirection:'row',
      '@media (max-width: 700px)': {
        flexDirection:'column-reverse'
      }
  },
  tab:{
    display:'flex',
    width:'calc(100% - 100px)',
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'flex-end',
    outline:0,
    cursor:'pointer',
    paddingLeft:0,
    paddingRight:0,
    paddingTop:15,
    paddingBottom:15,
    borderRadius:10,
    transition:'all .2s ease-in-out',
    ':hover': {
      backgroundColor: 'rgb(0, 0, 0, .055)'
    },
    ':focus': {
      backgroundColor:'#0e5bea'
    },
    ':focus p': {
      color:'#fff'
    },
    '@media (max-width: 700px)': {
        width:'calc(100% - 100px)',
    }

  },
  image:{
    height:200,
    width:200,
    borderRadius:'50%',
    position:'absolute',
    top:'50%',
    left:0,
    marginTop:-100,

  },
  link:{
    fontSize:20,
    maxWidth:150,
    paddingRight:15,
    textAlign:'right',
    textAlign:'center',
    height:35,
    overflow:'hidden',

  },
  text:{
    width:'100%',
    fontFamily:'Crimson Text',
    fontSize:'smaller'
  },
  browserHold:{
    width:'100%',
    paddingRight:15,
    '@media (max-width: 700px)': {
        paddingRight:0,
        marginTop:15
    },
    ' p': {
        fontSize:'smaller!important'
    }
  },
  tabHold:{
      width:335,
      maxWidth:335,
      minWidth:335,
      flexDirection:'column',
      position:'relative',
      display:'flex',
      alignItems:'flex-end',
      '@media (max-width: 700px)': {
        minWidth:300,
        width:300
      }
  }
});