// this is a custom hook implementation for restaurant menu .js file
// which is in charge of getting data

import { useEffect, useState } from "react"
import { MENU_API } from "./constants"

const useRestaurantMenu = (resId) => {
  //custom hook is just a normal js func
  //whose job is to return resInfo
  //fetch data logic here
  const [resInfo, setResInfo] = useState(null)

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    const data = await fetch(MENU_API + resId)
    const json = await data.json()
    setResInfo(json.data)
  }
  return resInfo
}

export default useRestaurantMenu
