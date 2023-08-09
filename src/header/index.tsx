import logo from "../images/network-team-icon.png";
import "./style.css";

export default function AppHeader() {
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
