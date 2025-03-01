import React, { useContext, useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Skeleton } from 'primereact/skeleton';
import { SpinnerContext } from './spinner';
import CustomPaginator from './customPaginator';
import SortIcon from './sortIcon';

interface Props {
  column: any;
  data: any;
  totalRecords: number;
  rowClassName?: string;
  currentPage: number;
  setCurrentPage: any;
  rows?: number;
  setRows?: any;
  type?: string;
  onClickNavigate?: Function;
  sortable?: boolean;
  footer?: any;
  setSearchQuery?: any;
  isPaginationEnabled?: boolean;
}

const PrimeDataTable: React.FC<Props> = ({
  column,
  data = [],
  totalRecords,
  currentPage = 1,
  setCurrentPage,
  rows = 10,
  setRows,
  sortable = true,
  footer = null,
  isPaginationEnabled = true,
}) => {
  const { isTableLoading } = useContext(SpinnerContext);

  const totalPages = Math.ceil(totalRecords / rows);

  const onPageChange = (newPage: number) => {
    setCurrentPage(newPage);
  };

  const customEmptyMessage = () => (
    <div className="text-center p-3">
      {!isTableLoading && <h5>No records found</h5>}
    </div>
  );

  const customSortIcon = (data: any) => {
    const { sortOrder } = data;
    return <SortIcon sortOrder={sortOrder} />;
  };
  return (
    <>
      <div className="table-responsive custom-table">
        <DataTable
          value={isTableLoading ? Array(rows).fill({}) : data}
          className="table"
          totalRecords={totalRecords}
          paginator={false}
          emptyMessage={customEmptyMessage}
          sortIcon={customSortIcon}
        >
          {column?.map((col: any, index: number) => (
            <Column
              key={col.field || index}
              field={col.field}
              header={col.header}
              body={(rowData: any) => {
                return isTableLoading ||
                  (!data.length && !rowData[col.field]) ? (
                  <Skeleton
                    width="100%"
                    height="2rem"
                    className="skeleton-glow"
                  />
                ) : col.body ? (
                  col.body(rowData)
                ) : (
                  rowData[col.field]
                );
              }}
              sortable={sortable === false ? false : col.sortable !== false}
              sortField={col.sortField ? col.sortField : col.field}
              className={col.className ? col.className : ''}
            />
          ))}
        </DataTable>
      </div>
      {isPaginationEnabled && (
        <CustomPaginator
          currentPage={currentPage}
          totalPages={totalPages}
          totalRecords={totalRecords}
          onPageChange={onPageChange}
          rows={rows}
          setRows={setRows}
        />
      )}
    </>
  );
};

export default PrimeDataTable;
