// Import the necessary dependencies from React
import { useState, useEffect } from "react";
import React from 'react';

// Define the QuestionList component
function QuestionList() {
  // Initialize state variables to store the titles, current question, comments, and new comment
  const [titles, setTitles] = useState([]); // Array of question titles
  const [question, setQuestion] = useState(null); // Current question object
  const [comments, setComments] = useState([]); // Array of comments for the current question
  const [newComment, setNewComment] = useState(''); // Text of the new comment being added

  // Use the useEffect hook to fetch the question list data when the component mounts
  useEffect(() => {
    // Fetch the question list data from the server
    fetch('http://localhost:3001/question-list')
      .then(response => response.json()) // Parse the response as JSON
      .then(data => {
        // Log the fetched data to the console
        console.log('Fetched data:', data);
        // Update the titles state variable with the fetched data
        setTitles(data);
      })
      .catch(error => {
        // Log any errors that occur during the fetch operation
        console.error('Error fetching data:', error);
      });
  }, []); // The empty dependency array means this effect will only run once, when the component mounts

  // Define a function to handle the title click event
  const handleTitleClicked = (id) => {
    // Log a message to the console to indicate that the title was clicked
    console.log('loading question');
    // Fetch the question data from the server
    fetch(`http://localhost:3001/question/${id}`)
      .then(response => response.json()) // Parse the response as JSON
      .then(data => {
        // Log the fetched data to the console
        console.log('Fetched question:', data);
        // Update the question state variable with the fetched data
        setQuestion(data[0]);
      })
      .catch(error => {
        // Log any errors that occur during the fetch operation
        console.error('Error fetching question:', error);
      });
  };

  // Define a function to fetch the comments for the current question
  const fetchComments = (question_id) => {
    // Fetch the comments data from the server
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

  // Define a function to handle the back button click event
  const handleBackButtonClick = () => {
    // Reset the question state variable to null
    setQuestion(null);
  };

  // Define a function to handle the comment submit event
  const handleCommentSubmit = (e) => {
    // Prevent the default form submission behavior
    e.preventDefault();
    // Fetch the comments data from the server
    fetch('http://localhost:3001/comments', {
      method: 'POST', // Use the POST method to create a new comment
      headers: {
        'Content-Type': 'application/json' // Set the content type to JSON
      },
      body: JSON.stringify({ question_id: question.question_id, comment: newComment }) // Send the comment data in the request body
    })
      .then(response => response.json()) // Parse the response as JSON
      .then(data => {
        // Log the response data to the console
        console.log('Comment added:', data);
        // Fetch the updated comments data from the server
        fetchComments(question.question_id);
        // Reset the new comment state variable to an empty string
        setNewComment('');
      })
      .catch(error => {
        // Log any errors that occur during the fetch operation
        console.error('Error adding comment:', error);
      });
  };

  // Return the JSX for the component
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
          <form onSubmit={handleCommentSubmit} className="comment-form">
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
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default QuestionList;