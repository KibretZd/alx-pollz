import React from 'react';
import PollForm from '@/components/PollForm';

const CreatePollPage = () => {
    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Create a New Poll</h1>
            <PollForm />
        </div>
    );
};

export default CreatePollPage;