import React, { useState,useEffect } from 'react';
import './TrainingLocationSearch.css';
import axios from "axios";
const liveweather = {
  key: "4ac7d2859ab7a6c64fc946c11274149f",
  base: "https://api.openweathermap.org/data/2.5/"
}

function TrainingLocationSearch() {
  const [query, queryset] = useState('');
  const [weather1, anyweather] = useState({});
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);
  const [weather, setWeather] = useState("");
  const [temperature, setTemperature] = useState(0);
  const [cityName, setCityName] = useState("");
  const [humidity, setHumidity] = useState(0);
  const [visibility, setVisibility] = useState(0);
  const [windspeed, setWindSpeed] = useState(0);

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
      console.log(res.data);
      setHumidity(res.data.main.humidity);
      setWindSpeed(res.data.wind.speed);
      setVisibility(res.data.visibility);
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
    }
  }
  const time_date = (d) => {
    
    
    let number = d.getDate();
    let month = d.getMonth();
    let period  = d.getFullYear();

    return `${number} - ${month + 1} - ${period}`
  }
  return (   
    <div className={(typeof weather1.main != "undefined") ? ((weather1.main.temp > 18) ? 'app warm' : 'app') : 'app'}>
      <main>
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
        <div>
        <div className="location_react">
          <div className="location">{weather1.name}, {weather1.sys.country}</div>
          <div className="date">{time_date(new Date())}</div>
          </div>
        <div className = "weather_react">
          <div className="temp">
            {Math.round((weather1.main.temp))}°c
          </div>
          <div className="weather">{weather1.weather[0].main}</div>
        </div>
        
          </div>
  ) : ('')}
        </main>
        </div>   
  );
}


export default TrainingLocationSearch;
