import React, { useState } from 'react';

const App = () => {
  const [message, setMessage] = useState('');
  const [wordCount, setWordCount] = useState(0);

  const handleChange = (event) => {
    setMessage(event.target.value);
    setWordCount(message.split(' ').length);
  };

  return (
    <div>
      <textarea
        value={message}
        onChange={handleChange}
      />
      <p>Word count: {wordCount}</p>
    </div>
  );
};

export default App;
