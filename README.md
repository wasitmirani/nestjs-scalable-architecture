# TodoApp - NestJS API

A scalable and well-structured NestJS todo application with a modular architecture, REST API endpoints, and comprehensive API documentation using Swagger.

## 📋 Table of Contents

- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Configuration](#configuration)
- [Running the Application](#running-the-application)
- [API Documentation](#api-documentation)
- [Project Structure](#project-structure)
- [Modules](#modules)
- [Scripts](#scripts)

## ✨ Features

- **NestJS Framework**: Scalable and modular Node.js framework
- **PostgreSQL Database**: Robust relational database with TypeORM integration
- **RESTful API**: Clean and organized REST endpoints
- **Swagger Documentation**: Interactive API documentation at `/docs`
- **User Management**: Complete CRUD operations for users
- **Modular Architecture**: Well-organized folder structure with separation of concerns
- **Error Handling**: Global exception handling and logging
- **Validation**: Input validation and DTOs for data integrity
- **Pagination**: Built-in pagination support for list endpoints

## 📦 Prerequisites

- **Node.js**: v18 or higher
- **Yarn**: Package manager
- **PostgreSQL**: v12 or higher
- **Git**: Version control

## 🚀 Installation

1. **Clone the repository**
```bash
git clone <repository-url>
cd todoapp
```

2. **Install dependencies**
```bash
yarn install
```

3. **Set up environment variables**
Create a `.env` file in the root directory:
```env
# Database Configuration
DB_HOST=localhost
DB_PORT=5432
DB_USERNAME=postgres
DB_PASSWORD=root
DB_NAME=todo_app_db

# Application
PORT=3000
NODE_ENV=development
```

4. **Create the PostgreSQL database**
```bash
# Using psql
psql -U postgres
CREATE DATABASE todo_app_db;
```

## ⚙️ Configuration

### Database Configuration
The database configuration is located in `src/config/database.config.ts`. Default values:

| Variable | Default | Description |
|----------|---------|-------------|
| `DB_HOST` | `localhost` | PostgreSQL host |
| `DB_PORT` | `5432` | PostgreSQL port |
| `DB_USERNAME` | `postgres` | Database user |
| `DB_PASSWORD` | `root` | Database password |
| `DB_NAME` | `todo_app_db` | Database name |

### Application Configuration
- API Prefix: `api`
- API Version: `v1`
- Default Port: `3000`
- Documentation URL: `http://localhost:3000/docs`

## ▶️ Running the Application

### Development Mode
Start the application in development mode with auto-reload:
```bash
yarn start:dev
```

### Production Mode
Build and start the application:
```bash
yarn build
yarn start:prod
```

### Debug Mode
Start with debugging enabled:
```bash
yarn start:debug
```

## 📚 API Documentation

Once the application is running, access the interactive Swagger documentation at:

```
http://localhost:3000/docs
```

### Available Endpoints

#### Users Module
- `GET /api/v1/users` - Get all users (with pagination)
- `POST /api/v1/users` - Create a new user
- `GET /api/v1/users/:id` - Get user by ID
- `PATCH /api/v1/users/:id` - Update user
- `DELETE /api/v1/users/:id` - Delete user

## 📁 Project Structure

```
src/
├── app.controller.ts       # Main application controller
├── app.module.ts           # Root module with imports and configuration
├── app.service.ts          # Application service
├── main.ts                 # Application entry point
│
├── common/                 # Shared utilities and helpers
│   ├── constants/          # Application constants
│   ├── exceptions/         # Custom exceptions
│   ├── interceptors/       # HTTP interceptors
│   ├── pipes/              # Custom pipes
│   ├── utils/              # Utility functions
│   └── base/               # Base classes
│       └── base.repository.ts
│
├── config/                 # Configuration files
│   ├── app.config.ts       # Application configuration
│   └── database.config.ts  # Database configuration
│
└── modules/                # Feature modules
    ├── users/              # Users module
    │   ├── controllers/    # API endpoints
    │   │   └── users.controller.ts
    │   ├── services/       # Business logic
    │   │   └── users.service.ts
    │   ├── repositories/   # Data access layer
    │   │   └── users.repository.ts
    │   ├── dto/            # Data Transfer Objects
    │   │   ├── create-user.dto.ts
    │   │   ├── update-user.dto.ts
    │   │   └── user-pagination.dto.ts
    │   ├── entities/       # Data models
    │   │   └── user.entity.ts
    │   └── users.module.ts
    │
    └── auth/               # Auth module (optional)
```

## 🏗️ Modules

### Users Module
Manages user-related operations including:
- User creation and management
- Pagination and filtering
- User validation
- Error handling

**Location**: `src/modules/users/`

**Key Files**:
- `users.controller.ts` - Handles HTTP requests
- `users.service.ts` - Contains business logic
- `users.repository.ts` - Manages data operations
- `user.entity.ts` - User data model

## 🛠️ Scripts

| Command | Description |
|---------|-------------|
| `yarn start` | Start the application |
| `yarn start:dev` | Start in development mode with watch |
| `yarn start:debug` | Start with debugging enabled |
| `yarn start:prod` | Start production build |
| `yarn build` | Build the application |
| `yarn format` | Format code with Prettier |
| `yarn lint` | Lint code with ESLint |
| `yarn test` | Run unit tests |
| `yarn test:watch` | Run tests in watch mode |
| `yarn test:cov` | Run tests with coverage |
| `yarn test:e2e` | Run end-to-end tests |

## 🔐 Security Features

- Password hashing with bcrypt
- Input validation with DTOs
- Error message sanitization
- Rate limiting ready (can be added)

## 🧪 Testing

Run the test suite:
```bash
# Unit tests
yarn test

# Watch mode
yarn test:watch

# Coverage report
yarn test:cov

# E2E tests
yarn test:e2e
```

## 📝 Environment Variables

Create a `.env` file in the root directory:

```env
# Database
DB_HOST=localhost
DB_PORT=5432
DB_USERNAME=postgres
DB_PASSWORD=root
DB_NAME=todo_app_db

# Application
PORT=3000
NODE_ENV=development
API_PREFIX=api
API_VERSION=v1
```

## 🐛 Troubleshooting

### Database Connection Error
- Ensure PostgreSQL is running
- Verify credentials in `.env`
- Check if the database exists

### Port Already in Use
```bash
# Change PORT in .env file
PORT=3001
```

### Module Not Found Errors
```bash
# Clear node_modules and reinstall
rm -rf node_modules yarn.lock
yarn install
```

## 📚 Additional Resources

- [NestJS Documentation](https://docs.nestjs.com/)
- [TypeORM Documentation](https://typeorm.io/)
- [PostgreSQL Documentation](https://www.postgresql.org/docs/)
- [Swagger/OpenAPI](https://swagger.io/)

## 🤝 Contributing

1. Create a feature branch
2. Commit changes
3. Push to the branch
4. Create a Pull Request

## 📄 License

This project is licensed under the UNLICENSED license.

## 👤 Author

TodoApp Team

---

**Last Updated**: December 6, 2025

For issues or questions, please contact the development team.


