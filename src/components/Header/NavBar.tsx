import { NavLink } from "react-router"
import { NAV_ITEMS } from "../../mocks/nav-item.mock"

function NavBar() {
	return (
		<nav
			aria-label="Navegação principal (nav)"
			className="overflow-x-auto overflow-y-hidden lg:overflow-visible"
		>
			<ul className="mx-auto flex w-max min-w-full justify-center gap-2 md:gap-4 lg:gap-5 px-4 text-sm text-primary-100">
				{NAV_ITEMS.map((item) => (
						<li key={item.id} className="shrink-0">
							<NavLink
								to={item.path}
								end={item.path === "/"}
								className={({ isActive }) =>
									`block whitespace-nowrap py-1 lg:py-1.5 px-2 lg:px-3 border-2 border-primary-700 rounded-full transition-colors hover:bg-primary-700 ${isActive ? "bg-primary-700 font-semibold" : ""}`
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
