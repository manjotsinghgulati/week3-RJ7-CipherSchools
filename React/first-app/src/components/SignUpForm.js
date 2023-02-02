import React from 'react';

const SignUpForm = () => {
    const [state, setState] = React.useState({
        firstName: '',
        lastName: '',
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setState({
            ...state,
            [name]: value
        });
    };


    return(
        <div>
            <h1>Sign Up</h1>
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    if (isValidUser ({ 
                        firstName: state.firstName, 
                        lastName: state.lastName, 
                        email: state.email, 
                        password: state.password 
                        })
                    )
                    {console.log("User is Valid" ,state);}
                }}

            >
                <label>First Name</label>
                <input 
                name={"firstName"}
                type={"text" }
                placeholder="First Name" 
                value={state.firstName} 
                onChange={handleChange} 
                />

                <label>Last Name</label>
                <input
                name={"lastName"}
                type={"text"}
                placeholder="Last Name"
                value={state.lastName}
                onChange={handleChange}
                />

                <label>Email</label>
                <input
                name={"email"}
                type={"email"}
                placeholder="Email"
                value={state.email}
                onChange={handleChange}
                />

                <label>Password</label>
                <input
                name={"password"}
                type={"password"}
                placeholder="Password"
                value={state.password}
                onChange={handleChange}
                />

                <button type={"submit"}>Sign Up</button>
                
            </form>
        </div>
    )

}

export default SignUpForm;