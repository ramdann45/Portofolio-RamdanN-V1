const Sidebar = (props) => {
    const closeSB = () => {
        props.show.current.classList.toggle("show-close");
    }

  return (
    <div className="container show-close side-bar-rn row" ref={props.show}>
        <div className="col-12 sidebar-x" onClick={closeSB}>
            <button><i class="bi bi-x-lg"></i></button>
        </div>
        <div className="col-sm-6 col-md-3 img-logo">
            <img src="assets/img/logo-ramdan-white.png" className='img-fluid' alt="logo-ramdan-nugraha" />
        </div>
        <div className="col-12 sidebar-middle">
            <a href="#">Home</a>
            <a href="#about-me">About Me</a>
            <a href="#my-skills">My Skills</a>
            <a href="#contact-me">Contact</a>
        </div>
    </div>
  )
}

export default Sidebar