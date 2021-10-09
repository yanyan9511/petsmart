import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import './LoginPage.css'
import Footer from '../Homepage/Footer'
import NavBar from '../Homepage/NavBar'
import { HashLink as Link } from "react-router-hash-link"
import  {withRouter} from "react-router-dom"
import axios from 'axios'

class Login extends React.Component {
    constructor(props){
        super(props);
            this.state = {
                customer_email: "",
                customer_pass: "",
                authStatus: true
            }


        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleOnChange = this.handleOnChange.bind(this);
    }


    async handleSubmit(event){
        event.preventDefault()
        let data = [];
      
        let cust_mail = {customer_email : this.state.customer_email}
        await axios.post('http://localhost:3000/customer/findByEmail' , cust_mail).then(function(response) {
            data = response.data
        }) 

        if (data.length == 0 || (data[0].customer_pass != this.state.customer_pass)) {
            this.setState({authStatus: false})
        } 

        else {
           //redirect to homepage
           this.props.userLogIn(this.state.customer_email)
           this.props.history.push("/")
        }

    }


    handleOnChange(event){
        this.setState({[event.target.name]: event.target.value});
    }


    render() {
        var self = this
        let form = <Form onSubmit = {self.handleSubmit}>
                        <Form.Group className="mb-3" controlId="formGroupEmail">
                            <Form.Label> <strong>Email address</strong></Form.Label>
                            <Form.Control className = 'input_' type="email" placeholder="Enter email" name = "customer_email" onChange = {self.handleOnChange}/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formGroupPassword">
                            <Form.Label><strong>Password</strong></Form.Label>
                            <Form.Control className = 'input_' type="password" placeholder="Password" name = "customer_pass" onChange = {self.handleOnChange}/>
                        </Form.Group>
                        
                        <Form.Group className="mb-3" id="formGridCheckbox">
                            <Form.Check type="checkbox" label="Remember me" />
                        </Form.Group>
                        {self.state.authStatus? null: <div className = "errorMessage">Incorrect username or password. Please try again </div>}
                        <div className="d-grid gap-2">
                            <Button variant="primary" type="submit" size = 'lg' style={{width: "100%"}}>
                                Login
                            </Button>
                        </div>

                        <div className = "signUpLink1">
                            <Link  to = "/signUp">Dont have an account? <span className = "signUpLink2">Sign up here</span></Link>
                        </div>
                    </Form>

        return (
            <React.Fragment>
                <div className = "loginPage">
                    <div className = "navBarWrapper">
                        <NavBar />
                    </div>

                    <div className = 'content'> 
                        <img src = '../images/login_pic_1.jpg' />
                        {form}
                    </div>
                    <div class = "footerWrapper"> 
                        <Footer />
                    </div>
                </div>
            </React.Fragment>
        )


    }

}

export default withRouter(Login)