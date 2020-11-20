import React from 'react';
import SearchBar from './SearchBar';
import ToggleFilterPanelBtn from './ToggleFilterPanelBtn';

class Header extends React.Component {
  render() {
    return (
      <header>
        <div className="header-bar">
          <div className="logo">
            <img className="logo-full" src="https://search-merchant.xn--42caj4e6bk1f5b1j.com/images/halfhalf-logo.png" alt="" />
            <img className="logo-mini" src="https://search-merchant.xn--42caj4e6bk1f5b1j.com/images/halfhalf-logo-mini.png" alt="" />
          </div>
          <SearchBar />
          <ToggleFilterPanelBtn />
        </div>
        <div className="navigate-bar">
          <div className="navigate-bar-body">
            <p>หน้าแรก / ค้นหา</p>
          </div>
        </div>
      </header>
    )
  }
}

export default Header;