import { Paginator } from 'primereact/paginator';
import React from 'react';

interface CustomPaginatorProps {
  currentPage: number;
  totalPages: number;
  rows: number;
  totalRecords: number;
  onPageChange: (newPage: number) => void;
  setRows: any;
}

const CustomPaginator: React.FC<CustomPaginatorProps> = ({
  currentPage,
  totalPages,
  rows,
  totalRecords,
  onPageChange,
  setRows,
}) => {
  const handleSelectChange = (value: any) => {
    setRows(value);
  };
  const handlePaginatorChange = (event: any) => {
    onPageChange(event.page + 1);
  };

  return (
    <>
      {totalPages ? (
        <div className="row align-items-center">
          <div className="col-md-6">
            <div className="datatable-length">
              <div className="dataTables_length" id="deal_list_length">
                <label>
                  Show{' '}
                  <select
                    name="deal_list_length"
                    aria-controls="deal_list"
                    className="form-select form-select-sm"
                    onChange={(e) => handleSelectChange(e.target.value)}
                  >
                    <option value={10}>10</option>
                    <option value={25}>25</option>
                    <option value={50}>50</option>
                    <option value={100}>100</option>
                  </select>{' '}
                  entries
                </label>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="datatable-paginate">
              <div className="dataTables_paginate paging_simple_numbers">
                <Paginator
                  first={(currentPage - 1) * rows}
                  rows={rows}
                  totalRecords={totalRecords}
                  onPageChange={handlePaginatorChange}
                />
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default CustomPaginator;
