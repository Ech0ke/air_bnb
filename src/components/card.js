import React from "react"

import "./style.css"
export default function Card(props) {
    console.log(props)
    let badgeText 
    if (props.openSpots === 0) {
        badgeText = "SOLD OUT"
    }
    else if (props.location === "Online") {
        badgeText = "ONLINE"
    }
    return (
        <div className="card">
            {badgeText && <div className="card--badge">{badgeText}</div>}
            <img src={require(`../images/${props.coverImg}`)} alt="" className="card--image"/>
            <div className="card--stats">
                <img src={require("../images/star.png")} alt="" className="card--star" />
                <span>{Number(props.stats.rating).toFixed(1)}</span>
                <span className="gray">({props.stats.reviewCount}) • </span>
                <span className="gray">{props.location}</span>
            </div>
            <p className="card--title">{props.title}</p>
            <p className="card--price"><span className="bold">From ${props.price} / person</span></p>
        </div>
    )
}