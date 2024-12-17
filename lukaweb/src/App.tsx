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
      <div className="max-w-5xl pb-30 flex flex-col md:flex-row mx-4 pt-8 md:pt-10 lg:pt-20 lg:mx-auto bg-primary">
        <aside className="md:w-52 md:flex-shrink-0 max-sm:h-12 -mx-4 -my-0 md:mx-0 md:px-0">
          <Nav currPage={page} setPage={setPage} />
        </aside>
        <div className="flex-auto min-w-0 md:mt-0 flex flex-col">
          <div className="flex flex-row items-center md:mb-12 max-sm:self-center max-sm:mb-6">
            <h1 className="md:text-4xl text-2xl">Luka Mircetic</h1>
          </div>
          {renderPage()}
        </div>
      </div>
      <div className="self-center w-full text-center text-xs fixed bottom-4">
        © Luka Mircetic ⦁ 2025
      </div>
    </div>
  );
}

export default App;
