import React, { useState } from 'react'
import Header from './Header'
import SideBar from './SideBar'
import QuestionList from './QuestionList'
import EntireForum from './EntireForum'
import RightComponent from './RightComponent'

function Forums() {
  const [content, setContent] = useState(<div>
    <h1>Forum for any content</h1>
    <p>Enjoy the forum</p>
  </div>)

  const handleContentChange = (newContent) => {
    setContent(newContent);
  };

  return (
    <div className='forum-container'>
        <Header /> 
        <SideBar onContentChnage = {handleContentChange}/>
        <RightComponent content = {content}/>
    </div>
  )
}

export default Forums