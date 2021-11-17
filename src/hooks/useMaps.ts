import mapboxgl, { Map } from 'mapbox-gl'
import { useEffect, useState } from 'react'

mapboxgl.accessToken =
  'pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4M29iazA2Z2gycXA4N2pmbDZmangifQ.-g_vE53SD2WrJ6tFX7QHmA'

const useMaps = (mapContainerRef: any) => {
  const [map, setMap] = useState<Map | null>(null)

  useEffect(() => {
    if (!mapContainerRef || !mapContainerRef.current) {
      return () => {}
    }

    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [20, 52],
      zoom: 5,
    })

    // Add navigation control (the +/- zoom buttons)
    map.addControl(new mapboxgl.NavigationControl(), 'top-right')

    setMap(map)

    // Clean up on unmount
    return () => map && map.remove()
  }, [mapContainerRef])
  return {
    map,
  }
}

export default useMaps
