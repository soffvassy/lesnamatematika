import React from 'react';
import { Link } from 'react-router-dom';

const FrontPage = () => {
  return (
    <div className="front-page">
      <h1>Welcome to the Quiz App</h1>
      <p>Click below to start a quiz.</p>
      <Link to="/quiz">
        <button>Start Quiz</button>
      </Link>
    </div>
  );
}

export default FrontPage;