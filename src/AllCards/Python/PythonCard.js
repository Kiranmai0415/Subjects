import React, { useEffect, useState } from 'react';
import PythonSideBar from '../Python/PythonSideBar';
import tagContentMapping from '../../Components/tagContentMapping';
import { useNavigate, useParams } from 'react-router-dom';
import "../../CSS/CardFile.css";

function PythonCard() {
    const { tagName } = useParams();
    const [tagDefinition, setTagDefinition] = useState("");
    const [tagExample, setTagExample] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        if (tagName) {
            const { definition, example } = tagContentMapping(tagName, 'python');
            console.log("Definition:", definition); // Check definition in console
            console.log("Example:", example); // Check example in console
            setTagDefinition(definition);
            setTagExample(example);
        }
    }, [tagName]);

    return (
        <>
            <div className="card-container">
                <div className="sidebar-container">
                    <PythonSideBar />
                </div>
              
                <div className="content-container">
                    <h2 style={{ color: 'white' }}>PYTHON CARD</h2>
                    <div className="content-box">
                        <h2>{tagName && tagName.toUpperCase()} TAG</h2>
                        <h2>Definition: "{tagDefinition}"</h2>
                        <h2>Example: "<i>{tagExample}</i>" </h2>
                    </div>
                </div>
                <a href="/course" className="home" >Home</a>
            </div>
        </>
    );
}

export default PythonCard;
