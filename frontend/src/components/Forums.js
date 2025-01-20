import React from 'react'
import Header from './Header'
import SideBar from './SideBar'
import QuestionList from './QuestionList'
import EntireForum from './EntireForum'

function Forums() {
  return (
    <div className='forum-container'>
        <Header />
        <EntireForum />
    </div>
  )
}

export default Forums