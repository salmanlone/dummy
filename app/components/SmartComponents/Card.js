import React from "react";

const Card = props => {
  return (
    <div style={props.style} key={props.index}>
      <h3>{props.title}</h3>
      {props.horizontalRule ?
        <hr />
        : ""}
      <p>{props.blurb}</p>
      {props.cardType == "boost" || props.cardType == "advance"
        ? props.data.map(job =>
          <div key={job.index}>{job.name}</div>
        ) : ""
      }
      {props.cardType == "salary"
        ? props.data.map(job =>
          <div key={job.index}>{job} - $XX,XXX</div>
        ) : ""
      }
      {props.cardType == "related"
        ?
        <div>
          <div>{props.data.PostedDateMessage}</div>
          <div key={props.data.JobId}>{props.data.Title}</div>
          <div>{props.data.Company}</div>
          <div>{props.data.PhysicalCityName}, {props.data.PhysicalStateAbbr}</div>
        </div>
        : ""
      }

    </div>
  );
};

export default Card;
