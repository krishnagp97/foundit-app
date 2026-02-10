import { Container, Logo, LogoutBtn } from '../index';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

function Header({ searchTerm, setSearchTerm }) {
  const authStatus = useSelector((state) => state.auth.status);
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false); 

  const navItems = [
    { name: 'Home', slug: '/', active: true },
    { name: 'Login', slug: '/login', active: !authStatus },
    { name: 'Signup', slug: '/signup', active: !authStatus },
    { name: 'All Posts', slug: '/all-posts', active: authStatus },
    { name: 'Add Post', slug: '/add-post', active: authStatus },
  ];

  return (
    <header className="shadow bg-gray-500">
      <Container>
        <div className="flex items-center justify-between py-2">


          <Link to="/" className="flex items-center gap-2">
            <Logo width="50px" />
            <span className="text-xl font-semibold text-slate-800">FoundIt</span>
          </Link>

          <div className="lg:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="p-2 rounded-md bg-gray-300 hover:bg-gray-400"
            >
              {menuOpen ? '✕' : '☰'}
            </button>
          </div>

          <div className="hidden lg:flex lg:items-center lg:gap-4 flex-1 ml-4">
            {authStatus && (
              <div className="relative w-72">
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => {
                    setSearchTerm(e.target.value);
                    navigate('/all-posts');
                  }}
                  placeholder="Search images..."
                  className="w-full pl-10 pr-3 py-1 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                  ⌕
                </span>
              </div>
            )}

            <ul className="flex items-center gap-2 ml-auto">
              {navItems.map(
                (item) =>
                  item.active && (
                    <li key={item.name}>
                      <button
                        onClick={() => navigate(item.slug)}
                        className="px-4 py-2 hover:bg-blue-100 rounded-full duration-200"
                      >
                        {item.name}
                      </button>
                    </li>
                  )
              )}
              {authStatus && (
                <li>
                  <LogoutBtn />
                </li>
              )}
            </ul>
          </div>
        </div>

        {menuOpen && (
          <div className="lg:hidden mt-2 flex flex-col gap-2">
            {authStatus && (
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                  navigate('/all-posts');
                }}
                placeholder="Search images..."
                className="w-full pl-10 pr-3 py-1 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            )}
            <ul className="flex flex-col gap-2">
              {navItems.map(
                (item) =>
                  item.active && (
                    <li key={item.name}>
                      <button
                        onClick={() => {
                          navigate(item.slug);
                          setMenuOpen(false);
                        }}
                        className="w-full text-left px-4 py-2 hover:bg-blue-100 rounded-md duration-200"
                      >
                        {item.name}
                      </button>
                    </li>
                  )
              )}
              {authStatus && (
                <li>
                  <LogoutBtn />
                </li>
              )}
            </ul>
          </div>
        )}
      </Container>
    </header>
  );
}

export default Header;
