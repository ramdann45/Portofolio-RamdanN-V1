import Sidebar from "./Sidebar";
import NavSidebar from "./NavSidebar";
import { useRef, useEffect } from "react";
import { motion } from "framer-motion";

const Navbar = (props) => {
  const sideBar = useRef();
  useEffect(() => {
  },[sideBar]);

  const showSidebar = () => {
    // sideBar.current.style.marginLeft = "0";
    sideBar.current.classList.toggle("show-close");
  }

  const setIcon = useRef();
  useEffect(() => {
  },[setIcon]);

  const ubahIcon = () => {
    setIcon.current.classList.toggle("bi-moon");
  }

  return (
    <nav>
      <Sidebar show={sideBar} fn={props.fn} val={props.val}/>
        <div className="row container m-auto">
            <div className="col nav-name">
                {/* <p className='my-auto fs-6 fw-bold'>Ramdan Nugraha</p> */}
                <img src="assets/img/logo-ramdan-white.png" height="50" width="50" alt="logo-ramdan-nugraha" />
            </div>
            <NavSidebar />
            <div className="col nav-darkmode">
              <button className="side-btn" onClick={props.fn} checked={props.val === "dark"}><i ref={setIcon} onClick={ubahIcon} class="bi bi-brightness-high bi-moon"></i></button>
              <button className="side-btn" onClick={showSidebar}><i class="bi bi-text-right"></i></button>
            </div>
        </div>
    </nav>
  )
}

export default Navbar