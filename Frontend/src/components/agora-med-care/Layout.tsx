import React, { useState } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { Button } from 'primereact/button';
import { Sidebar } from 'primereact/sidebar';
import { Menu } from 'primereact/menu';
import { Avatar } from 'primereact/avatar';
import { Badge } from 'primereact/badge';

const AgoraMedCareLayout: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
  const [sidebarVisible, setSidebarVisible] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    {
      label: 'Dashboard',
      icon: 'pi pi-home',
      command: () => navigate('/agora-med-care/dashboard'),
      className: location.pathname === '/agora-med-care/dashboard' ? 'p-menuitem-active' : ''
    },
    {
      label: 'Doctors',
      icon: 'pi pi-user-md',
      command: () => navigate('/agora-med-care/doctors'),
      className: location.pathname === '/agora-med-care/doctors' ? 'p-menuitem-active' : ''
    },
    {
      label: 'Appointments',
      icon: 'pi pi-calendar',
      command: () => navigate('/agora-med-care/appointments'),
      className: location.pathname === '/agora-med-care/appointments' ? 'p-menuitem-active' : ''
    },
    {
      label: 'Patients',
      icon: 'pi pi-users',
      command: () => navigate('/agora-med-care/patients'),
      className: location.pathname === '/agora-med-care/patients' ? 'p-menuitem-active' : ''
    },
    {
      label: 'Services',
      icon: 'pi pi-heart',
      command: () => navigate('/agora-med-care/services'),
      className: location.pathname === '/agora-med-care/services' ? 'p-menuitem-active' : ''
    }
  ];

  const sidebarItems = [
    {
      template: () => (
        <div className="p-3 border-bottom-1 surface-border">
          <div className="flex align-items-center">
            <i className="pi pi-heart-fill text-red-500 mr-2" style={{ fontSize: '1.5rem' }}></i>
            <span className="font-bold text-xl text-900">Agora Med Care</span>
          </div>
        </div>
      )
    },
    ...menuItems.map(item => ({
      label: item.label,
      icon: item.icon,
      command: item.command,
      className: item.className
    }))
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Navigation */}
      <div className="bg-white shadow-1 px-3 py-2 flex align-items-center justify-content-between">
        <div className="flex align-items-center">
          <Button
            icon="pi pi-bars"
            className="p-button-text p-button-rounded mr-2"
            onClick={() => setSidebarVisible(true)}
          />
          
          <div className="flex align-items-center cursor-pointer" onClick={() => navigate('/agora-med-care/dashboard')}>
            <i className="pi pi-heart-fill text-red-500 mr-2" style={{ fontSize: '1.5rem' }}></i>
            <span className="font-bold text-xl text-900 hidden md:inline">Agora Med Care</span>
          </div>
        </div>

        <div className="flex align-items-center gap-2">
          <Button
            icon="pi pi-bell"
            className="p-button-text p-button-rounded"
            onClick={() => console.log('Notifications')}
          >
            <Badge value="3" severity="danger" className="ml-2" />
          </Button>
          
          <Button
            icon="pi pi-home"
            label="Music App"
            className="p-button-text"
            onClick={() => navigate('/')}
          />

          <Avatar 
            label="A" 
            className="mr-2" 
            size="normal" 
            shape="circle"
            style={{ backgroundColor: '#2196F3', color: '#ffffff' }}
          />
        </div>
      </div>

      {/* Desktop Sidebar */}
      <div className="hidden lg:flex">
        <div className="w-3 bg-white shadow-1">
          <div className="p-3">
            <Menu 
              model={sidebarItems}
              className="w-full border-none"
            />
          </div>
        </div>
        
        <div className="flex-1 p-4">
          {children || <Outlet />}
        </div>
      </div>

      {/* Mobile Content */}
      <div className="lg:hidden p-4">
        {children || <Outlet />}
      </div>

      {/* Mobile Sidebar */}
      <Sidebar
        visible={sidebarVisible}
        onHide={() => setSidebarVisible(false)}
        className="w-20rem"
      >
        <Menu 
          model={sidebarItems}
          className="w-full border-none"
        />
      </Sidebar>
    </div>
  );
};

export default AgoraMedCareLayout;