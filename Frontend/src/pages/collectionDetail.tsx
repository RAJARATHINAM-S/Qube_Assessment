import React, { useEffect, useState } from 'react';
import { greaterThan } from '../utils/imagePath';
import PrimeDataTable from '../components/primeDataTable';
import { getData } from '../services/api.service';
import { end_points } from '../services/endpoints';
import { hideTableLoader, showTableLoader } from '../components/spinner';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { routes } from '../utils/routes';
import { convertDuration_HMS, releasedDate } from '../utils/constant';
const CollectionDetail: React.FC<any> = () => {
  const details = useSelector((state: any) => state.common.collection);
  console.log(details, 'details');
  const navigate = useNavigate();
  const [rows, setRows] = useState<number>(10);
  const [listData, setListData] = useState<any>('');
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalRecords, setTotalRecords] = useState<any>(0);

  const columns = [
    {
      field: 'title',
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
  const getCollectionList = async (id = '') => {
    try {
      showTableLoader();
      let url = end_points.music_Collection_Api.url;
      if (id) {
        url += `/${id}`;
      }
      const response = await getData(url);
      console.log(response?.data, 'collections');
      if (response.data.code === 200) {
        setListData(response.data.data);
      }
    } catch (error) {
      console.error(error);
    } finally {
      hideTableLoader();
    }
  };
  useEffect(() => {
    if (details) {
      getCollectionList(details?.id);
    } else {
      navigate(routes.homepage);
    }
  }, [details]);
  console.log(listData, 'listData');

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
            <p className="mb-0">{listData?.collectionName || ''}</p>
          </div>
        </div>
      </div>
      <div className="concept-album container-fluid">
        <div className="container">
          <h4>{listData?.collectionName || ''}</h4>
        </div>
      </div>

      <div className="container">
        <div className="card">
          <div className="card-body types">
            <div className="row">
              <div className="col-md-2">
                <div>
                  <p>Artist</p>
                  <p>{listData?.artistName || ''}</p>
                </div>
              </div>
              <div className="col-md-2">
                <div>
                  <p>Type</p>
                  <p>{listData?.type || ''}</p>
                </div>
              </div>
              <div className="col-md-2">
                <div>
                  <p>Song Count</p>
                  <p>{listData?.songCount || ''}</p>
                </div>
              </div>
              <div className="col-md-2">
                <div>
                  <p>Total Size</p>
                  <p>{listData?.size || ''}</p>
                </div>
              </div>
              <div className="col-md-2">
                <div>
                  <p>Total Duration</p>
                  <p>{convertDuration_HMS(listData?.duration)}</p>
                </div>
              </div>
              <div className="col-md-2">
                <div>
                  <p>Released On</p>
                  <p>{releasedDate(listData?.releasedOn)}</p>
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
              data={listData?.songs || []}
              rows={rows}
              setRows={setRows}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              totalRecords={totalRecords}
              isPaginationEnabled={false}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollectionDetail;
