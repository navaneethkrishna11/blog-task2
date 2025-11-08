
# 🧭 Next.js Project — Dashboard with ShadCN Components

## 📋 Overview

This project is built using **Next.js (TypeScript)** and integrates **ShadCN UI components** to create a clean, modular dashboard interface.
The application allows users to **add data via API** and **view the fetched data** using reusable components.

---

## 🚀 Features

### 🏠 Home Page

* Added a **Card component** that navigates directly to the **Dashboard** on click.
* Uses **Next.js routing** to handle navigation seamlessly.

### 📊 Dashboard Page (`main/page.tsx`)

* Imported and integrated **Sidebar** and **Navbar** from **ShadCN UI** components for a professional layout.
* Two key sections were developed:

  1. **Add Section** — Handles API requests (POST)
  2. **Map Section** — Displays API data (GET)

---

## 🧩 Components

### 🔹 `Add` Component

* Contains a **form** built using **ShadCN form elements**.
* Uses **React hooks** to manage form input states.
* On form submission:

  * Sends data to the backend using **`axios.post()`**.
  * Automatically updates the list of items displayed on the dashboard.

### 🔹 `Map` Component

* Fetches API data using **`axios.get()`**.
* Loops through the data using the **`map()`** function.
* Displays each item inside a **ShadCN Card component** for a consistent UI.

---

## 🧠 Tech Stack

| Category               | Technologies Used    |
| ---------------------- | -------------------- |
| **Frontend Framework** | Next.js (TypeScript) |
| **UI Library**         | ShadCN UI            |
| **HTTP Client**        | Axios                |
| **State Handling**     | React Hooks          |
| **Styling**            | Tailwind CSS         |
| **Routing**            | Next.js Router       |

---

## ⚙️ How It Works

1. User clicks on **Home Page Card** → navigates to `/dashboard`.
2. Dashboard loads with **Sidebar** and **Navbar**.
3. In **AddBlog Section**, user enters details → submits form → data sent via `axios.post()`.
4. In **BlogMap Section**, data fetched via `axios.get()` → displayed in ShadCN Cards.

---
