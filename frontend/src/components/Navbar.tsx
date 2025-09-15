import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav style={{ padding: "10px", background: "#f4f4f4" }}>
      <Link to="/" style={{ marginRight: "10px" }}>Home</Link>
      <Link to="/book" style={{ marginRight: "10px" }}>Books</Link>
      <Link to="/login">Login</Link>
    </nav>
  );
};

export default Navbar;