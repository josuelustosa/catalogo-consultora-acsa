import { Link } from "react-router"
import logo from "../../assets/logo-catalogo-consultora-acsa.png"

function NavBrand() {
	const logoText = "Logo Catálogo Consultora Acsa"

	return (
		<>
			<Link to="/">
				<img
					src={logo}
					alt={logoText}
					className="m-auto w-48 lg:w-55"
					title={logoText}
				/>
			</Link>
		</>
	)
}

export default NavBrand
