import React from 'react';
import './Footer.css';
import logo from '../../assets/logo.jpg';
import { BsTelephone } from 'react-icons/bs';
import { GiRotaryPhone } from 'react-icons/gi';
import { MdOutlineMail } from 'react-icons/md';
import { CiLocationOn } from 'react-icons/ci';
import localisation from '../../assets/localisation.png';

function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-company-box">
          <img src={logo} alt="Logtandem Logo" />
        </div>

        <div className="footer-link-box">
          <strong>Main Links</strong>
          <ul>
            <li><a href="/">Accueil</a></li>
            <li><a href="/Presentation">Qui sommes-nous?</a></li>
          </ul>
        </div>

        <div className="footer-link-box">
          <strong>Contact</strong>
          <ul>
            <li><BsTelephone /> (+212) 0645808545</li>
            <li><GiRotaryPhone /> 0808680639</li>
            <li><MdOutlineMail /> m.abderrazzak@logtandem.ma</li>
          </ul>
        </div>

        <div className="footer-link-box">
          <strong>Location</strong>
          <ul>
            <li><CiLocationOn /> Rue Khouribga, Résidence ALMIRAJ, Etage 3, Appt 9/10, CASABLANCA</li>
            <li>
              <a href="https://www.google.com/maps/place/33%C2%B035'24.0%22N+7%C2%B036'20.4%22W/@33.590004,-7.608242,17z/data=!3m1!4b1!4m4!3m3!8m2!3d33.590004!4d-7.6056671?entry=ttu&g_ep=EgoyMDI0MTAyMi4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer">
              <img src={localisation} alt="Localisation" />
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <span className="footer-owner">created with patience </span>
        <span className="copyright">© Copyright 2023 - LOGTANDEM</span>
      </div>
    </footer>
  );
}

export default Footer;
