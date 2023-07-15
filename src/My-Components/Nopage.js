import React from 'react';
import imageSrc from '../Images/images.png';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

function Nopage() {
  return (
    <div>
      <h3 className='mt-5'>No Data Found</h3>
      <Button variant="mt-5">
        <Link to="/">
          <h5>Go To Home</h5>
        </Link>
      </Button><br />
      <img src={imageSrc} alt="Something went wrong 400" className='nopage' />

    </div>
  );
}

export default Nopage;
