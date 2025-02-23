import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../CSS/SideBar.css'; // Ensure this path is correct

export default function CSSideBar() {
    const [visibleCategory, setVisibleCategory] = useState(null);

    const sidebarCategories = {
        "Basics": ["selectors", "properties", "values", "comments"],
        "Text Styling": ["font-family", "font-size", "color", "text-align"],
        "Box Model": ["margin", "border", "padding", "width", "height"],
        "Positioning": ["static", "relative", "absolute", "fixed", "sticky"],
        "Flexbox": ["display: flex", "justify-content", "align-items", "flex-direction"],
        "Grid": ["display: grid", "grid-template-columns", "grid-template-rows", "grid-area"],
        "Pseudo-classes": [":hover", ":active", ":focus", ":nth-child"],
        "Responsive Design": ["media queries", "viewport", "flex-wrap"],
        "Animations": ["@keyframes", "animation", "transition"],
        "Variables": ["CSS variables", "custom properties"],
    };

    const handleMouseEnter = (category) => {
        setVisibleCategory(category);
    };

    const handleMouseLeave = () => {
        setVisibleCategory(null);
    };

    return (
        <div className="sidebar">
            <h3>CSS TOPICS</h3>
            <hr/>
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
