import React from 'react'
import { Container} from 'react-bootstrap'

export default function Header() {
  return (
    <div>
        <Container fluid className='bg-success p-3 '>
            <h3 className='text-white'>TodoApi app</h3>
            </Container>
        </div>
  )
}
