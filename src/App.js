import React from 'react';
import {useGlobalContext} from './context';

import SetupForm from './SetupForm';
import Loading from './Loading';
import Modal from './Modal';

function App() {
  const {waiting, loading, question, index, correct, error} =
    useGlobalContext();

  // if we are waiting display SetupForm component
  if (waiting) {
    return <SetupForm />;
  }

  // if we are loading display Loading component
  if (loading) {
    return <Loading />;
  }

  return <main>quiz app</main>;
}

export default App;
