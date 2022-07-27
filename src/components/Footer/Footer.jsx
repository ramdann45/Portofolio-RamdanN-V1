import { motion } from "framer-motion";

const Footer = () => {
  return (
    <div className='footer mt-5'>
      <div className="footer-parent row">
          <div className="footer-child col">
            <img src="assets/img/logo-ramdan-white.png" alt="logo-ramdan-nugraha" width="60" height="60" className='img-fluid' />
          </div>
          <div className="footer-child col">
            <div className="soc-med mb-2">
                  <motion.a whileHover={{ scale: 1.4 }} href="https://api.whatsapp.com/send?phone=6287730291096&text=Halo%20Ramdan%20Nugraha." className='mx-1'><i className="bi bi-whatsapp"></i></motion.a>
                  <motion.a whileHover={{ scale: 1.4 }} href="https://web.facebook.com/ramdan.nugraha.77715" className='mx-1'><i className="bi bi-facebook"></i></motion.a>
                  <motion.a whileHover={{ scale: 1.4 }} href="https://www.instagram.com/ramdann45" className='mx-1'><i className="bi bi-instagram"></i></motion.a>
                  <motion.a whileHover={{ scale: 1.4 }} href="https://github.com/ramdann45" className='mx-1'><i className="bi bi-github"></i></motion.a>
            </div>
            <div className="copyright">
              <p className='text-end'>&copy; Copyright 2022</p>
              <p className='text-end'>Created By <strong>Ramdan Nugraha</strong></p>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Footer