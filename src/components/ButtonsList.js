import React from 'react';
import { GrMail } from 'react-icons/gr';
import { FaLinkedin } from 'react-icons/fa';

const ButtonsList = () => {
  return (
    <div className='button-container'>
        <button className='email-button'>
            <GrMail color='#374151' size='16px' style={{marginRight: 8}}/>
            <h4 className='email-content'>Email</h4>
        </button>
        <button className='linkedin-button'>
            <FaLinkedin color='white' size='16px' style={{marginRight: 8}}/>
            <h4 className='linkedin-content'>LinkedIn</h4>
        </button>
    </div>
  )
}

export default ButtonsList