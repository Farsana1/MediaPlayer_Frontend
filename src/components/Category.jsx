import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect } from 'react'
import VideoCard from './VideoCard'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {addCategoryApi, deleteCategoryApi, getCategoryApi, updateCategoryApi} from '../services/allApi'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Category({updateCategory}) {

  const [show, setShow] = useState(false);
  const [categoryName,setCategoryName] = useState('')
  
  const [showcategory,setShowCategory] = useState([])
  const [categoryStatus,setcategoryStatus]=useState({})
  const [deleteStatus,setDeleteStatus]=useState({})
  const [categoryUpdateStatus,setCategoryUpdateStatus]=useState({})
 
  const getCategory = async()=>{
    const result = await getCategoryApi()
    if(result.status>=200 && result.status<300){
      setShowCategory(result.data);
    } 
  }
console.log(showcategory);

  const deleteCategory= async(id)=>{
   const result= await deleteCategoryApi(id)
   console.log(showcategory[id-1]); 
   console.log(id);
   
  if(result.status>=200 && result.status<300){
     setDeleteStatus(result)
    //  
     toast.success(`category successfully deleted 
      ${showcategory[id-1]?.category}`)
     
  }
  }

  useEffect(()=>{
    getCategory()
  },[categoryStatus,deleteStatus,categoryUpdateStatus,updateCategory])

  const handleClose = () => {
    setShow(false)
    handleCancel()
  };
  
  const handleShow = () => setShow(true);
  const handleCancel = () =>{
    setCategoryName("")
  }

 const handleAdd = async()=>{
      if(!categoryName){
        toast.info('Please fill the Category Name')
      }
      else{
       const reqBody={
        category: categoryName,
        allVideos : []
       }
       const result = await addCategoryApi(reqBody)
       console.log(result);
       if (result.status>=200 && result.status<300){
        toast.success("Category Added Successfully")
        handleClose()
        setcategoryStatus(result)
       }
       else{
        toast.error('Something went wrong')
       }
      }
  }
const videoOver = (e)=>{
  //to prevent reload
  e.preventDefault()
}

const videoDrop =async(e,categoryDetails)=>{
  console.log(categoryDetails);
  
  const videoDetails = JSON.parse(e.dataTransfer.getData('videoDetails'))
  console.log(videoDetails);


  if(categoryDetails.allVideos.find((i)=>i.id==videoDetails.id)){
    toast.info('Video already in the same category')
  }
    else{
    categoryDetails.allVideos.push(videoDetails)
  console.log(categoryDetails.allVideos);
  const result = await updateCategoryApi(categoryDetails.id,categoryDetails)
      console.log(result);
      
  if(result.status>=200 && result.status<300){
    setCategoryUpdateStatus(result)
    toast.success("Successfully Added")
  }
  }
}

const videoDrag = (e,videoDetails,categoryDetails)=>{
  console.log(videoDetails,categoryDetails);
  const details={
    videoDetails,
    categoryDetails
  }
  e.dataTransfer.setData('Details',JSON.stringify(details))
 /*  if(result.status>=200 && result.status<300){
    console.log(result);
  } */
}

  return (
    <>
    <h5 className='mt-5'>Category</h5>
    <button className='btn btn-warning mt-4 w-100' onClick={handleShow}>Add Category</button>
  
 { 
  showcategory?.length>0 ?
  
      showcategory?.map((item)=> (
        <div className='border border-secondary mt-4 p-3 rounded' droppable onDragOver={(e)=>videoOver(e)} onDrop={(e)=>videoDrop(e,item)}>
    <div className='d-flex justify-content-between mb-3'>
        <h6 className='pt-2'>{item.category}</h6>
        <button className='btn btn-danger' onClick={()=>deleteCategory(item?.id)}>
          <FontAwesomeIcon icon={faTrash} />
        </button>
      </div>
     { item?.allVideos.length>0 &&
       item?.allVideos.map((video)=>(
       <div draggable onDragStart={(e)=>videoDrag(e,video,item)}>
         <VideoCard videoDetails={video} present={true}/>
         </div>
       )) 
       } 
       
      </div>
      ) 
      
    )

:
    <h5 className='text-center text-danger mt-4'>
      No Category Added Yet...
    </h5>
}
    <Modal show={show} onHide={handleClose}>

        <Modal.Header closeButton>
          
          <Modal.Title>Add Category</Modal.Title>
        
        </Modal.Header>

        <Modal.Body>
          <div className='p-4 border border-dark rounded'>
            <input type="text" placeholder='Enter Category name' className='form-control' 
            onChange={(e)=>setCategoryName(e.target.value)} value={categoryName}/>
          </div>
          </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCancel}>
            Cancel
          </Button>
          <Button variant="warning" onClick={handleAdd}>
           Add
          </Button>
        </Modal.Footer>
      </Modal>

    <ToastContainer position='top-center' theme='colored' autoClose={2000} />
    </>
  )
}

export default Category