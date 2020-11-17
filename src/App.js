import React from 'react';
import parse from 'html-react-parser';
import './App.css';
import MerchantDetail from './MerchantDetail'

class App extends React.Component {
  state = {
    jsonData: null,
  }
  componentDidMount = async () => {
    fetch('https://panjs.com/ywc18.json')
      .then(response => response.json())
      .then((jsonData) => {
        console.log(jsonData)
        // console.log(typeof jsonData)
        this.setState({
          jsonData: jsonData
        })
      })
      .catch((error) => {
        console.error(error)
      })
  }

  merchantDetails = () => {
    const { jsonData } = this.state;
    if (jsonData !== null) {
      let merchants = jsonData.merchants.map((merchant, i) => {
        console.log(merchant, i)
        return (
          <div key={i}>
            <h1>{merchant.shopNameTH}</h1>
            <p>{parse(merchant.highlightText)}</p>
          </div>
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
          {this.merchantDetails()}
      </div>
    );
  }
}

export default App;
