import React, { useState } from 'react'

function AskQuestion() {
    const [question, setQuestion]= useState('');
    const [title, setTitle]= useState('');
    const [tag, setTag]= useState('');
    
  return (
    <div className='Ask-Question'>
        <h1>Ask a Question</h1>
        <label className='Labels'>Title</label>
        <input type='text' className='Title-Textbox' placeholder='Add your question title here' value={title}/>
        <label className='Labels'>Body</label>
        <input type='text' className='Body-Textbox' placeholder='Ask your question here' value={question}/>
        <label className='Labels'>Tags</label>
        <select name='Tags' className='Select-Choice'>
            <option value={tag}>Tag1</option>
            <option value={tag}>Tag2</option>
            <option value={tag}>Tag3</option>
            <option value={tag}>Tag4</option>
        </select>
        {/* <input type='select' className='Tags-Textbox'/> */}
        <button className='button'>Post Your Question</button>
    </div>
  )
}

export default AskQuestion