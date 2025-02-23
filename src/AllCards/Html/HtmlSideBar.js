import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../CSS/SideBar.css'; // Ensure this path is correct

export default function HtmlSideBar() {
    const [visibleCategory, setVisibleCategory] = useState(null);

    const sidebarCategories = {
        "Basics": ["!DOCTYPE", "Headings", "Paragraphs", "Links", "Images", "Favicon"],
        "Attributes": ["href", "src", "alt", "title", "style", "width and height", "lang"],
        "Links": ["anchor", "link", "nav"],
        "Tables": ["table", "thead", "tbody"],
        "Formatting Elements": ["bold", "strong", "italic", "em", "mark", "small", "del", "ins", "sub", "sup"],
        "Lists": ["Ordered List", "Unordered List", "Description List"],
        "Block Elements": ["Block","div", "paragraph", "footer", "main", "section", "aside"],
        "Inline Elements": ["span", "label"],
        "JavaScript":["script"],
        "Responsive" : ["Responsive","Viewport","Meta"],
        " HTML Forms": ["HTML Forms", "HTML Form Attributes", "HTML Form Elements", "HTML Input Types", "HTML Input Attributes", "Input Form Attributes"],
        "HTML Graphics": [" HTML Canvas", " HTML SVG "],
        "HTML Media": ["HTML Media", "HTML Video", "HTML Audio", "HTML Plug-ins", "HTML YouTube"],
        "HTML APIs": ["HTML Geolocation", "HTML Drag/Drop", "HTML Web Storage", "HTML Web Workers"]

    };

    const handleMouseEnter = (category) => {
        setVisibleCategory(category);
    };

    const handleMouseLeave = () => {
        setVisibleCategory(null);
    };

    return (
        <div className="sidebar">
            <h3>HTML TAGS</h3>
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
