import React, { Component } from "react";

// REDUX //
import { connect } from "react-redux";
import { loadContent, setCurrentUnit, setCurrentPage } from "../redux/Actions";

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

  pageChoice(unit, page){
    this.props.setCurrentUnit(unit);
    this.props.setCurrentPage(page);
  }

  render() {
    
    return (
      <div className={'contentTree'}>

    { this.props.content[0] ? this.props.content[0].sections.map((plot) => { return (
          <div onKeyDown={(event) => event.keyCode == 32 ? (this.addActivePage('hidden'+plot.id), this.addActiveUnit('unit'+plot.id)) : null } tabIndex={'2'} key={plot.id} className={'treeBranch'}>  
            <div onClick={() => {this.addActivePage('hidden'+plot.id), this.addActiveUnit('unit'+plot.id)}} ref={'unit'+plot.id} className={'unitBlock'}>
              <h2>{plot.title}</h2>
              <div className={'downProgress'}>
                {this.props.theme == 'lightLook' ? 
                  <img alt="Show Pages" title="Show Pages" src={'./assets/img/icon-arrow-light.svg'} />
                  :
                  <img alt="Show Pages" title="Show Pages" src={'./assets/img/icon-arrow.svg'} />
                }
              </div>
            </div>
            
            <div ref={'hidden'+plot.id} className={'hiddenPages'}>
            { plot.content.map((plex) => { return (
                <div tabIndex={'2'} onKeyDown={(event) => event.keyCode == 32 ? (this.pageChoice(plot.id, plex.id)):null}  onClick={() => {this.pageChoice(plot.id, plex.id)}} key={plex.id} className={'unitPage'}>
                  <a href={'#'}>{plex.title}</a>
                </div>
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
      content: state.content,
      theme: state.theme
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setCurrentUnit: (value) => dispatch(setCurrentUnit(value)),
    setCurrentPage: (value) => dispatch(setCurrentPage(value)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Tree);