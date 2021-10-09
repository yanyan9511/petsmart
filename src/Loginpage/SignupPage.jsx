import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import './LoginPage.css'
import Footer from '../Homepage/Footer'
import NavBar from '../Homepage/NavBar'
import  {withRouter} from "react-router-dom"
import axios from 'axios'




class Signup extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            customer_email: "",
            customer_pass1: "",
            customer_pass2: "",
            passwordError: false,
            userError: false

        }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleOnChange = this.handleOnChange.bind(this);
    }

    
    handleSubmit(){
        //remove this function entirely when backend is set up. this function is for illustration only
        this.props.history.push("/formPage")
    }

    //Uncomment-ed below for frontend illustration only. To be reinstated for the final product. 
   /* async handleSubmit(event){
        var self = this
        event.preventDefault()
        
        if (this.state.customer_pass1 != this.state.customer_pass2) {
            this.setState({passwordError : true})
            this.setState({userError: false})
            return
        }

        let data = [];      
        let custinfo = {customer_email : this.state.customer_email,
                        customer_pass: this.state.customer_pass1 }
    
        let cust_mail = {customer_email : this.state.customer_email}

        await axios.post('http://localhost:3000/customer/findByEmail' , cust_mail).then(function(response) {
            data = response.data
            console.log(data)
            if (data.length != 0) {
                console.log("data alr present")
                self.setState({userError : true})
                self.setState({passwordError: false})
            }

            else {
                console.log('in adding phase')
                axios.post('http://localhost:3000/customer/add' , custinfo).then(function(response) {
                    data = response.data
                    console.log(data)
                })
                //once log in succeed then route to formpage      
                this.props.history.push("/formPage")   
            }
        }) 

       
    } */



    handleOnChange(event){
        this.setState({[event.target.name]: event.target.value});
    }

    render() {
        var self = this
        let form = <Form onSubmit = {self.handleSubmit}>
                        <Form.Group className="mb-3" controlId="formGroupEmail">
                            <Form.Label> <strong>Email address</strong></Form.Label>
                            <Form.Control className = 'input_' type="email" placeholder="Enter Email as User Id" name = "customer_email" onChange = {self.handleOnChange}/>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formGroupPassword">
                            <Form.Label><strong>Password</strong></Form.Label>
                            <Form.Control className = 'input_' type="password" placeholder="Password" name = "customer_pass1" onChange = {self.handleOnChange}/>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formGroupPassword">
                            <Form.Label><strong>Confirm Password</strong></Form.Label>
                            <Form.Control className = 'input_' type="password" placeholder="Confirm Password" name = "customer_pass2" onChange = {self.handleOnChange}/>
                        </Form.Group>

                        
                        {self.state.passwordError? <div className = "errorMessage"> Please ensure password is similar. Please try again </div> : null}
                        {self.state.userError?  <div className = "errorMessage">User email is already registered.</div> : null}

                        <div className="d-grid gap-2">
                        <Button variant="primary" type="submit" size = 'lg' style={{width: "100%"}}>
                            Create Account
                        </Button>
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
                    <div className = "footerWrapper"> 
                        <Footer />
                    </div>
                </div>
            </React.Fragment>
        )


    }

} 

export default withRouter(Signup)