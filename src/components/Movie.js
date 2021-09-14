import React, { Component } from 'react'
import {
    Card,
    Button,
    Col,
} from 'react-bootstrap';
class Movie extends Component {
    render() {
        return (
            <div className="cardDiv">
                {
                    this.props.movieList.map((Element,index )=> {
                        if (index <21) {
                            return <Card className="card" style={{ width: '22rem' }}>
                            <Card.Img variant="top" src={Element.image_url} style={{ margin: '0' }}/>
                            <Card.Body>
                                <Card.Title>{Element.title}</Card.Title>
                                <Card.Text>
                                Released On  :  {Element.released_on}
                                <br />
                                Overview :  {Element.overview}
                                <br />
                                Popularity :  {Element.popularity}
                                <br />
                                Average Votes :  {Element.average_votes}
                                <br />
                                Total Votes :  {Element.total_votes}
                                <br />
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        {index++}
                        }
                       
                    })
                }

            </div>
        )
    }
}

export default Movie
