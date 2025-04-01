function About() {
  return (
    <div className="flex flex-col gap-6 max-w-prose">
      <div className="flex flex-col md:flex-row max-w-prose">
        <div className="max-[925px]:mb-6">
          <p className="max-sm:text-sm ">
            I am a software engineer from Toronto with a background in web
            development and data engineering. Outside of work I love playing
            sports and traveling.
          </p>
        </div>
      </div>
      <div className="flex flex-col">
        <h2 className="text-slate-300 mb-1 text-sm max-sm:text-xs">Current</h2>
        <p className="max-sm:text-sm">Working on Inflow @ Archon Systems</p>
      </div>
      <div className="flex flex-col">
        <h2 className="text-slate-300 mb-1 text-sm max-sm:text-xs">Previous</h2>
        <div className="flex flex-row">
          <span className="mb-1 max-sm:text-sm">Software Developer</span>
          <span className="flex-grow border-t border-slate-400 self-center mx-3 opacity-20"></span>
          <span className="mb-1 max-sm:text-sm">Shopify</span>
        </div>
        <div className="flex flex-row">
          <span className="mb-1 max-sm:text-sm">Data Engineer</span>
          <span className="flex-grow border-t border-slate-400 self-center mx-3 opacity-20"></span>
          <span className="mb-1 max-sm:text-sm">Tesla</span>
        </div>
        <div className="flex flex-row">
          <span className="mb-1 max-sm:text-sm">Software Developer</span>
          <span className="flex-grow border-t border-slate-400 self-center mx-3 opacity-20"></span>
          <span className="mb-1 max-sm:text-sm">CIBC</span>
        </div>
      </div>
      <div className="flex flex-col">
        <h2 className="text-slate-300 mb-1 text-sm max-sm:text-xs">
          Education
        </h2>
        <p className="max-sm:text-sm">
          Software and Biomedical Engineering @ McMaster University
        </p>
      </div>
      <div className="flex flex-col">
        <h2 className="text-slate-300 mb-1 text-sm max-sm:text-xs">
          Building (WIP)
        </h2>
        <div className="flex flex-col mb-2">
          <h3 className="max-sm:text-sm">NBA Shots</h3>
          <p className="italic max-sm:text-sm">
            Shot charting for nba shooting data
          </p>
        </div>
        <div className="flex flex-col mb-2">
          <h3 className="max-sm:text-sm">Sportami</h3>
          <p className="italic max-sm:text-sm">
            Matching application for people that are looking for tennis partners
          </p>
        </div>
      </div>
      <div className="flex flex-col">
        <h2 className="text-slate-300 mb-1 text-sm max-sm:text-xs">Links</h2>
        <div className="w-full flex flex-col gap-1">
          <p className="max-sm:text-sm">
            <a
              className="underline"
              href="https://github.com/lukamircetic"
              target="_blank"
            >
              github
            </a>
          </p>
          <p className="max-sm:text-sm">
            <a
              className="underline"
              href="https://www.linkedin.com/in/luka-mircetic/"
              target="_blank"
            >
              linkedin
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
