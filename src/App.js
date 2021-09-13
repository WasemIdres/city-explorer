import React, { Component } from 'react'
import Location from './components/Location';
import SearchForm from './components/SearchForm';
import Weather from './components/Weather';
import axios from 'axios';
import style from './components/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Alert,
} from 'react-bootstrap'

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      city_name: "",
      type: "",
      lat: "",
      lon: "",
      zoom:"",
      img:"",
      error:"",
      error2:"",
      showData: false,
      errHandle:false,
      errHandle2:false,
      city_name:"",
      foreCast:[],
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
      let reponseData=res.data[0];
      this.setState({
        
        city_name:reponseData.display_name,
        lon: reponseData.lon,
        lat: reponseData.lat,
        showData:true, 
      })

      let map ={
        method: "GET",
        baseURL: `https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&center=${this.state.lat},${this.state.lon}&zoom=1-18`
      }
      axios(map).then(res=>{
        let reponseData=res.config.baseURL;
        this.setState({
          img:reponseData,
      })
      })
    }).catch(err => {  this.setState({error:err.toString() , errHandle:true}) }).then(()=>
    axios.get(`http://${process.env.REACT_APP_BACKEND_URL}/weather?lat=${this.state.lat}&lon=${this.state.lon}`))
    .then(res=>{
      console.log(res.data)
      this.setState({
        city_name:res.data.cityName,
        foreCast:res.data.foreCast,
    })
    }).catch(err =>   this.setState({error2:err.toString() , errHandle2:true})  )
    
  }
  render() {
    return (
      <div className="mainDiv">
        <h1 className="headerTxt">Welcome to City explorer</h1>
        <SearchForm handleLocation={this.handleLocation} handleSubmit={this.handleSubmit} />
        {
         this.state.showData && <Location city_name={this.state.city_name}
            type={this.state.type}
            lat={this.state.lat}
            lon={this.state.lon}
            img={this.state.img}
          />
       }
        {
           this.state.showData &&<Weather
          city_name={this.state.city_name}
          foreCast={this.state.foreCast}
        />
      }
        
            
          
        {
        this.state.errHandle&&<Alert style={{marginTop:"15px"}} >
                {this.state.error}
                </Alert>
  }
  {
        this.state.errHandle2&&<Alert  >
                {this.state.error2}
                </Alert>
  }
      </div>
    )
  }
}

export default App
