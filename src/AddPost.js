import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ViewPost from './ViewPost'
import { fetchPost } from './store/postSlice'
import { v4 as uuidv4 } from 'uuid'
function AddPost() {
    const dispatch = useDispatch()

    return (
        <div>
           
            <button onClick={()=>dispatch(fetchPost())}>Post</button>
           <ViewPost /> 
        </div>
    )
}

export default AddPost
