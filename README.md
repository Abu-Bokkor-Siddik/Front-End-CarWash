#  Car Washing Website

### Introduction
At  Car Wash , we understand that your car is more than just a vehicle – it's an extension of your lifestyle. That's why we offer top-notch car wash services designed to keep your car sparkling clean and in pristine condition. From exterior washes to full detailing, our expert team is dedicated to providing exceptional care that ensures your car looks its best.

## Project Description
This project is a full-fledged Car Wash Booking Platform that offers users the ability to manage their car wash appointments, leave reviews, and track their services efficiently. The platform is designed to streamline the car wash experience by providing a user-friendly interface for both customers and service providers.
### Features
1. User Authentication and Login Service:

- A secure login system allowing users to create accounts, sign in, and manage their profiles.
- Role-based access to differentiate between customers and admin/service providers.
Slot Creation and Booking:

2. Customers can view available slots and book their preferred car wash time.
- Admins have the ability to create, update, and manage time slots dynamically based on availability and demand.
Update Slot System:

- Service providers can update the status of slots (e.g., mark as completed or canceled).
- Real-time slot management to ensure that customers only see available options.
3. Review and Feedback System:

- After receiving service, customers can leave reviews and rate their experience.
- The review system allows for valuable feedback, which helps improve service quality and customer satisfaction.
Booking Management:

5. A dashboard for users to view upcoming and past bookings, with the option to modify or cancel as needed.
- Countdown timers to indicate the remaining time until a booked service.
## Technology Stack
 Frontend --> React.js,Redux,tailwind.css,shadCn ui
 BackEnd  --> Node.js,mongoose,mongodb.

## Installation Guideline
1. Clone the backend and frontend repository.
2. Open a file and open terminal.
3. setUp .env file  and run ,, npm run i
4. npm run dev and backend npm run start-dev 
5. project will run local easily.
## Configuration
.env backend 
PORT=3000
DATABASE_URL=''
JWT_TOKEN=''

Store_ID=aamarpaytest
Signature_Key=dbb74894e82415a2f7ff0ec3a97e4183
payment_URL=https://sandbox.aamarpay.com/jsonpost.php
payment_verify= https://sandbox.aamarpay.com/api/v1/trxcheck/request.php



