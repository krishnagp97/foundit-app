
import {Container,Logo,LogoutBtn} from '../index'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

function Header({searchTerm,setSearchTerm}) {
  const authStatus = useSelector((state)=>
  state.auth.status)
  const navigate = useNavigate()
   const navItems = [
    {
      name: 'Home',
      slug: "/",
      active: true
    }, 
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
  },
  {
      name: "Signup",
      slug: "/signup",
      active: !authStatus,
  },
  {
      name: "All Posts",
      slug: "/all-posts",
      active: authStatus,
  },
  {
      name: "Add Post",
      slug: "/add-post",
       active: authStatus,
  },
  ]

  return (
    <header className='py-1 shadow bg-gray-500'>
      <Container className='w-full'>
        <nav className='flex'>
          <div className=' mr-3 '>
            <Link to='/' className="flex items-center gap-2">
              <Logo width='50px' />
              <span className="text-xl font-semibold text-slate-800">
                foundit
              </span>
            </Link>
          </div>
          {authStatus &&
            <div className="flex-1 mx-4 relative pt-2">
              <input 
                type="text"
                value={searchTerm}
                onChange={(e) => {
                  setSearchTerm(e.target.value)
                  navigate("/all-posts")
                }}
                placeholder="search images..."
                className="w-9/12 pl-10 pr-3 py-1 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <span className="absolute left-3 mt-2 top-1/3 -translate-y-1/2 text-gray-400">
                ⌕
              </span>
            </div>
          }

          <ul className='flex ml-auto'>
            {navItems.map((item)=>
              item.active ? (
                  <li key={item.name}>
                    <button
                    onClick={()=> navigate(item.slug)}
                     className='inline-block px-6 py-2 duration-200 hover:bg-blue-100 rounded-full' 
                    >{item.name}</button>
                  </li>
              ) : null
            )}
            {authStatus && (
              <li>
                <LogoutBtn/>
              </li>
            )}
          </ul>
        </nav>
      </Container> 
    </header>
  )
}

export default Header
