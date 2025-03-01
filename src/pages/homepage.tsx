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

const Homepage: React.FC<any> = () => {
  const dispatch = useDispatch();
  const [selectedAlbum, setSelectedAlbum] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [rows, setRows] = useState<number>(10);
  const [listData, setListData] = useState<any[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalRecords, setTotalRecords] = useState<any>(0);
  const [searchQuery, setSearchQuery] = useState<string | undefined>(undefined);
  const [typeFilters, setTypeFilters] = useState({
    album: false,
    ep: false,
    single: false,
  });
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  const typeOptions = [
    { label: 'Album', value: 'album' },
    { label: 'EP', value: 'ep' },
    { label: 'Single', value: 'single' },
  ];

  const albums = [
    {
      id: 1,
      collectionName: 'EPIC: The Troy Saga (Official Concept Album)',
      artistName: 'Jorge Rivera-Herrans',
      type: 'EP',
      songCount: 5,
      duration: '00:15:40',
      size: '45 MB',
      releasedOn: '03 Sept 2024, 02:35 PM',
      songs: [
        {
          title: 'The Horse and the Infant',
          performers:
            'Jorge Rivera-Herrans, Luke Holt & Cast of EPIC: The Musical',
          duration: '00:02:15',
          size: '13 MB',
        },
        {
          title: 'Just a Man',
          performers: 'Jorge Rivera-Herrans & Cast of EPIC: The Musical',
          duration: '00:02:30',
          size: '18 MB',
        },
        {
          title: 'Full Speed Ahead',
          performers:
            'Jorge Rivera-Herrans, Armando Julián, Steven Dookie & Cast of EPIC: The Musical',
          duration: '00:05:10',
          size: '24 MB',
        },
        {
          title: 'Open Arms',
          performers: 'Jorge Rivera-Herrans & Steven Dookie',
          duration: '00:05:10',
          size: '23 MB',
        },
        {
          title: 'Warrior of the Mind',
          performers:
            'Jorge Rivera-Herrans, Teagan Earley & Cast of EPIC: The Musical',
          duration: '00:05:10',
          size: '23 MB',
        },
      ],
    },
    {
      id: 2,
      collectionName: 'EPIC: The Ocean Saga (Official Concept Album)',
      artistName: 'Jorge Rivera-Herrans',
      type: 'EP',
      songCount: 4,
      duration: '00:13:00',
      size: '15 MB',
      releasedOn: '04 Sept 2024, 10:00 AM',
      songs: [],
    },
    {
      id: 3,
      collectionName: 'EPIC: The Ithaca Saga (Official Concept Album)',
      artistName: 'Jorge Rivera-Herrans',
      type: 'EP',
      songCount: 4,
      duration: '00:12:24',
      size: '30 MB',
      releasedOn: '04 Sept 2024, 10:00 AM',
      songs: [],
    },
    {
      id: 4,
      collectionName: 'Collection Name',
      artistName: 'Artist Name',
      type: 'Album',
      songCount: 8,
      duration: '00:21:06',
      size: '12 MB',
      releasedOn: '10 Oct 2024, 02:35 PM',
      songs: [],
    },
    {
      id: 5,
      collectionName: 'Collection Name',
      artistName: 'Artist Name',
      type: 'Album',
      songCount: 7,
      duration: '00:20:22',
      size: '10 MB',
      releasedOn: '01 Sept 2024, 12:31 AM',
      songs: [],
    },
    {
      id: 6,
      collectionName: 'Collection Name',
      artistName: 'Artist Name',
      type: 'Album',
      songCount: 9,
      duration: '00:25:40',
      size: '16 MB',
      releasedOn: '05 Sept 2024, 12:31 AM',
      songs: [],
    },
  ];

  const singles = [
    {
      id: 7,
      collectionName: 'Collection Name',
      artistName: 'Artist Name',
      type: 'Single',
      songCount: 1,
      duration: '00:01:20',
      size: '24 MB',
      releasedOn: '11 Oct 2024, 12:31 AM',
      songs: [],
    },
    {
      id: 8,
      collectionName: 'Collection Name',
      artistName: 'Artist Name',
      type: 'Single',
      songCount: 1,
      duration: '00:01:20',
      size: '24 MB',
      releasedOn: '11 Oct 2024, 12:31 AM',
      songs: [],
    },
  ];

  const allMusic = [...albums, ...singles];

  const filteredMusic = allMusic.filter(
    (item) =>
      item.collectionName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.artistName.toLowerCase().includes(searchTerm.toLowerCase())
  );

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
              console.log(row, 'row');
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
  }, []);
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
                data={albums}
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
