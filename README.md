# 🧭 Next.js Project — Dashboard with ShadCN Components

## 📋 Overview

This project is built using **Next.js (TypeScript)** and integrates **ShadCN UI components** to create a clean, modular dashboard interface.
It allows users to **add blog data via API** and **view fetched data** in a paginated, server-side-rendered dashboard layout.

---

## 🚀 Features

### 🏠 Home Page

* Includes a **Card component** that navigates directly to the **Dashboard** when clicked.

---

### 📊 Dashboard Page (`main/page.tsx`)

* Implements a **Sidebar** and **Navbar** from **ShadCN UI**, ensuring a clean and responsive layout.
* Divided into two major sections:

  1. **AddBlog Section** — Client-side form for adding data
  2. **BlogMap Section** — Server-side rendered blog list with client-side pagination

---

## 🧩 Components

### 🔹 `AddBlog` Component

* Uses **ShadCN form components** for input fields.
* Manages form data using **React Hooks** (`useState`).
* On submission:
   * Sends data to the backend API using **`axios.post()`**.
   * Displays a confirmation using `alert()` showing the submitted data.
* The form remains lightweight and reactive, following client-side rendering principles.

---

### 🔹 `BlogMap` Component

* Fetches blog data **on the server side** using **Next.js App Router’s server components**  `getServerSideProps`.
* Returns the fetched data to the **BlogCard** page component.
* The **BlogCard** is a **client-side component**, which:
* Uses **pagination** to display limited results per page.
* Renders each blog entry using **ShadCN Card** components for consistent styling.

---

## ⚙️ Workflow

1. **Home Page → Dashboard Navigation**
   Clicking on the **Home Page Card** redirects to `/dashboard`.

2. **Add Blog (Client-side)**
   The user fills in the blog form → data submitted using `axios.post()` → success alert displayed.

3. **Fetch Blog Data (Server-side)**
   The **BlogMap** section fetches data on the server side before rendering → improves SEO and load performance.

4. **Display Blogs (Client-side Pagination)**
   The fetched data is passed into **BlogCard** → displayed with **pagination** using client-side state updates.

---
