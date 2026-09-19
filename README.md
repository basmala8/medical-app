# Carely 🩺

Carely is a medical appointment booking web application built with React.

It allows users to browse doctors, view doctor details, book appointments,
manage appointments, save favorite doctors, and manage their profile.

## Features

- Browse medical specialties
- Browse doctors from the API
- Search and filter doctors
- View doctor details
- Book medical appointments
- Edit and delete appointments
- Save favorite doctors
- Dark / Light Mode
- Doctor availability status
- Appointment status
- Profile management
- Form validation
- Responsive design
- Loading, error, empty, and success states

## Technologies

- React
- React Router
- Zustand
- Axios
- React Hook Form
- REST API
- JSON Server
- Tailwind CSS
- React Hot Toast
- Tabler Icons
- Vite

## Main Routes

- `/` — Home
- `/doctors` — Doctors
- `/doctors/:id` — Doctor Details
- `/booking` — Book Appointment
- `/appointments` — My Appointments
- `/favorites` — Favorite Doctors
- `/profile` — Profile
- `*` — 404 Not Found

## Getting Started

### Install dependencies

```bash
npm install
```

### Start the API

```bash
npx json-server --watch db.json --port 3000
```

### Start the React application

```bash
npm run dev
```

Then open the local URL shown in the terminal.

## API

The application uses JSON Server as a REST API for doctors and appointments.

Axios is used to fetch, create, update, and delete appointment data.

## Live Demo

https://medical-app-ten-kappa.vercel.app/

## GitHub

Repository:

https://github.com/basmala8/medical-app

## Author

Basmala Mohamed

GitHub: https://github.com/basmala8

LinkedIn: https://linkedin.com/in/basmala-mohamed-qrr