import React, {useState} from "react";

const UserDetails = ({user = {} }) => {
    const [h1Text, setH1Text] = useState("This is a Demo");
    // user = props.user;
    return (
        <div>
            <h3>{user.name}</h3>
            <h3>{user.email}</h3>
            <h3>{user.phone}</h3>
            <h1>{h1Text}</h1>
                <button onClick = {(e) =>{
                    setH1Text("This is Chipher Schools")
                }} >Click Me </button>
            </div>

    )

}

// class UserDetails extends React.Component {
//     const [h1Text, setH1Text] = useState("This is a Demo");
//     user = this.props.user;
//     render() {
//         return (
//             <div>
//                 <h3>{this.user.name}</h3>
//                 <h3>{this.user.email}</h3>
//                 <h3>{this.user.phone}</h3>
//                 <h1>This is a Demo</h1>
//                 <button onClick = {(e) =>{
//                     console.log(e)
//                 }} >Click Me </button>
//             </div>
//         )
//     }
// }

export default UserDetails;