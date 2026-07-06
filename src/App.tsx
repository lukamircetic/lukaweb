import { Navigate, Route, Routes } from "react-router";
import Nav from "./Nav";
import About from "./About";
import Projects from "./Projects";
import Reading from "./Reading";
import { ReadingProvider } from "./ReadingContext";

function App() {
  return (
    <ReadingProvider>
      <div className="min-h-screen">
        <div className="min-h-screen flex flex-col md:flex-row mx-10 pt-8 md:pt-10 lg:pt-20 lg:mx-auto bg-primary max-w-4xl">
          <aside className="md:flex-shrink-0 max-sm:h-12 -mx-4 -my-0 md:mx-0 md:px-0 md:w-52">
            <Nav />
          </aside>
          <div className="flex-auto min-w-0 flex flex-col">
            <div className="flex-1">
              <div className="flex flex-row items-center md:mb-12 max-md:self-center max-md:mb-6">
                <h1 className="md:text-4xl text-2xl">Luka Mircetic</h1>
              </div>
              <main>
                <Routes>
                  <Route path="/" element={<About />} />
                  <Route path="/projects" element={<Projects />} />
                  <Route path="/reading" element={<Reading />} />
                  <Route path="*" element={<Navigate to="/" replace />} />
                </Routes>
              </main>
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
