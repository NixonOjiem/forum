import React, { useState } from 'react'
import Header from './Header'
import SideBar from './SideBar'
import QuestionList from './QuestionList'
import EntireForum from './EntireForum'
import RightComponent from './RightComponent'

function Forums() {
  const [content, setContent] = useState(<QuestionList />)

  const handleContentChange = (newContent) => {
    setContent(newContent);
  };

  return (
    <div className='forum-container'>
        <Header onContentChange={handleContentChange}/> 
        <SideBar onContentChange = {handleContentChange}/>
        <RightComponent content = {content}/>
    </div>
  )
}

export default Forums