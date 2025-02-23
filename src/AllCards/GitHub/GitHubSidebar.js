import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../CSS/SideBar.css'; // Ensure this path is correct

export default function GitHubSideBar({ selectedTag }) {
    const [visibleCategory, setVisibleCategory] = useState(null);

    const sidebarCategories = {
        "Git Tutorial": ["what is git", "why github", "uses of git", "features of git", "git workflow"],
        "Git Basics": ["installing git", "basic git commands", "configuring git", "git init", "git clone", "git status", "git add", "git commit"],
        "Branching & Merging": ["what is a branch", "creating branches", "switching branches", "merging branches", "resolving merge conflicts"],
        "Collaboration": ["forking repositories", "cloning a repository", "creating pull requests", "reviewing pull requests", "merging pull requests"],
        "GitHub Features": ["issues", "milestones", "projects", "wikis", "releases"],
        "Advanced Git": ["rebasing", "cherry-picking", "git stash", "git rebase", "git revert", "git reset"]
    };

    const handleMouseEnter = (category) => {
        setVisibleCategory(category);
    };

    const handleMouseLeave = () => {
        setVisibleCategory(null);
    };

    return (
        <div className="sidebar">
            <h3>GITHUB TAGS</h3>
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
