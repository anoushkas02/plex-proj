import React from 'react'

function FunctionalComponent(props) {
    return (
        <div>
            <h1>Type of component: {props.type}</h1>
            <h2> Parent: {props.parent}</h2>
        </div>
    );

}

export default FunctionalComponent; // so you can use it in the parent 