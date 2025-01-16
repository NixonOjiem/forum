import React from 'react'
import Header from './Header'
import SideBar from './SideBar'
import QuestionList from './QuestionList'

function Forums() {
  return (
    <div className='forum-container'>
        <Header />
        <SideBar />
        <QuestionList />
    </div>
  )
}

export default Forums