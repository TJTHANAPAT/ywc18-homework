import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  const {
    filterKeyCategory,
    filterKeySubcategory,
    isSearch,
    searchWordSearched
  } = state;
  return { filterKeyCategory, filterKeySubcategory, isSearch, searchWordSearched }
}

class TitleBar extends React.Component {
  render() {
    let {
      filterKeyCategory,
      filterKeySubcategory,
      isSearch,
    } = this.props;
    if (isSearch) {
      const { searchWordSearched } = this.props
      return (
        <div className="title-bar col-12">
          <h4>ผลการค้นหา '{searchWordSearched}'</h4>
        </div>
      )
    } else {
      if (filterKeyCategory === 'all') {
        return (
          <div className="title-bar col-12">
            <h4>ผลการค้นหา ร้านค้า ทั้งหมด</h4>
          </div>
        )
      } else {
        if (filterKeySubcategory === 'all') {
          filterKeySubcategory = 'ทั้งหมด'
        } else {
          filterKeySubcategory = `ประเภท ${filterKeySubcategory}`
        }
        return (
          <div className="title-bar col-12">
            <h4>ผลการค้นหา {filterKeyCategory} {filterKeySubcategory}</h4>
          </div>
        )
      }
    }
  }
}

export default connect(mapStateToProps)(TitleBar);
