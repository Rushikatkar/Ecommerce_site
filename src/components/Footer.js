import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h3>Contact Information</h3>
            <p>123 Main Street, Anytown USA 12345</p>
            <p>Phone: (123) 456-7890</p>
            <p>Email: info@ecommercewebsite.com</p>
          </div>
          <div className="col-md-6">
            <h3>Follow Us</h3>
            <ul className="social-icons">
              <li><Link to="#"><i className="fa fa-facebook"></i></Link></li>
              <li><Link to="#"><i className="fa fa-twitter"></i></Link></li>
              <li><Link to="#"><i className="fa fa-instagram"></i></Link></li>
              <li><Link to="#"><i className="fa fa-youtube"></i></Link></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
