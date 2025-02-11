import React from 'react';

const SearchResults = ({ results }) => {
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
    </div>
  );
};

export default SearchResults;