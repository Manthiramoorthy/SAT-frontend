# E-Commerce Frontend (React)

Modern React frontend for an e‑commerce application with authentication, role‑based access control, and product management (list & add). Built with Create React App and React Router.

## ✨ Features

- User registration & login (JWT stored in localStorage)
- Protected routes (redirects unauthenticated users to login)
- Role based authorization ("admin" required to access Add Product page)
- Product listing (fetched from backend API)
- Add new product (title, price, description)
- Bootstrap 5 styling
- Environment configurable backend URL via `.env`

## 🗂️ Project Structure (key files)

```
src/
	Router.js               # Route definitions & protected routes
	auth/
		Login.js              # Handles authentication & token persistence
		Register.js           # New user registration
		ProtectedRoute.js     # Auth / role gating wrapper
	product/
		ProductList.js        # Fetch & render product cards
		ProductCard.js        # Card UI component
		AddProduct.js         # Admin-only product creation form
```

## 🧪 Tech Stack

- React 19
- React Router DOM 7
- Bootstrap 5
- Create React App tooling (react-scripts)
- Testing Library / Jest setup scaffolded (tests can be added in `src/`)

## 🔧 Prerequisites

- Node.js >= 18
- npm >= 9
- Running backend that exposes endpoints:
  - `POST /auth/login`
  - `POST /auth/register`
  - `GET /products`
  - `POST /products` (auth required; admin role to access UI)

## 📦 Installation & Setup

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file (or copy from provided example):
   ```bash
   copy .env.example .env   # Windows PowerShell: cp .env.example .env also works
   ```
4. Edit `.env` with your backend URL.
5. Start the dev server:
   ```bash
   npm start
   ```
6. Open http://localhost:3000

## 🛠 Environment Variables

Create React App only exposes variables prefixed with `REACT_APP_`.

| Variable                | Description            | Example                 |
| ----------------------- | ---------------------- | ----------------------- |
| `REACT_APP_BACKEND_URL` | Base URL for API calls | `http://localhost:5000` |

`.env.example` is included to guide setup.

## 🔐 Authentication Flow

1. User logs in via `Login.js` (POST to `/auth/login`).
2. On success: store `token` and `user` (JSON) in `localStorage`.
3. `ProtectedRoute` checks for token (and role when provided) and either renders the child component or redirects.

## ➕ Adding a Product

- Navigate to `/addproduct` (only accessible if logged in AND user.role === `admin`).
- Submits a POST `/products` with JSON body: `{ title, price, description }` and `Authorization: Bearer <token>` header.

## 🧭 Routing Summary

| Route         | Access        | Purpose                                                |
| ------------- | ------------- | ------------------------------------------------------ |
| `/login`      | Public        | User login                                             |
| `/register`   | Public        | New account creation                                   |
| `/`           | Authenticated | (Home) – likely shows product list via `App` component |
| `/addcount`   | Authenticated | Demo/utility component (counter)                       |
| `/addproduct` | Admin only    | Add new product                                        |
| `*`           | Public        | 404 page                                               |

## 🧪 Testing

CRA testing setup is present. To run tests:

```bash
npm test
```

Add test files beside components using `*.test.js` naming.

## 🚀 Production Build

```bash
npm run build
```

Outputs optimized assets into `build/` ready for static hosting (Netlify, Vercel, S3, etc.).

## 🐞 Troubleshooting

| Issue                    | Check                                                       |
| ------------------------ | ----------------------------------------------------------- |
| API calls fail           | Ensure `REACT_APP_BACKEND_URL` is correct & backend running |
| Protected route redirect | Token missing/expired or role mismatch                      |
| Env var not applied      | Restart dev server after editing `.env`                     |

## 🗺️ Roadmap / Ideas

- Product images upload support
- Edit / delete product (admin)
- Pagination / search / filtering
- Global state (Redux / Context) for auth & products
- Improved form validation & error display

## 📄 License

Internal / educational project. Add a license file if distributing.

---

Feel free to extend or adjust this README as the project grows.
