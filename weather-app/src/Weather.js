import React, {Component} from 'react'
import {getForecast} from './requests'
import './Weather.css'

class Weather extends Component {
  constructor(props) {
    super(props)
    this.state = {
      forecasts: null
    }
  }

  componentDidMount() {
    getForecast().then(forecasts => {
      this.setState({ forecasts })
    })
  }

  renderWeatherItem(forecast) {
    return (
      <div className="Weather_box">
        <div className="Weather_day">{forecast.dt}</div>
        <div className="Weather_time">{forecast.dt}</div>
        <div className="Weather_temp">{forecast.main.temp}</div>
        <img src={'http://openweathermap.org/img/wn/09d.png'+forecast.weather[0].icon+'.png'} alt="Logo" />
        </div>
    )
  }

  render() {
    const forecasts = this.state.forecasts
    if(!forecasts) return null
    console.log(forecasts)

    const focusedWeather = forecasts.list[0]

    return (
      <div className="Weather">
        <div className="Weather_focused">
          <div className="Weather_day">{focusedWeather.dt}</div>
        <div className="Weather_time">{focusedWeather.dt}</div>
        <div className="Weather_temp">{focusedWeather.main.temp}</div>
        <img src='http://openweathermap.org/img/wn/09d.png' alt="Logo" />
        </div>

          <div className="Weather_forecast">

          { forecasts.list.map(forecast => this.renderWeatherItem(forecast)) }

          </div>

      </div>
    )
  }
}

  export default Weather
