import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../CSS/SideBar.css'; // Ensure this path is correct

export default function JavaScriptSideBar() {
    const [visibleCategory, setVisibleCategory] = useState(null);

    const sidebarCategories = {
        "Basics": ["variables", "data types", "functions", "comments", "operators"],
        "Control Structures": ["if-else", "switch", "for loop", "while loop", "do-while loop"],
        "Functions": ["function declaration", "function expression", "arrow functions", "callbacks", "closures"],
        "Objects and Arrays": ["object literals", "array methods", "destructuring", "spread operator", "rest operator"],
        "ES6+ Features": ["let and const", "template literals", "default parameters", "destructuring", "modules (import/export)"],
        "Asynchronous JavaScript": ["promises", "async/await", "callbacks", "event loop", "Promise.all", "Promise.race"],
        "DOM Manipulation": ["getElementById", "querySelector", "innerHTML", "classList", "event handling"],
        "Event Handling": ["event bubbling", "event capturing", "addEventListener", "preventDefault", "event delegation"],
        "Error Handling": ["try-catch-finally", "throwing errors", "custom errors"],
        "Object-Oriented JavaScript": ["prototypes", "classes", "constructor functions", "inheritance", "encapsulation"],
        "Browser APIs": ["localStorage", "sessionStorage", "cookies", "fetch API", "WebSockets"],
        "Web APIs": ["geolocation", "service workers", "notifications", "WebRTC", "Intersection Observer", "Mutation Observer"],
        "Modules": ["CommonJS", "ES6 modules", "dynamic imports", "named exports", "default exports"],
        "Regular Expressions (RegEx)": ["basic syntax", "flags (g, i, m)", "test()", "match()", "replace()"],
        "JavaScript Engines": ["V8", "JIT compilation", "memory management", "garbage collection"],
        "TypeScript": ["type annotations", "interfaces", "generics", "type inference"],
        "Web Performance": ["debouncing", "throttling", "lazy loading", "minification", "code splitting"],
        "Error and Debugging Tools": ["console", "debugging with DevTools", "ESLint", "JSHint"],
        "Asynchronous Patterns": ["callbacks", "promises", "async/await", "observables", "Promise.race", "Promise.all"],
        "Advanced Topics": ["hoisting", "currying", "memoization", "event delegation", "tail call optimization"],
        "Functional Programming": ["pure functions", "higher-order functions", "closures", "recursion", "immutability"],
        "JavaScript Design Patterns": ["module pattern", "singleton pattern", "observer pattern", "factory pattern", "MVC"],
        "Testing": ["unit testing", "integration testing", "TDD", "end-to-end testing", "mocking"],
        "Server-Side JavaScript": ["Node.js", "Express.js", "file system (fs)", "streams", "event-driven architecture"],
        "Progressive Web Apps (PWAs)": ["service workers", "manifest files", "offline capabilities", "push notifications"],
        "GraphQL": ["queries", "mutations", "subscriptions", "Apollo client"],
        "WebAssembly": ["WASM introduction", "JavaScript interoperability"],
        "Security": ["XSS", "CSRF", "CORS", "Content Security Policy (CSP)", "OAuth"]
      };
      

    const handleMouseEnter = (category) => {
        setVisibleCategory(category);
    };

    const handleMouseLeave = () => {
        setVisibleCategory(null);
    };

    return (
        <div className="sidebar">
            <h3>JAVASCRIPT TOPICS</h3>
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
