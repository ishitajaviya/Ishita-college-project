import React from 'react';
import { Container } from 'react-bootstrap';
import { Link} from 'react-router-dom';
import pagenotfound from '../../images/pagenotfound.gif';
export default function PageNotFound() {
  return (
    <div>
      <Container  className='fluid p-4 mt-4'>
      <Link to="/"><img src={pagenotfound} alt='pagenotfound' className='img-fluid w-75' /></Link>
      </Container>
    </div>
  )
}
