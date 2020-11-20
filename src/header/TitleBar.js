import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {filterKeyCategory: state.filterKeyCategory};
}

class TitleBar extends React.Component {
  render() {
    let {
      filterKeyCategory
    } = this.props;
    if (filterKeyCategory === 'all') {
      filterKeyCategory = 'ร้านค้า'
    }
    return (
      <div className="title-bar col-12">
        <h4>ผลการค้นหา {filterKeyCategory} ทั้งหมด</h4>
      </div>
    )
  }
}

export default connect(mapStateToProps)(TitleBar);