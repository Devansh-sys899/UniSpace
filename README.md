<h2>UniSpace</h2> 

UniSpace is a full‑stack resource booking and management platform built for universities and institutions. It allows users to browse and book shared resources (like rooms, labs, halls), while managers can create, manage, and analyze resource usage through a dedicated dashboard.

This project was built with a strong focus on real‑world flows, clean UI, and role‑based access control.

<b>Features</b>

<b>1. User Features</b>

a) Browse available resources<br>
b) View detailed resource information<br>
c) Select date & time slots using a booking calendar<br>
d) Real‑time price calculation<br>
e) Secure booking & checkout flow<br>
f) Role‑based redirection after login<br>

<b>2. Manager Features</b>

a) Create new resources<br>
b) Upload resource images<br>
c) Delete/manage existing resources<br>
d) Manager dashboard with analytics<br>
e) Resource performance breakdown<br>
f) Charts & insights using mock metrics<br>

<b>Tech Stack</b>

<b>1. Frontend</b>

React (Vite)
Tailwind CSS
React Router
React Query
React Toastify

<b>2. Backend</b>

Node.js
Express.js
MongoDB
JWT Authentication
Stripe (Payment Intents)
multer and cloudinary(for assets)

<b>Authentiation and Roles</b>

UniSpace supports role‑based authentication:

user → redirected to User Dashboard

manager → redirected to Manager Dashboard

UI elements like delete buttons and analytics access are strictly limited to managers.

<b>Project Structure(simplified)</b>

UniSpace/<br>
├── Frontend/<br>
│   ├── src/<br>
│   │   ├── Pages/<br>
│   │   ├── Components/<br>
│   │   ├── Hooks/<br>
│   │   ├── Layouts/<br>
│   │   └── App.jsx<br>
│   └── dist/<br>
│
├── Backend/<br>
│   ├── controllers/<br>
│   ├── routes/<br>
│   ├── models/<br>
│   ├── middleware/<br>
│   └── server.js<br>

<b>Setup and Installation</b>

<b>1. Clone the repo</b>

git clone https://github.com/your-username/UniSpace.git

<b>2. Frontend Setup</b>

cd Frontend<br>
npm install<br>
npm run dev<br>

<b>2. Backend Setup</b>

cd Backend<br>
npm install<br>
npm run dev<br>

<b>Frontend Build</b>

npm run build


<b>Environment Variables</b>

Create a .env file in both frontend and backend directories.

<b>Backend .env</b>

PORT=5000<br>
MONGO_URI=your_mongodb_uri<br>
JWT_SECRET=your_secret<br>
STRIPE_SECRET_KEY=your_stripe_key<br>

<b>Frontend .env</b>

VITE_API_BASE_URL=http://localhost:5000

<b>Analytics overview</b>

Managers get access to:
Resource usage distribution<br>
Booking trends<br>
Revenue insights<br>
Resource‑wise performance tables<br>

All analytics are currently mock‑driven, designed to demonstrate dashboard capability and UI clarity.

UniSpace is feature‑complete and ready for deployment.

<b>Learning outcomes</b>

Real‑world booking & payment flow<br>
Role‑based dashboards<br>
Clean UI with Tailwind<br>
Frontend–backend integration<br>
Production build & deployment readiness<br>

Author<br>
Devansh<br>
Full‑Stack Developer

If you liked this project or learned something from it, feel free to ⭐ the repository!
