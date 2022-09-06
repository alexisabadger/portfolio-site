import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro"
//import Portfolio from "./components/portfolio/Portfolio"
import Works from "./components/works/Works"
import Contact from "./components/contact/Contact"
import Menu from "./components/menu/Menu"
import Puzzle from "./components/puzzle/Puzzle"
import "./app.scss"
// import "./touchTest.js" // a test
// import "./touchFeatures.js" // a test
import { useState } from "react";

function App() {
  // testing scroll capability

  const [menuOpen,setMenuOpen] = useState(false);

  // touch scrolling for mobile site
  const divStyle={
    overflowY: 'scroll',
    //border:'1px solid red',
    //float: 'left',
    //position:'relative'
  };

  return (
    <div className="app" >
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>  
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <div className="sections" style={divStyle}>
        
        <Intro/>
        <Puzzle />
        <Works/>
        <Contact/>
      </div>
    </div>
  );
}

export default App;
