import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    console.log('Read State from Header', state)
    return state
}

class Header extends React.Component {
    render() {
        console.log(this.props.jsonData)
        return(
            <header>
                <h1>คนละครึ่ง</h1>
            </header>
        )
    }
}

export default connect(mapStateToProps)(Header);