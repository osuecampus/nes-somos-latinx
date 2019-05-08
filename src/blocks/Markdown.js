import React, { Component } from "react";
import { StyleSheet, css } from 'aphrodite';

// COMPONENTS //
import ReactMarkdown from 'react-markdown';

export default class Markdown extends Component {

  render() {
    return (
      <section className={css(ss.section)}>
        <ReactMarkdown source={this.props.details.markdown} />
      </section>
    );
  }
}

const ss = StyleSheet.create({
  section: {
      width: '100%',
      display:'flex',
      alignItems:'flex-start',
      fontFamily:'Crimson Text',
      flexDirection:'column'
  },

});