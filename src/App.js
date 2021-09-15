import React, { Component } from 'react'
import Location from './components/Location';
import SearchForm from './components/SearchForm';
import Weather from './components/Weather';
import axios from 'axios';
import style from './components/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Movies from './components/Movies';
import {
  Alert,
} from 'react-bootstrap'
export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      city_name: "",
      name: "",
      type: "",
      lat: "",
      lon: "",
      zoom: "",
      img: "",
      error: "",
      error2: "",
      error3: "",
      showData: false,
      errHandle: false,
      errHandle2: false,
      errHandle3: false,
      foreCast: [],
      movieList: [],
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
    this.setState({ name: this.state.city_name })
    let config = {
      method: "GET",
      baseURL: `https://api.locationiq.com/v1/autocomplete.php?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&
      q=${this.state.city_name}`
    }
    axios(config).then(res => {
      let reponseData = res.data[0];
      this.setState({

        city_name: reponseData.display_name,
        lon: reponseData.lon,
        lat: reponseData.lat,
        showData: true,
      })
      let map = {
        method: "GET",
        baseURL: `https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&
        center=${this.state.lat},${this.state.lon}&zoom=1-18`
      }
      axios(map).then(res => {
        let reponseData = res.config.baseURL;
        this.setState({
          img: reponseData,
        })
      })
    }).catch(err => { this.setState({ error: err.toString(), errHandle: true }) }).then(() =>
      axios.get(`${process.env.REACT_APP_BACKEND_URL}weather?lat=${this.state.lat}&lon=${this.state.lon}`))
      .then(res => {
        console.log(res.data)
        this.setState({
          foreCast: res.data,
        })
      }).catch(err => this.setState({ error2: err.toString(), errHandle2: true })).then(() =>
        axios.get(`${process.env.REACT_APP_BACKEND_URL}movies?query=${this.state.name}`))
      .then(res => {
        console.log(res.data)
        this.setState({
          movieList: res.data,
        })
      }).catch(err => { this.setState({ error3: err.toString(), errHandle3: true }) })
  }
  render() {
    return (
      <div className="mainDiv">
        <h1 className="headerTxt">Welcome to City explorer</h1>
        <SearchForm handleLocation={this.handleLocation} handleSubmit={this.handleSubmit} />
        <Location city_name={this.state.city_name}
          type={this.state.type}
          lat={this.state.lat}
          lon={this.state.lon}
          img={this.state.img}
          showData={this.state.showData}
        />
        {
          this.state.showData&&<Weather
          foreCast={this.state.foreCast}
        />
        }

        <Movies movieList={this.state.movieList} />
        {
          this.state.errHandle && <Alert style={{ marginTop: "15px" }} >
            {this.state.error}
          </Alert>
        }
        {
          this.state.errHandle2 && <Alert  >
            {this.state.error2}
          </Alert>
        }
        {
          this.state.errHandle3 && <Alert  >
            {this.state.error3}
          </Alert>
        }
      </div>
    )
  }
}

export default App
