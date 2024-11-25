import React, { useEffect, useState } from 'react'
import VideoCard from './VideoCard'
import { getVideoApi, updateCategoryApi } from '../services/allApi'

function AllVideo({addStatus,setUpdateCategory}) {

  const [video,setVideo] = useState([])
  const [removeVideo,setRemoveVideo]=useState({})
  

  //display video api (sideEffect)
  //using useEffect hook to resolve sideEffect problem in pure functions

  const getAllVideo = async()=>{
    const result = await getVideoApi()
   /*  console.log(result);  */
    setVideo(result.data)
  }
  console.log(video);
  
  useEffect(()=>{
    getAllVideo()
  },[addStatus,removeVideo])

const videoOver = (e)=>{
  //to prevent reload
  e.preventDefault()
}

const videoDrop=async(e)=>{
  
  //destructure videoDetails and categoryDetails
const {videoDetails,categoryDetails} = JSON.parse(e.dataTransfer.getData('Details'))
//video , category
console.log(videoDetails,categoryDetails);

let result = categoryDetails.allVideos.filter((item)=>item.id!=videoDetails.id)

const reqBody = {
  category:categoryDetails.category,
  allVideos:result,
  id:categoryDetails.id
}

const response = await updateCategoryApi(categoryDetails.id,reqBody)
console.log(response);

if(response.status>=200 && response.status<300){
  setUpdateCategory(result);
}
}

  return (
    <>
    <h4 className='mt-5'>All Videos</h4>

   { video?.length>0 ?
    <div className="container-fluid"  droppable onDragOver={(e)=>videoOver(e)}
    onDrop={(e)=>videoDrop(e)}>
      <div className="row">

       { 
          video?.map((item)=>(
          <div className="col-md-3 p-2" id="">
         <div>
           <VideoCard videoDetails={item} setRemoveVideo={setRemoveVideo}/>
           </div>
        
          </div>
        )) 
       }
    </div>
    </div>
    :
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-4"></div>
        <div className="col-md-4">
          <img src="https://cdni.iconscout.com/illustration/premium/thumb/empty-cart-illustration-download-in-svg-png-gif-file-formats--shopping-ecommerce-simple-error-state-pack-user-interface-illustrations-6024626.png" alt="no-img" className='w-100' />
          <h4 className='text-center text-danger'>No Video Added Yet</h4>
        </div>
        <div className="col-md-4"></div>
      </div>
    </div>}
    </>
  )
}

export default AllVideo