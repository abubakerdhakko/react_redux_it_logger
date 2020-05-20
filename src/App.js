import React, { useEffect, Fragment } from 'react';
import 'materialize-css/dist/css/materialize.min.css'
import M from 'materialize-css/dist/js/materialize.min.js'
import SearchBar from './Components/Layouts/navBar'
import LogsItems from './Components/Logs/Logs'
import AddBtn from './Components/Layouts/AddBtn'
import AddLoginModal from './Components/Logs/AddLogModal'
import EditLoginModal from './Components/Logs/EditLogModal'
import AddTechModal from './Components/techs/AddTechModal'
import TechListModal from './Components/techs/TechlistModal'
import { Provider } from 'react-redux';
import store from './store'
import './App.css';

const App = () => {
  useEffect(() => {
    M.AutoInit();
  });

  return (
    <div className="App">
      <Provider store={store} >
        <Fragment>
          <SearchBar></SearchBar>
          <AddBtn></AddBtn>
          <LogsItems></LogsItems>
          <AddLoginModal></AddLoginModal>
          <EditLoginModal></EditLoginModal>
          <AddTechModal></AddTechModal>
          <TechListModal></TechListModal>
        </Fragment>
      </Provider>
    </div>
  );
}

export default App;
