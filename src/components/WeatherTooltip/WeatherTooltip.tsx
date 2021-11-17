import React from 'react'
import { Country } from '../CountriesList/CountriesListItem'
import './WeatherTooltip.scss'

const Tooltip = ({ country, weather }: { country: Country; weather: any }) => {
  const { numeric } = country
  console.log(weather)
  return (
    <div id={`tooltip-${numeric}`}>
      <div className="tooltip-row">
        <div className="tooltip-row__param">Country:</div>
        <div className="tooltip-row__value">{country.country}</div>
      </div>
      <div className="tooltip-row">
        <div className="tooltip-row__param">Temp:</div>
        <div className="tooltip-row__value">{weather?.main?.temp}</div>
      </div>
      <div className="tooltip-row">
        <div className="tooltip-row__param">Temp min:</div>
        <div className="tooltip-row__value"> {weather?.main?.temp_min}</div>
      </div>
      <div className="tooltip-row">
        <div className="tooltip-row__param">Temp max:</div>
        <div className="tooltip-row__value"> {weather?.main?.temp_max}</div>
      </div>
      <div className="tooltip-row">
        <div className="tooltip-row__param">Humidity:</div>
        <div className="tooltip-row__value">{weather?.main?.humidity}</div>
      </div>
      <div className="tooltip-row">
        <div className="tooltip-row__param">Feels like:</div>
        <div className="tooltip-row__value"> {weather?.main?.feels_like}</div>
      </div>
    </div>
  )
}

export default Tooltip
