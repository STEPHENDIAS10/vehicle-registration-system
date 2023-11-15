import React from 'react';
import PropTypes from 'prop-types';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';

const Users = ({ Users }) => {
  return (
    <Container>
      <Card className="shadow-sm">
        <Card.Header as="h2" className="text-center">
          Users
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
};

export default Users;
