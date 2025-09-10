import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { agoraMedCareApi, Doctor, Patient, Appointment, MedicalService, DashboardData } from '../services/agoraMedCareApi';

// Async thunks
export const fetchDashboard = createAsyncThunk(
  'agoraMedCare/fetchDashboard',
  async () => {
    return await agoraMedCareApi.getDashboard();
  }
);

export const fetchDoctors = createAsyncThunk(
  'agoraMedCare/fetchDoctors',
  async (params?: { specialization?: string; search?: string }) => {
    return await agoraMedCareApi.getDoctors(params);
  }
);

export const fetchPatients = createAsyncThunk(
  'agoraMedCare/fetchPatients',
  async (params?: { search?: string }) => {
    return await agoraMedCareApi.getPatients(params);
  }
);

export const fetchAppointments = createAsyncThunk(
  'agoraMedCare/fetchAppointments',
  async (params?: { patientId?: number; doctorId?: number; status?: string; date?: string }) => {
    return await agoraMedCareApi.getAppointments(params);
  }
);

export const fetchMedicalServices = createAsyncThunk(
  'agoraMedCare/fetchMedicalServices',
  async (params?: { category?: string; search?: string }) => {
    return await agoraMedCareApi.getMedicalServices(params);
  }
);

interface AgoraMedCareState {
  dashboard: DashboardData | null;
  doctors: Doctor[];
  patients: Patient[];
  appointments: Appointment[];
  medicalServices: MedicalService[];
  loading: {
    dashboard: boolean;
    doctors: boolean;
    patients: boolean;
    appointments: boolean;
    medicalServices: boolean;
  };
  error: {
    dashboard: string | null;
    doctors: string | null;
    patients: string | null;
    appointments: string | null;
    medicalServices: string | null;
  };
  filters: {
    doctorSpecialization: string;
    appointmentStatus: string;
    serviceCategory: string;
  };
}

const initialState: AgoraMedCareState = {
  dashboard: null,
  doctors: [],
  patients: [],
  appointments: [],
  medicalServices: [],
  loading: {
    dashboard: false,
    doctors: false,
    patients: false,
    appointments: false,
    medicalServices: false,
  },
  error: {
    dashboard: null,
    doctors: null,
    patients: null,
    appointments: null,
    medicalServices: null,
  },
  filters: {
    doctorSpecialization: '',
    appointmentStatus: '',
    serviceCategory: '',
  },
};

const agoraMedCareSlice = createSlice({
  name: 'agoraMedCare',
  initialState,
  reducers: {
    setDoctorFilter: (state, action: PayloadAction<string>) => {
      state.filters.doctorSpecialization = action.payload;
    },
    setAppointmentFilter: (state, action: PayloadAction<string>) => {
      state.filters.appointmentStatus = action.payload;
    },
    setServiceFilter: (state, action: PayloadAction<string>) => {
      state.filters.serviceCategory = action.payload;
    },
    clearError: (state, action: PayloadAction<keyof AgoraMedCareState['error']>) => {
      state.error[action.payload] = null;
    },
  },
  extraReducers: (builder) => {
    // Dashboard
    builder
      .addCase(fetchDashboard.pending, (state) => {
        state.loading.dashboard = true;
        state.error.dashboard = null;
      })
      .addCase(fetchDashboard.fulfilled, (state, action) => {
        state.loading.dashboard = false;
        state.dashboard = action.payload;
      })
      .addCase(fetchDashboard.rejected, (state, action) => {
        state.loading.dashboard = false;
        state.error.dashboard = action.error.message || 'Failed to fetch dashboard data';
      })
      
    // Doctors
      .addCase(fetchDoctors.pending, (state) => {
        state.loading.doctors = true;
        state.error.doctors = null;
      })
      .addCase(fetchDoctors.fulfilled, (state, action) => {
        state.loading.doctors = false;
        state.doctors = action.payload;
      })
      .addCase(fetchDoctors.rejected, (state, action) => {
        state.loading.doctors = false;
        state.error.doctors = action.error.message || 'Failed to fetch doctors';
      })
      
    // Patients
      .addCase(fetchPatients.pending, (state) => {
        state.loading.patients = true;
        state.error.patients = null;
      })
      .addCase(fetchPatients.fulfilled, (state, action) => {
        state.loading.patients = false;
        state.patients = action.payload;
      })
      .addCase(fetchPatients.rejected, (state, action) => {
        state.loading.patients = false;
        state.error.patients = action.error.message || 'Failed to fetch patients';
      })
      
    // Appointments
      .addCase(fetchAppointments.pending, (state) => {
        state.loading.appointments = true;
        state.error.appointments = null;
      })
      .addCase(fetchAppointments.fulfilled, (state, action) => {
        state.loading.appointments = false;
        state.appointments = action.payload;
      })
      .addCase(fetchAppointments.rejected, (state, action) => {
        state.loading.appointments = false;
        state.error.appointments = action.error.message || 'Failed to fetch appointments';
      })
      
    // Medical Services
      .addCase(fetchMedicalServices.pending, (state) => {
        state.loading.medicalServices = true;
        state.error.medicalServices = null;
      })
      .addCase(fetchMedicalServices.fulfilled, (state, action) => {
        state.loading.medicalServices = false;
        state.medicalServices = action.payload;
      })
      .addCase(fetchMedicalServices.rejected, (state, action) => {
        state.loading.medicalServices = false;
        state.error.medicalServices = action.error.message || 'Failed to fetch medical services';
      });
  },
});

export const { 
  setDoctorFilter, 
  setAppointmentFilter, 
  setServiceFilter, 
  clearError 
} = agoraMedCareSlice.actions;

export default agoraMedCareSlice.reducer;