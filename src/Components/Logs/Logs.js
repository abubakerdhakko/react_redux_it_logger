import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import LogsItems from './LogsItems'
import Preloader from '../Layouts/Preloader'
import { getLogs } from '../../actions/logActions'

const Logs = ({ log: { logs, loading }, getLogs }) => {
  useEffect(() => {
    getLogs()
    // eslint-disable-next-line
  }, [])

  if (loading || logs === null) {
    return <Preloader></Preloader>;
  }
  return (
    <div className="container">
      <ul className="collection with-header">
        <li className="collection-header">
          <h4 className="center">
            System Logs
          </h4>
        </li>
        {!loading && logs.length === 0 ? (<p className="center">no logs to show....</p>) : (
          logs.map(log => <LogsItems log={log} key={log.id}></LogsItems>
          ))}

      </ul>
    </div>
  )
};
const mapStateToProps = state => ({
  log: state.log // log is same as definrd in the root reducer

})


export default connect(mapStateToProps, { getLogs })(Logs);
