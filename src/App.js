import './App.css';
import React from 'react';
import ComponentA from './components/ComponentA';
import ComponentB from './components/ComponentB';
import ComponentC from './components/ComponentC';
import ComponentD from './components/ComponentD';
import ComponentE from './components/ComponentE';
import ComponentF from './components/ComponentF';

export const UserContext = React.createContext()
export const ChannelContext = React.createContext()

function App() {
  return (
    <div className="App">
      {/* <ComponentA/>
      <ComponentB/>
      <ComponentC/>
      <ComponentD/>
      <ComponentE/>
      <ComponentF/> */}
      {/* <UserContext.Provider value={'Japneet'}>
        <ChannelContext.Provider value={'Dark Theme'}> */}
          {/* <ComponentA/> */}
        {/* </ChannelContext.Provider>
      </UserContext.Provider> */}
      <UserContext.Provider value={'Japneet'}>
        <ChannelContext.Provider value={'Dark Theme'}>
          <ComponentD/>
        </ChannelContext.Provider>
      </UserContext.Provider>
      {/* <ComponentB/>
      <ComponentD/> */}
    </div>
  );
}

export default App;