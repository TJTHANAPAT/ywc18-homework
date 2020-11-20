import React from 'react';
import { connect } from 'react-redux';
import FilterArea from '../filters/FilterArea';

const mapStateToProps = (state) => {
  const { searchWord } = state;
  return { searchWord }
}

class SearchBar extends React.Component {
  handleChangeInputSearch = (event) => {
    const searchWord = event.target.value
    if (searchWord !== '') {
      this.props.dispatch({
        type: "SET_STATE",
        data: {searchWord}
      })
    } else {
      this.props.dispatch({
        type: "SET_STATE",
        data: {isSearch: false}
      })
    }
  }
  handleSearch = (event) => {
    event.preventDefault();
    if (!!this.props.searchWord) {
      this.props.dispatch({
        type: "SET_STATE",
        data: {isSearch: true, searchWordSearched: this.props.searchWord}
      })
    }
  }
  render() {
    return (
      <div className="search-bar">
        <FilterArea isOnlySelectBox={true} />
        <form className="search-bar" onSubmit={this.handleSearch}>
          <input 
            type="text" id="searchWord" className="form-control" 
            placeholder="ค้นหา ชื่อ ร้านอาหารและเครื่องดื่ม ร้านธงฟ้า ร้าน OTOP และสินค้าทั่วไป"
            onChange={this.handleChangeInputSearch}
          />
          <button className="btn btn-light" type="submit">
            <span className="fa fa-search"></span>
          </button>
        </form>
      </div>
    )
  }
}

export default connect(mapStateToProps)(SearchBar);