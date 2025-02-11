import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SearchResults from './SearchResults';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons';

const Header = ({ onContentChange }) => {
  const [searchText, setSearchText] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const navigate = useNavigate();
  const handleLogOut = () => {
    navigate('/');
  };

  const handleSearch = (e) => {
    setSearchText(e.target.value);
    if (e.target.value.trim() !== '') {
      fetch(`http://localhost:3001/search?q=${e.target.value}`)
        .then(response => response.json())
        .then(data => {
          setSearchResults(data);
          console.log('Search results:', data); // Updated to log the correct data
        })
        .catch(error => console.error('Error fetching search results:', error));
    } else {
      setSearchResults([]);
      console.log('Search results cleared');
    }
  };

  const handleSearchButtonClick = () => {
    onContentChange(<SearchResults results={searchResults} />); // Pass searchResults as a prop
  };

  return (
    <div className='header'>
      <h1>Questy</h1>
      <div className='nav-container'>
        <input
          type="text"
          placeholder="Search..."
          className='search-box'
          onChange={handleSearch}
          value={searchText}
        />
        <FontAwesomeIcon icon={faMagnifyingGlass} onClick={handleSearchButtonClick} className='search-icon'/>
      </div>
      <h2 onClick={handleLogOut}>LogOut</h2>
    </div>
  );
};

export default Header;