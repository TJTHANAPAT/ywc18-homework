import React from 'react';

import './css/style.css';
import './css/bootstrap.min.css'
import './App.css';
import MerchantDetail from './MerchantDetail'

class App extends React.Component {
  state = {
    // isLoading: true,
    jsonData: null,
    filterKeyCategory: 'all',
    filterKeyPriceRange: 'all',
    filterKeyArea: 'nearme',
  }
  componentDidMount = async () => {
    fetch('https://panjs.com/ywc18.json')
      .then(response => response.json())
      .then((jsonData) => {
        console.log(jsonData)
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
        this.setState({
          isLoading: false,
          jsonData: jsonData,
          merchantsFiltered: jsonData.merchants,
        }, ()=> {
          this.handleFilterChange()
        })
      })
      .catch((error) => {
        console.error(error)
      })
  }

  filterCategory = () => {
    const { jsonData } = this.state;
    let categoryOptions = () => {
      if (!!jsonData) {
        const { categories } = jsonData;
        let options = categories.map((category, i) => {
          return (
            <div key={i}>
              <input
                type="radio" name="filterKeyCategory"
                id={category.name} value={category.name}
                onChange={this.handleFilterCategory}
              />
              <label htmlFor={category.name} className="ml-1">{category.name}</label>
            </div>
          )
        })
        return options
      }
    }
    return (
      <div className="filter" style={{ marginBottom: '17px' }}>
        <label className="filter-name">ประเภทร้านค้า</label>
        <div>
          <input
            type="radio" name="filterKeyCategory" id="allcategories"
            value="all" onChange={this.handleFilterCategory} defaultChecked
          />
          <label htmlFor="allcategories" className="ml-1">ทั้งหมด</label>
        </div>
        {categoryOptions()}
      </div>
    )
  }

  handleFilterChange = () => {
    let {
      jsonData,
      filterKeyCategory,
      filterKeySubcatagory,
      filterKeyPriceRange,
      filterKeyArea
    } = this.state
    const { merchants } = jsonData
    console.log(filterKeyPriceRange)
    let merchantsFiltered = merchants
    filterKeyArea = filterKeyArea == 'nearme' ? 'กรุงเทพมหานคร': filterKeyArea
    if (filterKeyArea !== 'all') {
      merchantsFiltered = merchantsFiltered.filter((item) => {
        return (item.addressProvinceName === filterKeyArea)
      })
    }
    if (filterKeyPriceRange !== 'all') {
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
    console.log('filtered merchants: ', merchantsFiltered)
    this.setState({ merchantsFiltered: merchantsFiltered })
  }

  handleFilterCategory = (event) => {
    console.log(event.target.value)
    this.setState({
      filterKeyCategory: event.target.value,
      filterKeySubcatagory: 'all'
    }, () => {
      console.log(this.state.filterKeyCategory)
      this.handleFilterChange()
    });
  }

  handleFilterSubcategory = (event) => {
    console.log(event.target.value)
    this.setState({
      filterKeySubcatagory: event.target.value
    }, () => {
      this.handleFilterChange()
    });
  }

  filterSubcategory = () => {
    const { filterKeyCategory } = this.state;
    if (filterKeyCategory === 'all') {
      //pass
    } else {
      const { jsonData } = this.state;
      const { categories } = jsonData;
      let subcategories = []
      for (var i = 0; i < categories.length; i++) {
        if (categories[i].name === filterKeyCategory) {
          subcategories = categories[i].subcategories
        }
      }
      if (subcategories.length > 0) {
        let subcategoryOptions = () => {
          let options = subcategories.map((subcategory, i) => {
            return (
              <div key={i}>
                <input
                  type="radio" name="filterKeySubcategory" id={subcategory}
                  value={subcategory} onChange={this.handleFilterSubcategory}
                />
                <label htmlFor={subcategory} className="ml-1">{subcategory}</label>
              </div>
            )
          })
          return options
        }
        return (
          <div className="filter">
            <label className="filter-name">ประเภท{filterKeyCategory}</label>
            <div>
              <input
                type="radio" name="filterKeySubcategory" id="allsubcategories"
                value="all" onChange={this.handleFilterSubcategory} defaultChecked
              />
              <label htmlFor="allsubcategories" className="ml-1">ทั้งหมด</label>
            </div>
            {subcategoryOptions()}
          </div>
        )
      }
    }
  }

  handleFilterKey = (event) => {
    console.log(event.target.id, ':', event.target.value)
    this.setState({
      [event.target.id]: event.target.value
    }, () => {
      this.handleFilterChange()
    })
  }

  filterPriceRange = () => {
    const { jsonData } = this.state;
    let priceRangeOptions = () => {
      if (!!jsonData) {
        const { priceRange } = jsonData;
        let options = priceRange.map((range, i) => {
          return <option value={i + 1} key={i}>{range}</option>
        })
        return options
      }
    }
    return (
      <div className="filter">
        <label className="filter-name" htmlFor="filterKeyPriceRange">ราคา</label>
        <select className="form-control" id="filterKeyPriceRange" defaultValue="" onChange={this.handleFilterKey}>
          <option value="" disabled>กรุณาเลือก</option>
          <option value="all">ทั้งหมด</option>
          {priceRangeOptions()}
        </select>
      </div>
    )
  }

  filterArea = () => {
    const { jsonData } = this.state;
    let provinceOptions = () => {
      if (!!jsonData) {
        const { provinces } = jsonData;
        let options = provinces.map((province, i) => {
          return <option value={province} key={i}>{province}</option>
        })
        return options
      }
    }
    return (
      <div className="filter">
        <label className="filter-name" htmlFor="filterKeyArea">จังหวัด/ใกล้ฉัน</label>
        <select className="form-control" id="filterKeyArea" onChange={this.handleFilterKey}>
          <option value="nearme" defaultValue>พื้นที่ใกล้ฉัน</option>
          <option value="all">พื้นที่ทั้งหมด</option>
          {provinceOptions()}
        </select>
      </div>
    )
  }

  merchants = () => {
    if (!!this.state.jsonData) {
      const { merchantsFiltered } = this.state;
      if (merchantsFiltered.length > 0) {
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
        return (
          <div className="text-center mt-4">
            <span>ขออภัย ไม่พบร้านค้าที่คุณต้องการ</span>
          </div>
        )
      }
    } else {
      console.log('Loading Data...')
      return (
        <div className="text-center mt-4">
            <span>กำลังโหลด...</span>
          </div>
      )
    }

  }

  render() {
    return (
      <div>
        <nav className="navbar navbar-light bg-light">
          <span className="navbar-brand mb-0 h1">คนละครึ่ง by YWC</span>

          <form class="form-inline">
            <label class="sr-only" for="inlineFormInputGroupUsername2">Username</label>
            <div class="input-group mb-2 mr-sm-2">
              <div class="input-group-prepend">
                {/* <div class="input-group-text">@</div> */}
                <select style={{fontFamily:"'FontAwesome', 'Athiti', 'san-serif'"}} className="form-control input-group-text" id="filterKey" defaultValue="" onChange={this.handleFilterKey}>
                  <option value="" disabled>กรุณาเลือก</option>
                  <option value="all">ทั้งหมด &#xf036;</option>
                </select>
              </div>
              <input type="text" class="form-control" id="inlineFormInputGroupUsername2" placeholder="ค้นหา ชื่อ ร้านอาหาร และเครื่องดื่ม ร้านธงฟ้า ร้าน OTOP และสินค้าทั่วไป" />
              <div class="input-group-append">
                <button type="submit" class="btn btn-primary mb-2">ค้นหา</button>
              </div>
            </div>
          </form>

        </nav>
        <div className="container-fluid">
          <div className="row">
            <div className="filter-panel col-md-3">
              {this.filterCategory()}
              {this.filterPriceRange()}
              {this.filterArea()}
              {this.filterSubcategory()}
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
