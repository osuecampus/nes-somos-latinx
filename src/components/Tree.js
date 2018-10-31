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

  addActivePage(plot){
    this.refs[plot].classList.toggle('activePage')
  }
  addActiveUnit(plot){
    this.refs[plot].classList.toggle('activeUnit')
  }

  render() {
    
    return (
      <div className={'contentTree'}>

    { this.props.content[0] ? this.props.content[0].sections.map((plot) => { return (
          <div key={plot.id} className={'treeBranch'}>  
            <div onClick={() => {this.addActivePage('hidden'+plot.id), this.addActiveUnit('unit'+plot.id)}} ref={'unit'+plot.id} className={'unitBlock'}>
              <h3>{plot.title}</h3>
              <div className={'downProgress'}>
                <img src={'./assets/img/icon-arrow.svg'} />
              </div>
            </div>
            
            <div ref={'hidden'+plot.id} className={'hiddenPages'}>
            { plot.content.map((plex) => { return (
                 <div key={plex.id} className={'unitPage'}>{plex.title}</div>
            )})}
            </div>
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