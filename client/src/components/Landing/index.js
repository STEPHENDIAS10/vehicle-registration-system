import React from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';

const Landing = () => {
  return (
    <Container>
      <div className="p-5 mb-4 bg-light rounded-3">
        <div className="container-fluid py-5">
          <h1 className="display-5 fw-bold">vehicle-registration-system</h1>
          <p className="col-md-12 fs-4">
          Welcome to [Your City/State] Vehicle Registration System

Dear valued residents and visitors,

We are delighted to welcome you to the [Your City/State] Vehicle Registration System, your convenient and efficient gateway to managing your vehicle registrations. Whether you're a proud owner of a new vehicle or in need of renewing your registration, our online platform is designed to streamline the process, saving you time and providing a hassle-free experience.

At [Your City/State] Vehicle Registration System, our mission is to simplify the vehicle registration process, ensuring compliance with regulations while offering user-friendly services. We understand that your time is precious, and our goal is to make your interactions with the registration system as smooth as possible.

Explore our website to discover easy-to-follow guides on registration procedures, renewal processes, fee structures, and other essential information. We've designed our online services to be accessible 24/7, allowing you to complete transactions at your convenience.

Thank you for choosing [Your City/State] Vehicle Registration System. We are committed to providing top-notch service and contributing to a seamless and compliant vehicle registration experience for everyone.

Safe travels!

Sincerely,

[Your City/State] Vehicle Registration System Team
          </p>
          <p>
            <Link to={ROUTES.LOG_IN}>
              <Button variant="success">Get Started</Button>
            </Link>
          </p>
        </div>
      </div>
    </Container>
  );
};

export default Landing;
