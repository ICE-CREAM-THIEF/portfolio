import { Routes, Route } from 'react-router-dom'
import './App.css'
import TopNavFixed from './components/topnavfixed.jsx'
import HeroSection from './components/hero-section.jsx'
import Sidenav from './components/sidenav.jsx'
import About from './components/about.jsx'
function App() {
const data = [
  { id: 1, title: "First", image: "/public/story/chapter-1.jpg", head: "Welcome to My Portfolio", sub: "Just a guy who types fast and hopes the code compiles.", con: "Welcome! I'm Niranjan. I build full-stack web apps, play with interactive UI, and spend way too much time making sure buttons feel nice to click. Yes, I use AI to help code faster — because why copy-paste manually when tools can speed it up? What matters to me is shipping stuff that looks cool, feels smooth, and actually works without crashing." },
  { id: 2, title: "Second", image: "/public/story/chapter-2.jpg", head:"How It All Started   ", sub:"It began with 'Inspect Element' and spiraled out of control.   ", con: "I didn't start with a grand 4-year master plan. I just wanted to edit text on a webpage using Inspect Element, felt like a 90s movie hacker, and decided to learn how to build real websites. Turns out coding is 20% writing logic and 80% wondering why a <div> won't center. But hey, solving the puzzle is the best part.   " },
  { id: 3, title: "Third", image: "/public/story/chapter-3.jpg", head:"The Art of Not Breaking Stuff   ", sub:"Making web pages smooth instead of clunky.   ", con: "Nobody likes a website that stutters or takes 5 seconds to respond to a click. I care a lot about how UI feels — smooth animations, snappy tab switches, and hover effects that don't lag. If an app feels satisfying to use, people actually enjoy using it. If it lags, they press Alt+F4. Simple math!   " },
  { id: 4, title: "Fourth", image: "/public/story/chapter-4.jpg", head:"The Tech Stack   ", sub:"Tools I use so I don’t lose my sanity.   ", con: "Next.js and React for building UI, TypeScript so my editor yells at me before the browser crashes, and TailwindCSS because writing raw CSS files in 2026 is a form of self-harm. Throw in GSAP for smooth animations and Zustand for state, and we've got a stack that actually lets me ship fast.   " },
  { id: 5, title: "Fifth", image: "/public/story/chapter-5.jpg", head:"All the Tabs Above Are Live!   ", sub:"No fake screenshots, no 'Coming Soon' promises.   ", con: "Every tab in the browser bar above is a real, live application running right inside this window! Click through to test out the POS App checkout, explore the Noah Project, or check out the Movies tab. If you spot a bug... no you didn't, it's a feature. (Just kidding, let me know so I can fix it).   " },
  { id: 6, title: "Sixth", image: "/public/story/chapter-6.jpg", head:"Life Beyond the Terminal   ", sub:"Inspiration comes from movies, games, and internet memes.   ", con: "When I'm not staring at VS Code, I'm usually watching movies, studying visual pacing, or looking at ridiculous memes. Seeing how filmmakers handle camera cuts, color grading, and timing gives me great ideas for UI motion and site layouts. Plus, memes keep the dev brain sane.   " },
  { id: 7, title: "Seventh", image: "/public/story/chapter-7.jpg", head:"Let’s Talk!   ", sub:"Open for internships, projects, or just chatting dev stuff.   ", con: "Whether you're looking for a developer who ships fast, want to collaborate on a cool project, or just want to argue about spaces vs tabs — hit me up! Click the 'Let's Connect' tab above or drop a message. I promise I respond faster than npm install.   " }
];
  return (
    <>
    <div>
      <TopNavFixed />
      <Routes>
        <Route path="/" element={
       <>   
      <Sidenav/>
      {data.map((item) => (
      <section id={item.id} key={item.id}>
        
          <HeroSection id={item.id} key={item.id} 
          title={item.title}
          image={item.image}
          head={item.head}
          sub={item.sub}
          con={item.con}
          />
      </section>
        ))}
        </>
        } />
        
        <Route path="/about" element={<About/>}/>
        </Routes>
    </div>
    </>
  )
}

export default App
