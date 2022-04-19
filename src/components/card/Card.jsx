import React from 'react'
import './card.css'

const Card = ({
    id, title, location, googleMapsUrl,
    startDate, endDate, imageUrl,
    description
}) => {
  return (
    <div className='card'>
        <img className='card--img' src={imageUrl}></img>
        <div className='card--info'>
            <div className='card--stats'>
                <img className="card--location-icon" src="/images/location.png"></img>
                <h3 className='card--location'>{location}</h3>
                <a className="card--google" href={googleMapsUrl}>View on Google Map</a>
            </div>
            <h2 className='card--title'>{title}</h2>
            <span className='card--date'>{startDate} - {endDate}</span>
            <p className='card--description'>{description}</p>
        </div>
    </div>
  )
}

export default Card