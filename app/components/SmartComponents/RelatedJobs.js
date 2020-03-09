import React from "react";
import Card from '../SmartComponents/Card';

let myStyle

const RelatedJobs = props => {
    return (
        <div style={props.style} key={props.index}>
            <h3>{props.title}</h3>
            {props.data.Result.Jobs.map(job =>
                <Card
                    style={props.boxStyle}
                    horizontalRule={false}
                    cardType={'related'}
                    data={job}
                />
            )}
        </div>
    );
};

export default RelatedJobs;