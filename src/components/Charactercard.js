import React from 'react'
import './layout/Card.css'

export default function CharacterCard(props) {
    return (
        <div className="Card">
            <img src={props.chars.image} alt="" />
            <h2>{props.chars.name}</h2>
            <p>
                <strong>Origem:</strong> {props.chars.origin.name} <br />
                <strong>Episódios: </strong> {props.chars.episode}
            </p>
            
        </div>
    )
}