import React, {useRef,useEffect} from 'react'

const Core = () => {
    // MOUSE MOVE & LEAVE STYLE FONT
    const cursor = useRef(null);
    useEffect(() => {
    },[cursor])

    const mouseMove = (e) => {
        cursor.current.style.left = e.pageX + 'px';
        cursor.current.style.top = e.pageY + 'px';
        cursor.current.style.width = "20px";
        cursor.current.style.height = "20px";
        cursor.current.style.transform = "scale(5)";
    };

    const mouseLeave = () => {
        cursor.current.style.width = "0";
        cursor.current.style.height = "0";
    };
    // MOUSE MOVE & LEAVE STYLE FONT END

    // IMAGE ZOOM STYLE
    const imgDiv = useRef(null);
    useEffect(() => {
    },[imgDiv])
    const img = useRef(null);
    useEffect(() => {
    },[img])

    const cursorMoveImg = (e) => {
        let clientX = e.clientX - imgDiv.current.offsetLeft;
        let clientY = e.clientY - imgDiv.current.offsetTop;

        let mWidth = imgDiv.current.offsetWidth;
        let mHeight = imgDiv.current.offsetHeight;

        clientX = clientX / mWidth * 100;
        clientY = clientY / mHeight * 100;

        img.current.style.transform = `translate(-${clientX}%,-${clientY}%) scale(2)`;
    }

    const cursorLeaveImg = () => {
        img.current.style.transform = "translate(-50%,-50%) scale(1)";
    }
    // IMAGE ZOOM STYLE END
    
    return (
        <div className='core'>
            <div className="row container m-auto">
                <div className="fed col-4">
                    <p onMouseMove={mouseMove} onMouseLeave={mouseLeave}>FRONTEND</p>
                    <p onMouseMove={mouseMove} onMouseLeave={mouseLeave}>DEVELOPER</p>
                    <div className="cursor" ref={cursor}></div>
                </div>
                {/* middle */}
                <div className="row middle">
                    <div className="col-md-6 col-sm-6 my-3 col-sm-12 img-profile" ref={imgDiv} onMouseMove={cursorMoveImg} onMouseLeave={cursorLeaveImg}>
                        <img src="assets/img/rn.jpg" ref={img} className='img-profile-rn img-fluid rounded-3' alt="ramdan-profile-img" />
                    </div>
                    <div className="col-md-6 col-sm-12 down-cv">
                        <button type='download' className='p-2 rounded-3'>
                            <a href="assets/CV-RamdanNugraha.pdf" download="RamdanNugraha-Cv">Download CV</a>
                        </button>
                    </div>
                </div>


                {/* above */}
                <div className="foot-head row mt-4">
                    <div className="name-core-one col">
                        <p className='text-center'>Ramdan</p>
                        <p className='text-center'>Nugraha</p>
                    </div>
                    <div className="direction-scroll col">
                        <a href="#about-me">
                            <i className="bi bi-arrow-down"></i>
                            <p className="direction-about">Click Me</p>
                        </a>
                    </div>
                    <div className="soc-med col">
                        <a href="https://api.whatsapp.com/send?phone=6287730291096&text=Halo%20Ramdan%20Nugraha."><i className="bi bi-whatsapp"></i></a>
                        <a href="https://web.facebook.com/ramdan.nugraha.77715"><i className="bi bi-facebook"></i></a>
                        <a href="https://www.instagram.com/ramdann45"><i className="bi bi-instagram"></i></a>
                        <a href="https://github.com/ramdann45"><i className="bi bi-github"></i></a>
                    </div>
                    <div className="name-core col">
                        <p className='text-end' onMouseMove={mouseMove} onMouseLeave={mouseLeave}>Ramdan</p>
                        <p className='text-end' onMouseMove={mouseMove} onMouseLeave={mouseLeave}>Nugraha</p>
                        <div className="cursor" ref={cursor}></div>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Core