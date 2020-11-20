import React from 'react';
import parse from 'html-react-parser';

class MerchantDetail extends React.Component {
  availableBadge = (isOpen) => {
    if (isOpen === 'Y') {
      return <span className="badge badge-success">เปิดอยู่</span>
    } else if (isOpen === 'N') {
      return <span className="badge badge-secondary">ปิดแล้ว</span>
    }
  }
  priceLevelStatus = (priceLevel) => {
    if (!!priceLevel) {
      return <span><span className="price-level"><i>{'฿'.repeat(priceLevel)}</i>{'฿'.repeat(4 - priceLevel)}</span> |&nbsp;</span>
    }
  }
  recommendedItemsBar = (categoryName, recommendedItems) => {
    let recommendedWord = 'สินค้าแนะนำ'
    if (categoryName === 'ร้านอาหาร') {
      recommendedWord = 'เมนูแนะนำ'
    }
    if (!!recommendedItems && recommendedItems !== []) {
      return <p><strong>{recommendedWord}</strong> {recommendedItems.join(', ')}</p>
    }
  }
  facilitiesIcon = (facilities) => {
    if (!!facilities && facilities !== []) {
      const fontAmesomeIcons = {
        'ที่จอดรถ': 'fa-car',
        'รับจองล่วงหน้า': 'fa-file-text',
        'สามารถนำสัตว์เลี้ยงเข้าได้': 'fa-paw',
      }
      let icons = facilities.map((facility, i) => {
        if (facility in fontAmesomeIcons) {
          return (
            <span
              className={"facility-icon"}
              key={i} alt={facility}
            >
              <i className={"fa fa-fw fa-lg " + fontAmesomeIcons[facility]}></i>
            </span>
          )
        } else {
          return console.log(`There is no icon assigned for "${facility}" facility.`)
        }
      })
      return icons
    }
  }
  render() {
    let {
      shopNameTH,
      highlightText,
      categoryName,
      subcategoryName,
      coverImageId,
      recommendedItems,
      addressDistrictName,
      addressProvinceName,
      isOpen,
      priceLevel,
      facilities
    } = this.props.detail
    return (
      <div className="merchant">
        <div className="img">
          <img src={coverImageId} alt={shopNameTH} />
        </div>
        <div className="body">
          <h2>{shopNameTH} {this.availableBadge(isOpen)}</h2>
          <div className="details">
            <span>{subcategoryName} |&nbsp;</span>
            {this.priceLevelStatus(priceLevel)}
            <span>{addressDistrictName} {addressProvinceName}</span>
          </div>
          <p>{parse(highlightText)}</p>
          {this.recommendedItemsBar(categoryName, recommendedItems)}
          {this.facilitiesIcon(facilities)}
        </div>
      </div>
    )
  }
}

export default MerchantDetail;