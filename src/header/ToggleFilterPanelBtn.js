import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {isShowFilterOnMobile: state.isShowFilterOnMobile}
}

class ToggleFilterPanelBtn extends React.Component {
  toggleFilterPanel = () => {
    this.props.dispatch({
      type: 'SET_STATE',
      data: {isShowFilterOnMobile: !this.props.isShowFilterOnMobile}
    })
  }
  render(){
    if (this.props.btnToggleClose){
      return (
        <button className="btn btn-toggle-close float-right" onClick={this.toggleFilterPanel}>
          <span className="fa fa-fw fa-times"></span>
        </button>
      )
    } 
    return (
      <button className="btn btn-filter" onClick={this.toggleFilterPanel}>
        <span className="fa fa-fw fa-filter"></span>
      </button>
    )
  }
}

export default connect(mapStateToProps)(ToggleFilterPanelBtn);