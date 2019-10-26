import React from 'react';
// import "./style.css";

export default (props) => {
    console.log("hello", props) ; 
    return (
        <div
            className="actorCard"
            onClick={() => props.setClicked(props.id)}
        >
            <img
                className="img"
                alt={props.name}
                src={props.image}
            />
        </div>
    )
};