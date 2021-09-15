import React, { Component } from 'react'
import Movie from './Movie'

class Movies extends Component {
    render() {
        return (
            <div className="cardDiv">
                {
                    this.props.movieList.map(Element => {
                        return <Movie
                            image_url={Element.image_url}
                            title={Element.title}
                            released_on={Element.released_on}
                            popularity={Element.popularity}
                            average_votes={Element.average_votes}
                            total_votes={Element.total_votes}
                        />


                    })
                }
            </div>
        )
    }
}

export default Movies
