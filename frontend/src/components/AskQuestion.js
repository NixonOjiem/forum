import React, { useState } from 'react';
import axios from 'axios';

function AskQuestion() {
  const [question, setQuestion] = useState('');
  const [title, setTitle] = useState('');
  const [tag, setTag] = useState('');

  const handlePostQuestion = () => {
    // console.log(question, title, tag);

    axios.post('http://localhost:3001/add-questions', {
      title,
      question,
      tag
    })
    .then(response => {
      alert(response.data);
    })
    .catch(error => {
      console.error('There was an error posting the question!', error);
    });
  };

  return (
    <div className='Ask-Question'>
      <h1>Ask a Question</h1>
      <label className='Labels'>Title</label>
      <input
        type='text'
        className='Title-Textbox'
        placeholder='Add your question title here'
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <label className='Labels'>Body</label>
      <input
        type='text'
        className='Body-Textbox'
        placeholder='Ask your question here'
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
      />
      <label className='Labels'>Tags</label>
      <select
        name='Tags'
        className='Select-Choice'
        value={tag}
        onChange={(e) => setTag(e.target.value)}
      >
        <option value='Tag1'>Tag1</option>
        <option value='Tag2'>Tag2</option>
        <option value='Tag3'>Tag3</option>
        <option value='Tag4'>Tag4</option>
      </select>
      <button className='button' onClick={handlePostQuestion}>
        Post Your Question
      </button>
    </div>
  );
}

export default AskQuestion;