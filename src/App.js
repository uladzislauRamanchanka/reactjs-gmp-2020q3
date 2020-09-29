import React, { useState, useEffect } from 'react';
import HeaderMainContainer from './Containers/HeaderMainContainer/HeaderMainContainer'
import MainContent from './Containers/MainContent/MainContent';
import Footer from './Containers/Footer/Footer';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';
import MovieDetailsContainer from './Containers/MovieDetailsContainer/MovieDetailsContainer'
import { Provider } from 'react-redux'
import store from './store'

function App() {

  const [editItem, setEditItem] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [editItem])

  return (
    <>
    <ErrorBoundary>
      <Provider store={store}>
      {editItem ? <MovieDetailsContainer returnBack={() => setEditItem(false)}/> : <HeaderMainContainer />}
      <MainContent editItem={() => setEditItem(true)}/>
      <Footer/>
      </Provider>
    </ErrorBoundary>
    </>
  );
}

export default App;
