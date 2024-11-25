import { faCloudArrowUp, faFilm } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { addVideoApi } from '../services/allApi';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Add({setAddStatus}) {
    const [show, setShow] = useState(false);

    const [videoDetails,setVideoDetails]=useState({
        caption:'',
        Imgurl:'',
        url:''
    })
    console.log(videoDetails);

    const handleClose = () => { 
        setShow(false);
        handleCancel()
    }

    const handleShow = () => setShow(true);
    const handleCancel=()=>{
        setVideoDetails({
            caption:'',
            Imgurl:'',
            url:''
        })
    }
   
    const handleAdd = async()=>{

        //destructuring
        const {caption, Imgurl, url} = videoDetails

        if(!caption || !Imgurl || !url){
            toast.info('Please fill the form')
        }
        else{
                if(url.startsWith('https://www.youtu.be/')){
                let link = `https://www.youtube.com/embed/${url.slice(17,28)}` 
                console.log(link);   
                const result = await addVideoApi({caption,Imgurl,url:link})
                console.log(result); 
                if(result.status>=200 && result.status<300){
                    toast.success('Video added successfully')
                    setAddStatus(result)
                } 
                else{
                    toast.error('Something went wrong')
                }
            }
            else{
                let link = `https://www.youtube.com/embed/${url.slice(-11)}`
                console.log(link); 
                const result = await addVideoApi({caption,Imgurl,url:link})
                console.log(result);    
                if(result.status>=200 && result.status<300){
                    toast.success('Video added successfully')
                    handleClose()
                    setAddStatus(result)
                } 
                else{
                    toast.error('Something went wrong')
                    handleCancel() 
                }  
            }

        }
    }

    return (
        <>
            <h5><span className='d-md-inline d-none'>Upload New Video</span><FontAwesomeIcon onClick={handleShow} icon={faCloudArrowUp} className='ms-3' /></h5>
            {/* modal */}
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title className='text-warning'><FontAwesomeIcon icon={faFilm} className='me-2'/>Upload Videos</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>Please fill the following details</p>
                    <form className='border border-secondary rounded d-flex flex-column p-3'>
                        <input type="text" value={videoDetails.caption} placeholder='Video Caption'  className='rounded p-3  my-2 form-control' 
                        onChange={(e)=>{
                            setVideoDetails({...videoDetails, 
                            caption:e.target.value})}}
                            />
                        <input type="text" value={videoDetails.Imgurl} placeholder='Video Image' className='rounded p-2 my-2 form-control' onChange={(e)=>{setVideoDetails({...videoDetails,Imgurl:e.target.value})}}/>
                        <input type="text" value={videoDetails.url} placeholder='Video Url'className='rounded p-2 my-2 form-control' onChange={(e)=>{setVideoDetails({...videoDetails,url:e.target.value})}}/>
                    </form>

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCancel}>
                        Cancel
                    </Button>
                    <Button variant="warning" onClick={handleAdd}>
                         Upload
                    </Button>
                </Modal.Footer>
            </Modal>
            <ToastContainer position='top-center' theme='colored' autoClose={2000} />
        </>
    )
}

export default Add