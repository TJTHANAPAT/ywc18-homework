import React from 'react';

class MerchantDetail extends React.Component {
    render() {
        let { merchant } = this.props
        return (
            <div>
                <h1>{merchant.shopNameTH}</h1>
                <p>{merchant.highlightText}</p>
            </div>
        )
    }
}

export default MerchantDetail;