import React from 'react';
import { connect } from 'react-redux';
import MerchantDetail from './MerchantDetail';

const mapStateToProps = (state) => {
  return state;
}

class MerchantList extends React.Component {
  filterMerchants = () => {
    let {
      jsonData,
      filterKeyCategory,
      filterKeySubcatagory,
      filterKeyPriceRange,
      filterKeyArea
    } = this.props
    const { merchants } = jsonData
    let merchantsFiltered = merchants
    filterKeyArea = filterKeyArea == 'nearme' ? 'กรุงเทพมหานคร': filterKeyArea
    if (filterKeyArea !== 'all') {
      merchantsFiltered = merchantsFiltered.filter((item) => {
        return (item.addressProvinceName === filterKeyArea)
      })
    }
    if (filterKeyPriceRange !== 'all' && filterKeyPriceRange !== '') {
      merchantsFiltered = merchantsFiltered.filter((item) => {
        return (item.priceLevel === parseInt(filterKeyPriceRange))
      })
    }
    if (filterKeyCategory === 'all') {
      merchantsFiltered = merchantsFiltered
    } else if (filterKeyCategory === 'ร้านอาหารและเครื่องดื่ม') {
      merchantsFiltered = merchantsFiltered.filter((item) => {
        return (item.categoryName === filterKeyCategory || item.categoryName === 'ร้านอาหาร' || item.categoryName === 'ร้านเครื่องดื่ม')
      })
      if (filterKeySubcatagory !== 'all') {
        merchantsFiltered = merchantsFiltered.filter((item) => {
          return (item.subcategoryName === filterKeySubcatagory)
        })
      }
    } else if (filterKeyCategory === 'สินค้าทั่วไป') {
      merchantsFiltered = merchantsFiltered.filter((item) => {
        return (item.categoryName === filterKeyCategory || item.categoryName === 'แฟชั่น')
      })
      if (filterKeySubcatagory !== 'all') {
        merchantsFiltered = merchantsFiltered.filter((item) => {
          return (item.subcategoryName === filterKeySubcatagory)
        })
      }
    } else {
      merchantsFiltered = merchantsFiltered.filter((item) => {
        return (item.categoryName === filterKeyCategory)
      })
      if (filterKeySubcatagory !== 'all') {
        merchantsFiltered = merchantsFiltered.filter((item) => {
          return (item.subcategoryName === filterKeySubcatagory)
        })
      }
    }
    // console.log('filtered merchants: ', merchantsFiltered)
    return merchantsFiltered
  }
  render() {
    if (!!this.props.jsonData) {
      let merchantsFiltered = this.filterMerchants()
      if (merchantsFiltered.length > 0) {
        let merchants = merchantsFiltered.map((merchant, i) => {
          return (
            <MerchantDetail
              detail={merchant}
              key={i}
            />
          )
        })
        return (
          <div className="col-md-9 order-md-2">
            {merchants}
          </div>
        )
      }
      return (
        <div className="col-md-9 text-center">
          <span>ขออภัย ไม่พบร้านค้าที่คุณต้องการ</span>
        </div>
      )
    } else {
      console.log('Loading Data...')
      return (
        <div className="col-md-9 text-center">
          <span>กำลังโหลด...</span>
        </div>
      )
    }
  }
}

export default connect(mapStateToProps)(MerchantList);