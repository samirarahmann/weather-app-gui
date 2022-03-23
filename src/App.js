// Calls Quote and Traning Location Search Bar
// Code for weekly forecast included

import React, {useState, useEffect} from 'react';
import axios from "axios";
import './App.css';
import Quote from './components/Quote';
import TrainingLocationSearch from './components/TrainingLocationSearch';

class App extends React.Component 
{
  state = 
  {
    coords : 
    {
      latitude:0,
      longitude:0
    },
    cityinfo:
    {

<<<<<<< HEAD
      city: '',
      country:''
    },
    info:
    {
      currTemp : '',
      currHumid : '',
      currWind : '',
      currVisibility : '',
      currDesc : '',
      currIcon : '',
      dailyday : [],
      dailyTemp : [],
      dailyHumid : [],
      dailyWind : [],
      dailyIcon : []
=======

  const savePositionToState = (position) => {
    setLatitude(position.coords.latitude);
    setLongitude(position.coords.longitude);
  };

  const fetchWeather = async () => {
    try {
      await window.navigator.geolocation.getCurrentPosition(
        savePositionToState
      );
      const res = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=60d505bb48f9c02e8d1f29a621cd125f&units=metric`
      );
      setTemperature(res.data.main.temp);
      setCityName(res.data.name);
      setWeather(res.data.weather[0].main);
      setHumidity(res.data.main.humidity);
      setWindSpeed(res.data.wind.speed);
      setVisibility(res.data.visibility);
      console.log(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchWeather();
  }, [latitude, longitude]);



  const search_the_area = press => {
    if (press.key === "Enter") {
      fetch(`${liveweather.base}weather?q=${query}&units=metric&APPID=${liveweather.key}`)
        .then(res => res.json())
        .then(output => {
          anyweather(output);
          queryset('Location you searched....');
          console.log(output);
        });
>>>>>>> 6b1ba9e02662587cc30526073a3d533804973cf0
    }
  }

  componentDidMount()
  {
    if(navigator.geolocation)
    {
      navigator.geolocation.getCurrentPosition((pos)=> 
      {
        let curPos = 
        {
          latitude : pos.coords.latitude,
          longitude : pos.coords.longitude
        }
        this.setState({coords:curPos});

        axios.get(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${this.state.coords.latitude}&longitude=${this.state.coords.longitude}&localityLanguage=en`).then(cityresponse => 
        {
          let cinfo = 
          {
            city : cityresponse.data.city,
            country : cityresponse.data.countryName
          }

          this.setState({ cityinfo : cinfo});
        })

        axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${this.state.coords.latitude}&lon=${this.state.coords.longitude}&cnt=7&exclude=hourly,minutely&appid=a46356085ca4d46617dbe82f8f470bab`).then(response => 
        {
          console.log(response);
          let weeklyWeat = 
          {
            currTemp : response.data.current.temp,
            currHumid : response.data.current.humidity,
            currWind : response.data.current.wind_speed,
            currVisibility : response.data.current.visibility,
            currDesc : response.data.current.weather[0].description,
            currIcon : `http://openweathermap.org/img/wn/${response.data.current.weather[0].icon}.png`,
            dailyTemp : [],
            dailyHumid : [],
            dailyWind : [],
            dailyIcon : []
          }

          for (let i = 0; i < 7; i++) 
          {
            weeklyWeat.dailyTemp[i] = Math.round(response.data.daily[i+1].temp.day - 273.15);
            weeklyWeat.dailyHumid[i] = response.data.daily[i+1].humidity;
            weeklyWeat.dailyWind[i] = response.data.daily[i+1].wind_speed;
            weeklyWeat.dailyIcon[i] = `http://openweathermap.org/img/wn/${response.data.daily[i+1].weather[0].icon}.png`;
          }
          console.log(weeklyWeat);

          this.setState({ info : weeklyWeat});
        })
      })
    }
  }

  render() 
  {
    let cTemp = this.state.info.currTemp - 273.15;
    cTemp = Math.round(cTemp);
    let ftemp = (this.state.info.currTemp - 273.15) * 9/5 + 32;
    ftemp = Math.round(ftemp);

<<<<<<< HEAD
    console.log(this.state.info.dailyday)
    console.log(this.state.info.dailyIcon);
    console.log(this.state.info.dailyHumid);
    console.log(this.state.info.dailyTemp);
    console.log(this.state.info.dailyWind);

    const daysWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const d = new Date();
    let m = d.getMonth() + 1;
    let y = d.getFullYear();
    let date = d.getDate();
    let i = d.getDay(); //1
    let dailyday = [];
    let j = 0;
=======
  return (  
     
      <div className="app">
      <main>
        <div main_screen_container="home_page" >
        <div class = "container">
        <div className='CurrentLocation'>
          <div><h1>{cityName}</h1></div>
        </div></div>
>>>>>>> 6b1ba9e02662587cc30526073a3d533804973cf0

    while(j < 7)
    {
      dailyday[j] = daysWeek[i]; //mon, tue, wed, thur, fri, sat

<<<<<<< HEAD
      if(i == 6)
      {
        i = 0;
        j++;
      }
      else
      {
        j++; // 1, 2, 3, 4, 5
        i++; // 2, 3, 4, 5, 6
      }
    }
    
    return (
      <div class = "week">
        <Quote />
=======
        {/* <div className='windSpeed'>
          <div><p>wind speed</p></div>
        </div>

        <div className="app_container" id="main_screen">
        <div className='CurrentWeather'>
          <div>Temp</div> <br/>
            <div>{temperature}ºC</div> <br/>
          <div>Current Weather</div> <br/>
            <div>{weather}ºC</div>
        </div>
      </div> */}

           
      
        
          <div class = "grid container"> 
            <div class = "item"> 
              
              <h4>
                Current Location
                
              </h4>

              <div> {cityName} </div>

              
              
            
            
              </div>
        
       
       
        <div class ="grid container" >
          <div class = "item"> 
            <h4>
              Temperature
            </h4>
          <div>{temperature}ºC</div>

          
          </div>
          </div>
          
        
        
        
          <div class = "grid container"> 
            <div class = "item">
        <h4>Weather</h4>
            <div>{weather}</div>
            </div>
            </div>
        
        
        
        
            <div class = "grid container"> 
            <div class = "item">
        <h4>Humidity</h4>
            <div>{humidity}</div>
            </div>
            </div>
        
        
        
            <div class = "grid container"> 
            <div class = "item"> 
        <h4>Wind Speed</h4>
            <div>{windspeed}</div>
            </div>
            </div>
            
        
        
            <div class = "grid container"> 
            <div class = "item"> 
        <h4>Visibility</h4>
            <div>{visibility}</div>
            </div>
            </div>
        
        
        
            <div class = "grid container"> 
            <div class = "item"> 
          <h4>Time</h4>
        <div className="date1">{time_date(new Date())}</div>
        </div>
      </div>
      </div>

      {/* <div className="CurrentLocation" id="CurrentLocation">
              <div>Current Location</div>
                <div>{cityName}</div>
            </div>
            <div className='CurrentTemperature'id="CurrentTemperature">
              <div>Current Temperature</div>
                <div>{temperature}ºC</div>
            </div>
            <div className='CurrentWeather' id="CurrentWeather">
              <div>Current Weather</div>
                <div>{weather}</div>
            </div>
            <div className='CurrentDate' id="CurrentDate">
              <div>Current Date</div>
                <div className="date1">{time_date(new Date())}</div>
            </div> */}
      
    
        </div>

       
       
        <div className="search_react">
          <input 
            
            type="text"
            className="search_bar"
            placeholder="Your training location?"
            onChange={e => queryset(e.target.value)}
            value={query}
            onKeyPress={search_the_area}
          />
        </div>
        

        {(typeof weather1.main != "undefined") ? (
>>>>>>> 6b1ba9e02662587cc30526073a3d533804973cf0
        <div>
          <p id = "city">{this.state.cityinfo.city}</p>
          <p id = "country">{this.state.cityinfo.country}</p>
          <p id = "Day">{dailyday[0]},  {date}.{m}.{y}</p>
        </div>

        <table class = "first">
          <tr>
            <th id = "currIcon"><img id = "currIcon" src={this.state.info.currIcon} alt="curImage"></img></th>
            <th>
              <tr id = "temp">{cTemp} °C</tr>
              <tr id = "temp">{ftemp} °F</tr>
              <tr id = "detail">{this.state.info.currDesc}</tr>
              <tr id = "det">Visibility : {this.state.info.currVisibility}</tr>
              <tr id = "det">Wind : {this.state.info.currWind}</tr>
              <tr id = "det">Humidity : {this.state.info.currHumid}</tr>
            </th>
          </tr>
        </table>

        <p>Hourly Forecast</p>

        <p>Weekly Forecast</p>

        <table class = "rest">
          <tr>
            <th id = "currIcon"><img id = "currIcon" src={this.state.info.dailyIcon[1]} alt="curImage"></img></th>
            <th id = "sub">
              <tr id = "Day">{dailyday[1]}</tr>
              <span id = "temp">{this.state.info.dailyTemp[1]} °C</span>
              <tr id = "det">Wind : {this.state.info.dailyWind[1]}</tr>
              <tr id = "det">Humidity : {this.state.info.dailyHumid[1]}</tr>
            </th>
          </tr>
          <tr>
            <th id = "currIcon"><img id = "currIcon" src={this.state.info.dailyIcon[2]} alt="curImage"></img></th>
            <th id = "sub">
              <tr id = "Day">{dailyday[2]}</tr>
              <span id = "temp">{this.state.info.dailyTemp[2]} °C</span>
              <tr id = "det">Wind : {this.state.info.dailyWind[2]}</tr>
              <tr id = "det">Humidity : {this.state.info.dailyHumid[2]}</tr>
            </th>
          </tr>
          <tr>
            <th id = "currIcon"><img id = "currIcon" src={this.state.info.dailyIcon[3]} alt="curImage"></img></th>
            <th id = "sub">
              <tr id = "Day">{dailyday[3]}</tr>
              <span id = "temp">{this.state.info.dailyTemp[3]} °C</span>
              <tr id = "det">Wind : {this.state.info.dailyWind[3]}</tr>
              <tr id = "det">Humidity : {this.state.info.dailyHumid[3]}</tr>
            </th>
          </tr>
          <tr>
            <th id = "currIcon"><img id = "currIcon" src={this.state.info.dailyIcon[4]} alt="curImage"></img></th>
            <th id = "sub">
              <tr id = "Day">{dailyday[4]}</tr>
              <span id = "temp">{this.state.info.dailyTemp[4]} °C</span>
              <tr id = "det">Wind : {this.state.info.dailyWind[4]}</tr>
              <tr id = "det">Humidity : {this.state.info.dailyHumid[4]}</tr>
            </th>
          </tr>
          <tr>
            <th id = "currIcon"><img id = "currIcon" src={this.state.info.dailyIcon[5]} alt="curImage"></img></th>
            <th id = "sub">
              <tr id = "Day">{dailyday[5]}</tr>
              <span id = "temp">{this.state.info.dailyTemp[5]} °C</span>
              <tr id = "det">Wind : {this.state.info.dailyWind[5]}</tr>
              <tr id = "det">Humidity : {this.state.info.dailyHumid[5]}</tr>
            </th>
          </tr>
          <tr>
            <th id = "currIcon"><img id = "currIcon" src={this.state.info.dailyIcon[6]} alt="curImage"></img></th>
            <th id = "sub">
              <tr id = "Day">{dailyday[6]}</tr>
              <span id = "temp">{this.state.info.dailyTemp[6]} °C</span>
              <tr id = "det">Wind : {this.state.info.dailyWind[6]}</tr>
              <tr id = "det">Humidity : {this.state.info.dailyHumid[6]}</tr>
            </th>
          </tr>
        </table>
        <div><TrainingLocationSearch /></div>
      </div>
    );
  }
}
 
export default App;
