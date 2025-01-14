import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCamera } from '@fortawesome/free-solid-svg-icons';

function Header() {

  return (
    <div className='header'>
        <ul>
            <li><FontAwesomeIcon icon={faCamera} /></li>
            <li></li>
            <li></li>
        </ul>
    </div>
  )
}

export default Header