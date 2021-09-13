import React, { Component } from 'react'
import style from './style.css';
class SerachFrom extends Component {
    render() {
        return (
            <div>
                <form onSubmit={this.props.handleSubmit}>
                    <input type="text"
                        placeholder="Please enter a city name..."
                        onChange={this.props.handleLocation}
                        id={"submitField"}
                    />
                    <input id={"submitBtn"} type="submit" value="Explore!" />
                </form> 
            </div>
        )
    }
}

export default SerachFrom
