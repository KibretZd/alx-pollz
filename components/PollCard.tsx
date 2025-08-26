import React from 'react';

const PollCard = ({ title, description, votes }) => {
    return (
        <div className="border rounded-lg p-4 shadow-md">
            <h2 className="text-xl font-bold">{title}</h2>
            <p className="text-gray-700">{description}</p>
            <div className="mt-2">
                <span className="text-sm text-gray-500">{votes} votes</span>
            </div>
        </div>
    );
};

export default PollCard;