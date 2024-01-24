import { useEffect, useState } from "react"
import Shimmer from "./Shimmer"
import { useParams } from "react-router-dom"
import { MENU_API } from "../utils/constants"
import useRestaurantMenu from "../utils/useRestaurantMenu"

//restaurant menu should only focus on displaying the data rather than getting the data
//to improve modularity ,clarity , usability , testibility

const RestaurantMenu = () => {
  //const [resInfo, setResInfo] = useState(null)
  //removed the above for modularity and creating a custom hook in utils folder
  const { resId } = useParams()

  //custom hook -> use restaurant menu ook so that this component will not care on how it is getting data it is just concerned
  // about displaying restaurant menu over UI making the code cleaner

  //   useEffect(() => {
  //     fetchMenu()
  //   }, [])

  //   const fetchMenu = async () => {
  //     const data = await fetch(MENU_API + resId)

  //     const json = await data.json()
  //     console.log(json)
  //     setResInfo(json.data)
  //   }

  //so creating a custom hook which will take resID as input param which leads to commenting above code
  // custom hooks are basically helper functions
  //create in utils folder and crete seperate files for separate hooks
  const resInfo = useRestaurantMenu(resId)

  if (resInfo == null) return <Shimmer />

  const { name, cuisines, costForTwoMessage } = resInfo.cards[0].card.card.info

  const { itemCards } =
    resInfo.cards[2].groupedCard.cardGroupMap.REGULAR.cards[4].card.card

  return (
    <div className="menu">
      <h1>{name}</h1>
      <h3>{cuisines.join(",")}</h3>
      <h3>{costForTwoMessage}</h3>
      <ul>
        {itemCards.map((item) => (
          <li key={item.card.info.id}>{item.card.info.name}</li>
        ))}
      </ul>
    </div>
  )
}
export default RestaurantMenu
