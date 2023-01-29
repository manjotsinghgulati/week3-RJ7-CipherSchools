import React, {Component} from "react";

// const UserDetails = ({user = {} }) => {
//     return (
//         <div>
//             <h3>{user.name}</h3>
//             <h3>{user.email}</h3>
//             <h3>{user.phone}</h3>
//         </div>

//     )

// }

class UserDetails extends Component {
    user = this.props.user;
    render() {
        return (
            <div>
                <h3>{this.user.name}</h3>
                <h3>{this.user.email}</h3>
                <h3>{this.user.phone}</h3>
            </div>
        )
    }
}

export default UserDetails;