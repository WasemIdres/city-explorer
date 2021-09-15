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
                {

                    this.props.showData&&<Table striped bordered hover variant="dark" id={"table"} >
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
                }
                
                <Image  src={this.props.img} roundedCircle />
                
            </div>
        )
    }
}

export default Location
