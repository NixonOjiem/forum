import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCamera } from '@fortawesome/free-solid-svg-icons';
import {faHouse} from '@fortawesome/free-solid-svg-icons';
import { faNewspaper } from '@fortawesome/free-solid-svg-icons';
import { faPeopleGroup } from '@fortawesome/free-solid-svg-icons';
import { faArrowTrendUp } from '@fortawesome/free-solid-svg-icons';
import Users from './Users';
import QuestionList from './QuestionList';
import RisingQuestions from './RisingQuestions';

library.add(faHouse);

const Header=({onContentChange})=> {

  return (
<div className='header'>
    <h1>Questy</h1>
    <div className='nav-container'>
        <ul>
            <li onClick={()=> onContentChange(<Users />)}><FontAwesomeIcon icon={faPeopleGroup} className='icon'/></li>
            <li onClick={()=> onContentChange(<QuestionList />)}><FontAwesomeIcon icon="fa-solid fa-house" className='icon'/></li>
            <li onClick={()=> onContentChange(<RisingQuestions />)}><FontAwesomeIcon icon={faArrowTrendUp} className='icon'/></li>
        </ul>
    </div>
</div>
  )
}

export default Header