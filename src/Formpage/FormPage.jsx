import React from 'react'
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import FloatingLabel from 'react-bootstrap/FloatingLabel'
import NavBar from '../Homepage/NavBar'
import {BsFillPlusCircleFill} from 'react-icons/bs'
import {IoIosArrowDroprightCircle} from 'react-icons/io' 
import {petType , breedList , healthIssue, petDiet} from './FormPageInfo'
import './FormPage.css'


function checkFormInput(petDetails){

    let info = JSON.parse(JSON.stringify(petDetails));

    let status = true //assume no error in form
    let errMsg = "No error"
    if (info.petName.length < 2) {
        status = false
        errMsg = "Please enter a valid pet Name" 
    }
   
    if (isNaN(info.weight)) {
        status = false
        errMsg = "please enter a valid weight"
    }

    if (isNaN(info.age)) {
        status = false
        errMsg = "please enter a valid age"
    }

    return {
        first: status,
        second: errMsg
    } 
}


function GenerateSelectValue(props) {
    let generateValue = props.content.map(function(value_){
        return (<option value = {value_}> {value_}</option>)
    })

    return generateValue
}

function GenerateSelectValueForPetType(props) {
    
    let petBreedList = ["None"];

    props.breedList.forEach(function(content) {
        if (content.petType == props.petType) {
            petBreedList = content.breeds
        }
    })

    let generateValue = petBreedList.map(function(value_){
        return (<option value = {value_}> {value_}</option>)
    })

    return generateValue
}

class FormPage extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            petName : "",
            petType : "Dog",
            petBreed: "",
            male: false,
            female: false,
            primaryHealthConcern: "",
            secondaryHealthConcern: "",
            age: "",
            weight: "",
            petDiet: ""
        }

        this.handleOnChange = this.handleOnChange.bind(this)
        this.toggleGenderFemale = this.toggleGenderFemale.bind(this)
        this.toggleGenderMale = this.toggleGenderMale.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.refreshForm = this.refreshForm.bind(this)
    }


    handleOnChange(event){
        this.setState({[event.target.name]: event.target.value});
    }


    toggleGenderMale(event){
        this.setState({male: true})
        this.setState({female: false})
    }

    toggleGenderFemale(event){
        this.setState({female: true})
        this.setState({male: false})
    }

    refreshForm(event){
        window.location.reload(true)
    }

    handleSubmit(event){
        event.preventDefault()
        console.log(this.state)
        let validSubmit = checkFormInput(this.state)
        if (validSubmit.first) {
            console.log("success")
        }
        else {
            alert(validSubmit.second)
        }
    }

    render(){
        
       
        let form =  <Form className = "formWrapper" onSubmit = {this.handleSubmit}>
                        <Row className="g-2 mb-4" >
                            <Col>
                                <FloatingLabel controlId="floatingInputGrid" label="Pet Name">
                                    <Form.Control type="text" placeholder="Pet Name" name = "petName" onChange = {this.handleOnChange}/>
                                </FloatingLabel>
                            </Col>
                            <Col>
                                <FloatingLabel controlId="floatingSelectGrid" label="Pet type">
                                    <Form.Select aria-label="Floating label select example" name= "petType" onChange = {this.handleOnChange}>
                                        <GenerateSelectValue content = {petType}/>
                                    </Form.Select>
                                </FloatingLabel>
                            </Col>
                            <Col>
                                <FloatingLabel controlId="floatingSelectGrid" label="Pet Breed">
                                    <Form.Select aria-label="Floating label select example" name= "petBreed" onChange = {this.handleOnChange}>
                                        <GenerateSelectValueForPetType petType = {this.state.petType} breedList = {breedList}/>
                                        <option>Breed</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </Form.Select>
                                </FloatingLabel>
                            </Col>
                        </Row>
        
                        <Form.Group className="mb-4">
                            <Row className = "applyColorWhite">
                                <Col xs = "auto" >
                                    Gender
                                </Col>
                        
                                <Col xs = "auto">
                                    <Form.Check onChange = {this.toggleGenderMale}
                                    type="radio"
                                    label="Male"
                                    name="genderRadio"
                                    />
                                </Col>
                                <Col xs = "auto">
                                    <Form.Check onChange = {this.toggleGenderFemale}
                                    type="radio"
                                    label="Female"
                                    name= "genderRadio"
                                    />
                                </Col>
                            </Row>
                        </Form.Group>
                        
                        <Form.Group  className = "mb-4">
                            <Form.Label className = "applyColorWhite">Primary Health Concern</Form.Label>
                            <Form.Select name = "primaryHealthConcern" onChange = {this.handleOnChange} >
                                <option value="0">Select a Health Condition (Skip if None)</option>
                                <GenerateSelectValue content = {healthIssue}/>
                            </Form.Select>
                            </Form.Group>
                        
                            <Form.Group  className = "mb-4 spacingStyle" >
                            <Form.Label className = "applyColorWhite">Secondary Health Concern</Form.Label>
                            <Form.Select name = "secondaryHealthConcern" onChange = {this.handleOnChange}>
                                <option value="0">Select a Health Condition (Skip if None)</option>
                                <GenerateSelectValue content = {healthIssue}/>
                            </Form.Select>
                            </Form.Group>
                        
                            <Form.Group  className = "mb-4">
                            <Row >
                            <Col>
                                <Form.Control type= "text" placeholder="Age" name = "age" onChange = {this.handleOnChange}/>
                            </Col>
                            <Col>
                                <Form.Control type= "text"  placeholder="Weight in Kg (e.g 5.2)"  name = "weight" onChange = {this.handleOnChange}/>
                            </Col>
                            <Col xs={7}>
                                <Form.Select name = "petDiet" placeholder = "Select a dietary preference">
                                <option value="0">Select a Health Condition (Skip if None)</option>
                                <GenerateSelectValue content = {petDiet}/>
                            </Form.Select>
                            </Col>
                    
                            </Row>
                        </Form.Group>
                        
                        <Form.Group  className = "mb-4">
                            <Form.Label className = "applyColorWhite">Please enter any other concern below (if any)</Form.Label>
                            <FloatingLabel controlId="floatingTextarea2" label="Comments">
                            <Form.Control
                                as="textarea"
                                placeholder="Leave a comment here"
                                style={{ height: '100px' }}
                            />
                            </FloatingLabel>
                        </Form.Group>
                    
                        <Button variant="primary" type="submit">
                        Submit
                        </Button>
                </Form>


            let plusSign = <BsFillPlusCircleFill className = "plusSign" size = {56} onClick = {this.refreshForm}/>
            let arrowSign = <IoIosArrowDroprightCircle className = "arrowSign" size = {65}/>

            let titleText = <h1 className = "titleText">Share with us about your pet(s)!</h1>

            let navBar = <div className = "navBarWrapperForm"> <NavBar /> </div>

        return (<React.Fragment> <div className = "formPage">{navBar} {titleText} {form} {plusSign} {arrowSign} </div></React.Fragment>)

    }
}


export default FormPage
