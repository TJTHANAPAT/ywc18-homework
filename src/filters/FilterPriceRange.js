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
  provinceOptions = () => {
    const { jsonData } = this.props;
    if (!!jsonData) {
      const { provinces } = jsonData;
      let options = provinces.map((province, i) => {
        return <option value={province} key={i}>{province}</option>
      })
      return options
    }
  }
  render() {
    return (
      <div className="filter">
        <label className="filter-name" htmlFor="filterKeyPriceRange">จังหวัด/ใกล้ฉัน</label>
        <select className="form-control" id="filterKeyPriceRange" onChange={this.handleFilterKey}>
          <option value="nearme" defaultValue>พื้นที่ใกล้ฉัน</option>
          <option value="all">พื้นที่ทั้งหมด</option>
          {this.provinceOptions()}
        </select>
      </div>
    )
  }
}

export default connect(mapStateToProps)(FilterArea);