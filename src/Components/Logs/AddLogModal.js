import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addLog } from '../../actions/logActions'
import M from 'materialize-css/dist/js/materialize.min.js'

// import TechSelectOptions from '../techs/TechSelectOptions';;
const AddLogModal = ({ addLog }) => {
  const [message, setMessage] = useState('');
  const [attention, setAttention] = useState(false);
  const [tech, setTech] = useState('');
  const onSubmit = () => {
    if (message == '' || tech == '') {
      M.toast({ html: 'please enter a meassage' });
    } else {

      console.log(message, attention, tech)
      const newLog = {
        message,
        attention,
        tech,
        date: new Date(),
      }
      addLog(newLog);

      M.toast({ html: `log added by ${tech}` });

      setMessage('');
      setAttention('');
      setTech('');
    }
  };

  return (
    <div id='add-log-modal' className='modal' style={modalStyle}>
      <div className='modal-content'>
        <h4>Enter System Log</h4>
        <div className='row'>
          <div className='input-field'>
            <input
              type='text'
              name='message'
              value={message}
              onChange={e => setMessage(e.target.value)}
            />
            <label htmlFor='message' className='active'>
              Log Message
            </label>
          </div>
        </div>
        <div className='row'>
          <div className='input-field'>
            <select
              name='tech'
              value={tech}
              className='browser-default'
              onChange={e => setTech(e.target.value)}>
              <option value='' disabled>
                Select Technician
              </option>
              {/* <TechSelectOptions /> */}
              <option value="A">A</option>
              <option value="B">B</option>
              <option value="C">C</option>
            </select>
          </div>
        </div>
        <div className='row'>
          <div className='input-field'>
            <p>
              <label>
                <input
                  type='checkbox'
                  className='filled-in'
                  checked={attention}
                  value={attention}
                  onChange={e => setAttention(!attention)}
                />
                <span>Needs Attention</span>
              </label>
            </p>
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

export default connect(null, { addLog })(AddLogModal);