import React from 'react';
import './Test.css';
import PropTypes from "prop-types"

const Test = ({ name = "", setName }) => {
    return (
        <div>
            <h1>The name is: {name}</h1>
            <input type="text" onChange={(e) => setName(e.target.value)} />
            {/* <button onClick={(e) => setName("Manjot Singh")}>Change Name</button> */}
        </div>
    );
}

// class Test extends React.Component {
//     state = {isLoggedIn: false};
//     render() {
//         return (
//             <div>{
//                 !this.state.isLoggedIn 
//                 ? (<h1>Logged Out</h1>) 
//                 : (<h1>Logged In</h1>)
//             }
//             <button onClick={(e) => this.setState({isLoggedIn: true})}>Login</button>
//             </div>
//         );
//     }
// }

Test.propTypes = {
    name: PropTypes.string,
    setName: PropTypes.func,
}

export default Test;