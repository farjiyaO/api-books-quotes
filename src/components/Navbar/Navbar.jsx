import { Link } from "react-router-dom";
import "./Navbar.css";
const Navbar = () => {
  return (
    <nav className="navbar">

      <ul className="">
        <li>
          <Link className="nav-link" to="/">Home</Link>
        </li>   
        <li>
          <Link className="nav-link" to="/books">Books</Link>
        </li>
        <li>
          <Link className="nav-link" to="/quote">Quote</Link>
        </li>
      </ul>
    </nav>

  );    
}

export default Navbar;