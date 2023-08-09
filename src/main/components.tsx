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

export function ContentWrapper() {
  return (
    <section id="main">
      <Toolbar />
      TO DO table...
    </section>
  );
}
