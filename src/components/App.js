import React, { useState } from 'react'
import FlatList from './FlatList'
import GoogleMapReact from 'google-map-react';
import Marker from './Marker' 
import flats from '../assets/flats'

const App = () => {

    const [flat, setFlat] = useState(flats[0])

    const selectFlat = (index) => {
        setFlat(flats[index])
    }
    

    const center = () => {
        return {
            lat: flat.lat,
            lng: flat.lng
        }
    }

    return (
        <div>
            <FlatList 
            flats={flats}
            selectedFlat={flat} 
            selectFlat={selectFlat}
            />
            <div className="map-container">
                <GoogleMapReact
                defaultCenter={center()} 
                defaultZoom={12} 
                bootstrapURLKeys={{ key: 'AIzaSyBryH7mHR9Ao3243Tez1l3UCVx3-62mw9Q' }}
                >
                  <Marker lat={flat.lat} lng={flat.lng}/>
                </GoogleMapReact>
            </div>
        </div>
    )
}

export default App