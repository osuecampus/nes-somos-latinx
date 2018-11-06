import React, { Component } from "react";

// REDUX //
import { connect } from "react-redux";
import { setCurrentUnit, setCurrentPage } from "../redux/Actions";

class Content extends Component {
  componentDidMount() {

  }

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    console.log(this.props.content)
    return (
      <div role="main" id={'contentArea'} className={'contentArea ' + this.props.fontSize }>
        <div className={'topMiniNav'}>
          <div className={'topMiniPrevious'}>

            {this.props.content[0] ? 
              (this.props.content[0].sections[this.props.currentUnit].content[this.props.currentPage-1] ? 
              (<div onClick={() => this.props.setCurrentPage(this.props.currentPage-1)}><div title={this.props.content[0].sections[this.props.currentUnit].content[this.props.currentPage-1].title} className={'pageTitle'}>
                {this.props.content[0].sections[this.props.currentUnit].content[this.props.currentPage-1].title.length > 22 ? this.props.content[0].sections[this.props.currentUnit].content[this.props.currentPage-1].title.substr(0,22) + '..': this.props.content[0].sections[this.props.currentUnit].content[this.props.currentPage-1].title }
              </div>
              <div className={'pageDirection'}>Previous Page</div></div>)
              :null)
            :null}
            
          </div>
          <div className={'topMiniNext'}>
          
            {this.props.content[0] ? 
              (this.props.content[0].sections[this.props.currentUnit].content[this.props.currentPage+1] ? 
              (<div onClick={() => this.props.setCurrentPage(this.props.currentPage+1)}><div title={this.props.content[0].sections[this.props.currentUnit].content[this.props.currentPage+1].title} className={'pageTitle'}>
                {this.props.content[0].sections[this.props.currentUnit].content[this.props.currentPage+1].title.length > 22 ? this.props.content[0].sections[this.props.currentUnit].content[this.props.currentPage+1].title.substr(0,22) + '..': this.props.content[0].sections[this.props.currentUnit].content[this.props.currentPage+1].title }
              </div>
              <div className={'pageDirection'}>Next Page</div></div>)
              :null)
            :null}
        
          </div>
        </div>
        <h2 className={'unitIntro'}>{this.props.content[0] ? this.props.content[0].sections[this.props.currentUnit].title:null}</h2>
        <h1 className={'pageIntro'}>{this.props.content[0] ? this.props.content[0].sections[this.props.currentUnit].content[this.props.currentPage].title:null}</h1>
        
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    fontSize: state.fontSize,
    currentPage: state.currentPage,
    currentUnit: state.currentUnit,
    content: state.content
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
)(Content);