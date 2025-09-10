# Agora Med Care Platform

## Overview

Agora Med Care is a comprehensive healthcare management platform integrated into the Qube Assessment repository. This medical care platform provides a complete solution for managing doctors, patients, appointments, and medical services.

## Features

### 🏥 Dashboard
- **Real-time Statistics**: Total doctors, patients, appointments, and completed appointments
- **Visual Analytics**: Interactive doughnut chart showing appointment status distribution
- **Specializations Overview**: Available medical specializations
- **Recent Appointments**: Table with latest appointment activities

### 👨‍⚕️ Doctors Management
- **Doctor Profiles**: Comprehensive doctor information with experience, ratings, and fees
- **Search & Filter**: Search by name/specialization with dropdown filters
- **Availability Tracking**: Visual badges showing available days
- **Star Rating System**: 5-star rating display for each doctor
- **Quick Actions**: View details and book appointment buttons

### 📅 Appointments Management
- **Status Management**: Filter by appointment status (Pending, Confirmed, Completed, Cancelled)
- **Date Filtering**: Calendar-based date selection
- **Patient-Doctor Mapping**: Complete appointment details with patient and doctor information
- **Action Controls**: Status-dependent action buttons (View, Confirm, Cancel)
- **Time Formatting**: Professional 12-hour time format display

### 📊 Statistics & Analytics
- **Performance Metrics**: Total counts and completion rates
- **Visual Charts**: Chart.js integration for data visualization
- **Specialization Analytics**: Available medical specializations tracking

## Technology Stack

### Backend (Node.js/Express)
- **REST API**: Comprehensive endpoints for all medical data
- **Mock Data**: Pre-populated with realistic medical information
- **CORS Support**: Cross-origin request handling
- **JSON Responses**: Structured API responses with status codes

### Frontend (React/TypeScript)
- **TypeScript**: Full type safety with interfaces
- **Redux Toolkit**: State management with async thunks
- **PrimeReact**: Professional UI component library
- **Chart.js**: Data visualization and analytics
- **React Router**: Navigation and routing
- **Responsive Design**: Mobile-friendly layout

### Key Components
- **API Service Layer**: Centralized API calls with error handling
- **Redux Store**: Centralized state management
- **Custom Components**: Reusable UI components
- **Layout System**: Responsive sidebar navigation

## API Endpoints

### Base URL: `http://localhost:5000/api/agora-med-care`

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/dashboard` | GET | Dashboard statistics and recent appointments |
| `/doctors` | GET | List all doctors with search/filter support |
| `/doctors/:id` | GET | Get specific doctor details |
| `/patients` | GET | List all patients with search support |
| `/patients/:id` | GET | Get specific patient details |
| `/appointments` | GET | List appointments with filtering |
| `/appointments/:id` | GET | Get specific appointment details |
| `/services` | GET | List medical services with categories |
| `/services/:id` | GET | Get specific service details |

## Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn package manager

### Installation & Running

1. **Backend Setup**:
   ```bash
   cd backend
   yarn install
   node server.js
   ```
   Server runs on http://localhost:5000

2. **Frontend Setup**:
   ```bash
   cd Frontend
   yarn install
   npm start
   ```
   Application runs on http://localhost:3000

### Access Points
- **Music Collection App**: http://localhost:3000/
- **Agora Med Care Platform**: http://localhost:3000/agora-med-care/dashboard

## Navigation

The platform includes a comprehensive navigation system:

- **Dashboard**: Overview and statistics
- **Doctors**: Doctor profiles and management
- **Appointments**: Appointment scheduling and tracking
- **Patients**: Patient information (placeholder)
- **Services**: Medical services catalog (placeholder)

## Integration

The Agora Med Care platform is seamlessly integrated with the existing music collection application:
- **Unified Navigation**: Easy switching between applications
- **Shared Infrastructure**: Common build and deployment setup
- **Consistent Design**: Professional UI/UX across both applications

## Screenshots

![Agora Med Care Dashboard](https://github.com/user-attachments/assets/684ed5ef-2924-4f9f-8967-329c2e1fb568)

*Dashboard showing statistics, charts, and recent appointments with professional medical care interface*

## Future Enhancements

- Patient management interface
- Medical services booking
- Appointment scheduling calendar
- Doctor availability management
- Patient medical history
- Prescription management
- Billing and insurance integration

## Development

The platform follows modern development practices:
- **TypeScript**: Type safety and better development experience
- **Component Architecture**: Modular and reusable components
- **State Management**: Centralized Redux store
- **Error Handling**: Comprehensive error handling and loading states
- **Responsive Design**: Works on desktop, tablet, and mobile devices

---

This medical care platform demonstrates a complete healthcare management solution with professional-grade features and modern web technologies.