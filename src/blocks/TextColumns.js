import React, { Component } from "react";
import { StyleSheet, css } from 'aphrodite';
import { callbackify } from "util";

// details.layout
// details.text
// details.image

export default class TextColumns extends Component {

  launchUrl(url){
    window.location.href = url
  }

  render() {
    return (
      <section className={css(ss.section)}>
        {this.props.details.columns.map((block) => 
          <div onClick={() => block.url ? this.launchUrl(block.url) : null} style={{cursor: block.url ? 'pointer':'default',width: (( 1 / this.props.details.columns.length) * 100)+'%'}} className={css(ss.column, block.youtube && ss.youtubeColumn)} key={block.id}>
            {block.youtube ? <img className={css(ss.spinner)} src={'./assets/img/loading-white.apng'} /> : null}
            {block.image ? <div style={{width:'100%', display:'flex', justifyContent:'center', alignItems:'center',  height:235,}}><img className={css(ss.images)} style={{maxHeight:'100%', height: block.imageHeight ? block.imageHeight : 'initial'}} src={block.image} alt={block.imageAlt} title={block.imageAlt} /></div> : null } 
            {block.headline ? <h1 className={css(ss.headline)}>{block.headline}</h1> : null }
            {block.youtube ? <iframe className={css(ss.video)} src={'https://www.youtube.com/embed/'+block.youtube} frameBorder="0" allow="accelerometer; encrypted-media; gyroscope;" allowFullScreen></iframe> : null }
            {block.bold ? <h1 className={css(ss.bold)}>{block.bold} {block.language ? <div className={css(ss.lang)}>{block.language}</div>:null}</h1> : null }
            {block.text ? <p className={css(ss.text)}>{block.text}</p> : null }
          </div>
        )}
      </section>
    );
  }
}

const ss = StyleSheet.create({
  section: {
      width: '100%',
      display:'flex',
      flexDirection:'row',
      position:'relative',
      justifyContent:'space-around',
      alignItems:'flex-start',
      '@media (max-width: 700px)': {
        flexDirection: 'column',
        alignItems:'center',
      }
  },
  spinner:{
    position:'absolute',
    top:83,
    width:42,
    opacity:.5,
  },
  lang:{
    fontWeight:'800',
    fontSize:14,
    border:'3px solid #fff',
    padding:'3px 5px',
    marginLeft:5,
    background:'rgba(255,255,255,.2)'
  },

  video:{
    width:'calc(100% - 30px)',
    marginTop:15,
    position:'relative',
    zIndex:2
  },
  youtubeColumn:{
    background:'#08bb99',
    color:'#fff',
    margin:10,
    width:'calc(100% - 30px)'
  },
  images:{
    position:'relative',
    top:0,
    transition: 'all .2s ease-in-out',
    ':hover':{
      top:-5
    }
  },
  text:{
    width:'100%',
    fontFamily:'Crimson Text',
    fontSize:'smaller',
    textAlign:'center'
  },
  column:{
    display:'flex',
    padding:5,
    alignItems:'center',
    justifyContent:'flex-start',
    flexDirection:'column',
    '@media (max-width: 700px)': {
      width:'100%',
      marginTop:25,
    }
  },
  headline:{
    borderRadius:'50%',
    background:'#1f60e2',
    color:'#fff',
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    fontSize:28,
    fontWeight:'900',
    margin:0,
    width:60,
    height:60,
    marginBottom:15
  },
  bold:{
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    textAlign:'center',
    fontSize:'smaller',
    fontWeight:'700',
    margin:0,
    marginTop:10,
    marginBottom:10,
    textShadow: '0 1px 5px rgba(0,0,0,.3)'
  }
});