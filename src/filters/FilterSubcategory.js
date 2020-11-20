import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  const {jsonData, filterKeyCategory, filterKeySubcategory} = state;
  return { jsonData, filterKeyCategory, filterKeySubcategory }
}

class FilterSubcategory extends React.Component {
  handleFilterSubcategory = (event) => {
    this.props.dispatch({
      type: 'SET_STATE',
      data: {
        filterKeySubcategory: event.target.value,
      }
    })
  }
  render() {
    const { filterKeyCategory } = this.props;
    if (filterKeyCategory === 'all') {
      return null
    } else {
      const { jsonData } = this.props;
      const { categories } = jsonData;
      let subcategories = []
      for (var i = 0; i < categories.length; i++) {
        if (categories[i].name === filterKeyCategory) {
          subcategories = categories[i].subcategories
        }
      }
      if (subcategories.length > 0) {
        let subcategoryOptions = () => {
          let options = subcategories.map((subcategory, i) => {
            return (
              <div className="form-group form-check filter-radio" key={i}>
                <input
                  type="radio" name="filterKeySubcategory" className="form-check-input" 
                  id={subcategory} value={subcategory}
                  onChange={this.handleFilterSubcategory}
                  checked={this.props.filterKeySubcategory === subcategory}
                />
                <label htmlFor={subcategory} className="form-check-label">{subcategory}</label>
              </div>
            )
          })
          return options
        }
        return (
          <div className="filter" style={{ marginBottom: '17px' }}>
            <label className="filter-name">ประเภท{filterKeyCategory}</label>
            <div className="form-group form-check filter-radio">
              <input
                type="radio" name="filterKeySubcategory" className="form-check-input" 
                id="allsubcategories" value="all"
                onChange={this.handleFilterSubcategory}
                checked={this.props.filterKeySubcategory === 'all'}
              />
              <label htmlFor="allsubcategories" className="form-check-label">ทั้งหมด</label>
            </div>
            {subcategoryOptions()}
          </div>
        )
      } else {
        return null
      }
    }
  }
}

export default connect(mapStateToProps)(FilterSubcategory);