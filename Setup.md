# LecturaX - Development Setup

## Quick Start

### Prerequisites

- Node.js (v20 or higher)
- pnpm
- MongoDB (running locally or connection string)

### Running the Application

1. **Clone and install dependencies:**

   ```bash
   git clone https://github.com/[your-username]/LecturaX.git
   cd LecturaX
   pnpm install
   ```

   Replace `your-username` with your actual github username.

2. **Set up environment variables:**

   ```bash
   cd backend
   cp .env.example .env
   # Edit .env with your configuration
   ```

3. **Start the backend server:**

   ```bash
   cd backend
   pnpm dev
   # Or: node index.js
   ```

   The backend will run on http://localhost:5000

4. **Start the frontend (in a new terminal):**
   ```bash
   cd frontend
   pnpm dev
   ```
   The frontend will run on http://localhost:3000

### API Endpoints

- **Health Check:** `GET /health`
- **User Registration:** `POST /api/signup`
- **User Login:** `POST /api/signin`
- **User Profile:** `GET /api/profile` (requires authentication)
- **Dashboard:** `GET /api/dashboard` (requires authentication)

### Environment Variables (.env)

```env
# Database Configuration
DB_URL=mongodb://localhost:27017/lecturax

# JWT Configuration
JWT_SECRET=your-super-secret-jwt-key-change-in-production
JWT_EXPIRES_IN=7d
JWT_REFRESH_SECRET=your-super-secret-refresh-key-change-in-production
JWT_REFRESH_EXPIRES_IN=30d

# Server Configuration
PORT=5000
NODE_ENV=development

# CORS Configuration
CORS_ORIGIN=http://localhost:5000
```

### Project Structure

```
├── backend/
│   ├── config/          # Configuration files
│   ├── controllers/     # Route controllers
│   ├── middleware.js    # Authentication middleware
│   ├── models/          # Database models
│   ├── routes/          # API routes
│   ├── utils/           # Utility functions
│   ├── server.js        # Express app configuration
│   └── index.js         # Server entry point
├── frontend/
│   ├── src/
│   │   ├── components/  # React components
│   │   ├── pages/       # Page components
│   │   ├── hooks/       # Custom hooks
│   │   └── styles/      # CSS files
│   └── vite.config.js   # Vite configuration
└── package.json         # Workspace configuration
```

### Features

✅ **Backend Optimizations:**

- ES6 modules throughout
- Error-free Express 4.x setup
- MongoDB connection with proper error handling
- Session management with MongoDB store
- JWT authentication
- Comprehensive error handling
- Health check endpoint

✅ **Frontend Setup:**

- Vite development server
- Proxy configuration to backend API
- React 19 with modern hooks
- Proper CORS configuration

### Troubleshooting

1. **Port already in use:** The frontend will automatically try another port
2. **MongoDB connection errors:** Ensure MongoDB is running and the connection string is correct
3. **CORS errors:** Check that frontend URL is included in backend CORS configuration
4. **Module import errors:** Ensure all files use ES6 import/export syntax
