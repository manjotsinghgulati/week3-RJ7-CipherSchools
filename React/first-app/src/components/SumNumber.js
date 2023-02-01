import React, {Component} from "react";



class SumNumber extends Component {
    state = {
        firstNumber: 0,
        secondNumber: 0,
        sum: 0
    };

    setSum = (sum) => {
        this.setState({...this.state, sum: this.state.firstNumber + this.state.secondNumber})
    }

    componentDidUpdate(){
        console.log("Component Updated")
    }

    render(){
        return(
            <>
                <input type="number" value={this.state.firstNumber} onChange={(e) => {
                    this.setState({ ...this.state, firstNumber: parseInt(e.target.value)})
                }
                }/>
                <input type="number" value={this.state.secondNumber} onChange={(e) => {
                    this.setState({ ...this.state, secondNumber: parseInt(e.target.value)})
                }

                }/>
                <h1>Sum is {this.state.firstNumber + this.state.secondNumber}</h1>
            </>
        )

    }
}

export default SumNumber;
