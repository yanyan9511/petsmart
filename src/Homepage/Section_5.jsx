import React from 'react';
//import image1 from '../Images/Section_5_pic_1.jpg'
import './Section_5.css'

const imagesPath =  [
    '../images/Section_5_pic_1.jpg' ,
    '../images/Section_5_pic_2.jpg' ,
    '../images/Section_5_pic_3.jpg' ,
    '../images/Section_5_pic_4.jpg' ,
    '../images/Section_5_pic_5.jpg' ,
    '../images/Section_5_pic_6.jpg' 
]

class Memories extends React.Component {
    constructor(props) {
        super(props);
    }






    render() {

      

        let row_Images = imagesPath.map(function(path , index){
                            return( <div className = "gridItem"> <img src = {path} /> </div>)
                        })
                         
        return (
            <React.Fragment>
                <div className = 'section5'>
                    <h2>Memories at Pet's Mart</h2>
                    <div className = "gridContainer"> 
                        {row_Images}
                    </div>
                </div>
            </React.Fragment>)
    }

}


export default Memories