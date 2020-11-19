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
        // console.log(typeof jsonData)
        this.setState({
          isLoading: false,
          jsonData: jsonData,
          merchantsDetail: jsonData.merchants,
        })
      })
      .catch((error) => {
        console.error(error)
      })
  }
  

  merchants = () => {
    const { jsonData, merchantsDetail } = this.state;
    if (jsonData !== null) {
      let merchants = merchantsDetail.map((merchant, i) => {
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
