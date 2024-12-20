import { useState } from "react";
import Nav from "./Nav";
import About from "./About";
import Projects from "./Projects";

enum Pages {
  About,
  Projects,
  Travel,
}

function App() {
  const [page, setPage] = useState<Pages>(Pages.About);

  const renderPage = () => {
    switch (page) {
      case Pages.About:
        return <About />;
      case Pages.Projects:
        return <Projects />;
      default:
        return <div>WIP</div>;
    }
  };

  return (
    <div className="">
      <div className="pb-30 flex flex-col md:flex-row mx-10 pt-8 md:pt-10 lg:pt-20 lg:mx-auto bg-primary max-w-4xl">
        <aside className="md:flex-shrink-0 max-sm:h-12 -mx-4 -my-0 md:mx-0 md:px-0 md:w-52">
          <Nav currPage={page} setPage={setPage} />
        </aside>
        <div className="flex-auto min-w-0 md:mt-0 flex flex-col">
          <div className="flex flex-row items-center md:mb-12 max-md:self-center max-md:mb-6">
            <h1 className="md:text-4xl text-2xl">Luka Mircetic</h1>
          </div>
          {renderPage()}
          <div className="self-start justify-self-start fw-full text-center text-xs mt-12">
            © Luka Mircetic ⦁ 2025
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
