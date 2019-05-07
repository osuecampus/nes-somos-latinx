import React, { Component } from "react";
import { StyleSheet, css } from 'aphrodite';

// details.layout
// details.text
// details.image

export default class TabbedContentExplorer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      currentTab: 5,
    };
  }

  setTab(id,url){
    this.setState({currentTab: id});
    window.open(url, '_blank')
  }

  render() {
    return (
      <section className={css(ss.section)}>
        <div className={css(ss.tabHold)}>
          {this.props.details.tabs.map((block) => 
            <div onKeyDown={(event) => event.keyCode == 32 ? this.setTab(block.id,block.link) : null } onClick={() => this.setTab(block.id,block.link)} tabIndex={'4'} key={block.id} className={css(ss.tab, this.state.currentTab == block.id && ss.activeTab)}>
              <div className={css(ss.imgHold)}>
                <img className={css(ss.image)} src={block.image} alt={block.imageAlt} title={block.imageAlt} />
              </div>
              <sub className={css(ss.subTitle)}>{block.text}</sub>
            </div>
          )}
        </div>
        <div className={css(ss.browserHold)} dangerouslySetInnerHTML={{__html: this.props.details.browser[this.state.currentTab].htmlContent}}></div>
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
      backgroundColor:'rgba(255, 255, 255, 0.0)',
      border:'0px solid rgba(0,0,0,.15)',
      borderRadius:10
  },
  tabHold:{
    width:'calc(100% - 20px)',
    paddingLeft:10,
    paddingRight:10,
    borderBottom:'0px solid rgba(0,0,0,0)',
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-around',
    alignItems:'center',
    paddingTop:15,
    paddingBottom:15
  },
  tab:{
    display:'flex',
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center',
    outline:0,
    cursor:'pointer',
    padding:20,
    borderRadius:10,
    transition:'all .2s ease-in-out',
    ':hover': {
      backgroundColor: 'rgb(0, 0, 0, .055)'
    },
    ':focus': {
      backgroundColor:'rgb(0, 0, 0, .1)'
    },
    '@media (max-width: 700px)': {
      padding:0,
    }
  },
  activeTab:{
    backgroundColor:'rgb(0, 0, 0, .055)',
  },
  imgHold:{
    height:75,
    width:75,
    borderRadius:45,
    overflow:'hidden',
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    '@media (max-width: 700px)': {
      height:50,
      width:50
    }
  },
  image:{
    height:'100%',
    width:'auto',
  },
  subTitle:{
    fontSize:13,
    maxWidth:150,
    textAlign:'center',
    overflow:'hidden',
    paddingTop:5,
    lineHeight:1.25,
    '@media (max-width: 700px)': {
      display:'none'
    }
  },
  text:{
    width:'100%',
    fontFamily:'Crimson Text',
  },
  browserHold:{
    backgroundColor: 'rgba(0,0,0,.0)',
    width:'100%'
  }
});