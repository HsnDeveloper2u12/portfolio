import React from 'react';
import certificateImage from "../assets/certificate.jpg";

import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';

function Certificates() {
  return (
    <section className="certificat">

      <div className="certificate-container">
        <Zoom>
          <img
            src={certificateImage}
            alt="My Professional Certificate"
            className="certificate-image"
          />
        </Zoom>
      </div>

      <p className="certificate-text">
        Click on the image to view in full size.
      </p>
    </section>
  );
}

export default Certificates;