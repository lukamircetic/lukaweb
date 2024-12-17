import { useState } from "react";
import Nav from "./Nav";
import ProfilePhoto from "./assets/luka2.jpg";
function App() {
  const [page, setPage] = useState(0);
  return (
    <div className="max-w-5xl mb-40 flex flex-col md:flex-row mx-4 mt-8 md:mt-20 lg:mt-32 lg:mx-auto">
      <aside className="md:w-52 md:flex-shrink-0 -mx-4 md:mx-0 md:px-0">
        <Nav currPage={page} setPage={setPage} />
      </aside>
      {page === 0 ? (
        <div className="flex-auto min-w-0 mt-6 md:mt-0 flex flex-col">
          <div className="flex flex-row items-center md:mb-12">
            <h1 className="text-4xl">Luka Mircetic</h1>
          </div>
          <div className="flex flex-col md:flex-row space-x-8">
            <div className="basis-1/2 max-w-prose">
              <p>
                I am a software engineer from Toronto with a background in web
                development and data engineering. Outside of work I love playing
                sports and traveling.
              </p>
            </div>
            <div>
              <img
                src={ProfilePhoto}
                className="w-36 rounded-full basis-1/3 sm:basis-1/3 border-2 border-black max-md:hidden"
              />
            </div>
          </div>
          <div className="flex flex-col mb-6">
            <h2 className="text-slate-300 mb-1">Current</h2>
            <p>Working on Inflow @ Archon Systems</p>
          </div>
          <div className="flex flex-col mb-6">
            <h2 className="text-slate-300 mb-1">Previous</h2>
            <p className="mb-1">Software Developer @ Shopify</p>
            <p className="mb-1">Data Engineer @ Tesla</p>
            <p className="mb-1">Software Developer @ CIBC</p>
          </div>
          <div className="flex flex-col mb-6">
            <h2 className="text-slate-300 mb-1">Education</h2>
            <p>Software and Biomedical Engineering @ McMaster University</p>
          </div>
          <div className="flex flex-col mb-6">
            <h2 className="text-slate-300 mb-1">Building (WIP)</h2>
            <div className="flex flex-col mb-2">
              <h3>NBA Shots</h3>
              <p className="italic">Shot charting for nba shooting data</p>
            </div>
            <div className="flex flex-col mb-2">
              <h3>Sportami</h3>
              <p className="italic">
                Matching application for people that are looking for tennis
                partners
              </p>
            </div>
          </div>
          <div className="flex flex-col">
            <h2 className="text-slate-300 mb-1">Contact</h2>
            <p>Reach me on twitter or linkedin</p>
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}

export default App;
