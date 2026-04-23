import NavBar from "./NavBar"
import NavBrand from "./NavBrand"

function Header() {
	return (
		<div className="bg-primary-900 w-full flex flex-col gap-3 py-4">
			<NavBrand />
			<NavBar />
		</div>
	)
}

export default Header
