import React, { Component } from "react";
import { StyleSheet, css } from 'aphrodite';

// details.layout
// details.text
// details.image

export default class AccessibleImageModel extends Component {

    constructor(props) {
        super(props);
        this.state = {
          htmlDisplay:'none'
        };
      }

      showHTML(){
          this.setState({
              htmlDisplay:'block'
          })
      }

  render() {
    return (
      <section className={css(ss.section)}>
        <div className={css(ss.row)}>
          <img class={css(ss.image)} tabIndex={'4'} onClick={() => this.showHTML()} onKeyDown={(event) => event.keyCode == 32 ? this.showHTML() : null } src={this.props.details.image} alt={'Click or hit spacebar to show this in text form. ' + this.props.details.alt} title={'Click or hit spacebar to show this in text form. ' + this.props.details.alt} />
        </div>
        <div style={{display: this.state.htmlDisplay}} dangerouslySetInnerHTML={{ __html: this.props.details.html }} className={css(ss.html)} />
      </section>
    );
  }
}

const ss = StyleSheet.create({
  section: {
      width: '100%',
      display:'flex',
      alignItems:'center',
      flexDirection:'column',
  },
  image:{
      maxWidth:'100%',
      height:'auto',
      borderRadius:10,
      border:'1px solid #ccc'
  },
  row:{
    display:'flex',
    flexDirection:'row',
    width:'100%',
    justifyContent:'center',
    alignItems:'center'
  },
  html:{
    width:'calc(100% - 50px)',
    padding:25,
    borderRadius:10,
    marginTop:25,
    fontSize:'smaller',
    backgroundColor:'rgba(100,100,100,.12)',
    fontFamily:'Crimson Text'
  }
});