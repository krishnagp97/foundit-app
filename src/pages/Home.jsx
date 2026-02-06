import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useEffect } from 'react';

function Home() {
    const authStatus = useSelector((state)=> state.auth.status)
    const navigate = useNavigate();
    useEffect(()=>{
        document.title = "Foundit"
    },[])

    
    
    if(!authStatus){
        navigate('/login');
    }
    return (
        <div className="flex flex-col md:flex-row justify-center items-start gap-12 px-4 py-16 bg-gray-400 ">
 
            <div className="flex-1 max-w-sm h-96 flex items-center justify-center">
                <div className="text-center bg-white rounded-xl shadow-lg p-12 w-full h-full flex flex-col justify-center">
                    <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
                        Spot it. Click it. Get it
                    </h1>
                    <p className="text-gray-600 text-lg md:text-xl leading-relaxed mb-6">
                        Say goodbye to endless searching and stress, your lost items are just a few taps away from being found.
                    </p>
                    <button className="bg-blue-900 text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-800 transition"
                      onClick={()=>navigate('/all-posts')}
                    >
                        Browse Items
                    </button>
                </div>
            </div>


            <div className="flex-1 max-w-sm h-96 flex items-center justify-center">
                <div className="text-center bg-white rounded-xl shadow-lg p-12 w-full h-full flex flex-col justify-center">
                    <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
                        Share What You Found or Lost
                    </h1>
                    <p className="text-gray-600 text-lg md:text-xl leading-relaxed mb-6">
                        Found something or lost it? Let the community help. Post your item and get it noticed quickly!
                    </p>
                    <button className="bg-blue-900 text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-800 transition"
                       onClick={()=> navigate('/add-post')}
                    >
                        Post Item
                    </button>
                </div>
            </div>
</div>

    )
    
}

export default Home
