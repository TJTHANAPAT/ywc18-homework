import React from 'react';

import './style.css';
import './App.css';
import MerchantDetail from './MerchantDetail'

class App extends React.Component {
  state = {
    isLoading: true,
    jsonData: null,
  }
  componentDidMount = async () => {
    fetch('https://panjs.com/ywc18.json')
      .then(response => response.json())
      .then((jsonData) => {
        console.log(jsonData)
        this.setState({
          isLoading: false,
          jsonData: jsonData,
          merchantsFiltered: jsonData.merchants,
        })
      })
      .catch((error) => {
        console.error(error)
      })
  }

  filterArea = () => {
    const { jsonData } = this.state;
    let provinceOptions = () => {
      if (jsonData !== null) {
        const { provinces } = jsonData;
        let options = provinces.map((province, i) => {
          return <option value={{province}} key={i}>{province}</option>
        })
        return options
      }
    }    
    return (
      <div>
        <label for="filterArea">จังหวัด/ใกล้ฉัน</label>
        <select class="form-control" id="filterArea">
          <option value="nearme" selected>พื้นที่ใกล้ฉัน</option>
          <option value="all">พื้นที่ทั้งหมด</option>
          {provinceOptions()}
        </select>
      </div>
    )
  }

  merchants = () => {
    if (this.state.jsonData !== null) {
      const { merchantsFiltered } = this.state;
      let merchants = merchantsFiltered.map((merchant, i) => {
        return (
          <MerchantDetail
            detail={merchant}
            key={i}
          />
        )
      })
      return merchants
    } else {
      console.log('Loading...')
      return (
        <p>Loading...</p>
      )
    }

  }

  render() {
    return (
      <div>
        <nav class="navbar navbar-light bg-light">
          <span class="navbar-brand mb-0 h1">Navbar</span>
        </nav>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-3">
              <p>Filter Box</p>
              {this.filterArea()}
            </div>
            <div className="col-md-9">
              {this.merchants()}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
