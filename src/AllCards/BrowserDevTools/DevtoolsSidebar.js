import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../CSS/SideBar.css'; // Ensure this path is correct

export default function DevToolsSideBar({ selectedTag }) {
    const [visibleCategory, setVisibleCategory] = useState(null);

    const sidebarCategories = {
            "Elements Panel": ["DOM inspection", "editing HTML/CSS", "element selection", "box model visualization", "pseudo-classes"],
            "Console Panel": ["logging messages", "evaluating expressions", "error tracking", "debugging scripts", "console methods (log, warn, error)"],
            "Network Panel": ["viewing requests", "XHR/fetch monitoring", "throttling network speed", "request/response headers", "caching"],
            "Sources Panel": ["viewing and editing source code", "setting breakpoints", "stepping through code", "watching variables", "event listener breakpoints"],
            "Performance Panel": ["recording performance", "analyzing frame rate", "JS execution time", "CPU/memory usage", "flame charts"],
            "Memory Panel": ["heap snapshots", "detecting memory leaks", "object allocation tracking", "garbage collection", "memory profiling"],
            "Application Panel": ["localStorage/sessionStorage", "indexedDB", "cookies", "service workers", "manifest and cache storage"],
            "Security Panel": ["HTTPS inspection", "certificate details", "security issues detection", "mixed content warnings", "CSP violations"],
            "Lighthouse Panel": ["site performance audits", "accessibility checks", "SEO suggestions", "best practices", "progressive web app analysis"],
            "Accessibility Panel": ["accessibility tree", "color contrast checker", "ARIA attributes", "keyboard navigation", "screen reader compatibility"],
            "Device Mode": ["responsive design testing", "viewport dimensions", "device emulation", "network throttling", "orientation change"],
            "Timeline Panel": ["JavaScript execution timeline", "layout and paint events", "frame rendering", "UI performance profiling", "user interaction tracking"],
            "Audits": ["page speed audit", "mobile-friendly audit", "progressive web app audit", "accessibility audit", "SEO audit"]
    };

    const handleMouseEnter = (category) => {
        setVisibleCategory(category);
    };

    const handleMouseLeave = () => {
        setVisibleCategory(null);
    };

    return (
        <div className="sidebar">
            <h3>BROWSER DEV TOOLS TAGS</h3>
            <hr />
            {Object.keys(sidebarCategories).map(category => (
                <div key={category}
                     onMouseEnter={() => handleMouseEnter(category)}
                     onMouseLeave={handleMouseLeave}
                     className={`category ${selectedTag && sidebarCategories[category].includes(selectedTag) ? 'active' : ''}`}>
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
