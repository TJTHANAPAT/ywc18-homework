import React from 'react';
import parse from 'html-react-parser';

class MerchantDetail extends React.Component {
    recommendedWord = (categoryName) => {
        if (categoryName == 'ร้านอาหาร') {
            return 'เมนูแนะนำ'
        } else {
            return 'สินค้าแนะนำ'
        }
    }
    render() {
        let {
            shopNameTH, 
            highlightText,
            categoryName,
            coverImageId,
            recommendedItems,
            addressDistrictName,
            addressProvinceName,
        } = this.props.detail
        console.log(this.props.detail)
        return (
            <div className="merchant">
                <div className="img">
                    <img src={coverImageId}/>
                </div>
                <div className="body">
                    <h2>{shopNameTH}</h2>
                    <span>{categoryName} | {addressDistrictName} {addressProvinceName}</span>
                    <p>{parse(highlightText)}</p>
                    <p><strong>{this.recommendedWord(categoryName)}</strong> {recommendedItems.join(', ')}</p>
                </div>
            </div>
        )
    }
}

export default MerchantDetail;