import { Link } from 'react-router-dom';

const Header = () => (
  <header className="header">
    <nav className="nav-bar">
      <h1 className="title">Math Magicians</h1>
      <ul className="nav-links">
        <li className="nav-link-item">
          <Link to="/" className="nav-link">
            Home
          </Link>
        </li>
        <li className="nav-link-item">
          <Link to="/calculator" className="nav-link">
            Calculator
          </Link>
        </li>
        <li className="nav-link-item">
          <Link to="/quotes" className="nav-link">
            Quotes
          </Link>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
