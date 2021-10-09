import React from 'react'
import Header from './Section_1';
import CoreValues from './Section_2';
import CallToAction from './Section_3';
import Memories from './Section_5'
import Blog from './Section_6';
import ContactUs from './Section_7';
import Carousel from './Section_4'
import Footer from './Footer'
import FormPage from '../Formpage/FormPage'



class HomePage extends React.Component{

    
    render() {
        return (
            <React.Fragment>
                <Header userLogIn = {this.props.userLogIn} userLogOut= {this.props.userLogOut}/>
                <CoreValues />
                <CallToAction />
                <Carousel />
                <Memories />
                <Blog />
                <ContactUs />  
                <Footer />
                    
          </React.Fragment>
        )
    }
}

export default HomePage


//<Header userLogIn = {this.props.userLogIn} userLogOut= {this.props.userLogOut}/>
//<CoreValues />
//<CallToAction />
//<Carousel />
//<Memories />
//<Blog />
//<ContactUs />  
//<Footer />
//<FormPage />