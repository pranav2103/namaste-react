import RestaurantCard from "./RestaurantCard"
import { useEffect, useState } from "react"
import Shimmer from "./Shimmer"
import { Link } from "react-router-dom"
import useOnlineStatus from "../utils/useOnlineStatus"

const Body = () => {
  // as of now this let listofRest is a normal JS variable
  // now we have to make this super power power react variable
  // called as State variable- for that we use hooks known as Use State.
  // A react hook is a normal JS function which is prebuilt by react - that function has super powers - utility functions
  // it mantains state of the component
  // scope of this listofRest is inside this BODY component
  // we pass over the default value in usestate
  //function comes as a second parameter in the array which suggests modification in the const
  //Always try to use use state hooks on the top , because the code works line to line
  //Never use use state outside Components
  // never create a use state under conditional statements (if,else)-> it can create inconsistency over program
  const [listofRest, setListofRest] = useState([])
  //state variable to maintain a filtered list of rest , a copy so that search works on all data not on a filtered list that we are mantianing the actual data as it is
  const [filteredRestaurant, setfilteredRestaurant] = useState([])
  const [searchText, setSearchText] = useState("")
  //Use effect will 2 Arguments
  // first argument is a call back function ()=>{} and second argument is a dependency array
  // when will this call back function be called?
  // ans- theis callback function will be called after the component renders
  // here in this body component , the callback fnc is called after the body component is rendered
  // page loads-> render -> api -> re-render
  // so body has been rendered -> now api call
  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.5953246&lng=77.3118642&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING",
    )
    // this fetch will return a promise which needs to be resolved and you can use async await

    const json = await data.json()
    console.log(json)
    //optional chaining in js usage to make it readable
    setListofRest(
      json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants,
    )
    setfilteredRestaurant(
      json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants,
    )
  }

  const onlineStatus = useOnlineStatus()
  if (onlineStatus == false)
    return <h1>Looks like you are offline , please check your internet </h1>

  // now re-render components using new data recd from API
  // we will put that data into listofRest , and will update the UI with new data

  // if empty list then render loader
  // add shimmer UI here
  // conditional rendering
  // if(listofRest.length==0){
  //   return <Shimmer />;
  // }
  //added turnery operator for the above commented code -> conditional rendering

  return listofRest.length == 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value)
            }}
          ></input>
          <button
            onClick={() => {
              //filter the retaurant cards and update the UI
              // Will need search text to filter
              //bind the value of the input box , we need local state variable
              console.log(searchText)
              filteredlistrest = listofRest.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase()),
              )
              setfilteredRestaurant(filteredlistrest)
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            // filter logic here
            // ui will render what we will pass to map function
            // so change data conditonally
            // using filter function

            filteredList = listofRest.filter((res) => res.info.avgRating > 4.2)
            //definfing setlist ofrest using react hook
            setfilteredRestaurant(filteredList)
            console.log(listofRest)
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {/*javascript map function to loop for looping */}
        {filteredRestaurant.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurants/" + restaurant.info.id}
          >
            <RestaurantCard resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Body
