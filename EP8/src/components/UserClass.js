import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    console.log("Child constructor Called"); //3
    super(props);

    this.state = {
      userInfo: { 
        name: "Default Name", 
        location: "default Location", 
        login: "default login" 
      },
    };
  }

  async componentDidMount() {
    console.log("Child Component Mounted"); //5

    try {
      const data = await fetch("https://api.github.com/users/sickCoder6184");
      const json = await data.json(); // ✅ Added await
      console.log(json);

      this.setState({ // ✅ Using setState instead of direct mutation
        userInfo: json,
      });
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  }

  render() {
    console.log("Child render called"); //4

    // ✅ Correct destructuring from userInfo
    const { name, location, login,avatar_url } = this.state.userInfo;

    return (
      <div className="user-card">
        <img src={avatar_url}></img>
        <h2>Name: {name}</h2>

        <h3>Location: {location || "Not specified"}</h3>
        <h3>Contact: {login}</h3>

      
      </div>
    );
  }
}



export default UserClass;
