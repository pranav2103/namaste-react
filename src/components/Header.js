import { useEffect, useState } from "react"
import { LOGO_URL } from "../utils/constants"
import { Link } from "react-router-dom"
import useOnlineStatus from "../utils/useOnlineStatus"

const Header = () => {
  const [btnNameReact, setbtnNameReact] = useState("login")
  const onlineStatus = useOnlineStatus()

  //whenever the state variable will change using set function , react will re-render the component and all the updated values will be there.
  //normal js variables value cannot get updated runtime , they only take one state value

  //if we dont put dependency array in use effect hook =>it will be called AFTER every render
  //if dependency array is empty=> it is called on ONLY INITIAL RENDER AND JUST ONCE when component is rendered for the first time
  // if dependency array is not empty=> then it will only be called EVERYTIME when that dependency changes like [btnnamereact] is updated and after initial render

  useEffect(() => {
    console.log("use effect called")
  }, [btnNameReact])

  return (
    <div className="header">
      <div className="logo_container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>
            Online Status :
            {onlineStatus ? <span>green</span> : <span>red</span>}
          </li>
          <li>
            <Link to="/">Home</Link>
          </li>

          {/* do not use a href for routing as it re-loads the whole page  */}
          {/* instead use link library from react router dom , LINK COMPONENT */}
          {/* <a href="/about">About us </a> */}
          {/* That is why React applications are called SINGLE PAGE APPLICATION-> because only interchange of components are happening and not whole page is reloading */}

          <li>
            <Link to="/about">About us </Link>
          </li>
          <li>
            <Link to="/contact">Contact us</Link>
          </li>
          <li>
            <Link to="/grocery">Grocery</Link>
          </li>
          <li>Cart</li>
          <button
            className="login"
            onClick={() => {
              btnNameReact == "Login"
                ? setbtnNameReact("Logout")
                : setbtnNameReact("Login")
            }}
          >
            {btnNameReact}
          </button>
        </ul>
      </div>
    </div>
  )
}

export default Header
