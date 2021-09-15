import React, { Component } from 'react'
import style from './style.css';
import WeatherDay from './WeatherDay';
class Weather extends Component {
    render() {
        console.log( this.props.foreCast)
        return (
            
            <div className="cardDiv">
            {
                this.props.foreCast.map(Element => {
                    return <WeatherDay
                    description = {Element.description}
                        Date ={Element.date}
                    />


                })
            }
        </div>
           
        )
    }
}

export default Weather