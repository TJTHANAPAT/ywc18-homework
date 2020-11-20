import React from 'react';
import { connect } from 'react-redux';
import FilterArea from './FilterArea';
import FilterPriceRange from './FilterPriceRange';
import FilterCategory from './FilterCategory';
import FilterSubcategory from './FilterSubcategory';

const mapStateToProps = (state) => {
  return {
    isShowFilterNormal: state.isShowFilterNormal,
  }
}

class FilterPanel extends React.Component {
  render() {
    if (this.props.isShowFilterNormal) {
      return (
        <div className="filter-panel col-md-3">
          <FilterCategory />
          <FilterPriceRange />
          <FilterArea />
          <FilterSubcategory />
        </div>
      )
    } else {
      return null
    }
  }
}
export default connect(mapStateToProps)(FilterPanel);