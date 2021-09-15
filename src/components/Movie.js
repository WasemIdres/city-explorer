import React, { Component } from 'react'
import {
    Card,
} from 'react-bootstrap';
import style from './style.css';
class Movie extends Component {
    render() {
        return (
            <div className="cardDiv">
                <Card className="card" style={{ width: '22rem' }}>
                    <Card.Img variant="top" src={this.props.image_url} style={{ margin: '0' }} />
                    <Card.Body>
                        <Card.Title>{this.props.title}</Card.Title>
                        <Card.Text>
                            Released On  :  {this.props.released_on}
                            <br />
                            Overview :  {this.props.overview}
                            <br />
                            Popularity :  {this.props.popularity}
                            <br />
                            Average Votes :  {this.props.average_votes}
                            <br />
                            Total Votes :  {this.props.total_votes}
                            <br />
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        )
    }
}

export default Movie
