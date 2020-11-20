import React from 'react';
import { connect } from 'react-redux';
import FilterArea from '../filters/FilterArea';

const mapStateToProps = (state) => {
  return state
}

class SearchBar extends React.Component {
  render() {
    return (
      <div className="search-bar">
        <FilterArea isOnlySelectBox={true} />
        <input type="text" id="searchKeyword" className="form-control" placeholder="ค้นหา ชื่อ ร้านอาหาร และเครื่องดื่ม ร้านธงฟ้า ร้าน OTOP และสินค้าทั่วไป" />
        <button className="btn btn-light"><span className="fa fa-search"></span></button>
      </div>
    )
  }
}

export default connect(mapStateToProps)(SearchBar);