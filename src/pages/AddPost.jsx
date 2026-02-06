import React, { useEffect } from 'react'
import { Container,PostForm } from '../components'
function AddPost() {
  useEffect(()=>{
    document.title = "Foundit | AddPost"

  },[])
  return (
    <div className='py-8'>
        <Container>
            <PostForm/>
        </Container>
      
    </div>
  )
}

export default AddPost
