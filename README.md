# Green Cart

Green Cart is a full-stack e-commerce web application for grocery shopping.

**Frontend:** React (Vite) + Tailwind CSS — **Backend:** Express + MongoDB + Stripe + Cloudinary.

Supports user & seller/admin authentication, product management, cart & checkout (COD + Stripe), order history, address management, image uploads, and responsive UI.

---

## Table of Contents

* [Features](#features)
* [Tech Stack](#tech-stack)
* [Project Structure](#project-structure)
* [Getting Started](#getting-started)

  * [Prerequisites](#prerequisites)
  * [Environment Variables](#environment-variables)
  * [Install & Run (local)](#install--run-local)
* [Deployment](#deployment)
* [API Endpoints](#api-endpoints)
* [Folder Structure (example)](#folder-structure-example)
* [Contributing](#contributing)
* [License](#license)
* [Credits](#credits)

---

## Demo

🔗 **Live Demo:** *https://greencart-frontend-ebon.vercel.app/*

---

## Features

* User registration & login (JWT)
* Seller / Admin login
* Product listing, details, category filtering
* Add to cart, update cart, checkout (Cash on Delivery & Stripe)
* Address management 
* Order history & seller order management
* Image uploads using Cloudinary
* Responsive UI built with Tailwind CSS
* Stripe payment integration & webhook handling

---

## Tech Stack

* **Frontend:** React + Vite, Tailwind CSS
* **Backend:** Node.js, Express.js
* **Database:** MongoDB 
* **Authentication:** JWT
* **Image storage:** Cloudinary

---

## Project Structure

```
client/      # React + Vite frontend
server/      # Express backend (routes, controllers, models, middlewares)
```

---

## Getting Started

### Prerequisites

* Node.js (v16+ recommended) & npm
* MongoDB instance (local or Atlas)
* Cloudinary account (for image uploads)
* Stripe account (for payments)

### Environment Variables

Create `.env` files in both `server/` and `client/`. Example `.env` for `server/`:

```env
# server/.env
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
SELLER_EMAIL=your_seller_email
SELLER_PASSWORD=your_seller_password

CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret

STRIPE_PRIVATE_KEY=sk_test_...
STRIPE_WEBHOOK_SECRET=whsec_...

NODE_ENV=development
PORT=5000
```

create `client/.env`:

```env
# client/.env (Vite expects VITE_ prefix)
VITE_API_BASE_URL=http://localhost:5000/api
VITE_STRIPE_PUBLISHABLE_KEY=pk_test_...
```

---

### Install & Run (local)

#### Backend

```bash
# from project root
cd server

# install packages
npm install

# start: (with nodemon)
npm run start

```

#### Frontend

```bash
cd client

npm install
npm run dev       # runs vite dev server (http://localhost:5173 by default)

# build for production
npm run build
```

---

## Folder Structure 

```
server/
├─ controllers/
├─ middlewares/
├─ models/
├─ routes/
├─ config/
├─ server.js 

client/
├─ src/
│  ├─ components/
│  ├─ pages/
│  ├─ context/
│  └─ main.jsx
```

---

## License

This project is licensed under the **MIT License**. See the `LICENSE` file for details.

---
