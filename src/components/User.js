import { useState } from "react"

const User = (props) => {
  const { name } = props

  const [count, setCount] = useState(0)
  return (
    <div className="user-card">
      <h1>count = {count}</h1>
      <h2>Name:{name}</h2>
      <h3>Location : Delhi</h3>
      <h4>Contact : @pranav2103</h4>
    </div>
  )
}

export default User
