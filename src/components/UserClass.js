import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "anirudh",
        location: "default",
      },
    };
    
  }
  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/anirudhknarayanan")
    const json = await data.json()
    this.setState({
        userInfo : json
    })
    console.log(json);
    
  }

  render() {
    let { name , location,bio } = this.state.userInfo
    return (
      <div>
        <h1>{name}</h1>
        <h2>location : {location}</h2>
        <p>{bio}</p>
       
      </div>
    );
  }
}
export default UserClass;
