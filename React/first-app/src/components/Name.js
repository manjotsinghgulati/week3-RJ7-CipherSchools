import React, {useState} from "react";

// class Name extends Component {
//     state = {name : "Manjot Singh"}

//     setName(name){
//         this.setState({ ...this.state, name})
//     }

//     render() {
//         return (
//             <>
//                 <h1>My name is {this.state.name}</h1>
//                 <button onClick = {this.setName("Abhay")}>Click Me!</button>
//             </>
//         )
//     }
// }

const Name = () => {
    const[state, setState] = useState({name: "Manjot Singh"})

    let testHandler = () =>{
        console.log("Test Handler")
    }

    let setName = (e) => {
        setState({ ...state, name: "Abhay"})
    }
    return(
        <>
            <h1>My name is {state.name}</h1>
            <button onClick = {setName, testHandler}>Click Me!</button>
        </>

    )
}

export default Name;