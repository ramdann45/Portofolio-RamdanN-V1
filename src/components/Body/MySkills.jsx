import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const MySkills = () => {

    const skills = [
        {
        nama: "HTML",
        persen : "95%"
        } , {
            nama: "CSS",
            persen: "85%"
        } , {
            nama: "Javascript",
            persen: "75%"
        } , {
            nama : "PHP",
            persen: "65%"
        } , {
            nama: "JAVA",
            persen: "40%"
        }
]

    const skillFrameWork = [
        {
            nama: "REACT JS",
            persen : "65%",
            skill: 165
        } , {
            nama: "LARAVEL",
            persen: "75%",
            skill: 118
        } , {
            nama: "BOOTSTRAP",
            persen: "80%",
            skill: 95
        } , {
            nama : "NODE JS",
            persen: "50%",
            skill: 236
        } , {
            nama: "MYSQL",
            persen: "50%",
            skill: 236
        }
]

        // let progressHtmlStartValue = 0,
        // progressHtmlEndValue = result.persen,
        // htmlSpeed = 40;

        // let htmlProgress = setInterval(() => {
        //                 progressHtmlStartValue++;
        //                 circle.current.style.marginLeft = `${progressHtmlStartValue}%`;
        //                 progressing.current.style.width = `${progressHtmlStartValue}%`;
        //                 circle.current.style.left = `-10px`;

        //                 if(progressHtmlStartValue == progressHtmlEndValue) {
        //                     clearInterval(htmlProgress);
        //                 }
        //         },htmlSpeed)

    const { ref: myRef, inView: isVisible } = useInView();
    
  return (
    <div className="my-skills container" ref={myRef} id='my-skills'>
        <div className="row">
            <div className="text-skills col-12 mb-5">
                <h1 className='text-center mt-2'>My Skills</h1>
            </div>
            <motion.div className="main-container col-lg-6 col-md-12" animate={{ opacity:1 }} initial={{ opacity: 0}}>
                    {skills.map((sk,index) => {
                        return (<div className="progress-container" key={index}>
                                    <h3 className='heading'>
                                        {sk.nama}
                                    </h3>
                                    <div className="progress-bar">
                                        <motion.div animate={isVisible ? { width: sk.persen } : {}} initial={{ width: 0  }} transition={{ duration: 2 }} className="progressing"></motion.div>
                                        <motion.span animate={isVisible ? { marginLeft: sk.persen } : {}} transition={{ duration: 2 }} className='circle'></motion.span>
                                    </div>
                                    <p className='percentage'>{sk.persen}</p>
                                </div>)
                            })}
            </motion.div>
            <div className={`main-container-dua row col-lg-6 col-md-12`}>
                {skillFrameWork.map((sfw,index) => {
                    return <div className="item-skill"  key={index}>
                                <div className="loading-progress">
                                    <div className="progress-circle">
                                        <div id="number" className="text-center">
                                            <p>{sfw.nama}</p>
                                            <p>{sfw.persen}</p>
                                        </div>
                                    </div>
                                </div>
                                <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="160" height="160">
                                        <motion.circle animate={isVisible ? { strokeDashoffset: sfw.skill } : {}} initial={{ strokeDashoffset: 472 }} transition={{ duration: 2 }} cx="80" cy="80" r="70" fill="white" stroke-strokeLinecap="round" />
                                </svg>
                            </div>
                })}
            </div>
                    <div className="direction-scroll col-12">
                            <a href="#contact-me">
                                <i className="bi bi-arrow-down"></i>
                                <p className="direction-about text-center">Contact</p>
                            </a>
                    </div>
        </div>
    </div>
  )
}

export default MySkills