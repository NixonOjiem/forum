import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTags } from '@fortawesome/free-solid-svg-icons';
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons';
import { faUsers } from '@fortawesome/free-solid-svg-icons';
import {faUser} from '@fortawesome/free-solid-svg-icons';
import { faIdBadge } from '@fortawesome/free-solid-svg-icons';


function SideBar() {
  return (
    <div className='sidebar'>
        <div className='container-side'>
            <li><FontAwesomeIcon icon={faQuestionCircle} className='sidebar-icon' />Questions</li>
            <li><FontAwesomeIcon icon={faTags} className='sidebar-icon' />Tags</li>
            <li><FontAwesomeIcon icon={faUsers} className='sidebar-icon' />Users</li>
            <li><FontAwesomeIcon icon={faIdBadge} className='sidebar-icon' />Badges</li>
           
        </div>
    </div>
  )
}

export default SideBar