const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());
const albums = [
  {
    id: 1,
    collectionName: "EPIC: The Troy Saga (Official Concept Album)",
    artistName: "Jorge Rivera-Herrans",
    type: "EP",
    songCount: 5,
    duration: "00:15:40",
    size: "45 MB",
    releasedOn: "03 Sept 2024, 02:35 PM",
    songs: [
      {
        title: "The Horse and the Infant",
        performers:
          "Jorge Rivera-Herrans, Luke Holt & Cast of EPIC: The Musical",
        duration: "00:02:15",
        size: "13 MB",
      },
      {
        title: "Just a Man",
        performers: "Jorge Rivera-Herrans & Cast of EPIC: The Musical",
        duration: "00:02:30",
        size: "18 MB",
      },
      {
        title: "Full Speed Ahead",
        performers:
          "Jorge Rivera-Herrans, Armando Julián, Steven Dookie & Cast of EPIC: The Musical",
        duration: "00:05:10",
        size: "24 MB",
      },
      {
        title: "Open Arms",
        performers: "Jorge Rivera-Herrans & Steven Dookie",
        duration: "00:05:10",
        size: "23 MB",
      },
      {
        title: "Warrior of the Mind",
        performers:
          "Jorge Rivera-Herrans, Teagan Earley & Cast of EPIC: The Musical",
        duration: "00:05:10",
        size: "23 MB",
      },
    ],
  },
  {
    id: 2,
    collectionName: "EPIC: The Ocean Saga (Official Concept Album)",
    artistName: "Jorge Rivera-Herrans",
    type: "EP",
    songCount: 4,
    duration: "00:13:00",
    size: "15 MB",
    releasedOn: "04 Sept 2024, 10:00 AM",
    songs: [
      {
        title: "The Horse and the Infant",
        performers:
          "Jorge Rivera-Herrans, Luke Holt & Cast of EPIC: The Musical",
        duration: "00:02:15",
        size: "13 MB",
      },
      {
        title: "Just a Man",
        performers: "Jorge Rivera-Herrans & Cast of EPIC: The Musical",
        duration: "00:02:30",
        size: "18 MB",
      },
      {
        title: "Full Speed Ahead",
        performers:
          "Jorge Rivera-Herrans, Armando Julián, Steven Dookie & Cast of EPIC: The Musical",
        duration: "00:05:10",
        size: "24 MB",
      },
      {
        title: "Open Arms",
        performers: "Jorge Rivera-Herrans & Steven Dookie",
        duration: "00:05:10",
        size: "23 MB",
      },
    ],
  },
  {
    id: 3,
    collectionName: "EPIC: The Ithaca Saga (Official Concept Album)",
    artistName: "Jorge Rivera-Herrans",
    type: "EP",
    songCount: 4,
    duration: "00:12:24",
    size: "30 MB",
    releasedOn: "04 Sept 2024, 10:00 AM",
    songs: [
      {
        title: "The Horse and the Infant",
        performers:
          "Jorge Rivera-Herrans, Luke Holt & Cast of EPIC: The Musical",
        duration: "00:02:15",
        size: "13 MB",
      },
      {
        title: "Just a Man",
        performers: "Jorge Rivera-Herrans & Cast of EPIC: The Musical",
        duration: "00:02:30",
        size: "18 MB",
      },
      {
        title: "Full Speed Ahead",
        performers:
          "Jorge Rivera-Herrans, Armando Julián, Steven Dookie & Cast of EPIC: The Musical",
        duration: "00:05:10",
        size: "24 MB",
      },
      {
        title: "Open Arms",
        performers: "Jorge Rivera-Herrans & Steven Dookie",
        duration: "00:05:10",
        size: "23 MB",
      },
    ],
  },
  {
    id: 4,
    collectionName: "Collection Name",
    artistName: "Artist Name",
    type: "Album",
    songCount: 8,
    duration: "00:21:06",
    size: "12 MB",
    releasedOn: "10 Oct 2024, 02:35 PM",
    songs: [
      {
        title: "The Horse and the Infant",
        performers:
          "Jorge Rivera-Herrans, Luke Holt & Cast of EPIC: The Musical",
        duration: "00:02:15",
        size: "13 MB",
      },
      {
        title: "Just a Man",
        performers: "Jorge Rivera-Herrans & Cast of EPIC: The Musical",
        duration: "00:02:30",
        size: "18 MB",
      },
      {
        title: "Full Speed Ahead",
        performers:
          "Jorge Rivera-Herrans, Armando Julián, Steven Dookie & Cast of EPIC: The Musical",
        duration: "00:05:10",
        size: "24 MB",
      },
      {
        title: "Open Arms",
        performers: "Jorge Rivera-Herrans & Steven Dookie",
        duration: "00:05:10",
        size: "23 MB",
      },
      {
        title: "The Horse and the Infant",
        performers:
          "Jorge Rivera-Herrans, Luke Holt & Cast of EPIC: The Musical",
        duration: "00:02:15",
        size: "13 MB",
      },
      {
        title: "Just a Man",
        performers: "Jorge Rivera-Herrans & Cast of EPIC: The Musical",
        duration: "00:02:30",
        size: "18 MB",
      },
      {
        title: "Full Speed Ahead",
        performers:
          "Jorge Rivera-Herrans, Armando Julián, Steven Dookie & Cast of EPIC: The Musical",
        duration: "00:05:10",
        size: "24 MB",
      },
      {
        title: "Open Arms",
        performers: "Jorge Rivera-Herrans & Steven Dookie",
        duration: "00:05:10",
        size: "23 MB",
      },
    ],
  },
  {
    id: 5,
    collectionName: "Collection Name",
    artistName: "Artist Name",
    type: "Album",
    songCount: 7,
    duration: "00:20:22",
    size: "10 MB",
    releasedOn: "01 Sept 2024, 12:31 AM",
    songs: [
      {
        title: "The Horse and the Infant",
        performers:
          "Jorge Rivera-Herrans, Luke Holt & Cast of EPIC: The Musical",
        duration: "00:02:15",
        size: "13 MB",
      },
      {
        title: "Just a Man",
        performers: "Jorge Rivera-Herrans & Cast of EPIC: The Musical",
        duration: "00:02:30",
        size: "18 MB",
      },
      {
        title: "Full Speed Ahead",
        performers:
          "Jorge Rivera-Herrans, Armando Julián, Steven Dookie & Cast of EPIC: The Musical",
        duration: "00:05:10",
        size: "24 MB",
      },
      {
        title: "Open Arms",
        performers: "Jorge Rivera-Herrans & Steven Dookie",
        duration: "00:05:10",
        size: "23 MB",
      },
      {
        title: "The Horse and the Infant",
        performers:
          "Jorge Rivera-Herrans, Luke Holt & Cast of EPIC: The Musical",
        duration: "00:02:15",
        size: "13 MB",
      },
      {
        title: "Just a Man",
        performers: "Jorge Rivera-Herrans & Cast of EPIC: The Musical",
        duration: "00:02:30",
        size: "18 MB",
      },
      {
        title: "Full Speed Ahead",
        performers:
          "Jorge Rivera-Herrans, Armando Julián, Steven Dookie & Cast of EPIC: The Musical",
        duration: "00:05:10",
        size: "24 MB",
      },
    ],
  },
  {
    id: 6,
    collectionName: "Collection Name",
    artistName: "Artist Name",
    type: "Album",
    songCount: 0,
    duration: "00:25:40",
    size: "16 MB",
    releasedOn: "05 Sept 2024, 12:31 AM",
    songs: [],
  },
  {
    id: 7,
    collectionName: "Collection Name",
    artistName: "Artist Name",
    type: "Single",
    songCount: 1,
    duration: "00:01:20",
    size: "24 MB",
    releasedOn: "11 Oct 2024, 12:31 AM",
    songs: [
      {
        title: "The Horse and the Infant",
        performers:
          "Jorge Rivera-Herrans, Luke Holt & Cast of EPIC: The Musical",
        duration: "00:02:15",
        size: "13 MB",
      },
    ],
  },
  {
    id: 8,
    collectionName: "Collection Name",
    artistName: "Artist Name",
    type: "Single",
    songCount: 1,
    duration: "00:01:20",
    size: "24 MB",
    releasedOn: "11 Oct 2024, 12:31 AM",
    songs: [
      {
        title: "The Horse and the Infant",
        performers:
          "Jorge Rivera-Herrans, Luke Holt & Cast of EPIC: The Musical",
        duration: "00:02:15",
        size: "13 MB",
      },
    ],
  },
];

// Mock Data
const users = [
  { id: 1, name: "John Doe", email: "john@gmail.com" },
  { id: 2, name: "Jane Smith", email: "jane@gmail.com" },
];

// Agora-Med-Care Mock Data
const doctors = [
  {
    id: 1,
    name: "Dr. Sarah Johnson",
    specialization: "Cardiology",
    email: "sarah.johnson@agoramedcare.com",
    phone: "+1-555-0101",
    experience: "15 years",
    rating: 4.8,
    availability: ["Monday", "Tuesday", "Wednesday", "Friday"],
    consultationFee: 200,
    location: "New York Medical Center"
  },
  {
    id: 2,
    name: "Dr. Michael Chen",
    specialization: "Neurology",
    email: "michael.chen@agoramedcare.com",
    phone: "+1-555-0102",
    experience: "12 years",
    rating: 4.9,
    availability: ["Monday", "Wednesday", "Thursday", "Saturday"],
    consultationFee: 250,
    location: "Downtown Health Clinic"
  },
  {
    id: 3,
    name: "Dr. Emily Rodriguez",
    specialization: "Pediatrics",
    email: "emily.rodriguez@agoramedcare.com",
    phone: "+1-555-0103",
    experience: "8 years",
    rating: 4.7,
    availability: ["Tuesday", "Wednesday", "Thursday", "Friday"],
    consultationFee: 180,
    location: "Children's Medical Center"
  },
  {
    id: 4,
    name: "Dr. James Wilson",
    specialization: "Orthopedics",
    email: "james.wilson@agoramedcare.com",
    phone: "+1-555-0104",
    experience: "20 years",
    rating: 4.6,
    availability: ["Monday", "Tuesday", "Friday", "Saturday"],
    consultationFee: 220,
    location: "Sports Medicine Clinic"
  }
];

const patients = [
  {
    id: 1,
    name: "Alice Johnson",
    email: "alice.johnson@email.com",
    phone: "+1-555-0201",
    dateOfBirth: "1985-03-15",
    address: "123 Main St, New York, NY 10001",
    medicalHistory: ["Hypertension", "Diabetes Type 2"],
    emergencyContact: {
      name: "Bob Johnson",
      phone: "+1-555-0202",
      relationship: "Spouse"
    }
  },
  {
    id: 2,
    name: "Mark Thompson",
    email: "mark.thompson@email.com",
    phone: "+1-555-0203",
    dateOfBirth: "1992-07-22",
    address: "456 Oak Ave, Brooklyn, NY 11201",
    medicalHistory: ["Asthma"],
    emergencyContact: {
      name: "Susan Thompson",
      phone: "+1-555-0204",
      relationship: "Mother"
    }
  },
  {
    id: 3,
    name: "Sarah Davis",
    email: "sarah.davis@email.com",
    phone: "+1-555-0205",
    dateOfBirth: "1978-11-08",
    address: "789 Pine St, Queens, NY 11375",
    medicalHistory: ["Allergies", "Migraine"],
    emergencyContact: {
      name: "John Davis",
      phone: "+1-555-0206",
      relationship: "Spouse"
    }
  }
];

const appointments = [
  {
    id: 1,
    patientId: 1,
    doctorId: 1,
    date: "2024-01-15",
    time: "10:00",
    status: "confirmed",
    reason: "Regular Checkup",
    notes: "Patient reporting chest pain occasionally"
  },
  {
    id: 2,
    patientId: 2,
    doctorId: 3,
    date: "2024-01-16",
    time: "14:30",
    status: "pending",
    reason: "Breathing Issues",
    notes: "Asthma-related concerns"
  },
  {
    id: 3,
    patientId: 3,
    doctorId: 2,
    date: "2024-01-17",
    time: "09:15",
    status: "completed",
    reason: "Headache Consultation",
    notes: "Prescribed migraine medication"
  },
  {
    id: 4,
    patientId: 1,
    doctorId: 4,
    date: "2024-01-20",
    time: "11:00",
    status: "confirmed",
    reason: "Knee Pain",
    notes: "Follow-up for orthopedic evaluation"
  }
];

const medicalServices = [
  {
    id: 1,
    name: "General Consultation",
    description: "Comprehensive medical examination and consultation",
    category: "General Medicine",
    price: 150,
    duration: 30
  },
  {
    id: 2,
    name: "Cardiac Screening",
    description: "Heart health evaluation and screening",
    category: "Cardiology",
    price: 300,
    duration: 60
  },
  {
    id: 3,
    name: "Neurological Examination",
    description: "Comprehensive neurological assessment",
    category: "Neurology",
    price: 350,
    duration: 45
  },
  {
    id: 4,
    name: "Pediatric Checkup",
    description: "Child health examination and vaccination",
    category: "Pediatrics",
    price: 120,
    duration: 25
  },
  {
    id: 5,
    name: "Orthopedic Consultation",
    description: "Bone and joint health evaluation",
    category: "Orthopedics",
    price: 250,
    duration: 40
  }
];
// Existing music collection endpoints
app.get("/api/collections", (req, res) => {
  const { search, type } = req.query;
  let filteredAlbums = albums;
  if (search) {
    filteredAlbums = filteredAlbums.filter(
      (album) =>
        album.collectionName.toLowerCase().includes(search.toLowerCase()) ||
        album.artistName.toLowerCase().includes(search.toLowerCase())
    );
  }
  if (type) {
    const typeArray = type.split(",").map((t) => t.trim().toLowerCase());

    filteredAlbums = filteredAlbums.filter((album) =>
      typeArray.some((t) => album.type.toLowerCase().includes(t))
    );
  }
  res.status(200).json({
    code: 200,
    message: "Collections fetched successfully",
    data: filteredAlbums,
  });
});

app.get("/api/collections/:id", (req, res) => {
  const { id } = req.params;
  const album = albums.find((album) => album.id == id);

  if (album) {
    res.status(200).json({
      code: 200,
      message: "Collection fetched successfully",
      data: album,
    });
  } else {
    res.status(404).json({
      code: 404,
      message: "Collection not found",
      data: [],
    });
  }
});

// Agora-Med-Care API Endpoints

// Doctors endpoints
app.get("/api/agora-med-care/doctors", (req, res) => {
  const { specialization, search } = req.query;
  let filteredDoctors = doctors;

  if (search) {
    filteredDoctors = filteredDoctors.filter(
      (doctor) =>
        doctor.name.toLowerCase().includes(search.toLowerCase()) ||
        doctor.specialization.toLowerCase().includes(search.toLowerCase())
    );
  }

  if (specialization) {
    filteredDoctors = filteredDoctors.filter((doctor) =>
      doctor.specialization.toLowerCase().includes(specialization.toLowerCase())
    );
  }

  res.status(200).json({
    code: 200,
    message: "Doctors fetched successfully",
    data: filteredDoctors,
  });
});

app.get("/api/agora-med-care/doctors/:id", (req, res) => {
  const { id } = req.params;
  const doctor = doctors.find((doctor) => doctor.id == id);

  if (doctor) {
    res.status(200).json({
      code: 200,
      message: "Doctor fetched successfully",
      data: doctor,
    });
  } else {
    res.status(404).json({
      code: 404,
      message: "Doctor not found",
      data: null,
    });
  }
});

// Patients endpoints
app.get("/api/agora-med-care/patients", (req, res) => {
  const { search } = req.query;
  let filteredPatients = patients;

  if (search) {
    filteredPatients = filteredPatients.filter(
      (patient) =>
        patient.name.toLowerCase().includes(search.toLowerCase()) ||
        patient.email.toLowerCase().includes(search.toLowerCase())
    );
  }

  res.status(200).json({
    code: 200,
    message: "Patients fetched successfully",
    data: filteredPatients,
  });
});

app.get("/api/agora-med-care/patients/:id", (req, res) => {
  const { id } = req.params;
  const patient = patients.find((patient) => patient.id == id);

  if (patient) {
    res.status(200).json({
      code: 200,
      message: "Patient fetched successfully",
      data: patient,
    });
  } else {
    res.status(404).json({
      code: 404,
      message: "Patient not found",
      data: null,
    });
  }
});

// Appointments endpoints
app.get("/api/agora-med-care/appointments", (req, res) => {
  const { patientId, doctorId, status, date } = req.query;
  let filteredAppointments = appointments.map(appointment => {
    const patient = patients.find(p => p.id === appointment.patientId);
    const doctor = doctors.find(d => d.id === appointment.doctorId);
    return {
      ...appointment,
      patientName: patient?.name,
      doctorName: doctor?.name,
      doctorSpecialization: doctor?.specialization
    };
  });

  if (patientId) {
    filteredAppointments = filteredAppointments.filter(
      (appointment) => appointment.patientId == patientId
    );
  }

  if (doctorId) {
    filteredAppointments = filteredAppointments.filter(
      (appointment) => appointment.doctorId == doctorId
    );
  }

  if (status) {
    filteredAppointments = filteredAppointments.filter(
      (appointment) => appointment.status.toLowerCase() === status.toLowerCase()
    );
  }

  if (date) {
    filteredAppointments = filteredAppointments.filter(
      (appointment) => appointment.date === date
    );
  }

  res.status(200).json({
    code: 200,
    message: "Appointments fetched successfully",
    data: filteredAppointments,
  });
});

app.get("/api/agora-med-care/appointments/:id", (req, res) => {
  const { id } = req.params;
  const appointment = appointments.find((appointment) => appointment.id == id);

  if (appointment) {
    const patient = patients.find(p => p.id === appointment.patientId);
    const doctor = doctors.find(d => d.id === appointment.doctorId);
    
    const appointmentWithDetails = {
      ...appointment,
      patient: patient,
      doctor: doctor
    };

    res.status(200).json({
      code: 200,
      message: "Appointment fetched successfully",
      data: appointmentWithDetails,
    });
  } else {
    res.status(404).json({
      code: 404,
      message: "Appointment not found",
      data: null,
    });
  }
});

// Medical Services endpoints
app.get("/api/agora-med-care/services", (req, res) => {
  const { category, search } = req.query;
  let filteredServices = medicalServices;

  if (search) {
    filteredServices = filteredServices.filter(
      (service) =>
        service.name.toLowerCase().includes(search.toLowerCase()) ||
        service.description.toLowerCase().includes(search.toLowerCase()) ||
        service.category.toLowerCase().includes(search.toLowerCase())
    );
  }

  if (category) {
    filteredServices = filteredServices.filter((service) =>
      service.category.toLowerCase().includes(category.toLowerCase())
    );
  }

  res.status(200).json({
    code: 200,
    message: "Medical services fetched successfully",
    data: filteredServices,
  });
});

app.get("/api/agora-med-care/services/:id", (req, res) => {
  const { id } = req.params;
  const service = medicalServices.find((service) => service.id == id);

  if (service) {
    res.status(200).json({
      code: 200,
      message: "Medical service fetched successfully",
      data: service,
    });
  } else {
    res.status(404).json({
      code: 404,
      message: "Medical service not found",
      data: null,
    });
  }
});

// Dashboard stats endpoint
app.get("/api/agora-med-care/dashboard", (req, res) => {
  const totalDoctors = doctors.length;
  const totalPatients = patients.length;
  const totalAppointments = appointments.length;
  const pendingAppointments = appointments.filter(apt => apt.status === 'pending').length;
  const confirmedAppointments = appointments.filter(apt => apt.status === 'confirmed').length;
  const completedAppointments = appointments.filter(apt => apt.status === 'completed').length;
  
  const specializations = [...new Set(doctors.map(doc => doc.specialization))];
  
  res.status(200).json({
    code: 200,
    message: "Dashboard data fetched successfully",
    data: {
      stats: {
        totalDoctors,
        totalPatients,
        totalAppointments,
        pendingAppointments,
        confirmedAppointments,
        completedAppointments
      },
      specializations,
      recentAppointments: appointments.slice(-5).map(appointment => {
        const patient = patients.find(p => p.id === appointment.patientId);
        const doctor = doctors.find(d => d.id === appointment.doctorId);
        return {
          ...appointment,
          patientName: patient?.name,
          doctorName: doctor?.name,
          doctorSpecialization: doctor?.specialization
        };
      })
    },
  });
});
// Server Listening
app.listen(PORT, () => {
  console.log(`Mock server is running on http://localhost:${PORT}`);
});
