import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000/api/agora-med-care';

export interface Doctor {
  id: number;
  name: string;
  specialization: string;
  email: string;
  phone: string;
  experience: string;
  rating: number;
  availability: string[];
  consultationFee: number;
  location: string;
}

export interface Patient {
  id: number;
  name: string;
  email: string;
  phone: string;
  dateOfBirth: string;
  address: string;
  medicalHistory: string[];
  emergencyContact: {
    name: string;
    phone: string;
    relationship: string;
  };
}

export interface Appointment {
  id: number;
  patientId: number;
  doctorId: number;
  date: string;
  time: string;
  status: 'pending' | 'confirmed' | 'completed' | 'cancelled';
  reason: string;
  notes: string;
  patientName?: string;
  doctorName?: string;
  doctorSpecialization?: string;
  patient?: Patient;
  doctor?: Doctor;
}

export interface MedicalService {
  id: number;
  name: string;
  description: string;
  category: string;
  price: number;
  duration: number;
}

export interface DashboardData {
  stats: {
    totalDoctors: number;
    totalPatients: number;
    totalAppointments: number;
    pendingAppointments: number;
    confirmedAppointments: number;
    completedAppointments: number;
  };
  specializations: string[];
  recentAppointments: Appointment[];
}

export interface ApiResponse<T> {
  code: number;
  message: string;
  data: T;
}

class AgoraMedCareApi {
  // Dashboard
  async getDashboard(): Promise<DashboardData> {
    const response = await axios.get<ApiResponse<DashboardData>>(`${API_BASE_URL}/dashboard`);
    return response.data.data;
  }

  // Doctors
  async getDoctors(params?: { specialization?: string; search?: string }): Promise<Doctor[]> {
    const response = await axios.get<ApiResponse<Doctor[]>>(`${API_BASE_URL}/doctors`, { params });
    return response.data.data;
  }

  async getDoctor(id: number): Promise<Doctor> {
    const response = await axios.get<ApiResponse<Doctor>>(`${API_BASE_URL}/doctors/${id}`);
    return response.data.data;
  }

  // Patients
  async getPatients(params?: { search?: string }): Promise<Patient[]> {
    const response = await axios.get<ApiResponse<Patient[]>>(`${API_BASE_URL}/patients`, { params });
    return response.data.data;
  }

  async getPatient(id: number): Promise<Patient> {
    const response = await axios.get<ApiResponse<Patient>>(`${API_BASE_URL}/patients/${id}`);
    return response.data.data;
  }

  // Appointments
  async getAppointments(params?: {
    patientId?: number;
    doctorId?: number;
    status?: string;
    date?: string;
  }): Promise<Appointment[]> {
    const response = await axios.get<ApiResponse<Appointment[]>>(`${API_BASE_URL}/appointments`, { params });
    return response.data.data;
  }

  async getAppointment(id: number): Promise<Appointment> {
    const response = await axios.get<ApiResponse<Appointment>>(`${API_BASE_URL}/appointments/${id}`);
    return response.data.data;
  }

  // Medical Services
  async getMedicalServices(params?: { category?: string; search?: string }): Promise<MedicalService[]> {
    const response = await axios.get<ApiResponse<MedicalService[]>>(`${API_BASE_URL}/services`, { params });
    return response.data.data;
  }

  async getMedicalService(id: number): Promise<MedicalService> {
    const response = await axios.get<ApiResponse<MedicalService>>(`${API_BASE_URL}/services/${id}`);
    return response.data.data;
  }
}

export const agoraMedCareApi = new AgoraMedCareApi();