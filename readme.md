# Simple RESTful API

This project is a basic API application built using Node.js, Express.js, and MongoDB. The API includes essential functionalities such as basic CRUD operations, logging of HTTP requests, and structured error handling.

## Table of Contents
- [Features](#features)
- [Setup](#setup)
- [Environment Variables](#environment-variables)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Technologies](#technologies)

---

## Features

- CRUD operations with MongoDB
- HTTP request logging using Morgan
- Error handling with centralized logging
- Structured project organization

## Setup

To run this project on your local environment, follow these steps:

1. Clone this repository:
    ```bash
    git clone https://github.com/username/project_name.git
    ```

2. Navigate to the project directory:
    ```bash
    cd project_name
    ```

3. Install the required dependencies:
    ```bash
    npm install
    ```

4. Set up your MongoDB connection details in a `.env` file as shown below in the **Environment Variables** section.

5. Start the server:
    ```bash
    npm start
    ```

## Environment Variables

Create a `.env` file in the project root with the following structure:

```env
MONGO_URI=mongodb://localhost:27017/project_name
PORT=3000
