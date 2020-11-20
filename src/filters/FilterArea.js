import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return { jsonData: state.jsonData }
}

class FilterArea extends React.Component {
  handleFilterKey = (event) => {
    console.log(event.target.id, ':', event.target.value)
    this.props.dispatch({
      type: 'SET_STATE',
      data: {[event.target.id]: event.target.value}
    })
  }
  priceRangeOptions = () => {
    const { jsonData } = this.props;
    if (!!jsonData) {
      const { priceRange } = jsonData;
      let options = priceRange.map((range, i) => {
        return <option value={i + 1} key={i}>{range}</option>
      })
      return options
    }
  }
  render() {
    return (
      <div className="filter">
        <label className="filter-name" htmlFor="filterKeyArea">จังหวัด/ใกล้ฉัน</label>
        <select className="form-control" id="filterKeyArea" onChange={this.handleFilterKey}>
          <option value="" disabled>กรุณาเลือก</option>
          <option value="all">ทั้งหมด</option>
          {this.priceRangeOptions()}
        </select>
      </div>
    )
  }
}

export default connect(mapStateToProps)(FilterArea);