import React, { useState } from 'react';
import M from 'materialize-css/dist/js/materialize.min.js'

// import TechSelectOptions from '../techs/TechSelectOptions';;

export default function AddLogModal() {
  const [firstName, setfirstName] = useState('');
  const [lastName, setlastName] = useState('');
  const onSubmit = () => {
    if (firstName == '' || lastName == '') {
      M.toast({ html: 'please enter a meassage' });
    } else {
      console.log(firstName, lastName)
    }
  };

  return (
    <div id='tech-modal' className='modal' style={modalStyle}>
      <div className='modal-content'>
        <h4>Add Technician</h4>
        <div className='row'>
          <div className='input-field'>
            <input
              type='text'
              name='firstName'
              value={firstName}
              onChange={e => setfirstName(e.target.value)}
            />
            <label htmlFor='firstName' className='active'>
              First Name            </label>
          </div>
        </div>

        <div className='row'>
          <div className='input-field'>
            <input
              type='text'
              name='lastName'
              value={lastName}
              onChange={e => setlastName(e.target.value)}
            />
            <label htmlFor='lastName' className='active'>
              Last Name
                </label>
          </div>
        </div>


      </div>
      <div className='modal-footer'>
        <a
          href='#!'
          onClick={onSubmit}
          className='modal-close waves-effect blue waves-light btn'
        >
          Enter
        </a>
      </div>
    </div>
  );
};


const modalStyle = {
  width: '75%',
  height: '75%'
};
