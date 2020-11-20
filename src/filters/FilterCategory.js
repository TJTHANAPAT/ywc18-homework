import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return { jsonData: state.jsonData }
}

class FilterCategory extends React.Component {
  handleFilterCategory = (event) => {
    console.log('filterKeyCategory:', event.target.value)
    this.props.dispatch({
      type: 'SET_STATE',
      data: {
        filterKeyCategory: event.target.value,
        filterKeySubcatagory: 'all'
      }
    })
  }
  categoryOptions = () => {
    const { jsonData } = this.props;
    if (!!jsonData) {
      const { categories } = jsonData;
      let options = categories.map((category, i) => {
        return (
          <div className="form-group form-check filter-radio" key={i}>
            <input
              type="radio" name="filterKeyCategory" 
              className="form-check-input"
              id={category.name} value={category.name}
              onChange={this.handleFilterCategory}
            />
            <label htmlFor={category.name} className="form-check-label">{category.name}</label>
          </div>
        )
      })
      return options
    }
  }
  render() {
    return (
        <div className="filter" style={{ marginBottom: '17px' }}>
          <label className="filter-name">ประเภทร้านค้า</label>
          <div className="form-group form-check filter-radio">
            <input
              type="radio" name="filterKeyCategory" 
              className="form-check-input"
              id="allcategories" value="all"
              onChange={this.handleFilterCategory} defaultChecked
            />
            <label htmlFor="allcategories" className="form-check-label">ทั้งหมด</label>
          </div>
          {this.categoryOptions()}
        </div>
      )
  }
}

export default connect(mapStateToProps)(FilterCategory);