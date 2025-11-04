# 🧩 Task Backend (AdonisJS)

A simple backend built with **AdonisJS v6**, using **TypeScript**, **Lucid ORM**, and **MySQL**.

---

## 🚀 Getting Started

### 1️⃣ Clone the repository

git clone https://github.com/sazid62/task-backend.git

cd task-backend

---

### 2️⃣ Install dependencies

pnpm install

*(You can also use `npm install` or `yarn install` if you prefer.)*

---

### 3️⃣ Create a new MySQL database

Open your MySQL client or phpMyAdmin and create a database, e.g.:

CREATE DATABASE (YOUR_DB_NAME);

---

### 4️⃣ Create `.env` file in the root directory

Create a file named `.env` and fill it with the following content:

TZ=UTC

PORT=3333

HOST=localhost

LOG_LEVEL=info

APP_KEY=oyh9YPKzGyCdz-4RqnNFnWs3GsFmvXem

NODE_ENV=development

DB_HOST=127.0.0.1

DB_PORT=3306

DB_USER=(YOUR_DB_USER_NAME)

DB_PASSWORD=(YOUR_DB_PASS)

DB_DATABASE= (YOUR_DB_NAME)

SESSION_DRIVER=cookie

*(Make sure your MySQL user/password are correct for your local setup.)*

---

### 5️⃣ Run database migrations

node ace migration:run

This will create all required tables.

---

### 6️⃣ Seed sample data (optional)

node ace db:seed

This will insert sample data (like test users or products).

---

### 7️⃣ Start the development server

pnpm dev

The server will start at:

👉 http://localhost:3333

You should see the following response:

{
  "hello": "world"
}

---

## 🧠 Notes

- Default environment: `development`
- Default port: `3333`
- Session-based authentication is enabled (cookie driver)
- Database used: MySQL
 

 

 
