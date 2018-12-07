import React, { Component } from "react";

// REDUX //
import { connect } from "react-redux";
import { loadContent, setCurrentUnit, setCurrentPage, detectDimensions } from "../redux/Actions";

// COMPONENTS //
import CircularProgressbar from 'react-circular-progressbar';

class SearchBar extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      searchContents: ''
    };
  }

  setSearch(e){
    this.setState({searchContents: e.target.value})
  }

  render() {
    return (
        <div className={'searchHolder'}>
            <input onChange={(e) => this.setSearch(e) } tabIndex={'1'} className={'searchInput'} />
            {this.state.searchContents.length > 0 ? '' : 
                <label className={'searchLabel'}>
                    <svg id="searchIcon" alt="Search Icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 383.69 383.73"><title>Search Icon</title><g id="Ac6qOr.tif"><path d="M252.15,278.7c-41.81,29.89-86.24,40-134.82,27.82-37.16-9.33-67-29.92-88.91-61.41-42.35-61-37.36-142.61,14.94-196.74C97.92-8.1,182.41-15.87,245.82,29c36,25.44,57.09,60.51,63.81,103.93s-4.26,82.48-30.71,118.68c3.49.17,6,.5,8.51.38,7.47-.35,13.46,2.34,18.74,7.67C329.51,283.2,353,306.57,376.46,330c9.6,9.63,9.63,19,.11,28.73-6.08,6.18-12.19,12.32-18.4,18.37-9,8.75-18.27,8.83-27.21-.05-24.11-24-48.06-48.08-72.16-72-4.71-4.68-6.58-10.26-6.65-16.66C252.12,285.62,252.15,282.86,252.15,278.7ZM59.78,155c-1.13,53.88,43.77,97.61,96.21,97.17,52.91-.43,96-43.08,96.25-95.36.28-54.9-45.26-98.14-98-97.27C102.64,60.33,59.68,103,59.78,155Z"/></g></svg>
                    <div className={'searchText'}>Search</div>
                </label>
            }
        </div>
    );
  }
}

const mapStateToProps = state => {
  return {
      content: state.content,
      theme: state.theme,
      currentPage: state.currentPage,
      currentUnit: state.currentUnit
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setCurrentUnit: (value) => dispatch(setCurrentUnit(value)),
    setCurrentPage: (value, unit) => dispatch(setCurrentPage(value, unit)),
    detectDimensions: (bool) => dispatch(detectDimensions(bool)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchBar);