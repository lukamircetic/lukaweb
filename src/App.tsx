import { useState } from "react";
import Nav from "./Nav";
import About from "./About";
import Projects from "./Projects";
import Reading from "./Reading";
import { ReadingProvider } from "./ReadingContext";

enum Pages {
  About,
  Projects,
  Reading,
}

function App() {
  const [page, setPage] = useState<Pages>(Pages.About);

  const renderPage = () => {
    switch (page) {
      case Pages.About:
        return <About />;
      case Pages.Projects:
        return <Projects />;
      case Pages.Reading:
        return <Reading />;
      default:
        return <div>WIP</div>;
    }
  };

  return (
    <ReadingProvider>
      <div className="min-h-screen">
        <div className="min-h-screen flex flex-col md:flex-row mx-10 pt-8 md:pt-10 lg:pt-20 lg:mx-auto bg-primary max-w-4xl">
          <aside className="md:flex-shrink-0 max-sm:h-12 -mx-4 -my-0 md:mx-0 md:px-0 md:w-52">
            <Nav currPage={page} setPage={setPage} />
          </aside>
          <div className="flex-auto min-w-0 flex flex-col justify-between sm:justify-start">
            <div>
              <div className="flex flex-row items-center md:mb-12 max-md:self-center max-md:mb-6">
                <h1 className="md:text-4xl text-2xl">Luka Mircetic</h1>
              </div>
              {renderPage()}
            </div>
            <footer className="sm:self-start text-center text-xs mt-12 mb-6">
              © Luka Mircetic ⦁ 2025
            </footer>
          </div>
        </div>
      </div>
    </ReadingProvider>
  );
}

export default App;
