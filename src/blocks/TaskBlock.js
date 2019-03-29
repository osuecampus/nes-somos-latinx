import React, { Component } from "react";
import { StyleSheet, css } from 'aphrodite';

// details.layout
// details.text
// details.image

export default class TaskBlock extends Component {

  render() {
    return (
      <section style={{backgroundColor: this.props.details.color}} className={css(ss.section)}>
        <img className={css(ss.image)} src={this.props.details.image} alt={'Time to complete a task'} title={'Time to complete a task'} />
        <h3 className={css(ss.text)}>{this.props.details.text}</h3>
      </section>
    );
  }
}

const ss = StyleSheet.create({
  section: {
      width: 'calc(100% + 500px)',
      marginLeft:-250,
      display:'flex',
      justifyContent:'center',
      alignItems:'center',
      flexDirection:'column',
      borderRadius: 10,
      marginTop:75,
      marginBottom:75,
      paddingTop:30,
      paddingBottom:30,
      '@media (max-width: 700px)': {
        width:'100%',
        marginLeft:0
      }
  },
  text:{
    color:'#fff',
    fontSize:22,
    fontWeight:'700',
    marginBottom:0,
    marginTop:20,
    paddingLeft:25,
    paddingRight:25,
    textAlign:'center'
  },
  image:{

  }
});