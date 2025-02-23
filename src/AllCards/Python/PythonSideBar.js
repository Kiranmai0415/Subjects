import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../CSS/SideBar.css'; // Ensure this path is correct

export default function PythonSideBar() {
    const [visibleCategory, setVisibleCategory] = useState(null);

    const sidebarCategories = {
        "Basics": ["variables", "data types", "comments", "input", "print"],
        "Control Flow": ["if statement", "elif", "else", "for loop", "while loop", "break", "continue"],
        "Functions": ["functions", "lambda", "return", "def", "parameters", "arguments"],
        "Data Structures": ["lists", "tuples", "dictionaries", "sets"],
        "Classes and Objects": ["class", "object", "inheritance", "constructor"],
        "Modules": ["import", "from", "as", "math", "datetime", "os"],
        "File Handling": ["open", "read", "write", "append", "close"],
        "Exception Handling": ["try except", "finally", "raise"],
        "Advanced": ["decorators", "generators", "list comprehensions"],
        "Libraries": ["numpy", "pandas", "matplotlib", "requests"],
    };

    const handleMouseEnter = (category) => {
        setVisibleCategory(category);
    };

    const handleMouseLeave = () => {
        setVisibleCategory(null);
    };

    return (
        <div className="sidebar">
            <h3>PYTHON TOPICS</h3>
            <hr />
            {Object.keys(sidebarCategories).map(category => (
                <div key={category}
                    onMouseEnter={() => handleMouseEnter(category)}
                    onMouseLeave={handleMouseLeave}
                    className="category">
                    <h4>{category}</h4>
                    {visibleCategory === category && (
                        <ul className="submenu">
                            {sidebarCategories[category].map(tag => (
                                <li key={tag}>
                                    <Link to={`/tag/${tag}`}>{tag.toUpperCase()}</Link>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            ))}
        </div>
    );
}
