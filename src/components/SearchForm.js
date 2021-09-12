import React, { Component } from 'react'

class SerachFrom extends Component {
    render() {
        return (
            <div>
                <form onSubmit={this.props.handleSubmit}>
                    <input type="text"
                        placeholder="Please enter a city name..."
                        onChange={this.props.handleLocation}
                    />
                    <input type="submit" value="Explore!" />
                </form>
            </div>
        )
    }
}

export default SerachFrom
