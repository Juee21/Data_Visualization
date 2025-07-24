# Data Visualization Dashboard

A full-stack data visualization application built with React.js, Spring Boot, and MySQL.

## Project Structure

```
data-visualization/
├── frontend/          # React.js frontend application
└── backend/          # Spring Boot backend application
```

## Prerequisites

- Node.js (v14 or higher)
- Java JDK 17 or higher
- MySQL 8.0 or higher
- Maven

## Setup Instructions

### Frontend Setup
1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm start
   ```

### Backend Setup
1. Navigate to the backend directory:
   ```bash
   cd backend
   ```
2. Configure MySQL connection in `application.properties`
3. Build the project:
   ```bash
   mvn clean install
   ```
4. Run the application:
   ```bash
   mvn spring-boot:run
   ```

## Features

- CRUD operations for data management
- Interactive data visualization using various chart types
- Real-time data updates
- User-friendly interface
- Responsive design

## Technologies Used

- Frontend:
  - React.js
  - Chart.js
  - Axios
  - Material-UI

- Backend:
  - Spring Boot
  - Spring Data JPA
  - MySQL
  - Lombok 