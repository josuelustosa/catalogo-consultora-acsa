import NavBar from "./NavBar"
import NavBrand from "./NavBrand"

function Header() {
	return (
		<div className="bg-primary-900 py-6">
			<NavBrand />
			<NavBar />
		</div>
	)
}

export default Header
