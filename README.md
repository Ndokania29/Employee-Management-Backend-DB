# Employee Management System

A comprehensive RESTful API for managing employees, departments, projects, and their relationships.

## Features

- **Employee Management**: CRUD operations for employees
- **Department Management**: Manage company departments
- **Project Management**: Handle project assignments and tracking
- **User Management**: User authentication and authorization
- **Statistics**: Get insights and analytics
- **Employee-Project Relationships**: Manage project assignments

## Tech Stack

- **Backend**: Node.js with Express.js
- **Database**: MySQL
- **ORM**: mysql2 (Promise-based)
- **CORS**: Cross-origin resource sharing enabled

## Prerequisites

- Node.js (version 14 or higher)
- MySQL Server
- npm or yarn package manager

## Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd employee-management
```

2. Install dependencies:
```bash
npm install
```

3. Set up the database:
   - Create a MySQL database named `emp_db`
   - Update database credentials in `src/db.js` if needed

4. Start the server:
```bash
# Development mode with auto-reload
npm run dev

# Production mode
npm start
```

The server will start on `http://localhost:5000`

## API Endpoints

### Users
- `GET /users` - Get all users
- `POST /users` - Create a new user
- `GET /users/:id` - Get user by ID
- `PUT /users/:id` - Update user
- `DELETE /users/:id` - Delete user

### Employees
- `GET /employees` - Get all employees
- `POST /employees` - Create a new employee
- `GET /employees/:id` - Get employee by ID
- `PUT /employees/:id` - Update employee
- `DELETE /employees/:id` - Delete employee

### Departments
- `GET /departments` - Get all departments
- `POST /departments` - Create a new department
- `GET /departments/:id` - Get department by ID
- `PUT /departments/:id` - Update department
- `DELETE /departments/:id` - Delete department

### Projects
- `GET /projects` - Get all projects
- `POST /projects` - Create a new project
- `GET /projects/:id` - Get project by ID
- `PUT /projects/:id` - Update project
- `DELETE /projects/:id` - Delete project

### Employee Projects
- `GET /employee-projects` - Get all employee-project assignments
- `POST /employee-projects` - Assign employee to project
- `GET /employee-projects/:id` - Get assignment by ID
- `PUT /employee-projects/:id` - Update assignment
- `DELETE /employee-projects/:id` - Remove assignment

### Statistics
- `GET /stats` - Get system statistics and analytics

## Project Structure

```
src/
├── app.js              # Main application file
├── db.js               # Database connection
├── controllers/        # Route controllers
├── routes/            # API routes
└── middleware/        # Custom middleware
```

## Environment Variables

Create a `.env` file in the root directory:

```env
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_password
DB_NAME=emp_db
PORT=5000
```

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License.

## Support

For support, niveshdokania.29@gmail.com or create an issue in the repository. 
