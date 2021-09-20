import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, loggedin } from './actions';
import './App.css';

function App() {
  const counter = useSelector(state => state.counter);
  const login = useSelector(state => state.login); 
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h1>Counter: {counter}</h1>
      <button onClick={() => dispatch(increment())}>Aumenta</button>
      <button onClick={() => dispatch(loggedin())}>Login</button>
      {login ? <h1>Bentornato</h1> : <h1>Ma vatti a loggare va!</h1>}
    </div>
  );
}

export default App;
