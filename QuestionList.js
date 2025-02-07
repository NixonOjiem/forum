import { useState, useEffect } from "react";
import React from 'react';

function QuestionList() {
  const [titles, setTitles] = useState([]);
  const [question, setQuestion] = useState(null);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');
  const [username, setUserName] = useState('');
  

  useEffect(() => {
    fetch('http://localhost:3001/question-list')
    const storedUserName = localStorage.getItem('username_local')
    setUserName(storedUserName)
      .then(response => response.json())
      .then(data => {
        console.log('Fetched data:', data);
        setTitles(data);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const handleTitleClicked = (id) => {
    console.log('loading question after handleTitleClicked');
    console.log('321');
    fetch(`http://localhost:3001/question/${id}`)
      .then(response => response.json())
      .then(data => {
        console.log('Fetched question:', data);
        setQuestion(data[0]);
        fetchComments(id);
      })
      .catch(error => console.error('Error fetching question:', error));
  };

  const fetchComments = (question_id) => {
    fetch(`http://localhost:3001/comments/${question_id}`)
      .then(response => response.json())
      .then(data => {
        console.log('Fetched comments:', data);
        setComments(data);
      })
      .catch(error => console.error('Error fetching comments:', error));
  };

  const handleBackButtonClick = () => {
    setQuestion(null);
    setComments([]);
  };

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    fetch('http://localhost:3001/comments', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ question_id: question.question_id, comment: newComment })
    })
      .then(response => response.json())
      .then(data => {
        console.log('Comment added:', data);
        fetchComments(question.question_id);
        setNewComment('');
      })
      .catch(error => console.error('Error adding comment:', error));
  };

  return (
    <div>
      <h1>QuestionList</h1>
      {question ? (
        <div>
          <button onClick={handleBackButtonClick}>Back to List</button>
          <h1>{question.Title}</h1>
          <p>{question.question}</p>
          <h2>Comments</h2>
          <ul>
            {comments.map(comment => (
              <li key={comment.comment_id}>{comment.comment}</li>
            ))}
          </ul>
          <form onSubmit={handleCommentSubmit}>
            <textarea
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              placeholder="Add a comment"
              required
            />
            <button type="submit">Submit</button>
          </form>
        </div>
      ) : (
        <ul>
          {titles.map(title => (
            <li onClick={() => handleTitleClicked(title.question_id)} key={title.question_id} className="title-list">
              {title.Title}
              {console.log(storedUserName)}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default QuestionList;