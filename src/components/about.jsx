import "./about.css";

function About() {
  return (
    <section>
      <div className="card">
        <div className="subcard-1">
          <h1>Hi this is Niranjan S</h1>
          <p>
            Welcome! I&apos;m Niranjan. I build full-stack web apps, play with
            interactive UI, and spend way too much time making sure buttons feel
            nice to click. Yes, I use AI to help code faster — because why
            copy-paste manually when tools can speed it up? What matters to me
            is shipping stuff that looks cool, feels smooth, and actually works
            without crashing.
          </p>

          <div className="card-img">
            <div className="img">
              <img src="/story/chapter-1.jpg" alt="Chapter 1" />
            </div>
          </div>
        </div>

        <div className="subcard-2">
          <h1>The Tech Stack</h1>
          <p>Tools I use so I don&apos;t lose my sanity.</p>
          <p>
            Python for backend logic and scripting, React with HTML, CSS, and
            JavaScript for building clean, interactive interfaces, and Git to
            keep everything tracked and shippable without breaking production.
          </p>

          <div className="tech-grid">
            <div className="tech-card">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg"
                alt="Python"
              />
              <span>Python</span>
            </div>

            <div className="tech-card">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
                alt="React"
              />
              <span>React</span>
            </div>

            <div className="tech-card">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg"
                alt="HTML"
              />
              <span>HTML</span>
            </div>

            <div className="tech-card">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
                alt="JavaScript"
              />
              <span>JavaScript</span>
            </div>

            <div className="tech-card">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg"
                alt="CSS"
              />
              <span>CSS</span>
            </div>

            <div className="tech-card">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg"
                alt="Git"
              />
              <span>Git</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;