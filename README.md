# **User Profile & Dynamic Fact API Service**

A robust Node.js Express backend service designed to serve predefined user profile data and dynamically integrate with an external API to fetch intriguing cat facts. This project effectively demonstrates backend development principles, external API consumption, and robust error handling for external dependencies. It's a foundational service showcasing efficient data aggregation and delivery. 🚀

## Overview

This is a Node.js Express backend application that provides user profile information and integrates with the `catfact.ninja` API to fetch a random cat fact. It uses `axios` for HTTP requests and `cors` for cross-origin resource sharing.

## Features

- `Node.js`: Runtime environment for server-side JavaScript execution.
- `Express.js`: Web application framework for building robust APIs.
- `CORS`: Middleware for enabling Cross-Origin Resource Sharing for API accessibility.
- `Axios`: Promise-based HTTP client for making external API requests.
- `Dynamic Data Integration`: Fetches real-time data from an external "Cat Fact" API.
- `Graceful Error Handling`: Provides a fallback message if the external API is unresponsive.

## Getting Started

### Installation

To get a local copy up and running, follow these simple steps.

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/Oracle00999/HNG-Stage-0-Task-backend-wizard.git
    ```
2.  **Navigate into the project directory:**
    ```bash
    cd hng_stage0
    ```
3.  **Install dependencies:**
    ```bash
    npm install
    ```

## Usage

After installation, you can start the server and access the API endpoint.

1.  **Start the server:**
    To run in development mode with `nodemon` (if installed globally or as a dev dependency):

    ```bash
    nodemon app.js
    ```

    Alternatively, for a standard Node.js execution:

    ```bash
    node app.js
    ```

    The server will typically run on `http://localhost:3000` (or your specified `PORT`).

2.  **Access the API:**
    Open your web browser or use a tool like `curl` or Postman to make a GET request to the `/me` endpoint.

    **Example using `curl`:**

    ```bash
    curl http://localhost:3000/me
    ```

    You should receive a JSON response containing user details and a dynamic cat fact.

## API Documentation

### Base URL

`http://localhost:3000` (or the `PORT` specified in your environment variables)

### Endpoints

#### `GET /me`

Retrieves predefined user profile information along with a random cat fact fetched from `catfact.ninja`.

**Request**:
No payload required.

**Response**:
A successful response will return a `200 OK` status with a JSON object containing user details, a timestamp, and a cat fact.

```json
{
  "status": "success",
  "user": {
    "email": "nwazotachibuike@gmail.com",
    "name": "Nwazota Chibuike Anthony",
    "stack": ["nodejs", "express"]
  },
  "timestamp": "2023-10-27T10:30:00.000Z",
  "fact": "Cats sleep 70% of their lives."
}
```

**Errors**:

- `200 (Success, with fallback data)`: If the external `catfact.ninja` API is unresponsive or an error occurs during fetching, the service will still return the user's data and a predefined fallback message for the `fact` field.
  ```json
  {
    "status": "success",
    "user": {
      "email": "nwazotachibuike@gmail.com",
      "name": "Nwazota Chibuike Anthony",
      "stack": ["nodejs", "express"]
    },
    "timestamp": "2023-10-27T10:30:00.000Z",
    "fact": "Cats are mysterious creatures — but our cat facts API seems to be asleep right now, please try again later."
  }
  ```

## Technologies Used

| Technology     | Description                                                                                           | Version   |
| :------------- | :---------------------------------------------------------------------------------------------------- | :-------- |
| **Node.js**    | JavaScript runtime environment                                                                        | `>=18.x`  |
| **Express.js** | Fast, unopinionated, minimalist web framework for Node.js                                             | `^5.1.0`  |
| **Axios**      | Promise-based HTTP client for the browser and node.js                                                 | `^1.12.2` |
| **CORS**       | Node.js middleware for enabling Cross-Origin Resource Sharing                                         | `^2.8.5`  |
| **Nodemon**    | Utility that monitors for changes in your source and automatically restarts your server (development) | `^3.1.10` |

## Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

To contribute:

- 🍴 Fork the Project.
- 🌳 Create your Feature Branch (`git checkout -b feature/AmazingFeature`).
- ✨ Commit your Changes (`git commit -m 'feat: Add some AmazingFeature'`).
- 🚀 Push to the Branch (`git push origin feature/AmazingFeature`).
- 📝 Open a Pull Request.

Please ensure your code adheres to the existing style and conventions.

## License

Distributed under the ISC License. See `package.json` for more details.

## Author

**Nwazota Chibuike Anthony**

- **Email**: nwazotachibuike@gmail.com
- **LinkedIn**: (https://linkedin.com/in/nwazotaanthony)
- **Twitter**: (https://twitter.com/i_amtony_)

## Project Status

[![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org/)
[![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com/)
[![Axios](https://img.shields.io/badge/axios-67123A?style=for-the-badge&logo=axios&logoColor=white)](https://axios-http.com/)
[![Version](https://img.shields.io/badge/version-1.0.0-blue?style=for-the-badge)](package.json)

[![Readme was generated by Dokugen](https://img.shields.io/badge/Readme%20was%20generated%20by-Dokugen-brightgreen)](https://www.npmjs.com/package/dokugen)
