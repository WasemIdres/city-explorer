import React, { Component } from 'react'
import {
    Card,
} from 'react-bootstrap';
import style from './style.css';
class WeatherDay extends Component {
    render() {
        return (
            <div >
                <Card className="card" style={{ width: '22rem' }}>
                    <Card.Img variant="top" src={"https://store-images.s-microsoft.com/image/apps.16894.c02476d2-2378-4f60-8290-b6d4b3842643.79a2ef6a-4775-4c79-8d93-9caf077660eb.1bbd88a4-0a17-4750-91a0-cd7d98f58e9d"} style={{ margin: '0' }} />
                    <Card.Body>
                        <Card.Title>{this.props.title}</Card.Title>
                        <Card.Text>
                            Date  :  {this.props.Date}
                            <br />
                            Description :  {this.props.description}
                            <br />

                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        )
    }
}

export default WeatherDay
