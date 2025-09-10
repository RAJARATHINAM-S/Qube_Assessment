import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Card } from 'primereact/card';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Chart } from 'primereact/chart';
import { Badge } from 'primereact/badge';
import { RootState, AppDispatch } from '../../redux/store';
import { fetchDashboard } from '../../redux/agoraMedCareSlice';

const AgoraMedCareDashboard: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { dashboard, loading, error } = useSelector((state: RootState) => state.agoraMedCare);

  useEffect(() => {
    dispatch(fetchDashboard());
  }, [dispatch]);

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

  const chartData = dashboard ? {
    labels: ['Pending', 'Confirmed', 'Completed'],
    datasets: [
      {
        data: [
          dashboard.stats.pendingAppointments,
          dashboard.stats.confirmedAppointments,
          dashboard.stats.completedAppointments
        ],
        backgroundColor: [
          '#FF6B6B',
          '#4ECDC4',
          '#45B7D1'
        ],
        hoverBackgroundColor: [
          '#FF8E8E',
          '#6FD6CE',
          '#67C3D9'
        ]
      }
    ]
  } : null;

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom' as const,
      }
    }
  };

  if (loading.dashboard) {
    return (
      <div className="flex justify-content-center align-items-center" style={{ height: '400px' }}>
        <i className="pi pi-spin pi-spinner" style={{ fontSize: '2rem' }}></i>
      </div>
    );
  }

  if (error.dashboard) {
    return (
      <div className="p-4">
        <div className="text-center p-4 bg-red-50 border-round">
          <i className="pi pi-exclamation-triangle text-red-500 mb-2" style={{ fontSize: '2rem' }}></i>
          <p className="text-red-700 font-medium">Error loading dashboard: {error.dashboard}</p>
        </div>
      </div>
    );
  }

  if (!dashboard) {
    return null;
  }

  return (
    <div className="agora-med-care-dashboard">
      <div className="mb-4">
        <h2 className="text-2xl font-bold text-900 mb-2">Agora Med Care Dashboard</h2>
        <p className="text-600">Overview of medical care platform statistics</p>
      </div>

      {/* Stats Cards */}
      <div className="grid mb-4">
        <div className="col-12 md:col-6 lg:col-3">
          <Card className="shadow-2 border-none">
            <div className="text-center">
              <div className="text-blue-500 mb-2">
                <i className="pi pi-user-md" style={{ fontSize: '2.5rem' }}></i>
              </div>
              <div className="text-2xl font-bold text-900">{dashboard.stats.totalDoctors}</div>
              <div className="text-600">Total Doctors</div>
            </div>
          </Card>
        </div>

        <div className="col-12 md:col-6 lg:col-3">
          <Card className="shadow-2 border-none">
            <div className="text-center">
              <div className="text-green-500 mb-2">
                <i className="pi pi-users" style={{ fontSize: '2.5rem' }}></i>
              </div>
              <div className="text-2xl font-bold text-900">{dashboard.stats.totalPatients}</div>
              <div className="text-600">Total Patients</div>
            </div>
          </Card>
        </div>

        <div className="col-12 md:col-6 lg:col-3">
          <Card className="shadow-2 border-none">
            <div className="text-center">
              <div className="text-orange-500 mb-2">
                <i className="pi pi-calendar" style={{ fontSize: '2.5rem' }}></i>
              </div>
              <div className="text-2xl font-bold text-900">{dashboard.stats.totalAppointments}</div>
              <div className="text-600">Total Appointments</div>
            </div>
          </Card>
        </div>

        <div className="col-12 md:col-6 lg:col-3">
          <Card className="shadow-2 border-none">
            <div className="text-center">
              <div className="text-purple-500 mb-2">
                <i className="pi pi-check-circle" style={{ fontSize: '2.5rem' }}></i>
              </div>
              <div className="text-2xl font-bold text-900">{dashboard.stats.completedAppointments}</div>
              <div className="text-600">Completed Appointments</div>
            </div>
          </Card>
        </div>
      </div>

      <div className="grid">
        {/* Appointment Status Chart */}
        <div className="col-12 lg:col-6">
          <Card title="Appointment Status Distribution" className="shadow-2 border-none">
            <div style={{ height: '300px' }}>
              {chartData && <Chart type="doughnut" data={chartData} options={chartOptions} />}
            </div>
          </Card>
        </div>

        {/* Specializations */}
        <div className="col-12 lg:col-6">
          <Card title="Available Specializations" className="shadow-2 border-none">
            <div className="grid gap-2">
              {dashboard.specializations.map((specialization, index) => (
                <div key={index} className="col-12">
                  <div className="p-2 border-round surface-100 flex align-items-center">
                    <i className="pi pi-heart-fill text-red-400 mr-2"></i>
                    <span className="font-medium">{specialization}</span>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Recent Appointments */}
        <div className="col-12">
          <Card title="Recent Appointments" className="shadow-2 border-none">
            <DataTable
              value={dashboard.recentAppointments}
              paginator
              rows={5}
              className="p-datatable-sm"
              emptyMessage="No recent appointments found"
            >
              <Column 
                field="patientName" 
                header="Patient" 
                sortable 
                style={{ width: '20%' }}
              />
              <Column 
                field="doctorName" 
                header="Doctor" 
                sortable 
                style={{ width: '20%' }}
              />
              <Column 
                field="doctorSpecialization" 
                header="Specialization" 
                sortable 
                style={{ width: '15%' }}
              />
              <Column 
                field="date" 
                header="Date" 
                body={(rowData) => formatDate(rowData.date)}
                sortable 
                style={{ width: '12%' }}
              />
              <Column 
                field="time" 
                header="Time" 
                sortable 
                style={{ width: '10%' }}
              />
              <Column 
                field="reason" 
                header="Reason" 
                style={{ width: '18%' }}
              />
              <Column 
                field="status" 
                header="Status" 
                body={(rowData) => getStatusBadge(rowData.status)}
                sortable 
                style={{ width: '10%' }}
              />
            </DataTable>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default AgoraMedCareDashboard;