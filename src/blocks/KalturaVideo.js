import React, { Component } from "react";
import { StyleSheet, css } from 'aphrodite';

export default class KalturaVideo extends Component {

  render() {
    return (
      <section className={css(ss.section)}>
        <iframe className={css(ss.video)} id="kaltura_player" src={ this.props.details.kalturaUrl + '?iframeembed=true&playerId=kaltura_player&entry_id=0_5a26mlxu&flashvars[localizationCode]=en&amp;flashvars[leadWithHTML5]=true&amp;flashvars[sideBarContainer.plugin]=true&amp;flashvars[sideBarContainer.position]=left&amp;flashvars[sideBarContainer.clickToClose]=true&amp;flashvars[chapters.plugin]=true&amp;flashvars[chapters.layout]=vertical&amp;flashvars[chapters.thumbnailRotator]=false&amp;flashvars[streamSelector.plugin]=true&amp;flashvars[EmbedPlayer.SpinnerTarget]=videoHolder&amp;flashvars[dualScreen.plugin]=true&amp;&wid=0_3pz7wngf'} width="554" height="366" allowfullscreen webkitallowfullscreen mozAllowFullScreen allow="autoplay *; fullscreen *; encrypted-media *" frameborder="0" title="Kaltura Player"></iframe>
      </section>
    );
  }
}

const ss = StyleSheet.create({
  section: {
      width: '100%',
      display:'flex',
      alignItems:'center',
  },
  video:{
    width:'100%',
    height:520,
    '@media(max-width:500px)':{
        height:265
    }
  }
});