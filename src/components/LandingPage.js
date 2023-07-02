import React, { useEffect, useState } from 'react';
import './LandingPage.css';
import { useTranslation } from 'react-i18next';
import MapComponent from './MapComponent';
import DrugStoreList from './DrugStoreList';

const LandingPage = () => {
    const { t, i18n } = useTranslation();
    const [searchQuery, setSearchQuery] = useState('');
    const [userLocation, setUserLocation] = useState(null);
    const changeLanguage = (event) => {
        i18n.changeLanguage(event.target.value);
    };

//Initialize Map
useEffect(() => {
    // Request user's location
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
            console.log("User location obtained:", position); // Log the position
            setUserLocation({
                latitude: position.coords.latitude,
                longitude: position.coords.longitude
            });
        }, (error) => {
            console.error("Error obtaining geolocation. Code:", error.code, "Message:", error.message);
            // Optionally set a default location if geolocation fails
        });
    } else {
        console.log("Geolocation is not supported by this browser.");
    }
}, []);


    const handleSearch = () => {
        // Implement search functionality here
    };

    return (
        <div className="landing-page">
            <div className="search-bar">
                <input
                    type="text"
                    placeholder={t('searchPlaceholder')}
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />

                <button onClick={handleSearch}>{t('Search_button')}</button>
            {/* Dropdown list for language selection */}
            <select onChange={changeLanguage} defaultValue="en">
                <option value="en">English</option>
                <option value="fr">Français</option>
                <option value="ar">العربية</option>
            </select>
            </div>
            
            <div className="content">
                <div className="map-container">
                    <MapComponent userLocation={userLocation} />
                </div>
                
                <div className="list-container">
                    <DrugStoreList searchQuery={searchQuery} />
                </div>
            </div>
        </div>
    );
};

export default LandingPage;
