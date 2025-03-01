import React, { useCallback, useEffect, useState } from 'react';
import { eyeIcon, greaterThan } from '../utils/imagePath';
import PrimeDataTable from '../components/primeDataTable';
import { getData } from '../services/api.service';
import { end_points } from '../services/endpoints';
import { hideTableLoader, showTableLoader } from '../components/spinner';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { routes } from '../utils/routes';
const CollectionDetail: React.FC<any> = () => {
  const details = useSelector((state: any) => state.common.collection);
  console.log(details, 'details');

  const [selectedAlbum, setSelectedAlbum] = useState(null);
  const [rows, setRows] = useState<number>(10);
  const [listData, setListData] = useState<any[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalRecords, setTotalRecords] = useState<any>(0);

  const collectionDetails = [
    {
      id: 1,
      song: 'The Horse and the Infant',
      performers: 'Jorge Rivera-Herrans, Luke Holt & Cast of EPIC: The Musical',
      duration: '00:02:15',
      size: '15 MB',
    },
    {
      id: 2,
      song: 'The Horse and the Infant',
      performers: 'Jorge Rivera-Herrans, Luke Holt & Cast of EPIC: The Musical',
      duration: '00:02:15',
      size: '15 MB',
    },
    {
      id: 3,
      song: 'The Horse and the Infant',
      performers: 'Jorge Rivera-Herrans, Luke Holt & Cast of EPIC: The Musical',
      duration: '00:02:15',
      size: '15 MB',
    },
    {
      id: 4,
      song: 'The Horse and the Infant',
      performers: 'Jorge Rivera-Herrans, Luke Holt & Cast of EPIC: The Musical',
      duration: '00:02:15',
      size: '15 MB',
    },
    {
      id: 5,
      song: 'The Horse and the Infant',
      performers: 'Jorge Rivera-Herrans, Luke Holt & Cast of EPIC: The Musical',
      duration: '00:02:15',
      size: '15 MB',
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

  const handleBackToOverview = () => {
    setSelectedAlbum(null);
  };

  const columns = [
    {
      field: 'song',
      header: 'Song',
      sortable: true,
    },
    {
      field: 'performers',
      header: 'Performers',
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
  ];
  const getCollectionList = async () => {
    try {
      showTableLoader();
      const response = await getData(end_points.music_Collection_Api.url);
      console.log(response?.data, 'collections');
    } catch (error) {
      console.error(error);
    } finally {
      hideTableLoader();
    }
  };
  useEffect(() => {
    getCollectionList();
  }, []);
  return (
    <div className="main-wrapper collection-details-wrapper">
      <div className="container">
        <div className="d-flex align-items-center overview-heading">
          <Link to={routes.homepage} className="me-2 overview-link">
            Overview
          </Link>
          <div className="d-flex align-items-center ">
            <span>
              <img src={greaterThan} alt="" className="me-2" />
            </span>
            <p className="mb-0">EPIC: The Troy Saga (Official Concept Album)</p>
          </div>
        </div>
      </div>
      <div className="concept-album container-fluid">
        <div className="container">
          <h4>EPIC: The Troy Saga (Official Concept Album)</h4>
        </div>
      </div>

      <div className="container">
        <div className="card">
          <div className="card-body types">
            <div className="row">
              <div className="col-md-2">
                <div>
                  <p>Artist</p>
                  <p>Jorge Rivera-Herrans</p>
                </div>
              </div>
              <div className="col-md-2">
                <div>
                  <p>Type</p>
                  <p>EP</p>
                </div>
              </div>
              <div className="col-md-2">
                <div>
                  <p>Song Count</p>
                  <p>5</p>
                </div>
              </div>
              <div className="col-md-2">
                <div>
                  <p>Total Size</p>
                  <p>100 MB</p>
                </div>
              </div>
              <div className="col-md-2">
                <div>
                  <p>Total Duration</p>
                  <p>15 minutes 40 seconds</p>
                </div>
              </div>
              <div className="col-md-2">
                <div>
                  <p>Released On</p>
                  <p>10 Nov 2023</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

        <div className="container">
          <div className="card">
            <div className="card-body">
              <PrimeDataTable
                column={columns}
                data={collectionDetails}
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
  );
};

export default CollectionDetail;
