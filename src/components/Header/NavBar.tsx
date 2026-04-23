import { NavLink } from "react-router"
import { NAV_ITEMS } from "../../mocks/nav-item.mock"

function NavBar() {
	return (
		<nav aria-label="Navegação principal (nav)">
			<ul className="flex flex-wrap justify-center gap-6 text-sm text-primary-100">
				{NAV_ITEMS.map((item) => (
					<li key={item.id}>
						<NavLink
							to={item.path}
							className={({ isActive }) =>
								`transition-colors hover:text-primary-300 ${isActive ? "font-semibold underline underline-offset-4" : ""}`
							}
						>
							{item.label}
						</NavLink>
					</li>
				))}
			</ul>
		</nav>
	)
}

export default NavBar
