import { NavLink } from "react-router";

function Nav() {
  const pages = [
    { title: "About", to: "/" },
    { title: "Projects", to: "/projects" },
    { title: "Reading", to: "/reading" },
  ];

  return (
    <nav className="flex flex-row md:flex-col items-start relative max-md:justify-center">
      <div className="h-10 mb-12"></div>
      <div className="flex flex-row md:flex-col space-x-4 md:space-x-0 md:pr-10">
        {pages.map((page) => (
          <NavLink
            className={({ isActive }) =>
              `flex flex-col md:flex-row py-1 items-center transition-opacity text-base ${
                isActive ? "text-secondary" : "text-white"
              }`
            }
            end={page.to === "/"}
            key={page.to}
            to={page.to}
          >
            {({ isActive }) => (
              <>
                <span
                  className={`md:mr-2 w-4 text-secondary max-md:hidden ${
                    isActive ? "" : "invisible"
                  }`}
                >
                  {">"}
                </span>
                <span>{page.title}</span>
              </>
            )}
          </NavLink>
        ))}
      </div>
    </nav>
  );
}

export default Nav;
