import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <nav>
        <div className="logo">
          <p>Navbar</p>
        </div>
        <ul>
          <li>
            <Link to="/">home</Link>
          </li>
          <li>
            <Link to="/tower">tower</Link>
          </li>
          <li>
            <Link to="/hotel">hotel</Link>
          </li>
          <li>
            <Link to="/triomphe">triomphe</Link>
          </li>
          <li>
            <Link to="/grande">grande</Link>
          </li>
        </ul>   
      </nav>
    </>
  );
};
export default Navbar;
