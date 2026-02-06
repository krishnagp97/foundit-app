import React,{useState,useEffect} from 'react'
import { useOutletContext } from 'react-router-dom'
import { PostCard } from '../components'
import { Container } from '../components' 
import appwriteService from '../appwrite/config'
function AllPost() {
    const { searchTerm } = useOutletContext()
    const [posts,setPosts] = useState([])
    const [loading,setLoading] = useState(true)

    useEffect(()=>{
        document.title = "Foundit | AllPost"
    
      },[])

    useEffect(() => {
        const fetchPosts = async () => {
            if (!searchTerm || !searchTerm.trim()) {
            const res = await appwriteService.getPosts()
            if (res) setPosts(res.documents)
            } else {
            const res = await appwriteService.searchPosts(searchTerm)
            if (res) setPosts(res.documents)
                setLoading(false);
            }
        }

        const timer = setTimeout(fetchPosts, 400)
       
        return () => clearTimeout(timer)
    }, [searchTerm])


  return (
    <div className='w-full py-8'>
        <Container>
            <div className='flex flex-wrap'>
                {posts.length === 0 && loading === false && (
                    <p className="w-full text-center text-gray-600">
                        No posts found
                    </p>
                )}
                {posts.map((post)=>(
                    <div className='p-2 w-1/4' key={post.$id}>
                        <PostCard  post={post}/>
                    </div>
                ))}
            </div>
        </Container>
      
    </div>
  )
}

export default AllPost
