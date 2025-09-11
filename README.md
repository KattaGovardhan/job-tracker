# Job Tracker

Job Tracker is a full-stack web application designed to help users track their job applications. It provides a clean and intuitive interface to manage job application details, monitor their status, and view statistics.

## Features

### Frontend (Client)

- **User Authentication:** Secure user registration and login.
- **Dashboard:** An overview of job application statistics.
- **Add, Edit, and Delete Jobs:** Easily manage your job application entries.
- **Search and Filter:** Quickly find specific jobs based on keywords, status, or job type.
- **User Profile:** View and manage your user profile.
- **Responsive Design:** A mobile-friendly and responsive layout.

### Backend (Server)

- **RESTful API:** A well-structured API for managing users, jobs, and profiles.
- **User Authentication:** JWT-based authentication to protect routes.
- **CRUD Operations:** Full support for creating, reading, updating, and deleting job applications.
- **Data Validation:** Mongoose schema validation for data integrity.

## Technologies Used

### Frontend

- **React:** A JavaScript library for building user interfaces.
- **Vite:** A fast build tool and development server.
- **Axios:** A promise-based HTTP client for making API requests.
- **Tailwind CSS:** A utility-first CSS framework for rapid UI development.
- **shadcn/ui:** A collection of reusable UI components.
- **React Router:** For declarative routing in the application.

### Backend

- **Node.js:** A JavaScript runtime for building server-side applications.
- **Express:** A minimal and flexible Node.js web application framework.
- **MongoDB:** A NoSQL database for storing application data.
- **Mongoose:** An ODM (Object Data Modeling) library for MongoDB and Node.js.
- **JWT (JSON Web Tokens):** For secure user authentication.
- **bcryptjs:** A library for hashing passwords.
- **Nodemailer:** For sending emails (e.g., for password resets).

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm (Node Package Manager)
- MongoDB (local or a cloud-based instance)

### Installation

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/your-username/job-tracker.git
    cd job-tracker
    ```

2.  **Install server dependencies:**

    ```bash
    cd server
    npm install
    ```

3.  **Install client dependencies:**

    ```bash
    cd ../client
    npm install
    ```

4.  **Set up environment variables:**

    - In the `server` directory, create a `.env` file and add the following:

      ```
      PORT=3000
      MONGO_URI=<your_mongodb_connection_string>
      JWT_SECRET=<your_jwt_secret>
      NODE_ENV = "production"
      SMTP_USER = <your_user>
      SMTP_PASSWORD = <your_password>
      SENDER_EMAIL = <your_email>
      ```

    - In the `client` directory, create a `.env` file and add the following:

      ```
      VITE_API_BASE_URL=http://localhost:3000/api
      ```

## Available Scripts

### Backend (from the `server` directory)

- `npm start`: Starts the server in production mode.
- `npm run dev`: Starts the server in development mode with Nodemon for automatic restarts.
- `npm run lint`: Lints the backend code using ESLint.
- `npm run format`: Formats the code with Prettier.
- `npm test`: Runs the test suite with Jest.

### Frontend (from the `client` directory)

- `npm run dev`: Starts the development server with Vite.
- `npm run build`: Builds the application for production.
- `npm run lint`: Lints the frontend code using ESLint.
- `npm run preview`: Serves the production build locally for preview.

## Test Credentials

To quickly test the application, you can use the following credentials:

- **Username:** `test@gmail.com`
- **Password:** `test@123`

## API Endpoints

### Authentication

- `POST /api/auth/register`: Register a new user.
- `POST /api/auth/login`: Log in a user.
- `GET /api/auth/logout`: Log out a user.

### Jobs

- `GET /api/jobs`: Get all jobs for the authenticated user.
- `POST /api/jobs`: Create a new job.
- `GET /api/jobs/:id`: Get a job by its ID.
- `PUT /api/jobs/:id`: Update a job.
- `DELETE /api/jobs/:id`: Delete a job.

### User

- `GET /api/user/stats-count`: Get job statistics for the authenticated user.

### Profile

- `GET /api/profile`: Get the authenticated user's profile.
- `PUT /api/profile/edit`: Update the authenticated user's profile.

## Project Structure

```
job-tracker/
├── client/         # Frontend React application
│   ├── src/
│   │   ├── components/ # Reusable UI components
│   │   ├── features/   # Feature-based modules (auth, jobs, profile)
│   │   ├── hooks/      # Custom React hooks
│   │   ├── lib/        # Library configurations (axios, utils)
│   │   ├── pages/      # Top-level page components
│   │   └── routes/     # Routing configuration
│   ├── vite.config.js  # Vite configuration
│   └── package.json    # Frontend dependencies and scripts
│
└── server/         # Backend Node.js/Express application
    ├── src/
    │   ├── config/     # Database and other configurations
    │   ├── controllers/ # Request handlers
    │   ├── middleware/ # Custom middleware (e.g., authentication)
    │   ├── models/     # Mongoose schemas
    │   └── routes/     # API route definitions
    ├── server.js       # Main server entry point
    └── package.json    # Backend dependencies and scripts
```

## Contributing

Contributions are welcome! If you have any ideas, suggestions, or bug reports, please open an issue or submit a pull request.

1.  Fork the repository.
2.  Create a new branch (`git checkout -b feature/your-feature`).
3.  Make your changes.
4.  Commit your changes (`git commit -m 'Add some feature'`).
5.  Push to the branch (`git push origin feature/your-feature`).
6.  Open a pull request.

## License

This project is licensed under the ISC License. See the `LICENSE` file for details.
