import React from 'react';
import { PollCard } from '../../components/PollCard';

const PollsPage = () => {
  // Placeholder for poll data
  const polls = [
    { id: 1, title: 'Poll 1', description: 'Description for Poll 1' },
    { id: 2, title: 'Poll 2', description: 'Description for Poll 2' },
    // Add more polls as needed
  ];

  return (
    <div>
      <h1>Available Polls</h1>
      <div className="polls-list">
        {polls.map(poll => (
          <PollCard key={poll.id} poll={poll} />
        ))}
      </div>
    </div>
  );
};

export default PollsPage;