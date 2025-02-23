// src/Components/SelectedCardDetails.js

import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import '../CSS/course.css';

const SelectedCardDetails = () => {
    const { id } = useParams();
    const cards = useSelector(state => state.cards.cards);
    const selectedCard = cards.find(card => card.id === parseInt(id));

    if (!selectedCard) {
        return <div>No card found</div>;
    }

    return (
        <div className='selected-card-details'>
            <h2>{selectedCard.text} is opened</h2>
            {/* Add more detailed content here */}
        </div>
    );
};

export default SelectedCardDetails;
