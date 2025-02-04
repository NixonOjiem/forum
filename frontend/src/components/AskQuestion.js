import React from 'react'

function AskQuestion() {
  return (
    <div className='Ask-Question'>
        <h1>Ask a Question</h1>
        <label className='Labels'>Title</label>
        <input type='text' className='Title-Textbox' placeholder='Add your question title here'/>
        <label className='Labels'>Body</label>
        <input type='text' className='Body-Textbox' placeholder='Ask your question here' />
        <label className='Labels'>Tags</label>
        <select name='Tags' className='Labels'>
            <option value={"Tag1"}>Tag1</option>
            <option value={"Tag2"}>Tag2</option>
            <option value={"Tag3"}>Tag3</option>
            <option value={"Tag4"}>Tag4</option>
        </select>
        {/* <input type='select' className='Tags-Textbox'/> */}
        <button className='button'>Post Your Question</button>
    </div>
  )
}

export default AskQuestion