import React, { Component } from 'react'
import {
    Carousel,
    Caption
} from 'react-bootstrap'
import style from './style.css';
class Weather extends Component {
    render() {
        // console.log(this.props.foreCast)
        return (
            <div id={"carouselDiv"}>


                <Carousel indicators={false}  className="Carousel">
                    {
                        this.props.foreCast.map((Element, i) => {
                            return <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src="https://colorcasters.com/wp-content/uploads/2014/05/Black-300x300.jpeg"
                                    alt="First slide"
                                />
                                <Carousel.Caption className="color">
                                    <h3>Forecast Daily</h3>
                                    <p className="ele">Date :{Element.date}</p>
                                    <p className="ele">Description :{Element.description}</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                        })}
                </Carousel>



            </div>
        )
    }
}

export default Weather