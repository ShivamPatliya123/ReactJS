import React,{useState,useEffect} from 'react'
import { Container,PostCard } from '../components'
import appwriteService from "../appwrite/config"
function AllPosts() {

    const[posts, setpost] = useState([])

    useEffect(()=>{},[])

    appwriteService.getPosts([])
    .then((posts)=>{
        if(posts){
            setpost(posts.documents)
        }
    })
    .catch((error)=>{console.log("AllPosts :: Pages",error)})

  return (
    <div className='w-full py-8'>
        <Container>
            <div className='flex flex-wrap'>
                {posts.map((post)=>(
                    <div className='p-2 w-1/4' key={post.$id}>
                        <PostCard post={post}/>
                    </div>
                ))}
            </div>
        </Container>
    </div>
  )
}

export default AllPosts