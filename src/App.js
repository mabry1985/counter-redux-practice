import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, signIn } from './actions';

function App() {
  const counter = useSelector(state => state.counterReducer);
  const isLogged = useSelector(state => state.isLogged);
  const dispatch = useDispatch();

  return (
    <div className='App'>
    <button onClick={() => dispatch(signIn())}>
            Sign in
    </button>
    <h2>Counter {counter}</h2>
    <p onClick={() => dispatch(increment())}>up</p>
    <p onClick={() => dispatch(decrement())}>down</p>
     {isLogged ? <h3>Valuable Information I shouldn't see</h3> : ''}
    </div>
  );
}

export default App;
