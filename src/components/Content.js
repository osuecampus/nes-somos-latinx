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

            {this.props.currentUnit == 0 && this.props.currentPage == 0 ? <div className={'beginningNode'}><svg id="begin" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 230.23 230.28"><title>Begin</title><g ><path d="M15.13,107.77H127.36a32,32,0,0,0-2.35-3.09c-5.86-5.92-11.82-11.74-17.64-17.7-3.81-3.89-3.92-8.12-.56-11.44,3.13-3.09,7.12-2.91,11,.94q16.55,16.33,32.86,32.88c4.19,4.26,4.17,8.43-.08,12.73q-16,16.16-32.31,32c-4,3.86-7.66,4-11,.75-3.16-3.05-3-7.15.8-11,6.54-6.65,13.22-13.15,20.94-20.81-3.14-.16-5-.34-6.8-.34q-55.5,0-111,0c-10,0-11.69-1.84-11.19-11.78C2.52,62,34,20.11,80.68,5.4,111.9-4.44,142.41-.66,171,15.28c32.74,18.27,52.76,46.27,58,83.37,5.28,37.26-6.19,69.89-32.65,96.69-21.85,22.13-48.58,34-79.88,34.93-5.51.16-8.16-1.81-8.58-6.16s2.22-7.52,7.3-8.38c1.47-.25,3-.17,4.46-.46,9.92-2,20.21-2.89,29.67-6.19,41.37-14.41,67.22-53.56,65.76-97.29-2.4-71.7-76.67-118.36-143.23-87.18-33.78,15.83-51.76,44.3-56.86,81A11.45,11.45,0,0,0,15.13,107.77Z"/></g></svg> Beginning</div> : null}
            {this.props.content[0] ? 
              (this.props.content[0].sections[this.props.currentUnit].content[this.props.currentPage-1] ? 
              (<div onClick={() => this.props.setCurrentPage(this.props.currentPage-1)}><div title={this.props.content[0].sections[this.props.currentUnit].content[this.props.currentPage-1].title} className={'pageTitle'}>
                Previous Page
              </div>
              </div>)
              :null)
            :null}
            
          </div>
          <div className={'topMiniNext'}>
          
            {this.props.content[0] ? 
              (this.props.content[0].sections[this.props.currentUnit].content[this.props.currentPage+1] ? 
              (<div onClick={() => this.props.setCurrentPage(this.props.currentPage+1)}><div title={this.props.content[0].sections[this.props.currentUnit].content[this.props.currentPage+1].title} className={'pageTitle'}>
                Next Page
              </div>
             </div>)
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