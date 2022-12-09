import {Link} from 'react-router-dom'
const Navbar =() => {
    return (
        <>
         <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/aboutus">About Us</Link>
        </li>
        <li>
          <Link to="/books">Books</Link>
        </li>
        <li>
          <Link to="/services">Services</Link>
        </li>
        <li>
          <Link to="/testimonies">Testimonies</Link>
        </li>
      </ul>
     </nav>
        </>
    )
}
export default Navbar;