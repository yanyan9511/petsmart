import React from 'react'
import content from "./SliderContent"
import Slider from "react-slick";
import './Section_4.css'




class Cards extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            image: this.props.data.imagePath,
            title: this.props.data.foodName,
            content: this.props.data.foodText
        }
    }

    render() {
        return (
            <figure className="cardStyle">
                <img src={this.state.image} />
                <figcaption>
                    <h3>{this.state.title}</h3>
                    <h5>{this.state.content}</h5>
                </figcaption><a href="#"></a>
             </figure>
        )
    }
}

class Carousel extends React.Component{
    constructor(props){
        super(props);
        
        this.state = {
            window_width: window.innerWidth,
            window_height: window.innerHeight
        }
    }


    updateDimensions = () => {
        this.setState({ window_width: window.innerWidth, window_height: window.innerHeight });
      };

    componentDidMount() {
        window.addEventListener('resize', this.updateDimensions);
      }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateDimensions);
      }


    render() {
    
        if (this.state.window_width < 720) {
            var settings = {
                dots: true,
                infinite: true,
                slidesToShow: 1,
                slidesToScroll: 1,
            }
            
        }

        else {
            var settings = {
                dots: true,
                infinite: true,
                slidesToShow: 3,
                slidesToScroll: 1,
            }
    
        }

        let cardsTemplate;

        if (content.length > 0) {
			cardsTemplate = content.map(function(item, index) {
                
				return (
						<div key={index}>
							<Cards data={item} />
						</div>
				)
			})

		} else {    
			cardsTemplate = <p>Please add some cards</p>
		}

        return (
			<div className='section4V2'>
                <h2 className = "recommendedProducts">Vets recommendations</h2>
                <span> *hover to see products details </span>
				<Slider {...settings}>{cardsTemplate}</Slider>
			</div>
		);


    }

}

export default Carousel
