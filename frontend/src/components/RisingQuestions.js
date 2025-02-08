import React, { useEffect, useState } from 'react';

function RisingQuestions() {
  const [trendingQuestions, setTrendingQuestions] = useState([]);
  const [showOneQuestion, setShowOneQuestion] = useState(false);
  const [question, setQuestion] = useState('');
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/trending-questions')
      .then(response => response.json())
      .then(data => {
        console.log('Fetched data:', data);
        if (Array.isArray(data)) {
          setTrendingQuestions(data);
        } else {
          console.error('Fetched data is not an array:', data);
        }
      })
      .catch(error => console.error('Error fetching trending questions:', error));
  }, []);

  const questionClicked = (question_id) => {
    setShowOneQuestion(true);
    fetch(`http://localhost:3001/question/${question_id}`)
      .then(response => response.json())
      .then(data => {
        console.log('Fetched question:', data);
        setQuestion(data[0]);
      })
      .catch(error => console.error('Error fetching question:', error));

      fetch(`http://localhost:3001/comments/${question_id}`)
      .then(response => response.json()) // Parse the response as JSON
      .then(data => {
        // Log the fetched data to the console
        console.log('Fetched comments:', data);
        // Update the comments state variable with the fetched data
        setComments(data);
      })
      .catch(error => {
        // Log any errors that occur during the fetch operation
        console.error('Error fetching comments:', error);
      });

  };

  return (
    <div>
      <h1>Trending Questions</h1>
      {showOneQuestion ? (
        <div>
          <h1>{question.Title}</h1>
          <p>{question.question}</p>
          <ul>
            {comments.map(comment => (
              <li key={comment.comment_id}>{comment.comment}</li>
            ))}
          </ul> 
        </div>
      ) : (
        <ul>
          {trendingQuestions.map(question => (
            <li key={question.question_id} onClick={() => questionClicked(question.question_id)}>
              <h2>{question.Title}</h2>
              <p>{question.question}</p>
              <p>Tag: {question.tag}</p>
              <p>Comments: {question.comment_count}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default RisingQuestions;