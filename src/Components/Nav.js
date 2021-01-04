import './App.scss';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <nav>
      <h3>Logo</h3>
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
