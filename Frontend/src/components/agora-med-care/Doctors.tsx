import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Card } from 'primereact/card';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { InputText } from 'primereact/inputtext';
import { Dropdown } from 'primereact/dropdown';
import { Button } from 'primereact/button';
import { Rating } from 'primereact/rating';
import { Badge } from 'primereact/badge';
import { RootState, AppDispatch } from '../../redux/store';
import { fetchDoctors, setDoctorFilter } from '../../redux/agoraMedCareSlice';

const DoctorsPage: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { doctors, loading, error, filters } = useSelector((state: RootState) => state.agoraMedCare);
  
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSpecialization, setSelectedSpecialization] = useState<string>('');

  useEffect(() => {
    dispatch(fetchDoctors());
  }, [dispatch]);

  const specializations = [
    { label: 'All Specializations', value: '' },
    { label: 'Cardiology', value: 'cardiology' },
    { label: 'Neurology', value: 'neurology' },
    { label: 'Pediatrics', value: 'pediatrics' },
    { label: 'Orthopedics', value: 'orthopedics' },
    { label: 'Dermatology', value: 'dermatology' },
    { label: 'Psychiatry', value: 'psychiatry' }
  ];

  const handleSearch = () => {
    dispatch(fetchDoctors({
      search: searchTerm,
      specialization: selectedSpecialization
    }));
  };

  const handleReset = () => {
    setSearchTerm('');
    setSelectedSpecialization('');
    dispatch(fetchDoctors());
  };

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(value);
  };

  const ratingTemplate = (rowData: any) => {
    return <Rating value={rowData.rating} readOnly cancel={false} />;
  };

  const consultationFeeTemplate = (rowData: any) => {
    return (
      <span className="font-semibold text-green-600">
        {formatCurrency(rowData.consultationFee)}
      </span>
    );
  };

  const availabilityTemplate = (rowData: any) => {
    return (
      <div className="flex flex-wrap gap-1">
        {rowData.availability.slice(0, 3).map((day: string, index: number) => (
          <Badge key={index} value={day.slice(0, 3)} severity="info" className="text-xs" />
        ))}
        {rowData.availability.length > 3 && (
          <Badge value={`+${rowData.availability.length - 3}`} severity="secondary" className="text-xs" />
        )}
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
          onClick={() => console.log('View doctor:', rowData.id)}
        />
        <Button
          icon="pi pi-calendar-plus"
          className="p-button-rounded p-button-text p-button-success"
          tooltip="Book Appointment"
          tooltipOptions={{ position: 'top' }}
          onClick={() => console.log('Book appointment with:', rowData.id)}
        />
      </div>
    );
  };

  if (loading.doctors) {
    return (
      <div className="flex justify-content-center align-items-center" style={{ height: '400px' }}>
        <i className="pi pi-spin pi-spinner" style={{ fontSize: '2rem' }}></i>
      </div>
    );
  }

  if (error.doctors) {
    return (
      <div className="p-4">
        <div className="text-center p-4 bg-red-50 border-round">
          <i className="pi pi-exclamation-triangle text-red-500 mb-2" style={{ fontSize: '2rem' }}></i>
          <p className="text-red-700 font-medium">Error loading doctors: {error.doctors}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="doctors-page">
      <div className="mb-4">
        <h2 className="text-2xl font-bold text-900 mb-2">Our Doctors</h2>
        <p className="text-600">Find and connect with qualified medical professionals</p>
      </div>

      {/* Search and Filter Section */}
      <Card className="mb-4">
        <div className="grid align-items-end gap-3">
          <div className="col-12 md:col-4">
            <label htmlFor="search" className="block text-900 font-medium mb-2">
              Search Doctors
            </label>
            <InputText
              id="search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search by name or specialization..."
              className="w-full"
            />
          </div>

          <div className="col-12 md:col-4">
            <label htmlFor="specialization" className="block text-900 font-medium mb-2">
              Specialization
            </label>
            <Dropdown
              id="specialization"
              value={selectedSpecialization}
              onChange={(e) => setSelectedSpecialization(e.value)}
              options={specializations}
              placeholder="Select specialization"
              className="w-full"
            />
          </div>

          <div className="col-12 md:col-4">
            <div className="flex gap-2">
              <Button
                label="Search"
                icon="pi pi-search"
                onClick={handleSearch}
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
        </div>
      </Card>

      {/* Doctors Table */}
      <Card>
        <DataTable
          value={doctors}
          paginator
          rows={10}
          className="p-datatable-customers"
          dataKey="id"
          emptyMessage="No doctors found"
          loading={loading.doctors}
        >
          <Column 
            field="name" 
            header="Doctor" 
            sortable 
            style={{ width: '20%' }}
          />
          
          <Column 
            field="specialization" 
            header="Specialization" 
            sortable 
            style={{ width: '15%' }}
          />
          
          <Column 
            field="experience" 
            header="Experience" 
            sortable 
            style={{ width: '12%' }}
          />
          
          <Column 
            field="rating" 
            header="Rating" 
            body={ratingTemplate}
            sortable 
            style={{ width: '15%' }}
          />
          
          <Column 
            field="consultationFee" 
            header="Fee" 
            body={consultationFeeTemplate}
            sortable 
            style={{ width: '12%' }}
          />
          
          <Column 
            field="availability" 
            header="Available Days" 
            body={availabilityTemplate}
            style={{ width: '15%' }}
          />
          
          <Column 
            field="location" 
            header="Location" 
            style={{ width: '16%' }}
          />
          
          <Column 
            body={actionTemplate} 
            header="Actions"
            exportable={false}
            style={{ width: '10%', minWidth: '120px' }}
          />
        </DataTable>
      </Card>

      {/* Summary Stats */}
      <div className="grid mt-4">
        <div className="col-12 md:col-4">
          <Card className="text-center">
            <div className="text-blue-500 mb-2">
              <i className="pi pi-user-md" style={{ fontSize: '2rem' }}></i>
            </div>
            <div className="text-xl font-bold text-900">{doctors.length}</div>
            <div className="text-600">Available Doctors</div>
          </Card>
        </div>
        
        <div className="col-12 md:col-4">
          <Card className="text-center">
            <div className="text-green-500 mb-2">
              <i className="pi pi-heart" style={{ fontSize: '2rem' }}></i>
            </div>
            <div className="text-xl font-bold text-900">
              {[...new Set(doctors.map(d => d.specialization))].length}
            </div>
            <div className="text-600">Specializations</div>
          </Card>
        </div>
        
        <div className="col-12 md:col-4">
          <Card className="text-center">
            <div className="text-orange-500 mb-2">
              <i className="pi pi-star-fill" style={{ fontSize: '2rem' }}></i>
            </div>
            <div className="text-xl font-bold text-900">
              {doctors.length > 0 ? (doctors.reduce((acc, doc) => acc + doc.rating, 0) / doctors.length).toFixed(1) : '0.0'}
            </div>
            <div className="text-600">Average Rating</div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default DoctorsPage;