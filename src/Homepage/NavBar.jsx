import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link"
import { GiShoppingCart } from 'react-icons/gi';
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import 'bootstrap/dist/css/bootstrap.min.css';
import './NavBar.css'

class NavBar extends React.Component{
    constructor(props){
        super(props);
    }

    render() {

        let navBar = <Navbar expand="lg">
                        <Container>
                            <Navbar.Brand>PET'S MART</Navbar.Brand>
                            <Navbar.Toggle aria-controls="basic-navbar-nav" style = {{backgroundColor: "white"}} />
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Nav className="justify-content-end link" style = {{width: "100%"}}>
                                <Link  to="/" >HOME</Link>
                                <Link  to="/#about">ABOUT</Link>
                                <Link  to="/#shop">SHOP</Link>
                                <Link  to="/#contactUs">CONTACT</Link>
                                {!this.props.userLogIn? <Link  to="/login" >LOG IN </Link>: <Link onClick = {this.props.userLogOut} to="/" >LOG OUT </Link>}
                                <GiShoppingCart size = {35}/> 
                                </Nav>
                            </Navbar.Collapse>
                        </Container>
                     </Navbar>


        return (<div>{navBar}</div>)

    }

}

export default NavBar