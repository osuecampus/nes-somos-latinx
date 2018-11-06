import React, { Component } from "react";

// REDUX //
import { connect } from "react-redux";

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
            <div className={'pageTitle'}>The Summary of Life</div>
            <div className={'pageDirection'}>Previous Page</div>
          </div>
          <div className={'topMiniNext'}>
            <div className={'pageTitle'}>The Conclusion of Life</div>
            <div className={'pageDirection'}>Previous Page</div>
          </div>
        </div>
        <h2 className={'unitIntro'}>Unit 1: Foundational Elements for Working Together</h2>
        <h1 className={'pageIntro'}>Introduction</h1>
        
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    fontSize: state.fontSize
  };
};

const mapDispatchToProps = dispatch => {
  return {

  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Content);