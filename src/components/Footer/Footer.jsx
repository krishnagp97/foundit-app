import { Link } from 'react-router-dom';
import Logo from '../Logo';

function Footer() {
  return (
    <footer className="bg-gray-400 border-t-2 border-gray-500 mt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">

        
        <p className="text-xs text-gray-600 text-center mb-8 px-2 sm:px-0">
          <span className="font-medium">Disclaimer:</span> FoundIt is a community-driven platform. 
          Please verify ownership before handing over items.
        </p>

        
        <div className="flex flex-col lg:flex-row justify-between items-start gap-10">

          
          <div className="flex flex-col justify-between lg:w-7/12 w-full">
            <div>
              <div className="flex items-center mb-4">
                <Logo width="50px" />
                <span className="ml-2 text-xl font-semibold text-gray-800">FoundIt</span>
              </div>
              <p className="text-sm text-gray-600 max-w-sm">
                Helping lost items find their way back through a trusted community.
              </p>
            </div>

            <p className="text-sm text-gray-500 mt-6 text-center lg:text-left">
              © 2026 FoundIt. All rights reserved.
            </p>
          </div>

          
          <div className="lg:w-3/12 w-full">
            <h3 className="mb-5 text-xs font-semibold uppercase tracking-wide text-gray-700 text-center lg:text-left">
              Quick Links
            </h3>

            <ul className="flex flex-col gap-3 items-center lg:items-start">
              <li>
                <Link className="text-gray-800 hover:text-blue-700 transition" to="/">
                  Home
                </Link>
              </li>
              <li>
                <Link className="text-gray-800 hover:text-blue-700 transition" to="/all-posts">
                  All Posts
                </Link>
              </li>
              <li>
                <Link className="text-gray-800 hover:text-blue-700 transition" to="/add-post">
                  Add Post
                </Link>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </footer>
  );
}

export default Footer;
