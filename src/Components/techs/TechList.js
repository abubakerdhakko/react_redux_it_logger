import React from 'react'

export default function ({ tech }) {
  return (
    <div>
      <div>
        <li className='collection-item'>
          <div>
            <br />
            <div className='black-text'>ID #{tech.firstName}{tech.lastName} <a href="!#" className="secondary-content grey-text "><i className="material-icons grey-text">delete</i></a> </div>
          </div>
        </li>
      </div>
    </div>
  )
}
