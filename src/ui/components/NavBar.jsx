import { Link, NavLink, useNavigate } from "react-router-dom";

export const Navbar = () => {
  //! useNavigate es un custom Hook creado por React Routes para ayudar a navegar
  const navigate = useNavigate();

  //! El replace evita que uno pueda hacer un Back y estar nuevamente Logueado (despues de usar Logout)
  const onLogout = () => {
    navigate("/login", {
      replace: true,
    });
  };

  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-2 ">
      <Link className="navbar-brand" to="/">
        Asociaciones
      </Link>

      <div className="navbar-collapse">
        <div className="navbar-nav">
          <NavLink
            className={({ isActive }) =>
              `nav-item nav-link ${isActive ? "active" : ""}`
            }
            to="/marvel"
          >
            Marvel
          </NavLink>

          <NavLink
            className={({ isActive }) =>
              `nav-item nav-link ${isActive ? "active" : ""}`
            }
            to="/dc"
          >
            DC
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `nav-item nav-link ${isActive ? "active" : ""}`
            }
            to="/HeroPage"
          >
            Hero
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `nav-item nav-link ${isActive ? "active" : ""}`
            }
            to="/SearchPage"
          >
            Search
          </NavLink>
        </div>
      </div>

      <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
        <ul className="navbar-nav ml-auto">
          <span className="nav-item nav-link text-primary">Tadeo</span>

          <button className="nav-item nav-link btn" onClick={onLogout}>
            Logout
          </button>
        </ul>
      </div>
    </nav>
  );
};
