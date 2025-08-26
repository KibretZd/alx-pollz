import React, { useState } from 'react';
import { Button, Input, Textarea } from './ui/shadcn-placeholder';

const PollForm = () => {
  const [title, setTitle] = useState('');
  const [options, setOptions] = useState(['']);

  const handleOptionChange = (index: number, value: string) => {
    const newOptions = [...options];
    newOptions[index] = value;
    setOptions(newOptions);
  };

  const addOption = () => {
    setOptions([...options, '']);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle poll submission logic here
    console.log({ title, options });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="title">Poll Title</label>
        <Input
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Poll Options</label>
        {options.map((option, index) => (
          <div key={index}>
            <Textarea
              value={option}
              onChange={(e) => handleOptionChange(index, e.target.value)}
              required
            />
          </div>
        ))}
        <Button type="button" onClick={addOption}>
          Add Option
        </Button>
      </div>
      <Button type="submit">Create Poll</Button>
    </form>
  );
};

export default PollForm;