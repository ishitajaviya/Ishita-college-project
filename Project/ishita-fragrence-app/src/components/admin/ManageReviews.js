import React, { useState } from 'react';
import { Container, Row, Table, Button } from 'react-bootstrap';
import AdminHeader from './AdminHeader';
import AdminSidebar from './AdminSidebar';
import AdminFooter from './AdminFooter';

const ManageReviews = () => {
  const [reviews, setReviews] = useState([
    {
      id: 1,
      name: 'John Doe',
      email: 'john@example.com',
      message: 'Great service!',
    },
    {
      id: 2,
      name: 'Jane Smith',
      email: 'jane@example.com',
      message: 'Excellent experience!',
    },
    // Add more reviews as needed
  ]);

  const handleDeleteReview = (id) => {
    // Remove the review with the given id from the state
    setReviews((prevReviews) => prevReviews.filter((review) => review.id !== id));
  };

  return (
    <div>
      <AdminHeader />
      <Container fluid className="m-0 p-0">
        <Row>
          <div className="col-md-3 bg-secondary">
            <AdminSidebar />
          </div>
          <div className="col-md-8">
            <h4 className="text-dark mt-5">&nbsp;Manage Reviews</h4>
            <Table striped bordered hover responsive>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Message</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {reviews.map((review) => (
                  <tr key={review.id}>
                    <td>{review.id}</td>
                    <td>{review.name}</td>
                    <td>{review.email}</td>
                    <td>{review.message}</td>
                    <td>
                      <Button
                        variant="danger"
                        size="sm"
                        onClick={() => handleDeleteReview(review.id)}
                      >
                        Delete
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </Row>
      </Container>
      <AdminFooter />
    </div>
  );
};

export default ManageReviews;
