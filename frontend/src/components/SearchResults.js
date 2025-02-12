import React from 'react';
import { useNavigate } from 'react-router-dom';
import QuestionList from './QuestionList';

const SearchResults = ({ results, onContentChange }) => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/forum');
    console.log('Back to forum');
    
  }
  return (
    <div className='search-results'>
      <ul>
        {results.map(result => (
          <li key={result.question_id}>
            <h2>{result.Title}</h2>
            <p>{result.question}</p>
            <p>Tag: {result.tag}</p>
          </li>
        ))}
      </ul>
      <button onClick={()=>handleBack()}>Back</button>
    </div>
  );
};

export default SearchResults;