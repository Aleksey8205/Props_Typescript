import React from "react";
import Star from "./Star";
import "./stars.module.css"

interface IProps {
    count?: number;
}

const Stars: React.FunctionComponent<IProps> = ({ count = 0}) => {
    if (!Number.isInteger(count) || count < 1 || count > 5) {
        return null;
    }

    const starsList = Array.from({ length: count },(_, i)=> <li key={`star-${i}`}><Star /></li>);

    return (
        <ul className="card-body-stars u-clearfix">{starsList}</ul>
    );
};

export default Stars;