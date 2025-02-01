import React from 'react'
import Header from './Header'
import SideBar from './SideBar'
import QuestionList from './QuestionList'
import EntireForum from './EntireForum'
import RightComponent from './RightComponent'

function Forums() {
  return (
    <div className='forum-container'>
        <Header /> 
        <SideBar />
        <RightComponent />
    </div>
  )
}

export default Forums