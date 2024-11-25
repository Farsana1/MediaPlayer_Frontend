import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { addHistoryApi, removeVideoApi } from '../services/allApi';

function VideoCard({videoDetails,setRemoveVideo,present}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = async() => {
        setShow(true);

        let caption = videoDetails?.caption
        let url = videoDetails?.url
        const time = new Date()
        const timestamp = new Intl.DateTimeFormat("en-GB",{year:'numeric',month:'2-digit',day:'2-digit',hour:'2-digit',minute:'2-digit',second:'2-digit'}).format(time)
        console.log(timestamp);
        console.log(time);
        
      const reqBody={
        caption,
        url,
        timestamp
      }
      const result = await addHistoryApi(reqBody)
      console.log(result);   
  }

  const handleDelete = async(id)=>{
    const result = await removeVideoApi(id)
   if(result.status>=200 && result.status<300){
     setRemoveVideo(result)
    }
  }
const videoDrag=(e,vDetails)=>
{
  console.log(e);
  console.log(vDetails);
  e.dataTransfer.setData('videoDetails',JSON.stringify(vDetails))

}

  return (
    <>
    <Card className='mt-5' style={{ width: '100%' }} draggable onDragStart={(e)=>videoDrag(e,videoDetails)}>
      {!present && <Card.Img onClick={handleShow} variant="top" src={videoDetails?.Imgurl} style={{height:'300px'}}/>}
      <Card.Body className='d-flex justify-content-between'>
        <Card.Text>{videoDetails?.caption}</Card.Text>
       {!present && <Button onClick={()=>{handleDelete(videoDetails.id)
        }} variant="danger"><FontAwesomeIcon icon={faTrash} /></Button>}
      </Card.Body>
    </Card>

    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{videoDetails?.caption}</Modal.Title>
        </Modal.Header>
        <Modal.Body>

        </Modal.Body>
        <iframe width="100%" height="383" src={`${videoDetails?.url}?autoplay=1`} title="Hans Zimmer Performs the Dune Soundtrack LIVE" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
      </Modal>

    </>
  )
}

export default VideoCard