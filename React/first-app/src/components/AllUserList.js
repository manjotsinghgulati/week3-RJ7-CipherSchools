import React, {useState} from "react";
import UserDetails from "./UserDetails";
import Text from "./Test";

// const AllUserList = () =>{

//   const [state, setState] =  useState({
//     name: "Manjot Singh",
//   })
    
//     let allUsers = [
//     {
//       name: "Alex",
//       email: "alex@abc.com",
//       phone: "1234567890",
//     },
//     {
//       name: "Bob",
//       email: "bob@abc.com",
//       phone: "1234567890",
//     },
//     {
//       name: "Cathy",
//       email: "cathy@abc.com",
//       phone: "1234567890",
//     },
//   ];

//   let setStateName = (name) => {
//     setState({...state, name})
//   };

  // let array = allUsers.map((user, index) => {
  //  <UserDetails key = {index} user={user} />;
  // })

//     return (
//         <div>
//             <Text name={state.name} setName={setStateName}/>
//             {allUsers.map((user, index) => (
//             <UserDetails key={index} user={user}/>
//             ))}
//         </div>
//     )
// }


class AllUserList extends React.Component {
  state = {
    name: "Manjot Singh",
  };

  componentDidMount(){
    console.log("Component Mounted")
  }

  setStateName = (name) => {
    this.setState({ ...this.state, name });
  };

  render() {
    let allUsers = [
          {
            name: "Alex",
            email: "alex@abc.com",
            phone: "1234567890",
          },
          {
            name: "Bob",
            email: "bob@abc.com",
            phone: "1234567890",
          },
          {
            name: "Cathy",
            email: "cathy@abc.com",
            phone: "1234567890",
          },
        ];

    return (
      <div>
        <Text name={this.state.name} setName={this.setStateName}/>
            {allUsers.map((user, index) => (
             <UserDetails key={index} user={user}/>
                 ))}
           </div>
      );
  }
}




export default AllUserList;
