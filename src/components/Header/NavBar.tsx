import { NavLink } from "react-router";
import { NAV_ITEMS } from "../../mocks/nav-item.mock";

function NavBar() {
  return (
    <nav
      aria-label="Navegação principal (nav)"
      className="overflow-x-auto overflow-y-hidden lg:overflow-x-visible"
    >
      <ul className="mx-auto flex w-max min-w-full justify-center gap-2 md:gap-4 px-4 text-md">
        {NAV_ITEMS.map((item) => (
          <li key={item.id} className="shrink-0">
            <NavLink
              to={item.path}
              end={item.path === "/"}
              className={({ isActive }) =>
                [
                  "block whitespace-nowrap py-1.5 px-4 rounded-full border-2 border-accent shadow-sm transition-all active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
                  isActive
                    ? "bg-accent text-primary font-semibold shadow-md"
                    : "bg-primary text-accent hover:bg-accent hover:text-primary hover:shadow-md",
                ].join(" ")
              }
            >
              {item.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default NavBar;
