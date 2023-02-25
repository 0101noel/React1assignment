import React from 'react';
import logo from './logo.svg';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import './App.css';
import './Header.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main className="content">
        <div className="container">
          <h1>Welcome to my React App</h1>
          <p>This is the main content of the app.</p>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;