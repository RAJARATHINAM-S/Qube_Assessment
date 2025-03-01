import React, { useCallback, useEffect, useState } from 'react';
import { eyeIcon, searchIcon, sortIcon } from '../utils/imagePath';
import { debounce } from '../utils/debounce';
import PrimeDataTable from '../components/primeDataTable';
import { getData } from '../services/api.service';
import { end_points } from '../services/endpoints';
import { hideTableLoader, showTableLoader } from '../components/spinner';
import { Link } from 'react-router-dom';
import { routes } from '../utils/routes';
import { useDispatch } from 'react-redux';
import { setCollectionDetails } from '../redux/commonSlice';
import { MultiSelect } from 'primereact/multiselect';
import { albums } from '../utils/data';

const Homepage: React.FC<any> = () => {
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState('');
  const [rows, setRows] = useState<number>(10);
  const [listData, setListData] = useState<any[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalRecords, setTotalRecords] = useState<any>(0);

  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  const typeOptions = [
    { label: 'Album', value: 'album' },
    { label: 'EP', value: 'ep' },
    { label: 'Single', value: 'single' },
  ];

  const debounceSearch = useCallback(
    debounce((value) => {
      setSearchTerm(value);
    }, 300),
    []
  );

  const handleSearch = (value = '') => {
    debounceSearch(value);
  };
  const columns = [
    {
      field: 'collectionName',
      header: 'Collection Name',
      sortable: true,
      body: (row: any) => {
        return (
          <div className="collection-name">
            <h6>{row?.collectionName || ''}</h6>
            <p className="mb-0">{row?.artistName || ''}</p>
          </div>
        );
      },
    },
    {
      field: 'artistName',
      header: 'Artist Name',
      sortable: true,
    },
    {
      field: 'songCount',
      header: 'Song Count',
      sortable: true,
    },
    {
      field: 'duration',
      header: 'Duration',
      sortable: true,
    },
    {
      field: 'size',
      header: 'Size',
      sortable: true,
    },
    {
      field: 'releasedOn',
      header: 'Released On',
      sortable: true,
    },
    {
      field: '',
      header: '',
      sortable: false,
      body: (row: any) => {
        return (
          <Link
            to={routes.collectionDetail}
            className="view-details"
            onClick={() => {
              dispatch(setCollectionDetails(row));
            }}
          >
            <img src={eyeIcon} alt="" />
            <p className="mb-0 ms-1">View Details</p>
          </Link>
        );
      },
    },
  ];
  const getPlayList = async () => {
    try {
      showTableLoader();
      const response = await getData(end_points.music_Collection_Api.url);
      console.log(response.data, 'collections');
    } catch (error) {
      console.error(error);
    } finally {
      hideTableLoader();
    }
  };
  useEffect(() => {
    getPlayList();
    dispatch(setCollectionDetails(null));
  }, []);
  useEffect(() => {
    let filteredMusic = albums.filter(
      (item) =>
        item.collectionName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.artistName.toLowerCase().includes(searchTerm.toLowerCase())
    );
    filteredMusic = filteredMusic.filter(
      (item) =>
        selectedTypes.length === 0 ||
        selectedTypes.includes(item.type.toLowerCase())
    );
    setListData(filteredMusic);
  }, [searchTerm, selectedTypes]);
  return (
    <div className="main-wrapper">
      <div className="header ">
        <div className="container">
          <h1 className="main-heading">Overview</h1>
        </div>
      </div>
      <div className="page-wrapper">
        <div className="container">
          <div className="card">
            <div className="card-body">
              <div className="search-and-filter">
                <div className="search-container">
                  <input
                    type="text"
                    placeholder="Search"
                    className="search-input"
                    onChange={(e: any) => handleSearch(e?.target?.value)}
                  />
                  <button
                    title="search"
                    type="button"
                    className="search-button"
                  >
                    <img src={searchIcon} alt="" />
                  </button>
                </div>

                <MultiSelect
                  value={selectedTypes}
                  options={typeOptions}
                  onChange={(e) => setSelectedTypes(e.value)}
                  placeholder="Type"
                  className="p-multiselect-custom"
                  panelClassName="custom-panel"
                />
              </div>
              <PrimeDataTable
                column={columns}
                data={listData}
                rows={rows}
                setRows={setRows}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                totalRecords={totalRecords}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
