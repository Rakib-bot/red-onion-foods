import React, { useState, useEffect } from 'react';
import './GoogleMap.css';

const GoogleMap = () => {
    const [map, setMap] = useState({ lat: null, lng: null });
    const [error, setError] = useState(null);

    useEffect(() => {
        handleCurrentLocation();
    }, []);

    const handleCurrentLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    setMap({
                        lat: position.coords.latitude,
                        lng: position.coords.longitude
                    });
                    setError(null);
                },
                (error) => {
                    setError(error.message);
                }
            );
        } else {
            setError('Geolocation is not supported by this browser.');
        }
    };

    const mapUrl = map.lat && map.lng 
        ? `https://maps.google.com/maps?q=${map.lat},${map.lng}&output=embed`
        : '';

    return (
        <div className="map-container">
            {error ? (
                <p>{error}</p>
            ) : (
                map.lat && map.lng && (
                    <iframe
                        className="map-frame"
                        src={mapUrl}
                        allowFullScreen
                        title="Google Map"
                    ></iframe>
                )
            )}
        </div>
    );
};

export default GoogleMap;
