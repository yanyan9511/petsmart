import React from 'react'
import NavBar from './NavBar';
import './Section_1.css'

class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    render(){
        let navBar = <div style = {{paddingTop: 20}}><NavBar userLogIn = {this.props.userLogIn} userLogOut = {this.props.userLogOut}/></div>

        return (<div className = "Section1">{navBar}</div>)
    }

}


export default Header
