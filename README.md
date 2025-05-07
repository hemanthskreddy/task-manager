# Task Manager Application

A full-stack To-Do List application built with React, Django, and MySQL.

## Features

- User authentication and authorization
- Create, read, update, and delete tasks
- Mark tasks as complete/incomplete
- Filter and search tasks
- Responsive design

## Prerequisites

- Python 3.8+
- Node.js 14+
- MySQL 8.0+
- npm or yarn

## Backend Setup

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Create and activate a virtual environment:
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   ```

3. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```

4. Create a .env file in the backend directory with the following variables:
   ```
   SECRET_KEY=your_secret_key
   DEBUG=True
   DB_NAME=task_manager
   DB_USER=your_mysql_username
   DB_PASSWORD=your_mysql_password
   DB_HOST=localhost
   DB_PORT=3306
   ```

5. Run migrations:
   ```bash
   python manage.py migrate
   ```

6. Start the development server:
   ```bash
   python manage.py runserver
   ```

## Frontend Setup

1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a .env file in the frontend directory:
   ```
   REACT_APP_API_URL=http://localhost:8000/api
   ```

4. Start the development server:
   ```bash
   npm start
   ```

## API Endpoints

- POST /api/auth/register/ - Register a new user
- POST /api/auth/login/ - Login user
- GET /api/tasks/ - List all tasks
- POST /api/tasks/ - Create a new task
- GET /api/tasks/{id}/ - Get task details
- PUT /api/tasks/{id}/ - Update a task
- DELETE /api/tasks/{id}/ - Delete a task

## Technologies Used

- Frontend:
  - React
  - Material-UI
  - Axios
  - React Router

- Backend:
  - Django
  - Django REST Framework
  - MySQL
  - JWT Authentication

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a new Pull Request
"# task-manager" 
