import React, { Component } from "react";

// REDUX //
import { connect } from "react-redux";

class ProgressBar extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
        progress: 0,
        appCurrentPage: 0,
        appCurrentUnit: 0
    };
    this.progress = 0
  }

  componentDidMount(){
      this.setState({appCurrentPage: this.props.currentPage, appCurrentUnit: this.props.currentUnit})
  }

  componentWillReceiveProps(){
      if(this.props.currentUnit !== this.state.appCurrentUnit || this.props.currentPage !== this.state.currentPage) {
        this.setState({appCurrentPage: this.props.currentPage, appCurrentUnit: this.props.currentUnit});
        this.forceUpdate();
      }
  }

  render() {
    let total = 0;
    let progress = 0;
    this.props.content[0].sections.forEach((unit) => {
        unit.content.forEach((pages) => {
            total = total+1;
        });
        window.localStorage.getItem('nes-progress-'+unit.id) ?
            progress = progress + JSON.parse(window.localStorage.getItem('nes-progress-'+unit.id)).length
        : null
    });




    return (
        <div className={'progressHolder'}>
            <div className={'progressBar'}>
                <div style={{width: Math.round(Number(progress)/Number(total)*100) + '%' }} className={'progressLine'} />
            </div>
            <div className={'progressText'}>{Math.round(Number(progress)/Number(total)*100)}% Complete</div>
        </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    content: state.content,
    currentPage: state.currentPage,
    currentUnit: state.currentUnit
  };
};

const mapDispatchToProps = dispatch => {
  return {
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProgressBar);