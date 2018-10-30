import React, { Component } from "react";

// REDUX //
import { connect } from "react-redux";
import { loadContent } from "../redux/Actions";

// COMPONENTS //


class Tree extends Component {
  componentDidMount() {

  }

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className={'contentTree'}>
    
    { this.props.content[0] ? this.props.content[0].sections.map((plot) => { return (
        <div key={plot.id}>
            <div className={'unitBlock'}><h3>{plot.title}</h3><div className={'downProgress'}><img src={'./assets/img/icon-arrow.svg'} /></div></div>
            {this.props.content[0].sections.map((plex) => { return ( 
                 plex.id 
            ) })}
        </div>
    )}
    ) : ''}

      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
      content: state.content
  };
};

const mapDispatchToProps = dispatch => {
  return {

  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Tree);