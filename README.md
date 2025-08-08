# 🏺 Historical Artifacts Tracker

A modern full-stack application to **track, add, and interact with historical artifacts**. This platform allows users to explore, contribute, and manage their own collection of artifacts with a clean, responsive UI.

---

## ✨ Features

### 🏠 Home Page
- A stylish **landing page** with:
  - **Slider/banner**
  - Featured **artifact cards**
  - Informative sections
  - **Responsive navbar** and footer

### 📜 All Artifacts Page
- View a **collection of all artifacts** submitted by users
- Logged-in users can view artifacts added by themselves and others

### ➕ Add Artifact
- Protected route with a **form to submit a new artifact**
- Inputs include artifact name, image, description, and more
- On submission:
  - Artifact is added to **All Artifacts**
  - Also shown under **My Artifacts**

### 👤 User Dashboard
- Accessible via clicking the user **avatar/profile icon**
- Dropdown includes:
  - **User name**
  - **My Artifacts** → Artifacts created by the user
  - **Liked Artifacts** → Artifacts the user has liked

### ❤️ Like System
- Users can **like any artifact**
- Liked items are saved and shown in the **Liked Artifacts** page
- Re-clicking unlikes the item

### 🔐 Authentication
- Firebase-based **Login** and **Register** pages
- Protected routes using Firebase ID tokens
- Authentication required to:
  - Add artifacts
  - Like artifacts
  - Access user dashboard

---

## 🔧 Tech Stack

- **Frontend**: React.js, Tailwind CSS, DaisyUI, Axios, React Router
- **Backend**: Node.js, Express.js
- **Database**: MongoDB (via MongoDB Driver)
- **Authentication**: Firebase Auth
- **Animations**: Framer Motion, Lottie
- **Hosting**: Vercel (Frontend), Render (or your choice for Backend)

---

## 🛢️ Database

- **MongoDB** is used as the primary database.
- It stores:
  - All user-submitted artifact data
  - User-liked artifact references
  - Links data to authenticated Firebase user emails

---

## 🚀 How to Run Locally

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/historical-artifacts-tracker.git
