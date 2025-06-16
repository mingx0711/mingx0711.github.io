import React from 'react';
import HowToUseThis from './components/HowToUseThis';
import QA from './components/QA';
import Contacts from './components/Contacts';
import './App.css'; // Optional: If you have additional styles

function App() {
  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Welcome to My Personal Website</h1>
      </header>
      <main>
        <section id="how-to-use-this">
          <HowToUseThis />
        </section>
        <section id="qa">
          <QA />
        </section>
        <section id="contacts">
          <Contacts />
        </section>
      </main>
      <footer className="app-footer">
        <p>&copy; {new Date().getFullYear()} My Personal Website</p>
      </footer>
    </div>
  );
}

export default App;