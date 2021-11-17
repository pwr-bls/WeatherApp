import React, { useEffect, useRef, useState } from 'react'
import ReactDOM from 'react-dom'
import './Map.scss'
import useMaps from '../../hooks/useMaps'
import mapboxgl, { Marker } from 'mapbox-gl'
import useWeatherDetails from '../../hooks/useWeatherDetails'
import Tooltip from '../WeatherTooltip/WeatherTooltip'
import { Country } from '../CountriesList/CountriesListItem'

const Map = (props: { country: Country | null }) => {
  const mapContainerRef = useRef(null)
  const tooltipRef = useRef(new mapboxgl.Popup({ offset: 15 }))
  const { map } = useMaps(mapContainerRef)
  const [marker, setMarker] = useState<Marker | null>(null)
  const { details } = useWeatherDetails({
    lng: props.country?.longitude,
    lat: props.country?.latitude,
  })

  console.log('details', details)
  // Initialize map when component mounts
  useEffect(() => {
    if (!map) {
      return
    }

    map.on('mouseenter', (e) => {
      if (e.features.length) {
        map.getCanvas().style.cursor = 'pointer'
      }
    })

    // reset cursor to default when user is no longer hovering over a clickable feature
    map.on('mouseleave', () => {
      map.getCanvas().style.cursor = ''
    })
  }, [map]) // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (!map || !props.country) {
      return
    }

    map?.jumpTo({
      center: [props.country.longitude, props.country.latitude],
      zoom: 5,
    })
    map?.setPitch(30)
    if (marker) {
      marker.remove()
    }
    setMarker(
      new mapboxgl.Marker()
        .setLngLat([props.country.longitude, props.country.latitude])
        .addTo(map)
    )
  }, [props])

  useEffect(() => {
    if (!details || !map || !props.country) {
      return
    }
    // Create tooltip node
    const tooltipNode = document.createElement('div')
    if (!details) {
      return
    }
    ReactDOM.render(
      <Tooltip country={props.country} weather={details} />,
      tooltipNode
    )

    // Set tooltip on map
    tooltipRef.current
      .setLngLat([props.country.longitude, props.country.latitude])
      .setDOMContent(tooltipNode)
      .addTo(map)
  }, [details, map, props])

  return (
    <div>
      <div className="sidebarStyle">
        <div>
          Longitude: {props.country?.longitude} | Latitude:{' '}
          {props.country?.latitude}
        </div>
      </div>
      <div className="map-container" ref={mapContainerRef} />
    </div>
  )
}

export default Map
