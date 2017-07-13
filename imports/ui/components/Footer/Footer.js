import React from 'react';
import moment from 'moment';

const Footer = () => {
  const year = moment().format('YYYY');
  return (
    <footer>
      <div className="row">
        <div className="col-md-12 text-center">
          <img className="img-responsive center" src="/images/logo.png" alt="UGM Fisipol DigiLib" />
          <h3>Fakultas Ilmu Sosial dan Ilmu Politik - Universitas Gadjah Mada</h3>
          <p>Sosio Yustisia Bulaksumur, Yogyakarta 55281</p>
          <p>Telp: (0274) 563362 | Fax: (0274) 563362 | Email: dekan_sp@ugm.ac.id</p>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12 text-center footer-bot">
          Copyright &copy; 2017, Faculty of Social &amp; Political Sciences, Universitas Gadjah Mada
        </div>
      </div>
    </footer>
  );
};

export default Footer;
