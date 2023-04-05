import "./WorkCardStyle.css"

import React from 'react';
import pro1 from "../Assets/project1.png"
import { NavLink } from "react-router-dom";

export const WorkCard = () => {
  return (
    <div className="work-container">
        <h1 className="project-heading">
            <div className="project-container">
                <div className="project-card">
                    <img src={pro1} alt="picsrc"></img>
                    <h2 className="project-title">Project Title</h2>
                    <div className="pro-details">
                        <p>
                         This is text
                        </p>
                        <div className="pro-btns">
                            <NavLink to="url.com" className="btn">
                                View
                            </NavLink>
                            <NavLink to="url.com" className="btn">
                                Source
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </h1>
    </div>
  )
}
