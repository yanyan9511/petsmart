import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";
import Button from 'react-bootstrap/Button';
import "./Section_3.css"

class CallToAction extends React.Component {
    constructor(props) {
        super(props);

    }


    render() {
        
        return (
            <React.Fragment>
                <div className = "Section3"> 
                    <h2 className = "SalesPitch1">Products that you can trust</h2>
                    <h2 className = "SalesPitch2">Leave the worrying to us</h2>
                    <Router><Link to = "/shop"> <Button variant = "success" size = "sm">Head to Shop</Button> </Link></Router>
                </div>
            </React.Fragment>
        )

    }

}

export default CallToAction