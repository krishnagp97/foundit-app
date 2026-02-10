import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import authService from './appwrite/auth'
import { login, logout } from './store/authSlice'
import { Header, Footer } from './components'
import { Outlet } from 'react-router-dom'

function App() {
  const [searchTerm, setSearchTerm] = useState('')
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()

  useEffect(() => {
    authService.getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login(userData))
        } else {
          dispatch(logout())
        }
      })
      .finally(() => setLoading(false))
  }, [dispatch])

  return !loading ? (
    <div className="min-h-screen flex flex-col bg-gray-400">

      
      <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

      
      <main className="flex-grow w-full">
        <Outlet context={{ searchTerm }} />
      </main>

     
      <Footer />

    </div>
  ) : null
}

export default App
