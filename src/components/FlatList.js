import React from 'react'
import Flat from './Flat'

const FlatList = ({ flats, selectFlat, selectedFlat }) => {
    

    return (
        <div className="flat-list">
        {flats.map((flat, index) => {
            return <Flat 
            index={index}
            selected={flat.name === selectedFlat.name }
            selectFlat={selectFlat}
            name={flat.name} 
            image={flat.imageUrl} 
            price={flat.price} 
            currency={flat.priceCurrency}
            lat={flat.lat}
            lng={flat.lng}
            key={flat.lng}
            />
        })}
        </div>
    )
}

export default FlatList