const initialState = {
  jsonData: null,
  filterKeyCategory: 'all',
  filterKeyPriceRange: '',
  filterKeyArea: 'nearme',
  isShowFilterOnMobile: false,
  isShowFilterNormal: true,
}

const reducer = (state=initialState, action) => {
  switch (action.type) {
      case 'SET_STATE':
        return {
          ...state,
          ...action.data
        }
      case 'SET_STATE2':
        return {
          ...state,
          ...action.data
        }
      default:
        return state;
        
  }
}
export default reducer;