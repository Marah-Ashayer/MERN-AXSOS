import React, { Component } from 'react';
    
    
class SomeClassComponent extends Component {
    render() {
        const { firstName, lastName , age, hairColor} = this.props;
        return (
            <>
            <h3> { firstName} , { lastName}</h3>
            <p>Age : {age}</p>
            <p>Hair Color : {hairColor}</p>
            </>
        );
    }
}
    
export default SomeClassComponent;
