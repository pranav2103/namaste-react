import { useEffect, useState } from "react"

const useOnlineStatus = () => {
  const [onlineStatus, setOnlineStatus] = useState(true)

  //check if online

  useEffect(() => {
    window.addEventListener("offline", (event) => {
      setOnlineStatus(false)
    })
    window.addEventListener("online", (event) => {
      setOnlineStatus(true)
    })
  }, [])

  //return is boolean
  return onlineStatus
}

export default useOnlineStatus
