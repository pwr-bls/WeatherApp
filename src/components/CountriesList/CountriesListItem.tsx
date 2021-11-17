import React from 'react'
import './CountriesListItem.scss'

export type Country = {
  alpha2: string
  alpha3: string
  country: string
  latitude: number
  longitude: number
  numeric: number
}
type CountriesListItemProps = {
  country: Country
  onClick: () => void
}
const CountriesListItem: React.FC<CountriesListItemProps> = ({
  country,
  onClick,
}) => {
  return (
    <div className="countryItem" onClick={onClick}>
      <span className="countryName">{country.country}</span>
      <span className="coordinates">
        [{country.latitude}, {country.longitude}]
      </span>
    </div>
  )
}

export default CountriesListItem
