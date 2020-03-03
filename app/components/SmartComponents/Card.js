import React from "react";

const Card = props => {
  return (
    <div style={props.style} key={props.index}>
      <h3>{props.title}</h3>
      <hr />
      <p>{props.blurb}</p>
      {props.accessNameProp
        ? props.data.map(job => <div key={job.index}>{job.name}</div>)
        : props.data.map(job => <div key={job.index}>{job}</div>)}
    </div>
  );
};

export default Card;
