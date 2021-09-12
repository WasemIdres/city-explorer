import React, { Component } from 'react'
import Location from './components/Location';
import SearchForm from './components/SearchForm';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      city_name: "",
      type: "",
      lat: "",
      lon: "",
      showData: false
    }
  }
  handleLocation = (e) => {
    let city_name = e.target.value;
    this.setState({
      city_name: city_name
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    let config = {
      method: "GET",
      baseURL: `https://api.locationiq.com/v1/autocomplete.php?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&q=${this.state.city_name}`
    }
    axios(config).then(res => {
      console.log(res.data)
      let reponseData=res.data[0];
      this.setState({
        city_name:reponseData.display_name,
        lon: reponseData.lon,
        lat: reponseData.lat,
        showData:true, 
      })
    })
  }
  render() {
    return (
      <div>
        <h1>Welcome to City explorer</h1>
        <SearchForm handleLocation={this.handleLocation} handleSubmit={this.handleSubmit} />
        {
          this.state.showData &&
          <Location city_name={this.state.city_name}
            type={this.state.type}
            lat={this.state.lat}
            lon={this.state.lon}
          />
        }
      </div>
    )
  }
}

export default App
