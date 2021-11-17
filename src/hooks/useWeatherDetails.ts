import { useEffect, useState } from 'react'

const useWeatherDetails = ({ lat, lng }: { lat?: number; lng?: number }) => {
  const [details, setDetails] = useState()
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const getWeatherDetails = async () => {
    setIsLoading(true)
    try {
      const data = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=18baad81a4b858e213e76aebae55ed74&units=metric`,
        { method: 'GET' }
      )
      setDetails(await data.json())
    } catch (err) {
      console.error(err)
    }
    setIsLoading(false)
  }
  useEffect(() => {
    getWeatherDetails()
  }, [lat, lng])
  return {
    details,
    isLoading,
  }
}

export default useWeatherDetails
