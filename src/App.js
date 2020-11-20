import React from 'react';
import {connect} from 'react-redux'

import Header from './header/Header';
import FilterPanel from './filters/FilterPanel';
import MerchantList from './merchants/MerchantList';
import TitleBar from './header/TitleBar';
import FilterPanelForMobile from './filters/FilterPanelForMobile';
import Footer from './footer/Footer';

class App extends React.Component {
  componentDidMount = async () => {
    fetch('https://panjs.com/ywc18.json')
      .then(response => response.json())
      .then((jsonData) => {
        console.log('Fetched Data:', jsonData)
        jsonData.categories.push({ name: 'งานบริการอื่นๆ / เบ็ดเตล็ด', subcategories: [] })
        jsonData.merchants.push({
          addressDistrictName: "เมืองสมุทรปราการ",
          addressProvinceName: "สมุทรปราการ",
          categoryName: "ร้านอาหาร",
          coverImageId: "https://www.saphanmai.com/wp-content/uploads/2019/03/49895510_2247234235565577_2936877454226096128_o.jpg",
          highlightText: "บุฟเฟ่ต์สุกี้<strong>แบบไม่อั้น</strong>ในราคา 199 บาท",
          isOpen: "Y",
          priceLevel: 1,
          recommendedItems: ["หมูกระทะ", "สุกี้"],
          shopNameTH: "สุกกี้ตี๋น้อย",
          subcategoryName: "ชาบู สุกี้ยากี้ หม้อไฟ",
          facilities: ['ไม่มี']
        })
        this.props.dispatch({
          type: 'SET_STATE',
          data: {jsonData: jsonData},
        })
      })
      .catch((error) => {
        console.error(error)
      })
  }
  render() {
    return (
      <div>
        <Header/>
        <div className="container-fluid container-body">
          <div className="row">
            <FilterPanelForMobile/>
            <TitleBar/>
            <FilterPanel/>
            <MerchantList/>
          </div>
        </div>
        <Footer/>
      </div>
    );
  }
}

export default connect()(App);
