import { Dispatch, SetStateAction } from "react";

interface NavProps {
  currPage: number;
  setPage: Dispatch<SetStateAction<number>>;
}

function Nav({ currPage, setPage }: NavProps) {
  const pages = [
    { pageNum: 0, title: "About", url: "/" },
    { pageNum: 1, title: "Projects", url: "/projects" },
    { pageNum: 2, title: "Travel", url: "/travel" },
  ];
  const activeNavItem = {
    divCss:
      "md:relative rounded-full md:mr-2 w-1 h-1 mt-1 md:mt-0 bg-black scale-125",
    aCss: "transition-opacity text-sm text-black",
  };

  const inactiveNavItem = {
    divCss:
      "md:relative rounded-full md:mr-2 w-1 h-1 mt-1 md:mt-0 bg-white scale-125",
    aCss: "transition-opacity text-sm text-black",
  };
  return (
    <nav className="flex flex-row md:flex-col items-start relative">
      <div className="h-10 mb-12"></div>
      <div className="flex flex-row md:flex-col space-x-4 md:space-x-0 pr-10">
        {pages.map((page, index) => (
          <div
            className="flex flex-col md:flex-row text-sm py-1 items-center"
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
