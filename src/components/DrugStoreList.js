import React from 'react';
import './DrugStoreList.css';

const DrugStoreList = ({ searchQuery }) => {
    // Dummy data for drug stores
    const drugStores = [
        { name: 'Pharmacie Sidi Maarouf', address: 'Sidi Maarouf , AIn Chock , Casablanca', isOpen: true, image: '../landing-page.png' },
        { name: 'Pharmacie Jnane Califonia', address: 'Jnane Califonie , AIn Chock , Casablanca ', isOpen: false, image: '../landing-page.png' },
        { name: 'Pharmacie Al Qods', address: 'Boulevard Al Qods , Ain CHock,  Casablanca', isOpen: true, image: '../landing-page.png' },
        { name: 'Pharmacie Maarif', address: 'Maarif , Casablanca', isOpen: false, image: '../landing-page.png' },
        // ... more drug stores
    ];

    // Filter out stores that are not open
    const openStores = drugStores.filter(store => store.isOpen);

    return (
        <div className="drugstore-list">
            {openStores.map((store, index) => (
                <div key={index} className="drugstore-card">
                    <img src={store.image} alt={store.name} className="drugstore-image" />
                    <div className="drugstore-info">
                        <h3 className="drugstore-name">{store.name}</h3>
                        <p className="drugstore-address">{store.address}</p>
                        <span className={`drugstore-status ${store.isOpen ? 'open' : 'closed'}`}>
                            {store.isOpen ? 'Open' : 'Closed'}
                        </span>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default DrugStoreList;
