import React from 'react';

const Footer = () => (
    <footer className="main-footer">
    <div className="container">
      <div className="row">
        <div className="col-lg-3 col-md-6"><a href="#" className="brand">Woulo App</a>
          <ul className="contact-info list-unstyled">
            <li><a href="mailto:deblay.thomas@gmail.com">deblay.thomas@gmail.com</a></li>
            <li><a href="tel:+33676003977">+33 676 003 977</a></li>
          </ul>
          <ul className="social-icons list-inline">
            <li className="list-inline-item"><a href="#" target="_blank" title="Facebook"><i className="fa fa-facebook"></i></a></li>
            <li className="list-inline-item"><a href="#" target="_blank" title="Twitter"><i className="fa fa-twitter"></i></a></li>
            <li className="list-inline-item"><a href="#" target="_blank" title="Instagram"><i className="fa fa-instagram"></i></a></li>
          </ul>
        </div>
        
      
       
      </div>
    </div>
    <div className="copyrights">
      <div className="container">
        <div className="row">
          <div className="col-md-7">
            <p>&copy; 2017 Woulo.fr .  </p>
          </div>
          <div className="col-md-5 text-right">
            <p>Dev By <a href="#">DEBLAY Thomas</a></p>
          </div>
        </div>
      </div>
    </div>
    </footer>
);

export default Footer;