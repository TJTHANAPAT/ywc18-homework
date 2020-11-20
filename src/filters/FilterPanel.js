import FilterArea from './FilterArea';
import FilterPriceRange from './FilterPriceRange';
import FilterCategory from './FilterCategory';
import FilterSubcategory from './FilterSubcategory';

const FilterPanel = () => {
  return (
    <div className="filter-panel col-md-3">
      <h1>FilterPanel</h1>
      <FilterCategory/>
      <FilterArea/>
      <FilterPriceRange/>
      <FilterSubcategory/>
    </div>
  )
}
export default FilterPanel;