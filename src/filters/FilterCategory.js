import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  const {jsonData, filterKeyCategory} = state;
  return { jsonData, filterKeyCategory }
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
              checked={this.props.filterKeyCategory === category.name}
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
              onChange={this.handleFilterCategory}
              checked={this.props.filterKeyCategory === 'all'}
            />
            <label htmlFor="allcategories" className="form-check-label">ทั้งหมด</label>
          </div>
          {this.categoryOptions()}
        </div>
      )
  }
}

export default connect(mapStateToProps)(FilterCategory);