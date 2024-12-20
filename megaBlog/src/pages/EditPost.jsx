import React,{useState, useEffect} from 'react'
import {useNavigate,useParams} from "react-router-dom"
import{Container, PostForm} from '../components/index'
import appwriteService from '../appwrite/config'

function EditPost() {

  const navigate = useNavigate()
  const [posts, setposts] = useState(null)

  const {slug} = useParams()

  useEffect(()=>{
    if(slug){
      appwriteService.getPost(slug)
      .then((post)=>{
        if(post){
          setposts(post)
        }
      })
      .catch((error)=>{
        console.log("EditPost :: useEffect Post",error)
      })
    }else{
      navigate("/")
    }
  },[slug, navigate])

  return posts ? (
    <div className='py-8'>
      <Container>
        <PostForm posts={posts}/>
      </Container>
    </div>
  ) : null
}

export default EditPost