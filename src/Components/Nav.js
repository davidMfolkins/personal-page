import './Nav.scss';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <nav>
      <Link className="logo-link" to="/">
        <h3>Logo</h3>
      </Link>
      <ul className="nav-links">
        <Link className="text-link" to='/about'>
          <li>About</li>
        </Link>
        <Link className="text-link" to='/projects'>
          <li>Projects</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Nav;
