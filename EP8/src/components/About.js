import React from "react";
import UserClass from "./UserClass";

class About extends React.Component {
  constructor(props) {
    super(props);

    console.log("Parrent Const"); //1
    
  }
  //Used to make API CALL
  componentDidMount(){
    console.log("Parrent componentDidMount"); //6
    
  }

  render() {
    console.log("render Parent"); // 2
    
    return (
      <div>
        <h2>This is about Page</h2>

        <UserClass />
      </div>
    );
  }
}
export default About;
