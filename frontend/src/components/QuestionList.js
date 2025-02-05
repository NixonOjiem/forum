import { useState, useEffect } from "react";
import React from 'react';

function QuestionList() {
  const [titles, setTitles] = useState([]);
  const [question, setQuestion] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/question-list')
      .then(response => response.json())
      .then(data => {
        console.log('Fetched data:', data); // Add this line
        setTitles(data)});
  }, []);

  return (
    <div>
      <h1>QuestionList</h1>
      <ul>
        {titles.map(title => (
          <li key={title.question_id} className="title-list">{title.Title}</li>
        ))}
      </ul>
    </div>
  );
}

export default QuestionList;