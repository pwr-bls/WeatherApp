import React from 'react'

import useCountries from '../../hooks/useCountries'
import CountriesListItem, { Country } from './CountriesListItem'
import './CountriesList.scss'

const CountriesList = ({
  onClick,
}: {
  onClick: (country: Country) => void
}) => {
  const { countries } = useCountries()
  return (
    <div className="coutriesListContainer">
      <h1>CountriesList</h1>
      <div className="countriesList">
        {countries.map((country, index) => (
          <CountriesListItem
            key={`country-item-${index}`}
            country={country}
            onClick={() => onClick && onClick(country)}
          />
        ))}
      </div>
    </div>
  )
}
export default CountriesList
