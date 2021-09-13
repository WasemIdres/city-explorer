import React, { Component } from 'react'
import {
    Table,
    Image,
} from 'react-bootstrap'
import style from './style.css';
class Location extends Component {
    render() {
        return (
            <div style={{ marginTop: "20px" }}>
                {/* <h1>{this.props.city_name}</h1>
                <h2>{this.props.type}</h2>
                <h3>{this.props.lat}/{this.props.lon}</h3> */}
                <Table striped bordered hover variant="dark" id={"table"} >
                    <thead>
                        <tr>
                            <th>City Name</th>
                            <th>latitude</th>
                            <th>longitude</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{this.props.city_name}</td>
                            <td>{this.props.lat}</td>
                            <td>{this.props.lon}</td>
                        </tr>

                    </tbody>
                </Table>
                <Image  src={this.props.img} roundedCircle />
                
            </div>
        )
    }
}

export default Location
