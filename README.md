# 🔗 URL Shortener

A full-stack URL shortening web app built with **Node.js**, **Express**, **MongoDB**, and **EJS**. Users can sign up, log in, and generate short links for long URLs, with click tracking and role-based access (Normal / Admin). Styled with a custom black & blue dark theme.

![Node](https://img.shields.io/badge/Node.js-Express-green)
![Database](https://img.shields.io/badge/Database-MongoDB-brightgreen)
![Auth](https://img.shields.io/badge/Auth-JWT-blue)
![License](https://img.shields.io/badge/License-ISC-lightgrey)

---

## ✨ Features

- 🔐 User authentication (Signup/Login) with JWT stored in cookies
- ✂️ Generate short URLs from long links using `nanoid`
- 📊 Click/visit history tracking per short URL
- 👤 Role-based access control (`NORMAL` / `ADMIN`)
- 🗂️ Admin view to see all URLs created by every user
- 🎨 Responsive dark-themed UI (black & blue) built with EJS + custom CSS
- 🍪 Cookie-based session handling via middleware

---

## 🛠️ Tech Stack

| Layer      | Technology                          |
| ---------- | ----------------------------------- |
| Backend    | Node.js, Express 5                  |
| Database   | MongoDB, Mongoose                   |
| Templating | EJS                                 |
| Auth       | JSON Web Token (JWT), cookie-parser |
| Utilities  | nanoid, uuid, dotenv                |
| Dev Tools  | nodemon                             |

---

## 📸 Screenshots


| Signup Page                   | Login Page                  | Dashboard                           |
| ----------------------------- | --------------------------- | ----------------------------------- |
| ![Signup](/assets/SignUp.png) | ![Login](/assets/Login.png) | ![Dashboard](/assets/Dashboard.png) |

---

## 📁 Project Structure

```
short-url/
├── config/
│   └── db.js                # MongoDB connection
├── controllers/
│   ├── url.js                # URL creation, redirection, listing
│   └── user.js                # Signup / Login logic
├── middlewares/
│   └── auth.js                # Authentication & role-based access
├── models/
│   ├── url.js                # URL schema
│   └── user.js                # User schema
├── routes/
│   ├── staticRoute.js         # Home, signup, login, admin views
│   ├── url.js                 # URL API routes
│   └── user.js                 # Auth routes
├── service/
│   └── auth.js                 # JWT sign/verify helpers
├── view/
│   ├── home.ejs
│   ├── signup.ejs
│   └── login.ejs
├── public/
│   └── style.css                # Black & Blue theme
├── index.js                     # App entry point
├── package.json
└── .env                          # Environment variables (not committed)
```

---

## ⚙️ Installation & Setup

### 1. Clone the repository

```bash
git clone https://github.com/aimgodheretest/shortURL.git
cd short-url
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

Create a `.env` file in the project root:

```env
PORT=4000
MONGO_URI=mongodb://localhost:27017/short-url
```

### 4. Start MongoDB

Make sure MongoDB is running locally, or use a MongoDB Atlas connection string in `MONGO_URI`.

### 5. Run the app

```bash
npm start
```

The server will start at:

```
http://localhost:4000
```

---

## 🔑 Environment Variables

| Variable    | Description               | Example                               |
| ----------- | ------------------------- | ------------------------------------- |
| `PORT`      | Port the server runs on   | `4000`                                |
| `MONGO_URI` | MongoDB connection string | `mongodb://localhost:27017/short-url` |


---

## 🧭 Routes Overview

### Auth Routes

| Method | Route     | Description        |
| ------ | --------- | ------------------ |
| GET    | `/signup` | Render signup page |
| POST   | `/signup` | Create a new user  |
| GET    | `/login`  | Render login page  |
| POST   | `/login`  | Authenticate user  |

### URL Routes

| Method | Route         | Description                          |
| ------ | ------------- | ------------------------------------ |
| GET    | `/`           | View URLs created by logged-in user  |
| POST   | `/url`        | Generate a new short URL             |
| GET    | `/url`        | List all URLs (internal use)         |
| GET    | `/:nanoid`    | Redirect to original URL + log visit |
| GET    | `/admin/urls` | Admin-only view of all URLs          |

---

## 🚀 Roadmap / Ideas for Improvement

- [ ] Hash passwords with `bcrypt` before storing
- [ ] Add custom alias support for short URLs
- [ ] Add URL expiration and analytics dashboard
- [ ] Add logout functionality
- [ ] Add form validation & error messages on frontend

---

## 📄 License

This project is licensed under the **ISC License**.

---

## 👤 Author

**Murli Kumar**
