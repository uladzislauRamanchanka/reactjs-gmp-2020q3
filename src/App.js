import React from 'react';
import HeaderMainContainer from './Containers/HeaderMainContainer/HeaderMainContainer'
import MainContent from './Containers/MainContent/MainContent';
import Footer from './Containers/Footer/Footer';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';

function App() {
  return (
    <>
    <ErrorBoundary>
      <HeaderMainContainer/>
      <MainContent/>
      <Footer/>
    </ErrorBoundary>
    </>
  );
}

export default App;
