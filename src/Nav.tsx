import { Dispatch, SetStateAction } from "react";

interface NavProps {
  currPage: number;
  setPage: Dispatch<SetStateAction<number>>;
}

function Nav({ currPage, setPage }: NavProps) {
  const pages = [
    { pageNum: 0, title: "About", url: "/" },
    { pageNum: 1, title: "Projects", url: "/projects" },
    { pageNum: 2, title: "Reading", url: "/reading" },
  ];
  const activeNavItem = {
    divCss:
      "md:relative md:mr-2 h-0 w-0 border-t-4 border-b-4 border-l-8 border-l-secondary border-t-transparent border-b-transparent mt-1 md:mt-0 max-md:hidden",
    aCss: "transition-opacity text-base text-secondary font-bold",
  };

  const inactiveNavItem = {
    divCss:
      "md:relative rounded-full md:mr-3 w-1 h-1 mt-1 md:mt-0 bg-primary scale-150 max-md:hidden",
    aCss: "transition-opacity text-base text-white",
  };

  return (
    <nav className="flex flex-row md:flex-col items-start relative max-md:justify-center">
      <div className="h-10 mb-12"></div>
      <div className="flex flex-row md:flex-col space-x-4 md:space-x-0 md:pr-10">
        {pages.map((page, index) => (
          <div
            className="flex flex-col md:flex-row py-1 items-center"
            key={index}
          >
            <div
              className={
                page.pageNum === currPage
                  ? activeNavItem.divCss
                  : inactiveNavItem.divCss
              }
            ></div>
            <div
              role="button"
              onClick={() => setPage(page.pageNum)}
              className={
                page.pageNum === currPage
                  ? activeNavItem.aCss
                  : inactiveNavItem.aCss
              }
            >
              {page.title}
            </div>
          </div>
        ))}
      </div>
    </nav>
  );
}

export default Nav;
