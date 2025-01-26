import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCamera } from '@fortawesome/free-solid-svg-icons';
import {faHouse} from '@fortawesome/free-solid-svg-icons';
import { faNewspaper } from '@fortawesome/free-solid-svg-icons';
import { faPeopleGroup } from '@fortawesome/free-solid-svg-icons';
import { faArrowTrendUp } from '@fortawesome/free-solid-svg-icons';

library.add(faHouse);

function Header() {

  return (
<div className='header'>
    <h1>Questy</h1>
    <div className='nav-container'>
        <ul>
            <li><FontAwesomeIcon icon={faPeopleGroup} className='icon'/></li>
            <li><FontAwesomeIcon icon="fa-solid fa-house" className='icon'/></li>
            <li><FontAwesomeIcon icon={faArrowTrendUp} className='icon'/></li>
        </ul>
    </div>
</div>
  )
}

export default Header