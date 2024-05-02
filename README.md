# User Interface with API Integration for Spring Boot and Flask

This project implements a user interface (UI) that consumes APIs from both Spring Boot and Flask applications.

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/hacker123shiva/frontend-blogapplication-react.git
   ```

2. **Navigate to the project directory:**

   ```bash
   cd frontend-blogapplication-react
   ```

3. **Install dependencies:**

   ```bash
   npm install
   ```

## Configuration

1. **Check React port:**

   Ensure React is running on port 3000.

2. **Check service folder inside helper.js:**

   In the `helper.js` file inside the `service` folder, configure the base URL for API requests.

   ```javascript
   import axios from 'axios';
   import { getToken } from '../auth';

   export const BASE_URL = 'http://localhost:9000/api/v1'; // For Spring Boot
   // export const BASE_URL = 'http://localhost:5080/api/v1'; // For Flask
   ```

   Uncomment the appropriate `BASE_URL` depending on whether you want to connect to the Spring Boot or Flask application.

## Starting the Application

1. **Run React development server:**

   Start the React application:

   ```bash
   npm run start
   ```

   Ensure the React server is running on port 3000.

2. **Access the Application:**

   Open your web browser and go to `http://localhost:3000` to access the application.
