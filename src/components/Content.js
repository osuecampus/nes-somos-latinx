import React, { Component } from "react";

// REDUX //
import { connect } from "react-redux";
import { setCurrentUnit, setCurrentPage } from "../redux/Actions";

// BLOCKS //
import ImageText from "../blocks/ImageText";
import Text from "../blocks/Text";
import DownloadBox from "../blocks/DownloadBox";

const components = {
  ImageText: ImageText,
  Text: Text,
  DownloadBox: DownloadBox
};

class Content extends Component {
  componentDidMount() {

  }

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div role="main" id={'contentArea'} className={'contentArea ' + this.props.fontSize }>
        <div className={'topMiniNav'}>
          <div className={'topMiniPrevious'}>

            {this.props.content[0] ? 
              (this.props.content[0].sections[this.props.currentUnit].content[this.props.currentPage-1] ? 
              (<div onClick={() => this.props.setCurrentPage(this.props.currentPage-1)}><div title={this.props.content[0].sections[this.props.currentUnit].content[this.props.currentPage-1].title} className={'pageTitle'}>
                {this.props.content[0].sections[this.props.currentUnit].content[this.props.currentPage-1].title.length > 16 ? this.props.content[0].sections[this.props.currentUnit].content[this.props.currentPage-1].title.substr(0,16) + '..': this.props.content[0].sections[this.props.currentUnit].content[this.props.currentPage-1].title }
              </div>
              <div className={'pageDirection'}>Previous Page</div></div>)
              :null)
            :null}
            
          </div>
          <div className={'topMiniNext'}>
          
            {this.props.content[0] ? 
              (this.props.content[0].sections[this.props.currentUnit].content[this.props.currentPage+1] ? 
              (<div onClick={() => this.props.setCurrentPage(this.props.currentPage+1)}><div title={this.props.content[0].sections[this.props.currentUnit].content[this.props.currentPage+1].title} className={'pageTitle'}>
                {this.props.content[0].sections[this.props.currentUnit].content[this.props.currentPage+1].title.length > 16 ? this.props.content[0].sections[this.props.currentUnit].content[this.props.currentPage+1].title.substr(0,16) + '..': this.props.content[0].sections[this.props.currentUnit].content[this.props.currentPage+1].title }
              </div>
              <div className={'pageDirection'}>Next Page</div></div>)
              :null)
            :null}
        
          </div>
        </div>
        <h2 className={'unitIntro'}>{this.props.content[0] ? this.props.content[0].sections[this.props.currentUnit].title:null}</h2>
        <h1 className={'pageIntro'}>{this.props.content[0] ? this.props.content[0].sections[this.props.currentUnit].content[this.props.currentPage].title:null}</h1>
        



{this.props.content[0] ? 
  (this.props.content[0].sections[this.props.currentUnit].content[this.props.currentPage].blocks.map((block) => {
    const MyComponent = components[block.type]; return React.createElement(MyComponent, { key: block.id, details: block.details });
  })) : null }








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