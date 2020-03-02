import React from 'react';

const Card = props => {
    return (
        <div style={props.style}>
            <h3>{props.title}</h3>
            <hr />
            <p>{props.blurb}</p>
            {props.accessNameProp ?
                props.data.map(job => (
                    <div>{job.name}</div>
                )) :
                props.data.map(job => (
                    <div>{job}</div>
                ))
            }
        </div>
    )


};

export default Card;