import { useEffect,useRef } from "react";

const AboutMe = () => {
    const img = useRef();
    useEffect(() => {   
    },[img]);

    const persImg = (e) => {
        let xAxis = (window.innerWidth / 2 - e.pageX) / 35;
        let yAxis = (window.innerHeight / 2 - e.pageY) / 35;

        img.current.style.transform = `rotateY(${yAxis}deg) rotateX(${xAxis}deg)`;
        // console.log(e.pageY, e.pageX);
    }

    const persimgOut = () => {
        img.current.style.transform = `rotateY(0deg) rotateX(0deg)`;
        img.current.style.transition = `all ease .5s`;
    }

  return (
    <div className='about-me container m-auto row' id='about-me'>
        <div className="col-sm-12 col-md-6 about-me-img" onMouseMove={persImg} onMouseLeave={persimgOut}>
            <img src="assets/img/rn-about-me.jpg" ref={img} className='img-fluid rounded-3' alt="about-me-ramdan-nugraha" />
        </div>
        <div className="col-sm-12 col-md-6 about-me-text">
            <div className="text-parent">
                <h4>About Me<i class="bi bi-caret-right-fill"></i></h4>
                <p className='fs-4 my-3 fd'>Frontend Developer</p>
                <hr />
                <h3>Hi<span className="finger">🖐️</span>, I'm <span className="fd">Ramdan Nugraha</span></h3>
                <p className="mt-3">I'm a web developer from Bandung, ID. Currently still majoring in college informatics Engineering. In my spare time i enjoy playing music, gaming and building my own projects. My preferred tools are Javascript, React Js , PHP and Laravel.</p>
                <br /><br /><br /><br /><br />
                <div className="direction-scroll">
                    <a href="#my-skills">
                        <i className="bi bi-arrow-down"></i>
                        <p className="direction-about">My Skills</p>
                    </a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutMe