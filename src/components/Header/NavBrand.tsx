import { Link } from "react-router";
import logo from "../../assets/logo-catalogo-consultora-acsa.png";

function NavBrand() {
  const logoTitle = "Logo Catálogo Consultora Acsa";

  return (
    <>
      <Link to="/">
        <img
          src={logo}
          alt={logoTitle}
          className="m-auto w-48 lg:w-55"
          title={logoTitle}
        />
      </Link>
    </>
  );
}

export default NavBrand;
