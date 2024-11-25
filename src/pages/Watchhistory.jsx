import { faHouse, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { deleteHistoryApi, getHistoryApi } from '../services/allApi'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Watchhistory() {
  const [allHisVideo, setAllHisVideo] = useState([])
  const [deleteStatus,setDeleteStatus] = useState({})

  const getHistory = async () => {
    const result = await getHistoryApi()
    setAllHisVideo(result.data);
  }
  
  console.log(allHisVideo);

  const deleteHis = async (id) => {
    const result = await deleteHistoryApi(id)
    console.log(result);
    if(result.status>=200 && result.status<300){
      setDeleteStatus(result)
    }
    else{
      toast.error('Something Went wrong')
    }

  }

  useEffect(() => {
    getHistory()
  }, [deleteStatus])

  return (
    <>
      <div className="d-flex justify-content-between px-5">
        <h5>Watch History</h5>
        <Link to={'/home'} style={{ textDecoration: 'none' }}> <h5><FontAwesomeIcon icon={faHouse} className='me-2' /> <span className='d-md-inline d-none'>Back Home</span></h5></Link>
      </div>
      {allHisVideo?.length > 0 ?
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-1"></div>
            <div className="col-md-10 table-responsive">
              <table className='table table-bordered mt-5'>
                <thead>
                  <tr>
                    <th className='text-center'>Sl.No</th>
                    <th className='text-center'>Caption</th>
                    <th className='text-center'>Url</th>
                    <th className='text-center'>Time Stamp</th>
                    <th className='text-center'>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {allHisVideo?.map(item => (
                    <tr>
                      <td className='text-center'>{item?.id}</td>
                      <td className='text-center'>{item?.caption}</td>
                      <td className='text-center'><Link to={item?.url} target='_blank'>{item?.url}</Link></td>
                      <td className='text-center'>{item?.timestamp}</td>
                      <td className='text-center'>

                        <button onClick={(() => deleteHis(item?.id))} className='btn btn-danger'><FontAwesomeIcon icon={faTrash} />
                        </button>
                      </td>
                    </tr>
                  ))
                  }
                </tbody>
              </table>
            </div>
            <div className="col-md-1"></div>
          </div>
        </div>
        :
        <h5 className='text-danger text-center'>No Watch History....</h5>}
        <ToastContainer position='top-center' theme='colored' autoClose={2000} />
    </>
  )
}

export default Watchhistory