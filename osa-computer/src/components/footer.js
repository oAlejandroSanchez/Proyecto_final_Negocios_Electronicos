/*
This file content information about the footer
*/

// Node modules
import { BsFacebook } from 'react-icons/bs';
import { RiWhatsappFill } from 'react-icons/ri';
import { AiFillTwitterCircle } from 'react-icons/ai';
import { MdEmail } from 'react-icons/md';

const styleFooter = {
        position: 'absolute',
        bottom: '0',
        width: '100%',
}

function Footer() {
    return (
        <div className="card text-center" style={{borderRadius: '0', background: '#B0B0A4',}}>
            <div className="card-body">
                <h5 className="card-title Orbitron">Visitanos en nuestra redes sociales</h5>
                <div>
                    <a href="https://www.facebook.com/" className="btn"><BsFacebook size={40}/> {" "}</a>
                    <a href="https://web.whatsapp.com/" className="btn"><RiWhatsappFill size={45} /> {" "}</a>
                    <a href="https://twitter.com/?lang=es" className="btn"><AiFillTwitterCircle size={45}/></a>
                    <a href="https://accounts.google.com/v3/signin/identifier?dsh=S-821938634%3A1673088518927464&continue=https%3A%2F%2Fmail.google.com%2Fmail%2F&rip=1&sacu=1&service=mail&flowName=GlifWebSignIn&flowEntry=ServiceLogin&ifkv=AeAAQh5rvJWRPxBcOgDNfGLe01xFVKwQt5bqcwdwrk0xSHJUzsfJOIAjAM2scLYcx5mt1IlPJ-Yu2Q" className="btn"><MdEmail size={45}/></a>
                </div>
                
            </div>
            <div className="card-footer" style={{background: 'white',}}>
                OSA - Computer© 2023
            </div>
        </div>
    );
}

export default Footer;

/* Created by Omar Sánchez */
