import React, { useEffect, useRef, useState } from 'react';
import L from 'leaflet';

const MapComponent = ({ userLocation }) => {
    const mapRef = useRef(null);
    const mapInstance = useRef(null);
    const [locationReceived, setLocationReceived] = useState(false);

    // Initialize the map
    useEffect(() => {
        if (mapRef.current && !mapInstance.current) {
            mapInstance.current = L.map(mapRef.current).setView([0, 0], 13);
            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            }).addTo(mapInstance.current);
        }
    }, []);

    // Center the map on the user's location
    useEffect(() => {
        if (mapInstance.current && userLocation && !locationReceived) {
            console.log("Setting map location to:", userLocation); // Log the location
            mapInstance.current.setView([userLocation.latitude, userLocation.longitude], 13);
            L.marker([userLocation.latitude, userLocation.longitude]).addTo(mapInstance.current)
                .bindPopup('Your Location')
                .openPopup();
            setLocationReceived(true);
        }
    }, [userLocation, locationReceived]);

    return <div ref={mapRef} style={{ height: "100%", width: "100%" }}></div>;
};

export default MapComponent;
