import React, { useState } from 'react'
import './App.scss'
import CountriesList from './components/CountriesList/CountriesList'
import Map from './components/Map/Map'
import { Country } from './components/CountriesList/CountriesListItem'

const App = () => {
  const [country, setCountry] = useState<Country | null>(null)
  const handleClick = (country: Country) => {
    setCountry(country)
  }
  return (
    <>
      <CountriesList onClick={handleClick} />
      <Map country={country} />
    </>
  )
}

export default App
