import React, { useState } from 'react';
import './App.css';
import Header from './Header';
import Login from './Login';
import SignUp from './SignUp';

function App() {
  const [currentView, setCurrentView] = useState('');

  const showLogin = () => setCurrentView('login');
  const showSignUp = () => setCurrentView('signup');
  
  const redirectToHome = () => {
    setCurrentView('home'); 
  };

  return (
    <div>
      <Header showLogin={showLogin} />
      {currentView === 'login' && <Login showSignUp={showSignUp} redirectToHome={redirectToHome} />}
      {currentView === 'signup' && <SignUp showLogin={showLogin} />}
      {currentView === 'home' && <h1>Welcome to the Home Page!</h1>}
    </div>
  );
}
export default App;
