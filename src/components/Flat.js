import React from 'react'

const Flat = ({ name, image, price, currency, selectFlat, index, selected }) => {
    const handleClick = () => {
        selectFlat(index)
    }

    return (
        <div className={`card${selected ? ' active' : ''}`}>
            <img className="card img" id="img" src={image} alt='flat'/>
            <div className="card-category">{price} {currency}</div>
            <div className="card-description">
                <h2>{name}</h2>
            </div>
            <a className="card-link" href="#" onClick={handleClick}></a>
        </div>
    )
}

export default Flat