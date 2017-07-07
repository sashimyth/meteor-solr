import React from 'react';
import moment from 'moment';

const Footer = () => {
  const year = moment().format('YYYY');
  return (
    <footer>
      <div className="row">
        <div className="col-md-12 text-center">
          <img className="img-responsive center" src="/images/logo.png" alt="UGM Fisipol DigiLib" />
          <p>Copyright &copy; 2017, Faculty of Social &amp; Political Sciences, Universitas Gadjah Mada</p>
          <p>Sosio Yustisia Bulaksumur, Yogyakarta 55281</p>
          <p>Telp: (0274) 563362 | Fax: (0274) 563362 | Email: dekan_sp@ugm.ac.id</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
