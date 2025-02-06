import { useState, useEffect } from "react";
import React from 'react';

function QuestionList() {
  const [titles, setTitles] = useState([]);
  const [question, setQuestion] = useState(null);

  useEffect(() => {
    fetch('http://localhost:3001/question-list')
      .then(response => response.json())
      .then(data => {
        console.log('Fetched data:', data);
        setTitles(data);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const handleTitleClicked = (id) => {
    console.log('loading question');
    fetch(`http://localhost:3001/question/${id}`)
      .then(response => response.json())
      .then(data => {
        console.log('Fetched question:', data);
        setQuestion(data[0]);
      })
      .catch(error => console.error('Error fetching question:', error));
  };

  const handleBackButtonClick = () => {
    setQuestion(null);
  };

  return (
    <div>
      <h1>Questions</h1>
      {question ? (
        <div>
          <button onClick={handleBackButtonClick}>Back to List</button>
          <h1>{question.Title}</h1>
          <p>{question.question}</p>
        </div>
      ) : (
        <ul>
          {titles.map(title => (
            <li onClick={() => handleTitleClicked(title.question_id)} 
            key={title.question_id} 
            className="title-list">
              {title.Title}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default QuestionList;