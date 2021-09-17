import React from 'react';
import { Switch, Route } from 'react-router-dom';
import TelBook from './pages/TelBook';
import Pit from './pages/Pit';
import Helen from './pages/Helen';
import LastPhoneCalls from './pages/LastPhoneCalls';
import Ann from './pages/Ann';

function App() {
  return (
    <>
      <TelBook />
      <Switch>
        <Route path="/pit">
          <Pit />
        </Route>
        <Route path="/helen">
          <Helen />
        </Route>
        <Route path="/ann">
          <Ann />
        </Route>
        <Route path="/lastphonecalls">
          <LastPhoneCalls />
        </Route>
      </Switch>
    </>
  );
}

export default App;
