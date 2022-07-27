import { motion } from "framer-motion";
import React, { useRef,useState } from 'react';
import emailjs from '@emailjs/browser';

const ContactMe = () => {
    const form = useRef();
    const [alertEmail,setAlertEmail] = useState(null);

    const empty = () => {
        alertEmail = setAlertEmail(null);
    }

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_aat17lp', 'template_eaynfv7', form.current, '-2kFtTSRW_XnzemJn')
        .then((r) => {
            setAlertEmail(<div class="alert-email alert alert-success position-fixed top-50 start-50 translate-middle alert-dismissible fade show" role="alert">
            <h2 style={{ color: "#00345b" }}>Hai {e.target[0].value}!</h2> Pesan kamu telah terkirim, Terimakasih!😉
            <button type="button" class="btn-close" onClick={empty} data-bs-dismiss="alert" aria-label="Close"></button>
            </div>)
        }, (error) => {
            setAlertEmail(<div class="alert-email alert alert-danger position-fixed top-50 start-50 translate-middle alert-dismissible fade show" role="alert">
            <strong>Hai {e.target[0].value}!</strong> Ada masalah teknis nih, Silahkan kirim pesan nanti ya!.
            <button type="button" class="btn-close" onClick={empty} data-bs-dismiss="alert" aria-label="Close"></button>
            </div>)
            console.log(error.text);
        });
    };
  return (
    <div className='contact-me container' id='contact-me'>
        {/* alert */}
        {alertEmail}
        {/* alert */}
        <div className="row container">
            <div className="col-12">
                <h1 className='text-center my-4'>Contact Me</h1 >
            </div>
            <div className="col-lg-8 col-sm-12">
                <form onSubmit={sendEmail} ref={form}>
                    <div class="mb-3">
                        <label for="nama" class="form-label">Nama</label>
                        <input type="text" class="form-control" id="nama" name="nama" aria-describedby="emailHelp" placeholder="Ramdan Nugraha" />
                    </div>
                    <div class="mb-3">
                    <label for="email" class="form-label">Email Anda</label>
                    <input type="email" name="email" class="form-control" id="email" placeholder="name@example.com" />
                    </div>
                    <div class="mb-3">
                    <label for="pesan" class="form-label">Pesan</label>
                    <textarea class="form-control" name="pesan" id="pesan" placeholder="Isi Komentar" rows="3"></textarea>
                    </div>
                    <motion.button whileHover={{ backgroundColor: "blue" }} type="submit" className="btn-contact rounded-3 p-2">Kirim</motion.button>
                </form>
            </div>
            <div className="square col">
                <div className="row">
                    <div className="col my-3 rounded-3">
                        <motion.h2 whileHover={{ scale: 1.4 }} className='mt-2'><i class="bi bi-envelope"></i></motion.h2>
                        <h3>Email</h3>
                        <h4>Ramnug45@gmail.com</h4>
                    </div>
                    <div className="col my-3 rounded-3">
                        <motion.h2 whileHover={{ scale: 1.4 }} className='mt-2'><i class="bi bi-whatsapp"></i></motion.h2>
                        <h3>Whatsapp</h3>
                        <h4>+62877-3029-1096</h4>
                    </div>
                    <div className="col my-3 rounded-3">
                        <motion.h2 whileHover={{ scale: 1.4 }} className='mt-2'><i class="bi bi-geo-alt"></i></motion.h2>
                        <h3>Address</h3>
                        <h4 className="text-center">Sukaasih Bandung 40195</h4>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ContactMe