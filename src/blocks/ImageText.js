import React, { Component } from "react";
import { StyleSheet, css } from 'aphrodite';

// details.layout
// details.text
// details.image

export default class ImageText extends Component {

  render() {
    return (
      <section className={css(ss.section)} style={{ flexDirection: (this.props.details.layout == 'left' ? 'row' : 'row-reverse') }}>
        <div className={css(ss.skeleton)}>
          <svg className={css(ss.loading)} id="skeletonIcon" alt={'Image Loading'} title={'Image Loading'} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 194.44 157.43"><title>Image Loading</title><g><path d="M97.2,0h78.73c11.54,0,18.49,7,18.49,18.52q0,60.24,0,120.48c0,11.38-7,18.42-18.38,18.42q-78.85,0-157.71,0C6.91,157.42,0,150.45,0,139Q0,78.75,0,18.51C0,6.89,6.87,0,18.46,0Zm87.89,129.24v-3.15q0-53.74,0-107.47c0-6.75-2.59-9.35-9.37-9.35h-157c-6.82,0-9.49,2.7-9.49,9.6q0,53,0,106c0,.86.09,1.72.16,3,1.16-1,1.91-1.61,2.65-2.25q23.7-20.72,47.39-41.44c8.39-7.32,18-6.82,25.69,1.27q4,4.26,8.09,8.51l18.49,19.45c5.06-5.12,9.94-10.11,14.86-15,8.89-8.94,18.67-9,27.54-.1Zm-66.71-8.8c2.11,2.22,4.36,4.55,6.57,6.92,2.4,2.57,2.6,5.08.61,7.06s-4.92,1.63-7.2-.78Q98.58,112.81,78.82,92c-4.88-5.15-8.4-5.32-13.71-.67l-53,46.42c-3.83,3.35-3.16,7.75,1.69,9.71a13.28,13.28,0,0,0,4.89.65q61.1,0,122.2,0c12,0,24,0,36,0a7.93,7.93,0,0,0,7-3.5c.94-1.33,1.29-2.55-.29-3.87-1.84-1.55-3.45-3.38-5.16-5.09q-16-16-32-32c-3.23-3.22-7.68-4-10.54-1.29C130,108.15,124.33,114.28,118.38,120.44Z"/><path d="M146.55,48.09A24.69,24.69,0,1,1,122,23.1,24.7,24.7,0,0,1,146.55,48.09Zm-24.61,15.1a15.37,15.37,0,1,0-.12-30.74,15.37,15.37,0,1,0,.12,30.74Z"/></g></svg>
          <img alt={this.props.details.alt} title={this.props.details.alt} className={css(ss.image)} src={this.props.details.image} />
          {this.props.details.caption ? <p className={css(ss.caption)}>{this.props.details.caption}</p> : null}
        </div>
        {this.props.details.text ? <p className={css(ss.text)}>{this.props.details.text}</p> : <div className={css(ss.text)} style={{fontSize:'smaller'}} dangerouslySetInnerHTML={{__html: this.props.details.htmlContent}} /> }
      </section>
    );
  }
}

const ss = StyleSheet.create({
  section: {
      width: '100%',
      display:'flex',
      justifyContent:'space-between',
      alignItems:'center',
      '@media (max-width: 700px)': {
        flexDirection: 'column',
      }
  },
  image:{
   width:'100%',
   borderRadius:10,
   zIndex:2,
  },
  skeleton:{
    width:'50%',
    position:'relative',
    display:'flex',
    minHeight:250,
    justifyContent:'center',
    alignItems:'center',
    flexDirection:'column',
    borderRadius:'50%',
    '@media (max-width: 700px)': {
      width: '100%',
      marginBottom:25
    }
  },
  caption:{
    width:'100%',
    textAlign:'left',
    marginTop:15,
    fontFamily:'Crimson Text',
  },
  loading:{
    width:30,
    opacity:.3,
    height:24,
    position:'absolute',
    zIndex:1,
  },
  text:{
    width:'45%',
    fontFamily:'Crimson Text',
    '@media (max-width: 700px)': {
      width: '100%',
    }
  }
});