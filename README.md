# Workout Tracker API

A robust RESTful backend system for a workout tracking application. This API allows users to sign up, securely log in, create custom workout plans, schedule fitness sessions, and track their progress over time. 

## Features

*   **User Authentication & Security:** Secure sign-up and login utilizing JSON Web Tokens (JWT) for route protection and user-scoped data access.
*   **Exercise Library:** A pre-populated relational database of exercises categorized by type and muscle group (via database seeder).
*   **Workout Management:** Full CRUD (Create, Read, Update, Delete) operations for workout plans. Users can add multiple exercises per workout, including specific sets, reps, and weights.
*   **Scheduling:** Ability to schedule workouts for specific dates and times.
*   **Progress Reporting:** Generate reports on past workouts and overall progress.

---

## Tech Stack

*   **Runtime:** Node.js
*   **Framework:** Express.js
*   **Database:** PostgreSQL
*   **Database Driver:** `pg` (node-postgres)
*   **Authentication:** `jsonwebtoken` (JWT), `bcrypt` (Password Hashing)
*   **Documentation:** OpenAPI / Swagger (Planned/Implemented)
*   **Testing:** Jest / Supertest (Planned/Implemented)

---

## Prerequisites

Before running this project, ensure you have the following installed:
*   [Node.js](https://nodejs.org/) (v14 or higher)
*   [PostgreSQL](https://www.postgresql.org/) (v12 or higher)
*   [pgAdmin 4](https://www.pgadmin.org/) (Recommended for database management)

---

## Getting Started

### 1. Clone the Repository
```bash
git clone <https://github.com/alihaiderno2/Workouts_app.git>
cd workout-tracker-backend

2. Install Dependencies
Bash
npm install
3. Database Setup
Open pgAdmin or your PostgreSQL CLI.

Create a new database named workout_tracker.

Run the schema creation script to generate the tables (users, exercises, workouts, workout_exercises). (Note: The raw SQL schema is located in the /sql or /docs folder of this repository).

4. Environment Variables
Create a .env file in the root directory and configure it with your local credentials:

Code snippet
PORT=5000
DB_USER=postgres
DB_PASSWORD=your_postgres_password
DB_HOST=localhost
DB_PORT=5432
DB_DATABASE=workout_tracker
JWT_SECRET=your_super_secret_jwt_key