import logo from "../../assets/logo-catalogo-consultora-acsa.png"

function NavBrand() {
	const logoText = "Logo Catálogo Consultora Acsa"

	return (
		<>
			<img
				src={logo}
				alt={logoText}
				className="m-auto w-55 pb-4"
				title={logoText}
			/>
		</>
	)
}

export default NavBrand
