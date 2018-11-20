import React, { Component } from "react";
import { StyleSheet, css } from 'aphrodite';

// details.layout
// details.text
// details.image

export default class SingleImage extends Component {

  render() {
    return (
      <section className={css(ss.section)}>
        <img className={css(ss.image)} alt={this.props.details.imageAlt} title={this.props.details.imageAlt} src={this.props.details.url} />
      </section>
    );
  }
}

const ss = StyleSheet.create({
  section: {
      width: 'calc(100% + 500px)',
      maxHeight:400,
      overflow:'hidden',
      marginLeft:-250,
      display:'flex',
      borderRadius:10,
      alignItems:'center',
  },
  image:{
    width:'100%',
  }
});