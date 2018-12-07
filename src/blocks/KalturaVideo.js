import React, { Component } from "react";
import { StyleSheet, css } from 'aphrodite';

export default class KalturaVideo extends Component {

  render() {
    return (
      <section className={css(ss.section)}>
        <iframe className={css(ss.video)} id="kaltura_player" src={'https://cdnapisec.kaltura.com/p/391241/sp/39124100/embedIframeJs/uiconf_id/22119142/partner_id/391241?iframeembed=true&playerId=kaltura_player&entry_id=' + this.props.details.kalturaUrl + '&flashvars[localizationCode]=en&amp;flashvars[leadWithHTML5]=true&amp;flashvars[sideBarContainer.plugin]=true&amp;flashvars[sideBarContainer.position]=left&amp;flashvars[sideBarContainer.clickToClose]=true&amp;flashvars[chapters.plugin]=true&amp;flashvars[chapters.layout]=vertical&amp;flashvars[chapters.thumbnailRotator]=false&amp;flashvars[streamSelector.plugin]=true&amp;flashvars[EmbedPlayer.SpinnerTarget]=videoHolder&amp;flashvars[dualScreen.plugin]=true&amp;&wid=0_upsosc9j'} width="554" height="366" allowFullScreen allow="autoplay *; fullscreen *; encrypted-media *" frameBorder="0" title="Kaltura Player"></iframe>
      </section>
    );
  }
}

const ss = StyleSheet.create({
  section: {
      width: '100%',
      display:'flex',
      alignItems:'center',
      borderRadius:10,
    overflow:'hidden',
  },
  video:{
    width:'100%',
    height:520,
    '@media(max-width:500px)':{
        height:265
    }
  }
});