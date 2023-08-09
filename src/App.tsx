import React from "react";
import logo from "./images/network-team-icon.png";
import "./style.css";

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
    <>
      <AppHeader />
      <ContentWrapper />
      <AppFooter />
    </>
  );
}

export default App;
