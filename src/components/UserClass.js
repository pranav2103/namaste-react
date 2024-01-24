import React from "react"

class UserClass extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      userInfo: {
        login: "Dummy Name",
        followers: "Default Number",
        avatar_url: null,
      },
    }
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/PRANAV2103")
    const json = await data.json()
    this.setState({
      userInfo: json,
    })
  }

  componentDidUpdate() {
    //called at the end
  }

  render() {
    const { login, followers, avatar_url } = this.state.userInfo

    return (
      <div className="user-card">
        <h2>Name:{login}</h2>
        <h3>Followers : {followers}</h3>
        <h4>Contact : @pranav2103</h4>
        <img src={avatar_url}></img>
      </div>
    )
  }
}

export default UserClass
