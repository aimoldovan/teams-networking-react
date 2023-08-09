import React from "react";
import logo from "./images/network-team-icon.png";
import "./App.css";
import "./style.css";

function App_old() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
      </header>
    </div>
  );
}

function AppHeader() {
  return (
    <header>
      <div id="header-wrapper">
        <div>
          <img src={logo} width="100" alt="" />
        </div>
        <div>
          <h1>Teams networking</h1>
          <h2>CRUD operations example (Create, Read, Update, Delete)</h2>
        </div>
      </div>
    </header>
  );
}

function Toolbar() {
  return (
    <div className="tbar">
      <button id="removeSelected">❌ Remove selected</button>
      <div className="tfill"></div>
      <input placeholder="Search" type="search" name="search" id="search" />
      🔎
    </div>
  );
}

function ContentWrapper() {
  return (
    <section id="main">
      <Toolbar />
      TO DO table...
    </section>
  );
}

function AppFooter() {
  return <footer>📃 API Docs | 👨‍💻 Source code</footer>;
}

function App() {
  return (
    <div>
      <AppHeader />
      <ContentWrapper />
      <AppFooter />
    </div>
  );
}

export default App;
