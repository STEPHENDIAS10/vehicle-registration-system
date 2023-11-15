import React from 'react';
import PropTypes from 'prop-types';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

const Users = ({
  Users,
  handleDelete,
  isProcessing,
  selectedStudentId,
}) => {
  return (
    <Container>
      <Card className="shadow-sm">
        <Card.Header as="h2" className="text-center">
          Customer
        </Card.Header>
        <Card.Body>
          <Table bordered hover>
            <thead>
              <tr>
                <th>No.</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {Users.map((User, i) => (
                <tr key={i}>
                  <td>{i + 1}</td>
                  <td>{User.firstName}</td>
                  <td>{User.lastName}</td>
                  <td>{User.email}</td>
                  <td>{User.phone}</td>
                  <td>
                    <Button
                      variant="danger"
                      data-id={User._id}
                      onClick={handleDelete}
                      disabled={
                        isProcessing && User._id === selectedStudentId
                      }
                    >
                      {isProcessing && User._id === selectedStudentId
                        ? 'Deleting...'
                        : 'Delete'}
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Card.Body>
      </Card>
    </Container>
  );
};

Users.propTypes = {
  Users: PropTypes.array.isRequired,
  handleDelete: PropTypes.func.isRequired,
  isProcessing: PropTypes.bool.isRequired,
  selectedStudentId: PropTypes.string.isRequired,
};

export default Users;
