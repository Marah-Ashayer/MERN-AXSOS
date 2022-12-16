import React, { Component } from 'react';
    
    
class SomeClassComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            increament:this.props.age
        };
    }
    render() {
        const { firstName, lastName , age, hairColor} = this.props;
        return (
            <>
            <h3> { firstName} , { lastName}</h3>
            <p>Age : {this.state.increament}</p>
            <p>Hair Color : {hairColor}</p>
            <button onClick={ () => { this.setState({ increament: this.state.increament+1 }) } }>Birthday Button for  { firstName}  { lastName} </button>
            </>

        );
    }
}
    
export default SomeClassComponent;
