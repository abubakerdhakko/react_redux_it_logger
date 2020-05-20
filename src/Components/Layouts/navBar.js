import React, { Component } from 'react'

export default class navBar extends Component {
  render() {
    return (
      <div>
        <nav style={{ marginBottom: '30px' }}>
          <div className="nav-wrapper">
            <form>
              <div className="input-field">
                <input id="search" type="search" required></input>
                <label className="label-icon" htmlFor="search"><i className="material-icons">search</i></label>
                <i className="material-icons">close</i>
              </div>
            </form>
          </div>
        </nav>
      </div>
    )
  }
}





// import React, { useRef } from 'react'
// import { connect } from 'react-redux'
// import { searchLogs } from '../../actions/logActions'

// const navBar = ({ searchLogs }) => {
//   const text = useRef('');
//   const onChange = e => {
//     searchLogs(text.current.value)
//   }
//   return (
//     <div>
//       <nav style={{ marginBottom: '30px' }}>
//         <div className="nav-wrapper">
//           <form>
//             <div className="input-field">
//               <input id="search" type="search" placeholder="Search Logs..." required ref={text} onChange={onChange}></input>
//               <label className="label-icon" htmlFor="search"><i className="material-icons">search</i></label>
//               <i className="material-icons">close</i>
//             </div>
//           </form>
//         </div>
//       </nav>
//     </div>
//   )
// }
// export default connect(null, { searchLogs })(navBar);
