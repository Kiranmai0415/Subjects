import React from 'react';
import '../CSS/course.css';

const Card = ({ text, onClick }) => {
    return (
        <div className='card__content' onClick={onClick}>
            <h3>{text}</h3>
        </div>
    );
};

export default Card;
