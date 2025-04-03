# Recipe Book

Recipe Book is a web application that allows users to explore and filter recipes based on ingredients, countries, and categories. The project consists of two parts: the server (backend) and the client (frontend), each with its own set of dependencies.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running the Application](#running-the-application)
  - [Running the Server](#running-the-server)
  - [Running the Client](#running-the-client)
- [Environment Variables](#environment-variables)
- [Additional Setup](#additional-setup)

## Prerequisites

Before starting, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v16.x or higher)
- [npm](https://www.npmjs.com/) (Node package manager, which is included with Node.js)
- [Git](https://git-scm.com/)

## Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/your-username/recipe-book.git
   cd recipe-book
   ```

2. **Install dependencies for the server**:
   Go to the server directory and install the server-side dependencies.

   ```bash
   cd server
   npm install
   ```

3. **Install dependencies for the client**:
   Go to the client directory and install the client-side dependencies.
   ```bash
   cd client
   npm install
   ```

## Running the Application

### Running the Server

1. Go to the `server` directory:

   ```bash
   cd server
   ```

2. Start the server:

   ```bash
   npm start
   ```

   The server will start on [http://localhost:3000](http://localhost:3000).

### Running the Client

1. Go to the `client` directory:

   ```bash
   cd client
   ```

2. Start the client:

   ```bash
   npm start
   ```

   The client will start on [http://localhost:3001](http://localhost:3001).

   By default, the client will make requests to the server running on `localhost:3000`.

## Environment Variables

The project may require environment variables for configuration. Create a `.env` file in the root of the server and client directories.

### Root `.env` Example

```bash
PORT=3000
API_BASE_URL=https://www.themealdb.com/api/json/v1/1/
```

### Client `.env` Example

```bash
VITE_API_URL=http://localhost:3000
```

Make sure to replace `your-database-url` and any other placeholders with your actual configuration values.

## Additional Setup

- **Database Setup**: If your server requires a database, ensure that you have a running database and that your `.env` file is configured with the correct database URL.
- **Client Configuration**: The client is configured to make requests to the server on `localhost:3000`. Ensure that the server is running before starting the client.

---
