import "./intro.scss"

export default function Intro() {
  
  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="assets/breakneck-1.jpg" alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi there, I'm</h2>
          <h1>Alex McIntire</h1>
          <h3>Freelance Developer</h3>
        </div>
        <a href="#puzzle">
          <img src="assets/down.png" alt="" />
        </a>
      </div>
    </div>
  )
}
