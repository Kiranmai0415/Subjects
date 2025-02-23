// src/Components/CardList.js

import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom
import '../CSS/course.css';
import Card from './card';

export default function CardList() {
    const cards = useSelector(state => state.cards.cards);
    const navigate = useNavigate(); // Use useNavigate hook from react-router-dom

    if (!Array.isArray(cards) || cards.length === 0) {
        return <div>No cards found</div>;
    }

    const handleCardClick = (cardId) => {
        navigate(`/card/${cardId}`); // Use navigate function to redirect to card details
    };

    return (
        <div className='container_cardbox'>
            {cards.map(card => (
                <div key={card.id} className='card__container' onClick={() => handleCardClick(card.id)}>
                    <Card text={card.text} />
                </div>
            ))}
        </div>
    );
}
