import React, { useState, useEffect } from "react";

const Card = props => {
  const [jobSelectedBool, setJobSelectedBool] = useState(false);
  const [jobSelectedDesc, setJobSelectedDesc] = useState("");
  let boostClick = (desc) => {
    setJobSelectedBool(!jobSelectedBool)
    setJobSelectedDesc(desc)
  }
  let relatedClick = (job) => {
    let aString = "Clicked on: " + job
    alert(aString)
  }

  return (
    <div style={props.style} key={props.index}>
      <h3>{props.title}</h3>
      {props.horizontalRule ?
        <hr />
        : ""}
      <p>{props.blurb}</p>
      {props.cardType == "boost" || props.cardType == "advance"
        ? props.data.map((job, index) =>
          (<div key={index} onClick={() => { boostClick(job.description) }}>{job.name}</div>)
        )
        : ""
      }
      {props.cardType == "boost" && jobSelectedBool
        ?
        <div>
          <hr />
          <div>{jobSelectedDesc}</div>
        </div>
        : ""}
      {props.cardType == "salary"
        ? props.data.map((job,index) =>
          (<div key={index} onClick={() => { relatedClick(job) }}>{job} - $XX,XXX</div>)
        ) : ""
      }
      {props.cardType == "related"
        ?

        <div key={props.data.JobId} onClick={() => { relatedClick(props.data.Title) }}>
          <div>{props.data.PostedDateMessage}</div>
          <div>{props.data.Title}</div>
          <div>{props.data.Company}</div>
          <div>{props.data.PhysicalCityName}, {props.data.PhysicalStateAbbr}</div>
        </div>
        : ""
      }

    </div>
  );
};

export default Card;
