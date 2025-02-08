import React, { useEffect, useState } from 'react';

function RisingQuestions() {
  const [trendingQuestions, setTrendingQuestions] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/trending-questions')
      .then(response => response.json())
      .then(data => {
        setTrendingQuestions(data);
      })
      .catch(error => console.error('Error fetching trending questions:', error));
  }, []);

  return (
    <div>
      <h1>Trending Questions</h1>
      <ul>
        {trendingQuestions.map(question => (
          <li key={question.question_id}>
            <h2>{question.Title}</h2>
            <p>{question.question}</p>
            <p>Tag: {question.tag}</p>
            <p>Comments: {question.comment_count}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default RisingQuestions