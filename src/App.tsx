import React, { useState } from 'react';
import './App.css';

function App() {
  const [activeTab, setActiveTab] = useState('home');

  const renderContent = () => {
    switch (activeTab) {
      case 'home':
        return (
          <section className="content">
            <h2>Willkommen bei Drohne NRW</h2>
            <p>Ihre Experten für Drohnen in Nordrhein-Westfalen</p>
            <div className="gallery">
              <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80" alt="Drohne Beispiel 1" />
              <img src="https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80" alt="Drohne Beispiel 2" />
              <img src="https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=400&q=80" alt="Drohne Beispiel 3" />
              <img src="https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80" alt="Drohne Beispiel 4" />
            </div>
          </section>
        );
      case 'services':
        return (
          <section className="content">
            <h2>Unsere Dienstleistungen</h2>
            <ul className="services-list">
              <li>Drohnenvermessung</li>
              <li>Luftbildaufnahmen</li>
              <li>Inspektionen</li>
              <li>3D-Modellierung</li>
            </ul>
          </section>
        );
      case 'about':
        return (
          <section className="content">
            <h2>Über uns</h2>
            <p>Wir sind ein Team von zertifizierten Drohnenpiloten mit jahrelanger Erfahrung in der Luftbildaufnahme und Vermessung.</p>
          </section>
        );
      case 'contact':
        return (
          <section className="content">
            <h2>Kontakt</h2>
            <div className="contact-info">
              <p>Email: info@drohne-nrw.de</p>
              <p>Telefon: +49 (0) XXX XXX XXX</p>
              <p>Adresse: Musterstraße 123, 12345 Musterstadt</p>
            </div>
          </section>
        );
      default:
        return null;
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Drohne NRW</h1>
        <nav className="navigation">
          <button 
            className={`nav-button ${activeTab === 'home' ? 'active' : ''}`}
            onClick={() => setActiveTab('home')}
          >
            Home
          </button>
          <button 
            className={`nav-button ${activeTab === 'services' ? 'active' : ''}`}
            onClick={() => setActiveTab('services')}
          >
            Dienstleistungen
          </button>
          <button 
            className={`nav-button ${activeTab === 'about' ? 'active' : ''}`}
            onClick={() => setActiveTab('about')}
          >
            Über uns
          </button>
          <button 
            className={`nav-button ${activeTab === 'contact' ? 'active' : ''}`}
            onClick={() => setActiveTab('contact')}
          >
            Kontakt
          </button>
        </nav>
      </header>
      <main>
        {renderContent()}
      </main>
      <footer>
        <p>&copy; {new Date().getFullYear()} Drohne NRW. Alle Rechte vorbehalten.</p>
      </footer>
    </div>
  );
}

export default App; 