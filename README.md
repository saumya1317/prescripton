# 🏥 Prescripton - Doctor Appointment Booking System

A robust MERN (MongoDB, Express, React, Node.js) application designed to streamline the process of booking medical appointments. The project features three distinct interfaces: a patient portal, a professional admin dashboard, and a dedicated doctor panel.

## 🏗️ System Architecture

The application is built using a decoupled architecture where the frontend and admin panels communicate with a centralized Node.js API.

- **Frontend (Vercel)**: Consumer-facing SPA built with Vite and Tailwind CSS.
- **Admin Panel (Vercel)**: Dashboard for managing doctor records and system-wide appointments.
- **API Server (Render)**: RESTful backend handling business logic and security.
- **Database (MongoDB Atlas)**: NoSQL document storage for users, doctors, and bookings.
- **Asset Storage (Cloudinary)**: CDN-based hosting for medical professional profiles.

## ✨ Key Features

### For Patients (Frontend)
- **Specialty Filtering**: Browse doctors by category like General Physician, Gynecologist, and more.
- **Profile Management**: Update personal details and track appointment history.
- **Secure Payments**: Integrated Razorpay for seamless consultation fee payments.
- **Real-time Availability**: View dynamic "Available" status indicators for all doctors.

### For Admin & Doctors (Admin Site)
- **Admin Dashboard**: Manage the list of doctors, view all bookings, and oversee system stats.
- **Doctor Panel**: Doctors can log in to view their specific appointments, track earnings, and toggle their own availability.
- **Image Handling**: Integrated with Cloudinary for high-performance medical profile image hosting.

## 🛠️ Environment Configuration

### Secure Credentials
Create a `.env` in the `backend/` directory with the following:

```env
MONGODB_URI=your_uri
CLOUDINARY_NAME=your_name
CLOUDINARY_API_KEY=your_key
CLOUDINARY_SECRET_KEY=your_secret
JWT_SECRET=your_jwt_secret
ADMIN_EMAIL=admin@example.com
ADMIN_PASSWORD=your_password
RAZORPAY_KEY_ID=your_id
RAZORPAY_KEY_SECRET=your_secret
```

### Client Connection
In both `frontend/` and `admin/`:

```env
VITE_BACKEND_URL=https://prescriptonmanage.onrender.com
VITE_RAZORPAY_KEY_ID=your_id
```

## 🔧 Installation & Local Setup

1. **Clone the Repo:**
   ```bash
   git clone https://github.com/saumya1317/prescripton.git
   cd prescripton
   ```

2. **Setup Backend:**
   ```bash
   cd backend
   npm install
   npm run server
   ```

3. **Setup Frontend & Admin:**
   (Repeat for both folders)
   ```bash
   npm install
   npm run dev
   ```

## 🛡️ Deployment Notes

- **Case Sensitivity**: All imports are synced to match the lowercase naming convention required by Linux-based deployment servers (e.g., Myappointments.jsx).
- **CORS Configuration**: The backend is configured to accept requests from multiple Vercel origins (Frontend and Admin).
- **SPA Routing**: vercel.json and Render redirects are implemented to handle 404 errors on page refresh.

## 🚀 Live Demo

- **Frontend (Patients)**: [Your Vercel Link]
- **Admin/Doctor Panel**: [Your Admin Vercel Link]
- **Backend API**: https://prescriptonmanage.onrender.com

## 🛠️ Tech Stack

- **Frontend**: React.js, Tailwind CSS, Vite
- **Backend**: Node.js, Express.js
- **Database**: MongoDB Atlas
- **Payments**: Razorpay API
- **Storage**: Cloudinary API

## 🚀 Deployment Strategy

This project is optimized for cross-platform deployment:

- **Backend**: Deployed on Render with CORS policies configured to allow multi-origin requests.
- **Frontend/Admin**: Deployed on Vercel with vercel.json rewrites to support React Router single-page navigation.
- **Filenames**: Strictly follows lowercase naming conventions to ensure compatibility with Linux-based production servers.

## 📁 Project Structure

```
appointment booking/
├── admin/              # Admin panel (React/Vite)
├── backend/            # Node.js/Express API server
│   ├── config/         # Database and cloudinary configs
│   ├── controllers/    # Business logic handlers
│   ├── middleware/     # Authentication and validation
│   ├── models/         # Mongoose schemas
│   └── routes/         # API endpoints
├── frontend/           # Patient-facing app (React/Vite)
└── README.md
```

## 🛡️ Security Features

- JWT-based authentication for all user roles
- Role-based access control (Admin, Doctor, Patient)
- Encrypted password storage with bcrypt
- Secure file uploads with Cloudinary
- Input validation and sanitization

## 💳 Payment Integration

- Razorpay for secure transaction processing
- Order creation and verification workflow
- Real-time payment status updates

## 📊 Key Technologies

- **Frontend**: React, Vite, Tailwind CSS
- **Backend**: Node.js, Express.js
- **Database**: MongoDB with Mongoose ODM
- **Authentication**: JWT, bcrypt
- **File Upload**: Multer with Cloudinary
- **Payment Gateway**: Razorpay API
- **Environment**: Vite for development

## 🚀 Quick Start

1. Clone the repository
2. Install dependencies in each directory:
   ```bash
   cd backend && npm install
   cd ../frontend && npm install
   cd ../admin && npm install
   ```
3. Set up environment variables as shown above
4. Start the development servers:
   ```bash
   # In backend/
   npm run dev
   
   # In frontend/
   npm run dev
   
   # In admin/
   npm run dev
   ```

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👨‍💻 Author

Built with ❤️ for healthcare management solutions.