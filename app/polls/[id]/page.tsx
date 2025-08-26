import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const PollDetailPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const [poll, setPoll] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id) {
      // Fetch poll details based on the poll ID
      const fetchPoll = async () => {
        const response = await fetch(`/api/polls/${id}`);
        const data = await response.json();
        setPoll(data);
        setLoading(false);
      };

      fetchPoll();
    }
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!poll) {
    return <div>Poll not found.</div>;
  }

  return (
    <div>
      <h1>{poll.title}</h1>
      <p>{poll.description}</p>
      <h2>Options</h2>
      <ul>
        {poll.options.map((option) => (
          <li key={option.id}>{option.text}</li>
        ))}
      </ul>
      {/* Add voting functionality here */}
    </div>
  );
};

export default PollDetailPage;