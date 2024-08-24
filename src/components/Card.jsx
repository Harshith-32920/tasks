import React from "react";

const Card = ({ item, onEdit, onDelete }) => {
    return (
        <li className="card">
            <div className="card-content">
                <strong className="card-title">{item.title}</strong>
                <p className="card-description">{item.description}</p>
                <p className="card-DueDate">{item.DueDate}</p>
                
            </div>
            <div className="card-actions">
                <button className="card-button" onClick={onEdit}>
                    Update
                </button>
                <button className="card-button" onClick={onDelete}>
                    Done
                </button>
            </div>
        </li>
    );
};

export default Card;
