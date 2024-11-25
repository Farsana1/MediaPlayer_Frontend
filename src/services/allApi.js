import { commonApi } from "./commonApi"
import { serverUrl } from "./serverUrl"

//api to add videos
//to add the video which is being stored in reqbody is the argument passed

//add.jsx
export const addVideoApi = async(reqBody)=>{
    return await commonApi('POST',`${serverUrl}/videos`,reqBody)
}

//api to get all videos
//inorder to get the video we doesnt need any arguments and body

export const getVideoApi = async()=>{
    return await commonApi('GET',`${serverUrl}/videos`,"")
}

//api to remove a video
export const removeVideoApi = async(id)=>{
    return await commonApi('DELETE',`${serverUrl}/videos/${id}`,{})
}

//api to add video to history
export const addHistoryApi = async(reqBody) => {
    return await commonApi('POST',`${serverUrl}/history`,reqBody)
}

//api to get all videos from history
export const getHistoryApi=async()=>{
    return await commonApi('GET',`${serverUrl}/history`,"")
}

//api to delete video from watchHistory
export const deleteHistoryApi=async(id)=>{
    return await commonApi('DELETE',`${serverUrl}/history/${id}`,{})
}

//api to add to category
export const addCategoryApi = async(reqBody)=>{
    return await commonApi('POST',`${serverUrl}/category`,reqBody)
}

//api to get category
export const getCategoryApi = async() =>{
    return await commonApi('GET',`${serverUrl}/category`,'')
}

//api to delete category 
export const deleteCategoryApi = async(id)=>{
    return await commonApi('DELETE',`${serverUrl}/category/${id}`,{})
}
//api to update category
export const updateCategoryApi = async(categoryid,reqBody) => {
    return await commonApi('PUT',`${serverUrl}/category/${categoryid}`,reqBody)
}