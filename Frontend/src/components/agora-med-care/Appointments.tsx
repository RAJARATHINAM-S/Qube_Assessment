import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Card } from 'primereact/card';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { InputText } from 'primereact/inputtext';
import { Dropdown } from 'primereact/dropdown';
import { Button } from 'primereact/button';
import { Badge } from 'primereact/badge';
import { Calendar } from 'primereact/calendar';
import { RootState, AppDispatch } from '../../redux/store';
import { fetchAppointments, setAppointmentFilter } from '../../redux/agoraMedCareSlice';

const AppointmentsPage: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { appointments, loading, error, filters } = useSelector((state: RootState) => state.agoraMedCare);
  
  const [selectedStatus, setSelectedStatus] = useState<string>('');
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  useEffect(() => {
    dispatch(fetchAppointments());
  }, [dispatch]);

  const statusOptions = [
    { label: 'All Status', value: '' },
    { label: 'Pending', value: 'pending' },
    { label: 'Confirmed', value: 'confirmed' },
    { label: 'Completed', value: 'completed' },
    { label: 'Cancelled', value: 'cancelled' }
  ];

  const handleFilter = () => {
    const params: any = {};
    
    if (selectedStatus) {
      params.status = selectedStatus;
    }
    
    if (selectedDate) {
      params.date = selectedDate.toISOString().split('T')[0];
    }

    dispatch(fetchAppointments(params));
  };

  const handleReset = () => {
    setSelectedStatus('');
    setSelectedDate(null);
    dispatch(fetchAppointments());
  };

  const getStatusBadge = (status: string) => {
    const statusMap = {
      pending: { severity: 'warning' as const, value: 'Pending' },
      confirmed: { severity: 'info' as const, value: 'Confirmed' },
      completed: { severity: 'success' as const, value: 'Completed' },
      cancelled: { severity: 'danger' as const, value: 'Cancelled' }
    };
    
    const statusInfo = statusMap[status as keyof typeof statusMap] || { severity: 'secondary' as const, value: status };
    
    return <Badge value={statusInfo.value} severity={statusInfo.severity} />;
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  const formatTime = (timeString: string) => {
    const [hours, minutes] = timeString.split(':');
    const hour12 = parseInt(hours) % 12 || 12;
    const ampm = parseInt(hours) >= 12 ? 'PM' : 'AM';
    return `${hour12}:${minutes} ${ampm}`;
  };

  const dateTemplate = (rowData: any) => {
    return (
      <div className="flex align-items-center">
        <i className="pi pi-calendar mr-2 text-blue-500"></i>
        <span>{formatDate(rowData.date)}</span>
      </div>
    );
  };

  const timeTemplate = (rowData: any) => {
    return (
      <div className="flex align-items-center">
        <i className="pi pi-clock mr-2 text-orange-500"></i>
        <span>{formatTime(rowData.time)}</span>
      </div>
    );
  };

  const doctorTemplate = (rowData: any) => {
    return (
      <div>
        <div className="font-semibold">{rowData.doctorName}</div>
        <div className="text-sm text-600">{rowData.doctorSpecialization}</div>
      </div>
    );
  };

  const actionTemplate = (rowData: any) => {
    return (
      <div className="flex gap-2">
        <Button
          icon="pi pi-eye"
          className="p-button-rounded p-button-text p-button-info"
          tooltip="View Details"
          tooltipOptions={{ position: 'top' }}
          onClick={() => console.log('View appointment:', rowData.id)}
        />
        {rowData.status === 'pending' && (
          <Button
            icon="pi pi-check"
            className="p-button-rounded p-button-text p-button-success"
            tooltip="Confirm"
            tooltipOptions={{ position: 'top' }}
            onClick={() => console.log('Confirm appointment:', rowData.id)}
          />
        )}
        {(rowData.status === 'pending' || rowData.status === 'confirmed') && (
          <Button
            icon="pi pi-times"
            className="p-button-rounded p-button-text p-button-danger"
            tooltip="Cancel"
            tooltipOptions={{ position: 'top' }}
            onClick={() => console.log('Cancel appointment:', rowData.id)}
          />
        )}
      </div>
    );
  };

  if (loading.appointments) {
    return (
      <div className="flex justify-content-center align-items-center" style={{ height: '400px' }}>
        <i className="pi pi-spin pi-spinner" style={{ fontSize: '2rem' }}></i>
      </div>
    );
  }

  if (error.appointments) {
    return (
      <div className="p-4">
        <div className="text-center p-4 bg-red-50 border-round">
          <i className="pi pi-exclamation-triangle text-red-500 mb-2" style={{ fontSize: '2rem' }}></i>
          <p className="text-red-700 font-medium">Error loading appointments: {error.appointments}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="appointments-page">
      <div className="mb-4">
        <h2 className="text-2xl font-bold text-900 mb-2">Appointments</h2>
        <p className="text-600">Manage patient appointments and schedules</p>
      </div>

      {/* Filter Section */}
      <Card className="mb-4">
        <div className="grid align-items-end gap-3">
          <div className="col-12 md:col-3">
            <label htmlFor="status" className="block text-900 font-medium mb-2">
              Status
            </label>
            <Dropdown
              id="status"
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.value)}
              options={statusOptions}
              placeholder="Select status"
              className="w-full"
            />
          </div>

          <div className="col-12 md:col-3">
            <label htmlFor="date" className="block text-900 font-medium mb-2">
              Date
            </label>
            <Calendar
              id="date"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.value)}
              placeholder="Select date"
              className="w-full"
              showIcon
            />
          </div>

          <div className="col-12 md:col-3">
            <div className="flex gap-2">
              <Button
                label="Filter"
                icon="pi pi-filter"
                onClick={handleFilter}
                className="flex-1"
              />
              <Button
                label="Reset"
                icon="pi pi-refresh"
                onClick={handleReset}
                className="p-button-outlined flex-1"
              />
            </div>
          </div>

          <div className="col-12 md:col-3">
            <Button
              label="New Appointment"
              icon="pi pi-plus"
              className="w-full p-button-success"
              onClick={() => console.log('Create new appointment')}
            />
          </div>
        </div>
      </Card>

      {/* Appointments Table */}
      <Card>
        <DataTable
          value={appointments}
          paginator
          rows={10}
          className="p-datatable-customers"
          dataKey="id"
          emptyMessage="No appointments found"
          loading={loading.appointments}
        >
          <Column 
            field="patientName" 
            header="Patient" 
            sortable 
            style={{ width: '18%' }}
          />
          
          <Column 
            field="doctorName" 
            header="Doctor" 
            body={doctorTemplate}
            sortable 
            style={{ width: '20%' }}
          />
          
          <Column 
            field="date" 
            header="Date" 
            body={dateTemplate}
            sortable 
            style={{ width: '15%' }}
          />
          
          <Column 
            field="time" 
            header="Time" 
            body={timeTemplate}
            sortable 
            style={{ width: '12%' }}
          />
          
          <Column 
            field="reason" 
            header="Reason" 
            style={{ width: '20%' }}
          />
          
          <Column 
            field="status" 
            header="Status" 
            body={(rowData) => getStatusBadge(rowData.status)}
            sortable 
            style={{ width: '10%' }}
          />
          
          <Column 
            body={actionTemplate} 
            header="Actions"
            exportable={false}
            style={{ width: '15%', minWidth: '150px' }}
          />
        </DataTable>
      </Card>

      {/* Summary Stats */}
      <div className="grid mt-4">
        <div className="col-12 md:col-3">
          <Card className="text-center">
            <div className="text-blue-500 mb-2">
              <i className="pi pi-calendar" style={{ fontSize: '2rem' }}></i>
            </div>
            <div className="text-xl font-bold text-900">{appointments.length}</div>
            <div className="text-600">Total Appointments</div>
          </Card>
        </div>
        
        <div className="col-12 md:col-3">
          <Card className="text-center">
            <div className="text-orange-500 mb-2">
              <i className="pi pi-clock" style={{ fontSize: '2rem' }}></i>
            </div>
            <div className="text-xl font-bold text-900">
              {appointments.filter(apt => apt.status === 'pending').length}
            </div>
            <div className="text-600">Pending</div>
          </Card>
        </div>
        
        <div className="col-12 md:col-3">
          <Card className="text-center">
            <div className="text-green-500 mb-2">
              <i className="pi pi-check-circle" style={{ fontSize: '2rem' }}></i>
            </div>
            <div className="text-xl font-bold text-900">
              {appointments.filter(apt => apt.status === 'confirmed').length}
            </div>
            <div className="text-600">Confirmed</div>
          </Card>
        </div>
        
        <div className="col-12 md:col-3">
          <Card className="text-center">
            <div className="text-purple-500 mb-2">
              <i className="pi pi-check" style={{ fontSize: '2rem' }}></i>
            </div>
            <div className="text-xl font-bold text-900">
              {appointments.filter(apt => apt.status === 'completed').length}
            </div>
            <div className="text-600">Completed</div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default AppointmentsPage;