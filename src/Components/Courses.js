// src/Components/Course.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CardList from './CardList';
import { selectCard } from '../Redux/Actions'; // Import the selectCard action
import "../CSS/course.css";
import { Link, useNavigate } from 'react-router-dom';
import SelectedCardDetails from './CardDetails';
import HtmlCard from '../AllCards/Html/HtmlCard';
import JavaScriptCard from '../AllCards/JavaScript/JavaScriptCard';

function Course() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const selectedCardId = useSelector(state => state.cards.selectedCardId);

    const handleJavaScript = () =>{
        navigate('./javscript');
        console.log("Navigating to JavaScript Page");

    }
  
    const handleHome =()=>{
        navigate('./course');
        console.log("Navigating to Home Page");
    }

    return (
        <div>
            <div className='container'>
                <h1>MY COURSE</h1>
                <h5 onClick={()=>handleHome()}>HOME</h5>
            </div>
         
            {selectedCardId ? <SelectedCardDetails /> : <CardList />}
        </div>
    );
}

export default Course;
