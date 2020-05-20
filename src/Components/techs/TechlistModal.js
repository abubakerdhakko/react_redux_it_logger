import React, { useState, useEffect } from 'react';
import { connect } from "react-redux";
import { getTechs } from "../../actions/techAction"
import TechList from './TechList'




const TechListModal = ({ getTechs, tech: { techs, loading } }) => {


  useEffect(() => {
    getTechs()
    // eslint-disable-next-line
  }, [])

  return (
    <div id='tech-list-modal' className='modal' style={modalStyle}>
      <div className='modal-content'>
        <h4>List Technician</h4>
        <div className="container">
          <ul className="collection with-header">
            <li className="collection-header">
              <h4 className="center">
              </h4>
            </li>
            {!loading && techs !== null &&
              techs.map(tech =>
                // <li className="collectio-items">{tech.firstName}</li>
                <TechList tech={tech} key={tech.id}></TechList>

              )}
          </ul>
        </div>
      </div>
      <div className='modal-footer'>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  tech: state.tech  // log is same as definrd in the root reducer
})

const modalStyle = {
  width: '75%',
  height: '75%'
};



export default connect(mapStateToProps, { getTechs })(TechListModal)

