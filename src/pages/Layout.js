import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <div class="topnav" id="Topnav">
        <Link className = "navitem" to="/about">About Me</Link>
        <Link className = "navitem" to="/">Home</Link>
        <Link className = "navitem" to="/projects">Projects</Link>
      </div>
      <Outlet />
    </div>
  )
};

export default Layout;
