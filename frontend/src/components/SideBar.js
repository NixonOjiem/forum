import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTags } from '@fortawesome/free-solid-svg-icons';
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons';
import { faUsers } from '@fortawesome/free-solid-svg-icons';
import {faUser} from '@fortawesome/free-solid-svg-icons';
import { faIdBadge } from '@fortawesome/free-solid-svg-icons';
import { faQuestion } from '@fortawesome/free-solid-svg-icons';
import QuestionList from './QuestionList';
import Tags from './Tags';
import Users from './Users';
import Badges from './Badges';
import AskQuestion from './AskQuestion';
import RisingQuestions from './RisingQuestions';
import { faArrowTrendUp } from '@fortawesome/free-solid-svg-icons';



const SideBar= ({onContentChange})=> {
  return (
    <div className='sidebar'>
        <div className='container-side'>
            <li onClick={()=> onContentChange(<QuestionList />)}><FontAwesomeIcon icon={faQuestionCircle} className='sidebar-icon' />  Questions</li>
            <li onClick={()=> onContentChange(<RisingQuestions />)}><FontAwesomeIcon icon={faArrowTrendUp} className='icon'/> Trending</li>
            <li onClick={()=> onContentChange(<Tags />)}><FontAwesomeIcon icon={faTags} className='sidebar-icon' />  Tags</li>
            <li onClick={()=> onContentChange(<Users />)}><FontAwesomeIcon icon={faUser} className='sidebar-icon' />User</li>
            <li onClick={()=> onContentChange(<Badges />)}><FontAwesomeIcon icon={faIdBadge} className='sidebar-icon' />  Badges</li>
            <li onClick={()=> onContentChange(<AskQuestion />)}><FontAwesomeIcon icon={faQuestion} className='sidebar-icon' /> Ask a Question</li>
        </div>
    </div>
  )
}

export default SideBar