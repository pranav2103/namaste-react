import React from "react"
import UserClass from "./UserClass"

class About extends React.Component {
  constructor(props) {
    super(props)
  }

  async componentDidMount() {}

  render() {
    return (
      <div>
        <h1>AboutClass component</h1>
        <h2> This is namaste React web series</h2>
        <UserClass />
      </div>
    )
  }
}

export default About
