import React from 'react';
import { connect } from 'react-redux';
import FilterArea from './FilterArea';
import FilterPriceRange from './FilterPriceRange';
import FilterCategory from './FilterCategory';
import FilterSubcategory from './FilterSubcategory';
import ToggleFilterPanelBtn from '../header/ToggleFilterPanelBtn';

const mapStateToProps = (state) => {
  return {
    isShowFilterOnMobile: state.isShowFilterOnMobile,
  }
}

class FilterPanelForMobile extends React.Component {
  componentDidMount() {
    window.addEventListener('resize', () => {
      console.log('width', window.innerWidth, 'height', window.innerHeight)
      if (window.innerWidth > 768) {
        this.props.dispatch({
          type: 'SET_STATE',
          data: {isShowFilterOnMobile: false, isShowFilterNormal: true}
        })
      } else {
        this.props.dispatch({
          type: 'SET_STATE',
          data: { isShowFilterNormal: false}
        })
      }
    })
  }
  render() {
    if (this.props.isShowFilterOnMobile) {
      return (
        <div className="filter-panel col-md-3">
          <ToggleFilterPanelBtn btnToggleClose={true}/>
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
export default connect(mapStateToProps)(FilterPanelForMobile);