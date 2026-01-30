MERN - Personal Task Manager

A full-stack MERN (MongoDB, Express.js, React.js, Node.js) application for managing personal tasks with authentication and CRUD operations.

Features

-  User Authentication (Register/Login with JWT)
-  Create, Read, Update, Delete (CRUD) Tasks
-  Task Status Management (To Do, In Progress, Done)
-  Due Date Tracking
-  Task Statistics Dashboard
-  Modern and Responsive UI
-  Secure API with JWT Authentication


 Technologies Used

 Frontend
- React 18 
- React Router DOM
- Axios - HTTP client
- Vite- Build tool

Backend
- Node.js - Runtime environment
- Express.js - Web framework
- MongoDB - Database
- Mongoose - ODM
- JWT - Authentication
- bcryptjs - Password hashing
- CORS - Cross-origin resource sharing

Prerequisites:

- Node.js 
- MongoDB (local or MongoDB Atlas)
- npm 
- Git

Backend Setup

```bash
# Navigate to server directory
cd server

# Install dependencies
npm install

# Create .env file
touch .env


Add the following environment variables to `.env`:

env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
```

Example `.env` file:
env
PORT=5000
MONGO_URI=mongodb://localhost:27017/taskmanager
# OR for MongoDB Atlas:
# MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/taskmanager
JWT_SECRET=your_super_secret_jwt_key_here_make_it_long_and_random
```
Frontend Setup:

# Navigate to client directory:
cd ../client

# Install dependencies:
npm install
```
Running the Application:

Start Backend Server:

bash
From server directory
cd server
npm run dev

Server will run on http://localhost:5000


Start Frontend Development Server:

bash
From client directory (in a new terminal)
cd client
npm run dev

Frontend will run on http://localhost:3000

## Deployment on Render (Integrated Full-Stack)

1. Go to [Render Dashboard](https://dashboard.render.com) and sign in.
2. Click "New" and select "Web Service".
3. Connect your GitHub repository.
4. Configure the service:
   - **Name**: Choose a name for your service (e.g., `task-manager`).
   - **Runtime**: Node
   - **Build Command**: `npm run build`
   - **Start Command**: `npm start`
   - **Root Directory**: `server`
5. Add environment variables:
   - `MONGO_URI`: Your MongoDB connection string
   - `JWT_SECRET`: Your JWT secret key
   - `PORT`: Will be set automatically by Render
6. Click "Create Web Service".

The build command will install client dependencies, build the frontend, and copy the build files to the server directory. The server will serve both the API and the static frontend files.

### Notes

- Ensure your MongoDB database is accessible (use MongoDB Atlas for cloud hosting).
- The application will be available at the web service URL provided by Render.
- For development, run the client and server separately as described above.
